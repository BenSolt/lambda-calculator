import React from "react";

const SpecialButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special.char}
    </button>
  );
};

export default SpecialButton;