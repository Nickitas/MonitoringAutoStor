import { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from './bloks/Header/inedex';
import { ContainerGred } from './bloks/ContainerGred';
import { Row } from './bloks/Row';
import { GreadItem } from './bloks/ContainerGred'; 
import { WindowScroll } from './bloks/WindowScroll';
import { LeftMenu } from './bloks/LeftMenu';
import { Processes  } from './ui/elements/Processes';
import { Frame } from './bloks/Frame';


interface LayoutProps {
    
};

const Layout: FC<LayoutProps> = ({  }) => {
    const layout = (
        <>
            <Header />
            <main>
                <ContainerGred>
                    <GreadItem> 
                        <LeftMenu />
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