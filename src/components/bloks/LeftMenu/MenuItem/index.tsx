import { FC, useState } from "react";
import { SportItem } from "../../../../apiBetnetix/getMenuList";
import { ArrowDownIcon } from "../../../ui/svg.module";
import { getLanguages } from "../../../../data/config/languages";
import { sportEnum } from "../../../../types/sportEnum";
import cls from "./index.module.scss";

export const BlockSport = ({ sport_id }: { sport_id?: string | number }) => {
  return (
    <div className={cls.sport}>
      <div className={cls.name}>
        ico - {sport_id}
        <span>{getLanguages(`SPORT_${sport_id}`)}</span>
      </div>
      <div className={cls.actions}>
        <summary>{}</summary>
        <div className={true ? `${cls.dropArrow} ${cls.rot}` : cls.dropArrow}>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export const BlockChamp = ({ name }: { name?: string }) => {
  return (
    <div className={cls.champ}>
      <div className={cls.name}>
        {"ico"}
        <span>{name}</span>
      </div>
      <div className={cls.actions}>
        <summary>{"999"}</summary>
        <div className={cls.dropArrow} onClick={() => {}}>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export const BlockEvent = ({
  name1,
  name2,
}: {
  name1?: string;
  name2?: string;
}) => {
  return (
    <div className={cls.event}>
      <div className={cls.name}>
        <span>{`${name1} с ${name2}`}</span>
      </div>
    </div>
  );
};

const MenuItem: FC<{ item: SportItem }> = ({ item }) => {
  const { id, type, name, sport_id, champ_id, name1, name2 } = item;
  const [filterSport, setFilterSport] = useState<Array<string>>([]);
  const [filterChamp, setFilterChamp] = useState<Array<string>>([]);

  //#region  выбор/отмена выбора спорта
  const selectSport = (id: any) => {
    const _id = `${id}`;
    const index = filterSport.indexOf(_id);
    if (index >= 0) {
      filterSport.splice(index, 1);
    } else {
      filterSport.push(_id);
    }
    setFilterSport([...filterSport]);
  };
  //#endregion

  //#region выбран ли вид спорта
  const isSelectSport = (id: any) => {
    return filterSport.includes(`${id}`);
  };
  //#endregion

  //#region выбор/отмена выбора чемпионата
  const selectChamp = (id: any) => {
    const _id = `${id}`;
    const index = filterChamp.indexOf(_id);
    if (index >= 0) {
      filterChamp.splice(index, 1);
    } else {
      filterChamp.push(_id);
    }
    setFilterChamp([...filterChamp]);
  };
  //#endregion

  //#region выбран ли вид спорта
  const isSelectChamp = (id: any) => {
    return filterChamp.includes(`${id}`);
  };
  //#endregion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  const menuItem = (
    <div className={true ? `${cls.item} ${cls.open}` : cls.item} data-color={id}>
      <div className={cls.ley1}>
        { type == "sport" && (
            <BlockSport 
                sport_id={id} 
            />
        )}
        {type === "champ" && (
            <BlockChamp name={name} />
        )}
        {type === "event" && <BlockEvent name1={name1} name2={name2} />}
      </div>
    </div>
  );

  return menuItem;
};

export { MenuItem };
