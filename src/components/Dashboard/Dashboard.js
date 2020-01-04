import React, { useEffect } from "react";
import empDetails from "../../stubs/emp_details";
import CardContainer from "./CardContainer";

const Dashboard = () => {

  useEffect(()=> {

  }, []);

  return(
    <div className={"cards"}>
      { empDetails.map(emp => <CardContainer key={emp.id} {...emp}/>)}
    </div>
  )
};

export default Dashboard;
