import React from "react";

const Card = ({ item }) => {
  return (
    <div
      className="col"
      onClick={() => {
        window.open(item[1].spotify, "_blank");
      }}
    >
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={item[4][0].url}
              alt=""
              className="card-img"
              style={{ minHeight: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item[5]}</h5>
              <p className="card-text">Your favorite: {item[7]}</p>
              <p className="card-text">Your pair favorite: {item[8]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
