import React from "react";

const CardHeader = ({image, name}) => (
  <div className={"card-logo"}>
    <img src={image} alt={name}/>
  </div>
);

const CardBody = ({id, name, bloodgroup, phone}) => (
  <div>
    <p>ID: {id}</p>
    <p>Name: {name}</p>
    <p>Bloodgroup: {bloodgroup}</p>
    <p>Phone: {phone}</p>
  </div>
);

const CardFooter = ({ deleteEmp, id }) => {
  return(
    <>
      <button>Edit</button>
      <button onClick={() => deleteEmp(id)}>
        Remove
      </button>
    </>
  )
}

const CardContainer = (props) => {
  return(
    <div className={"card-item"}>
      <CardHeader {...props}/>
      <CardBody {...props} />
      <CardFooter {...props} />
    </div>
  )
};

export default CardContainer;
