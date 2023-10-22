import cls from './index.module.scss';

const Loading = () => {

    const loading = (
    <div className={cls.loadWrapper}>
        <div className={cls.load}>
            <div className={cls.line}></div>
            <div className={cls.line}></div>
            <div className={cls.line}></div>
            <div className={cls.line}></div>
        </div>
        <h1 className={cls.hero}>axenix</h1>
    </div>
    );

    return loading;
};

export { Loading };