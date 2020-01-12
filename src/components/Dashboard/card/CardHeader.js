import React from "react";

const CardHeader = ({image, name, edit}) => (
  <div className={"card-logo"}>
    {
      edit ? <h1>Add New Emoloyee</h1> : <img src={image} alt={name}/>
    }
  </div>
);

export default CardHeader;
