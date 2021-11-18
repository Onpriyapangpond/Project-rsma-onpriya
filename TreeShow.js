import styled from "styled-components";
import React, { useState } from "react";
import { Tree } from "antd";
import data from "./listtree.json"

const { DirectoryTree } = Tree;

const TreeShow = ({handleSelect})=>{
return (
  <Stree onClick = {() => {handleSelect(" Image-101.dcm ")}}> Hello
     {/* <Slibtree
        onSelect={(e, info) => { 
        handleSelect(info.node); 
        }}
        treeData={data} 
        multiple 
   />  */}
</Stree>
);

};

export default TreeShow;

const Slibtree = styled(DirectoryTree)`
  background-color: orange;
  font-size: 1em;
  
  
`;
const Stree = styled.div`
  width: 30%;
  max-height: 800px;

  cursor: pointer;
  background-color: orange;
  border-style: solid;
  overflow :scroll ;
`;