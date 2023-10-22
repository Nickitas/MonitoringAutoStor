import { FC } from 'react';
import { PageTitle } from '../../ui/elements/PageTitle';
import cls from './index.module.scss';


interface ArchiveProps {

};

const Archive: FC<ArchiveProps> = ({  }) => {


    const archive = (
        <section className={cls.archive}>
            <PageTitle title='Архив' />
        </section>
    );

    return archive;
};

export default Archive;