import React from "react";

import Card from "./Card";

const CardsContainer = ({ items }) => {
  return items.data.map((item) => {
    return (
      <div key={item[3]} className="row">
        <Card item={item} />
      </div>
    );
  });
};

export default CardsContainer;
