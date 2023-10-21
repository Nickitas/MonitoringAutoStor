import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface RowProps {
    children: ReactNode;
};

const Row: FC<RowProps> = ({ children }) => {

    const row = (
        <div className={cls.row}>
            { children }
        </div>    
    );

    return row;
};

export { Row };