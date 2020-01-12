import React from "react";

const InputField = (props) => {
  const { label, type = "text", ...rest } = props;
  return(
    <div>
      { label && <label>{label}</label> }
      <input type={type} {...rest} />
    </div>
  )
};

export default InputField;
