import React, { useContext, useState } from "react";
import ChildA from "./components/ChildA";
import { Acontext } from "./Contexts/Acontext";

const App = () => {
  const [title, setTitle] = useState("GSG React Training");

  return (
    <div>
      <Acontext.Provider value={{title:title}}>

      <ChildA  />
      </Acontext.Provider>
    </div>
  );
};
export default App;
