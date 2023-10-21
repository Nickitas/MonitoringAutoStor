import { FC } from 'react';
import { PageTitle } from '../../ui/elements/PageTitle';
import cls from './index.module.scss';


interface ReportsProps {

};

const Reports: FC<ReportsProps> = ({  }) => {


    const reports = (
        <section className={cls.reports}>
            <PageTitle title='# Отчеты' />

        </section>
    );

    return reports;
};

export default Reports;