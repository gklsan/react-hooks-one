import React from "react";

const CardHeader = ({name}) => (
  <h1 className={"card-header"}>{name}</h1>
);

const CardBody = ({id, name, bloodgroup, phone}) => (
  <div>
    <p>ID: {id}</p>
    <p>Name: {name}</p>
    <p>Bloodgroup: {bloodgroup}</p>
    <p>Phone: {phone}</p>
  </div>
);

const CardFooter = () => <button>Edit</button>

const CardContainer = (props) => {
  return(
    <div className={"card-item"}>
      <CardHeader name={props.name}/>
      <CardBody {...props} />
      <CardFooter />
    </div>
  )
};

export default CardContainer;
