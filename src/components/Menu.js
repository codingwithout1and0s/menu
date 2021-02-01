import React, { useState } from 'react'

import './Menu.css'

export default function Menu() {

    const [open, setOpen] = useState(true);

    const options = [
        {
            id: 1,
            label: "SPECIAL",
            value: "special",
        },
        {
            id: 2,
            label: "Appretizer",
            value: "appretizer",
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

    return (
        <div className="menu">
            <div className={open ? 'menu__create' : 'menu__create collasped'}>
            <form>
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
                <div className="menu__item">
                    <div className="delete__item">
                        <p>X</p>
                    </div>
                    <h3>Cheese Ravioli</h3>
                    <h3>$25.99</h3>
                    <p>A gourmet bowl of handmade ravioli made with a blend of smooth gouda, voluminous freshly made mozzarella, and a sharp aged cheddar in a velvet rose sauce. Entry comes with 2 pieces of garlic toast.</p>
                </div>
            </div>
        </div>
    )
}
