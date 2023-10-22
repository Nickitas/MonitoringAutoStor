import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './bloks/Header/inedex';
import { ContainerGred } from './bloks/ContainerGred';
import { GreadItem } from './bloks/ContainerGred'; 
import { WindowScroll } from './bloks/WindowScroll';
import { LeftMenu } from './bloks/LeftMenu';
import { IWarehouse } from '../types/interfaces/IWarehouse';
import { IForklift } from '../types/interfaces/IForklift.interface';


interface LayoutProps {
    warehouseData: IWarehouse[];
    forkliftData: IForklift[];
    setCurrentWarehouse: (e: number) => void;
    currentWarehouse: number;
};

const Layout: FC<LayoutProps> = ({ warehouseData, forkliftData, currentWarehouse, setCurrentWarehouse }) => {
    const layout = (
        <>
            <Header />
            <main>
                <ContainerGred>
                    <GreadItem> 
                        <LeftMenu 
                            warehouseData={warehouseData} 
                            forkliftData={forkliftData} 
                            currentWarehouse={currentWarehouse}
                            setCurrentWarehouse={setCurrentWarehouse}
                        />
                    </GreadItem>
                    <GreadItem>
                        <WindowScroll>
                            <Outlet />
                        </WindowScroll>
                    </GreadItem>
                </ContainerGred>
            </main>
        </>
    );

    return layout;
}

export { Layout };