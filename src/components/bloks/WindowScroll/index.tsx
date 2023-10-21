import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface WindowScrollProps {
    children: ReactNode;
};

const WindowScroll: FC<WindowScrollProps> = ({ children }) => {

    const windowScroll = (
        <div className={cls.windowScroll}>
            { children }
        </div>
    );

    return windowScroll;
};

export { WindowScroll };