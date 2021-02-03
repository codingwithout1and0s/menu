import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuDisplay = (props) => {
  const { MenuList } = props;
  const { isOpen } = props;
  return (
    <div className={isOpen ? "menu__display" : "menu__display collasped"}>
      <div className="category">
        <div>
          <h1>Entrees</h1>
          <p>All entrees come with a selection of a side or salad.</p>
        </div>
      </div>

      <div className="menu__list">
        {MenuList.menu.map((item, index) => (
          <MenuItem
            key={item.id + item.title}
            id={item.id}
            title={item.title}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
