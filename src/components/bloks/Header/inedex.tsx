import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { ThemeButton } from '../../ui/buttons/ThemeButton';
import { navList } from '../../../data/navigationList';
import cls from './index.module.scss';


const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const header = (
        <header className={cls.header}>
            <div className='container'>
                <div className={cls.row}>
                    <div className={cls.first}>
                        <div className={cls.logo} onClick={() => navigate('/')}>
                            <img src={logo} />
                        </div>
                        <nav className={cls.navigation}>
                            { navList.map(el => (
                                <div key={el.path} className={pathname === el.path ? `${cls.item} ${cls.active}` : cls.item}>
                                    <Link to={el.path}>
                                        { el.title }
                                    </Link>
                                </div>
                            )) }
                        </nav>
                    </div>
                    <ThemeButton/>
                </div>
            </div>
        </header>
    );

    return header;
};

export { Header };