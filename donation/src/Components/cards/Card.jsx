import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  // console.log(data)
  const { id, name, title, image, titleColor, backgroundColor } = data;
  const cardStyle = {
    backgroundColor: backgroundColor,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  const titleStyle = {
    color: titleColor,
  };
  return (
    <div>
      <Link to={`/data/${id}`}>
        <div className="card w-80 shadow-xl">
          <div>
            <figure>
              <img src={image} className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title" style={titleStyle}>
                {name}
              </h2>
              <p style={titleStyle}>{title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
