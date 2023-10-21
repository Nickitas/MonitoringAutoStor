import { FC, useState, useEffect } from "react";
import { Filter } from "../Filter";
// import { MenuItem } from "./MenuItem";
import cls from "./index.module.scss";

const LeftMenu = () => {
  const [menuList, setMenuList] = useState<[]>();

  const leftMenu = (
    <div className={cls.leftMenu}>
      <Filter />
      <div className={cls.menu}>
        {/* {menuList?.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))} */}
      </div>
    </div>
  );

  return leftMenu;
};

export { LeftMenu };
