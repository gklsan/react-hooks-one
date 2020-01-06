import React, { useEffect, useState } from "react";
import empDetails from "../../stubs/emp_details";
import CardContainer from "./CardContainer";

const Dashboard = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return response.json()
  }

  useEffect(()=> {
    fetchImages()
      .then(res => setImages(res))
      .catch(err => console.log(err));
  }, []);

  return(
    <div className={"cards"}>
      { empDetails.map(emp => {
        const img = images[emp.id] && images[emp.id].thumbnailUrl || "https://via.placeholder.com/150/65ad4f";
        return <CardContainer key={emp.id} image={img} {...emp}/>
      })}
    </div>
  )
};

export default Dashboard;
