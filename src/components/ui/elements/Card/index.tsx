import { FC, useEffect, useRef } from "react";
import { CloseIcon } from '../../../ui/svg.module';
import { IForklift } from "../../../../types/interfaces/IForklift.interface";
import cls from './index.module.scss';


interface CardProps {
    currentWarehouse: number;
    toggleCardOpen: boolean;
    setToggleCardOpen: (stait: boolean) => void;
    forklift: IForklift[];
}

const Card: FC<CardProps> = ({
    currentWarehouse,
    toggleCardOpen,
    setToggleCardOpen,
    forklift,
}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleClickOutsideSidebar = (event: MouseEvent) => {
        if (
            !sidebarRef.current?.contains(event.target as Node)
        ) {
            setToggleCardOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideSidebar);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSidebar);
        };
    }, []);

    const card = (
        <div className={toggleCardOpen ? `${cls.fade} ${cls.animate}` : cls.fade}>
            <nav ref={sidebarRef} className={toggleCardOpen ? `${cls.sidebar} ${cls.animate}` : cls.sidebar}>
                <div className={cls.row}>
                    <div className={cls.closeButton} onClick={() => setToggleCardOpen(false)}>
                        <CloseIcon />
                    </div>
                </div>
                <div className={cls.scroll}>
                    { forklift?.filter(item => item.warehouse_id === currentWarehouse).map(e => (
                        <div key={e.id}>
                            <h3>Погрузчик: {e.name}</h3>
                            <div className={cls.table}>
                                <div className={cls.row}>
                                    <div className={cls.category}>Имя:</div>
                                    <div className={cls.value}>{e.name}</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Тип:</div>
                                    <div className={cls.value}>Гидравлический</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Грузоподъемность (кг):</div>
                                    <div className={cls.value}>{e.load_capacity}</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Статус:</div>
                                    <div className={cls.value}>{e.status}</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Дата ТО:</div>
                                    <div className={cls.value}>{e.maintenance_date}</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Пробег с ТО (км):</div>
                                    <div className={cls.value}>{e.mileage_affter_maintenance}</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Общий пробег (км):</div>
                                    <div className={cls.value}>{e.total_mileage}</div>
                                </div>
                                <div className={cls.row}>
                                    <div className={cls.category}>Состояние:</div>
                                    <div className={cls.value}>Хорошо</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );

    return card;
};

export { Card };