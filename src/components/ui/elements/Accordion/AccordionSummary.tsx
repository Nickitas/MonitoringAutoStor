import { FC, ReactNode } from 'react';
import { ArrowDownIcon } from '../../svg.module';
import cls from './index.module.scss';


interface AccordionSummaryProps {
    setClicked: (updateState: (prev: boolean) => boolean) => void;
    children: ReactNode;
}

const AccordionSummary: FC<AccordionSummaryProps> = ({ setClicked, children }) => {

    const summary = (
        <div className={cls.summary} onClick={() => setClicked((prev: boolean) => !prev)}>
            <h3 className={cls.headline}>
                {children}
            </h3>
            <div className={cls.icon}>
                <ArrowDownIcon/>
            </div>
        </div>
    );

    return summary;
}

export { AccordionSummary };