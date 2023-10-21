import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface ContainerGredProps {
    children: ReactNode;
};

interface GredItemProps {
    children: ReactNode;
};

export const GreadItem: FC<GredItemProps> = ({ children }) => {
    return (
        <div className={cls.item}>
            { children }
        </div>
    );
};

const ContainerGred: FC<ContainerGredProps> = ({ children }) => {

    const containerGred = (
        <div className={cls.containerGred}>
            { children }
        </div>
    );

    return containerGred;
};

export { ContainerGred };