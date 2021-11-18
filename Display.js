import React from "react";
import styled from "styled-components";
import images from "./Image/Image-101.png"

const Displayimages = ({ dataselect}) => {
  //  const importAll = (r) => {
  //    let images = {};
  //    r.keys().map((item) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //  return images;
  //  };

  //  const images = importAll(require.context("./Image/", false, /\.png/)
  //  );


  //console.log("aa", dataselect.split(".")[0].concat(".png"));
  console.log("dataselect", dataselect);
  console.log("images", images);
  console.log("a", images)
  return (
    <Smain>
      {dataselect === " Image-101.dcm " ? (
        
          <img
          src={images}
        />
        
      ) : (
        ""
        )}
        
     
    </Smain>
  );
};

export default Displayimages;
const Smain = styled.div`
   width : 80% ;
  border-style: solid;
  justify-content: center;
  align-items: center;

`;

