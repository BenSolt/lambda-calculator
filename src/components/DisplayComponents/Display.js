import React from "react";

const Display = (props) => {
 
  return <div className="screen">
  {/* Display any props data here */}
  {props.displaynumber}
  </div>;
};

export default Display;