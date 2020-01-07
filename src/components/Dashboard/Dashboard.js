import React, { useContext, useState } from "react";
import CardContainer from "./CardContainer";
import EmpContext from "../../contexts/EmpContext";

const Dashboard = () => {
  const empContext = useContext(EmpContext);
  const empImages = empContext.empImages;
  const [empDetails, setEmpDetails] = useState(empContext.empDetails);

  const deleteEmp = (id) => {
    const updatedEmps = empDetails.filter(emp => emp.id !== id);
    setEmpDetails(updatedEmps)
  };

  return(
    <div className={"cards"}>
      {
        empDetails.map(emp => {
          const img = (empImages[emp.id] && empImages[emp.id].thumbnailUrl) || "https://via.placeholder.com/150/65ad4f";
          return <CardContainer key={emp.id} image={img} deleteEmp={deleteEmp} {...emp}/>
      })}
    </div>
  )
};

export default Dashboard;
