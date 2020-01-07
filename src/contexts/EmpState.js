import React, {useState, useEffect} from "react";
import EmpContext from "./EmpContext";
import empDatas from "../stubs/emp_details"

const EmpState = ({ children, ...rest}) => {
  const [empDetails, setEmpDetails] = useState([]);
  const [empImages, setEmpImages] = useState([])

  const fetchImages = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return response.json()
  }

  useEffect(() => {
    setEmpDetails(empDatas);

    fetchImages()
      .then(res => {
        setEmpImages(res.slice(0, 100))
      })
      .catch(err => console.log(err));

  }, [])

  return(
    <EmpContext.Provider value={{empDetails: empDetails, empImages, ...rest}}>
      { (empDetails.length > 0 && empImages.length > 0) && children}
    </EmpContext.Provider>
  )
};

export default EmpState;
