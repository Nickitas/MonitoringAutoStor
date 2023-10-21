import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface AccordionDetailsProps {
    isClicked: boolean;
    children: ReactNode;
};

const AccordionDetails: FC<AccordionDetailsProps> = ({ isClicked, children }) => {
    const details = (
        <div className={`${cls.details} ${isClicked ? cls.open : ''}`}>
            { children }
        </div>
    );

    return details;
};

export { AccordionDetails };