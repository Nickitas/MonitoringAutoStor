import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface FrameProps {
    children: ReactNode;
};

const Frame: FC<FrameProps> = ({ children }) => {

    const frame = (
        <div className={cls.frame}>
            <div className={cls.row}>
                { children }
            </div>
        </div>
    );

    return frame;
};

export { Frame };