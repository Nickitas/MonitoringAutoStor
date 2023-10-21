import { useTheme } from '../../../../hooks/useTheme';
import { SunIcon, MoonIcon } from '../../../ui/svg.module';
import cls from './index.module.scss';

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    const themeButton = (
        <div className={cls.themeButton} onClick={toggleTheme}>
            { theme === 'dark' ? <SunIcon /> : <MoonIcon /> }
        </div>
    );

    return themeButton;
};

export { ThemeButton };