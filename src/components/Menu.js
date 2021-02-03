import React, { useState } from "react";

import "./Menu.css";
import { MenuDisplay } from "./MenuDisplay";

export default function Menu() {
  const [isOpen, setOpen] = useState(true);

  const MenuList = require("../data/Menu.json");

  return (
    <div className="menu">
      <div className={isOpen ? "menu__create" : "menu__create collasped"}>
        <form>
          <h3>Add Menu Item</h3>
          <label for="name">Menu Item</label>
          <input type="text" id="name" name="name" />
          <label for="price">Price</label>
          <input type="text" id="price" name="price" />
          <label for="description">Description</label>
          <input type="textarea" id="description" name="description" />
          <select>
            {MenuList.options.map((option) => (
              <option value={option.value} key={option.id}>
                {option.label}
              </option>
            ))}
          </select>

          <input className="submit" type="submit" value="Submit Item" />
        </form>
        <button className="btn__expand" onClick={() => setOpen(!isOpen)}>
          ^
        </button>
      </div>

      <MenuDisplay MenuList={MenuList} isOpen={isOpen}/>
    </div>
  );
}
