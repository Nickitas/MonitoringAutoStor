import { lazy, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
// import RequireAuth from './hoc/RequireAuth';
// import PersistLogin from './hoc/PersistLogin';

import { getForklifts } from './services/getForklift';

import { IForklift } from './types/interfaces/IForklift.interface';
import { IWarehouse } from './types/interfaces/IWarehouse';
import { getWarehouse } from './services/getWarehouse';
import { getTrackingWarehouses } from './services/getTrackingWarehouses';
// const Authorization = lazy(() => import('./pages/Authorization/Authorization'));
const Views =  lazy(() => import('./components/pages/Views'));
const Statistics = lazy(() => import('./components/pages/Statistics'));
const Reports = lazy(() => import('./components/pages/Reports'));
const Archive = lazy(() => import('./components/pages/Archive'));
const Rules = lazy(() => import('./components/pages/Rules'));


const ROLES = {
  'User': 3,
  'Operator': 2,
  'Admin': 1
};

const App = () => {
  const [currentWarehouse, setCurrentWarehouse] = useState<number>();
  const [warehouseData, setWarehouseData] = useState<IWarehouse[]>();
  const [forkliftData, setForkliftData] = useState<IForklift[]>();
  const [trackingWarehouses, setTrackingWarehouses] = useState();

  useEffect(() => {
    getWarehouse().then(e => {
      if (e.data.state) {
        setWarehouseData(e.data.data.map((el: any) => {
          return {
            id: el.id,
            name:el.title,
            square: el.square,
            rackingNumber: el.racking_number,
            currentWorkload: el.current_workload,
            availableSpace: el.available_space,
            activeOrdersNumber: el.active_orders_number,
            status: el.status,
            dateOfLastUpdateInfo: new Date(el.updatedAt).getTime(),
            contact: el.contact,
          }
        }));
      }
    }).catch(err => {
      console.error(err);
    });
    getForklifts().then(e => {
      if (e.data.state) {
        setForkliftData(e.data.data.map((el: any) => {
          return {
            id: el.id,
            warehouse_id: el.warehouse_id,
            name: el.name,
            load_capacity: el.load_capacity,
            maintenance_date: el.maintenance_date,
            status: el.status,
            total_mileage: el.total_mileage,
            mileage_affter_maintenance: el.mileage_affter_maintenance,
            last_point_id: el.last_point_id,
            task_id: el.task_id,
            point_id: el.point_id,
            createdAt: el.createdAt,
            updatedAt: el.updatedAt,
          }
        }));
      }
    }).catch(err => {
      console.error(err);
    });

    getTrackingWarehouses(currentWarehouse || 0).then((e: any) => {
      setTrackingWarehouses(e.data.data);
    }).catch((err: Error) => {
      console.error(err);
    });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout 
        warehouseData={warehouseData}
        forkliftData={forkliftData}
        currentWarehouse={currentWarehouse || 0}
        setCurrentWarehouse={setCurrentWarehouse}
      />}>
        <Route index element={
          <Views 
            currentWarehouse={currentWarehouse || 0}
          />} />
        <Route path={'/statistics'} element={
          <Statistics

          />} />
        <Route path={'/reports'} element={
          <Reports

          />} />
        <Route path={'/archive'} element={
          <Archive

          />} />
        <Route path={'/rules'} element={
          <Rules

          />} />
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default App