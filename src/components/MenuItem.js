import React from "react";

export const MenuItem = (props) => {
  const { id, title, price, desc } = props;
  return (
    <div className="menu__item" key={id}>
      <div id="remove__div">
        <div className="X">
          <div className="XX"></div>
        </div>
      </div>
      <h3>
        <p>{title}</p>
        <p>${price}</p>
      </h3>
      <p>{desc}</p>
    </div>
  );
};
