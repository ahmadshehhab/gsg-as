import React, { useContext } from "react";
import ChildB from "./ChildB";
import { Acontext } from "../Contexts/Acontext";
function ChildA() {
  
  const data = useContext(Acontext);
  return (
    <>
  
      Child A Says: title is passed from App
      <h1>{data.title}</h1>
      <br />
      <ChildB />
    
    </>
  );
}
export default ChildA;
