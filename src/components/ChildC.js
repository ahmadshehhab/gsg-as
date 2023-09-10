import React, { useContext } from "react";
import { Acontext } from "../Contexts/Acontext";

function ChildC() {
  
  const data = useContext(Acontext);
  return (
    <>
      Child C Says: title is passed from childB
      <br />
      <h3> Welcome to {data.title}</h3>
    
    </>
  );
}

export default ChildC;
