import { FC } from 'react';
import { PageTitle } from '../../ui/elements/PageTitle';
import cls from './index.module.scss';


interface StatisticsProps {

};

const Statistics: FC<StatisticsProps> = ({  }) => {


    const statistics = (
        <section className={cls.statistics}>
            <PageTitle title='Статистика' />
            
        </section>
    );

    return statistics;
}

export default Statistics;