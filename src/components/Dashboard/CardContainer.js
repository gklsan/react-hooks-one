import React, { useState } from "react";

const CardHeader = ({image, name}) => (
  <div className={"card-logo"}>
    <img src={image} alt={name}/>
  </div>
);

const CardBody = (props) => ((props.edit)  ? <EditBoard {...props} /> : <DisplayBoard {...props} />);

const EditBoard = ({id, name, bloodgroup, phone, onFormSubmit, setEdit}) => {
  const initialData = {id, name, bloodgroup, phone};
  const [data, setData] = useState(initialData);

  const onFieldChange =(event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(event, data);
    setEdit(false);
    setData({id: undefined, name: '', bloodgroup: '', phone: ''});
  };

  return(
    <form onSubmit={onSubmit}>
      <input type={'hidden'} value={data.id} />
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
};

const DisplayBoard = ({id, name, bloodgroup, phone}) => {
  return(
    <div>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Bloodgroup:</strong> {bloodgroup}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  )
};

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
  const [edit, setEdit] = useState(false);
  const editCard = edit || props.newCard;

  return(
    <div className={"card-item"}>
      <CardHeader {...props}/>
      <CardBody {...props} edit={editCard} setEdit={setEdit} />
      <CardFooter {...props} setEdit={setEdit} edit={editCard} />
    </div>
  )
};

export default CardContainer;
