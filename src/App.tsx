import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
// import RequireAuth from './hoc/RequireAuth';
// import PersistLogin from './hoc/PersistLogin';

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

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <Views
            
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