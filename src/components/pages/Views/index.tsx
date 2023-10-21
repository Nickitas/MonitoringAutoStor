import { FC } from 'react';
import { PageTitle } from '../../ui/elements/PageTitle';
import cls from './index.module.scss';


interface ViewsProps {

};


const Views: FC<ViewsProps> = ({  }) => {

    const views = (
        <section className={cls.views}>
            <PageTitle title='# Обзор' />

        </section>
    );

    return views;
};

export default Views;