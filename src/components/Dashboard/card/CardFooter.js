import React from "react";

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

export default CardFooter;
