import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface CheckboxProps {
    children: ReactNode;
    checked: boolean;
    value: string;
    name: string;
    onChange: (e: any) => void;
};

const Checkbox: FC<CheckboxProps> = ({ children, checked, value, name, onChange }) => {
    return (
        <label className={cls.checkbox} htmlFor={name}>
            {children}
            <input
                className={cls.realCheckbox}
                checked={checked}
                type='checkbox'
                name={name}
                value={value}
                onChange={onChange}
            />
            <span className={cls.customCheckbox}></span>
        </label>
    );
}

export { Checkbox };