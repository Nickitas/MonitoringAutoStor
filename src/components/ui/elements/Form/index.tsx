import { FC, ReactNode } from "react";
import cls from "./index.module.scss";


interface FormProps {
    children: ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: FC<FormProps> = ({ children, onSubmit, ...props }) => {
    const form = (
        <form className={cls.form}
            noValidate
            onSubmit={onSubmit}
            {...props}
        >
            { children }
        </form>
    );

    return form;
};

export { Form };