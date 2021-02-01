import React from 'react'

import './Menu.css'

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu__create">
            </div>

            <div className="menu__display">
                <div className="menu__item">
                    <h3>Cheese Ravioli</h3>
                    <h5>$25.99</h5>
                    <p>A gourmet bowl of handmade ravioli made with a blend of smooth gouda, voluminous freshly made mozzarella, and a sharp aged cheddar in a velvet rose sauce. Entry comes with 2 pieces of garlic toast.</p>
                    <div className="delete__item">
                        <p>X</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
