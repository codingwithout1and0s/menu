import React, { useState } from 'react'

import './Menu.css'

export default function Menu() {

    const [open, setOpen] = useState(true);

    const options = [
        {
            id: 1,
            label: "*SPECIAL",
            value: "special",
        },
        {
            id: 2,
            label: "Appetizer",
            value: "appetizer",
        },
        {
            id: 3,
            label: "Entree",
            value: "entree",
        },
        {
            id: 4,
            label: "Plant-Based",
            value: "plant-based",
        },
        {
            id: 5,
            label: "Beverages",
            value: "beverages",
        },
        {
            id: 6,
            label: "Dessert",
            value: "dessert",
        },
    ];

    const MenuList = require("../data/Menu.json");

    const deleteItem = (id) => {
        console.log(id);
        // delete MenuList.menu[index];
    }

    return (
        <div className="menu">
            <div className={open ? 'menu__create' : 'menu__create collasped'}>
                <form className={open ? '' : 'collasped'}>
                    <h3>Add Menu Item</h3>
                    <label>
                        Menu Item:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Price:
                        <input type="text" name="name" />
                    </label>

                    <label>
                        Description:
                        <input type="text" name="name" />
                    </label>

                    <select>
                        {options.map((option) => (
                            <option value={option.value} key={option.id}>{option.label}</option>
                        ))}
                    </select>

                    <input type="submit" value="Enter" />
                </form>
                <button className="btn__expand" onClick={() => setOpen(!open)}>^</button>
            </div>

            <div className="menu__display">
                <div className="category">
                    <h1>Entrees</h1>
                    <p>All entrees come with a selection of a side or salad.</p>
                </div>

                {MenuList.menu.map(item => (
                    <div className="menu__item" key={item.id}>
                        <div id="remove__div" onClick={deleteItem(item.id)}>
                            <div className="X">
                                <div className="XX"></div>
                            </div>
                        </div>
                        <h3>
                            <span>{item.title}</span>
                            <span>${item.price}</span>
                        </h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
