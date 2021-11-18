import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Display from "./Display";
import Tree from "./TreeShow";
const App = () => {
  const [dataselect, setDataSelect] = useState("");
  const handleSelect = (value) => {
    setDataSelect(value);
  };
  //console.log("dataselect", dataselect);
  return (
    <Smain>
      <Tree handleSelect={handleSelect} />
      <Display dataselect={dataselect} handleSelect={handleSelect} />
    </Smain>
  );
};

export default App;
const Smain = styled.div`
  display: flex;
  
`;