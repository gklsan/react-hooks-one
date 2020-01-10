import React, { useContext, useState } from "react";
import CardContainer from "./CardContainer";
import EmpContext from "../../contexts/EmpContext";
import UUID from "uuid";

const Dashboard = () => {
  const empContext = useContext(EmpContext);
  const empImages = empContext.empImages;
  const [empDetails, setEmpDetails] = useState([{id: undefined}, ...empContext.empDetails]);

  const deleteEmp = (id) => {
    const updatedEmps = empDetails.filter(emp => emp.id !== id);
    setEmpDetails(updatedEmps)
  };

  const onFormSubmit = (event, data) => {
    if(data.id) {
      const updatedData = empDetails.map(emp => {
        if (emp.id === data.id) return {...emp, ...data};
        return emp
      });
      setEmpDetails(updatedData);
    } else {
      const newData = {...data, id: UUID()};
      setEmpDetails([newData, ...empDetails]);
    }
  };

  return(
    <div className={"cards"}>
      {
        empDetails.map((emp, idx) => {
          const img = empImages[idx].thumbnailUrl || "https://via.placeholder.com/150/65ad4f";
          return <CardContainer key={idx} image={img} onFormSubmit={onFormSubmit} deleteEmp={deleteEmp} {...emp}/>
      })}
    </div>
  )
};

export default Dashboard;
