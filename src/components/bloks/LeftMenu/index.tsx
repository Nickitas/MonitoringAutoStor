import { FC, useState } from "react";
import { Filter } from "../Filter";
import { MenuItem } from "./MenuItem";
import { Card } from "../../ui/elements/Card";
import { IWarehouse } from "../../../types/interfaces/IWarehouse";
import cls from "./index.module.scss";
import { IForklift } from "../../../types/interfaces/IForklift.interface";


interface LeftMenuProps {
  warehouseData: IWarehouse[];
  forkliftData: IForklift[];
  currentWarehouse: number;
  setCurrentWarehouse: (e: number) => void;
};

const LeftMenu: FC<LeftMenuProps> = ({ warehouseData, forkliftData, currentWarehouse, setCurrentWarehouse }) => {
  const [toggleCardOpen, setToggleCardOpen] = useState<boolean>(false);

  const leftMenu = (
    <>
      <div className={cls.leftMenu}>
        <Filter />
        <div className={cls.menu}>
          {warehouseData?.map((item: IWarehouse) => (
            <MenuItem key={item.id}
              setToggleCardOpen={setToggleCardOpen}
              warehouse={item}
              setCurrentWarehouse={setCurrentWarehouse}
              currentWarehouse={currentWarehouse}
            />
          ))}
        </div>
      </div>

      <Card
        currentWarehouse={currentWarehouse}
        toggleCardOpen={toggleCardOpen}
        setToggleCardOpen={setToggleCardOpen}
        forklift={forkliftData}
      />
    </>
  );

  return leftMenu;
};

export { LeftMenu };
