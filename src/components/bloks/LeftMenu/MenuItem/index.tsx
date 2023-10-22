import { FC, useState } from "react";
import { IWarehouse } from "../../../../types/interfaces/IWarehouse";
import { ArrowSmallDown, CogIcon, BookMarkIcon } from "../../../ui/svg.module";
import cls from "./index.module.scss";


const MenuItem: FC<{ 
  warehouse: IWarehouse, 
  currentWarehouse: number;
  setToggleCardOpen: (e: boolean) => void; 
  setCurrentWarehouse: (e: number) => void 
}> = ({ warehouse, currentWarehouse, setToggleCardOpen, setCurrentWarehouse }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const warehouseDetails = {
    id: { label: 'Идентификатор', value: warehouse.id },
    name: { label: 'Имя', value: warehouse.name },
    square: { label: 'Общая площадь', value: warehouse.square },
    rackingNumber: { label: 'Количество доступных стеллажей', value: warehouse.rackingNumber },
    currentWorkload: { label: 'Текущая загруженность', value: warehouse.currentWorkload, suffix: ' %' },
    availableSpace: { label: 'Доступное пространство(в кубических метрах)', value: warehouse.availableSpace },
    activeOrdersNumber: { label: 'Количество активных заказов', value: warehouse.activeOrdersNumber },
    status: { label: 'Статус', value: warehouse.status },
    dateOfLastUpdateInfo: { label: 'Дата последнего обновления', value: new Date(warehouse.dateOfLastUpdateInfo || 0).toLocaleString() },
    contact: { label: 'Контакты', value: warehouse.contact }
  };

  const menuItem = (
      <div className={isOpen ? `${cls.item} ${cls.open}` : cls.item}>
        <div className={cls.element}>
          <div className={currentWarehouse === warehouse.id ? `${cls.active} ${cls.name}`: cls.name} onClick={() => setCurrentWarehouse(warehouse.id || 0)}>
            <BookMarkIcon />
            <span>{`${warehouse.name} # ${warehouse.id}`}</span>
          </div>
          <div className={cls.actions}>
            <div className={cls.status} data-status={warehouse.status} />
            <div className={cls.dropArrow} onClick={() => setOpen(prev => !prev)}>
              <ArrowSmallDown />
            </div>
          </div>
        </div>
        <div className={isOpen ? `${cls.drop} ${cls.open}` : cls.drop}>
          <div className={cls.button} onClick={() => setToggleCardOpen(true)}>
            <CogIcon/>
            <span>Посмотреть погрузчики</span>
          </div>
          <div className={cls.table}>
            {Object.values(warehouseDetails).map((detail: any) => (
              <div className={cls.row} key={detail.value}>
                <div className={cls.category}>{detail.label}:</div>
                <div className={cls.value}>{detail.value}{detail.suffix || ''}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );

  return menuItem;
};

export { MenuItem };