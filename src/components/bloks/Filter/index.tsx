import { useState } from "react";
import cls from './index.module.scss';


const Filter = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const filter = (
        <div className={cls.filter}>
            <div className={cls.button} onClick={() => setOpen(prev => !prev)}>
                {/* <NavigateIcon/> */}
                <span>Фильтры</span>
                <div className={isOpen ? `${cls.dropArrow} ${cls.rot}` : cls.dropArrow} onClick={() => {}}>
                    {/* <ArrowDownIcon/> */}
                </div>
            </div>
            <div className={isOpen ? `${cls.drop} ${cls.open}` : cls.drop}>
                <div className={cls.head}>
                    <span>Выберете</span>
                    <summary>{ '57' }</summary>
                </div>
                <div className={cls.body}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error, maxime repellat odio tenetur rerum recusandae. Ratione, rerum vero sint eum dignissimos accusantium molestias provident inventore voluptates. Incidunt, rem amet?
                </div>
            </div>
        </div>
    );

    return filter;
};

export { Filter };