import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './index.module.scss';


interface PageTitleProps {
    title: string;
};

const PageTitle: FC<PageTitleProps> = ({ title }) => {
    const navigate = useNavigate();

    const pageTitle = (
        <div className={cls.title}>
            <div className={cls.back} onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z" fill="currentColor"/>
                </svg>
            </div>
            <h1>{ title }</h1>
        </div>
    );

    return pageTitle;
};

export { PageTitle };