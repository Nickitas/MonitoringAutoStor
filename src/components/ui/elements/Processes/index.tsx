import { FC } from 'react';
import { parseNumberToString } from '../../../../utils/parseNumberToString';
import cls from './index.module.scss';


interface ProcessesProps {
    amount: number;
};

const Processes: FC<ProcessesProps> = ({ amount }) => {

    const processes = (
        <div className={cls.processes}>
            <div className={cls.row}>
                <span>Процессы: </span>
                <summary>{ parseNumberToString(amount) }</summary>
            </div>
        </div>
    );

    return processes;
};

export { Processes };