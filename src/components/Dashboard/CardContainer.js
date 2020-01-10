import React, { useState } from "react";

const CardHeader = ({image, name}) => (
  <div className={"card-logo"}>
    <img src={image} alt={name}/>
  </div>
);

const CardBody = (props) => (props.edit ? <EditBoard {...props} /> : <DisplayBoard {...props} />);

const EditBoard = ({id, name, bloodgroup, phone, onFormSubmit, setEdit}) => {
  const [data, setData] = useState({id, name, bloodgroup, phone});

  const onFieldChange =(event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  };

  return(
    <form onSubmit={(event) =>{
      event.preventDefault();
      onFormSubmit(event, data);
      setEdit(false)
    }}>
      <input type={'hidden'} value={id} />
      <label> Name
        <input name={"name"} onChange={onFieldChange} required value={data.name}/>
      </label>

      <label> Blood Group
        <input name={"bloodgroup"} onChange={onFieldChange} required value={data.bloodgroup} />
      </label>

      <label> Phone
        <input name={"phone"} onChange={onFieldChange} required value={data.phone}/>
      </label>
      <button>
        Save
      </button>
    </form>
  )
}

const DisplayBoard = ({id, name, bloodgroup, phone}) => {
  return(
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Bloodgroup: {bloodgroup}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}

const CardFooter = ({ deleteEmp, id, setEdit, edit }) => {
  if(edit) return <> </>;
  return(
    <>
      <button onClick={() => setEdit(true)}>
        Edit
      </button>
      <button onClick={() => deleteEmp(id)}>
        Remove
      </button>
    </>
  )
}

const CardContainer = (props) => {
  const initialVal = props.id ? false : true
  const [edit, setEdit] = useState(initialVal);

  return(
    <div className={"card-item"}>
      <CardHeader {...props}/>
      <CardBody {...props} edit={edit} setEdit={setEdit} />
      <CardFooter {...props} setEdit={setEdit} edit={edit} />
    </div>
  )
};

export default CardContainer;
