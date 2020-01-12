import React, {useState} from "react";
import InputField from "./InputField";

const CardEdit = ({id, name, bloodgroup, phone, onFormSubmit, setEdit}) => {
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
      <InputField
        type={'hidden'}
        name={'id'}
        value={data.id}
      />

      <InputField
        name={'name'}
        onChange={onFieldChange}
        required={true}
        value={data.name}
        label={"Name"}
      />

      <InputField
        name={'bloodgroup'}
        onChange={onFieldChange}
        required={true}
        value={data.bloodgroup}
        label={"Blood Group"}
      />

      <InputField
        name={'phone'}
        onChange={onFieldChange}
        required={true}
        value={data.phone}
        label={"Phone"}
      />

      <button style={{marginTop: "1rem"}}> Save </button>
    </form>
  )
};

export default CardEdit
