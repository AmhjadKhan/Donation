import React from "react";

function DonationCardes({ data }) {
  const {id,name,title,titleColor,money,image} = data;
  const titleStyle = {
    color: titleColor, 
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
            <p style={titleStyle}>{name}</p>
          <h2 className="card-title">{title}</h2>
          <p style={titleStyle}>{money}.00</p>
          <div className="card-actions">
            <button className="btn btn-white-200" style={titleStyle}>view Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationCardes;
