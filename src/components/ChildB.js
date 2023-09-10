import React, { useContext } from "react";
import ChildC from "./ChildC";
import { Acontext } from "../Contexts/Acontext";

function ChildB() {
  const data = useContext(Acontext);
  return (
    <>
    Child b
      <h3 >{data.title}</h3>
      <br />
      <ChildC  />
    </>
  );
}

export default ChildB;
