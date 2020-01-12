import React from "react";

const CardDisplay = ({id, name, bloodgroup, phone}) => {
  return(
    <div>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Bloodgroup:</strong> {bloodgroup}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  )
};

export default CardDisplay;
