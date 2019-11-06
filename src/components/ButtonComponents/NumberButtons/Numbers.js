import React, {useState} from "react";
import {numbers} from "../../../data";

import NumberButton from "./NumberButton";




//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
 
   const[buttonNumbers, setButtonNumbers ] = useState(numbers);
console.log(Numbers, props);

//add functionality
const number = () => {
  setButtonNumbers(buttonNumbers => buttonNumbers + 1);
}

  return (
    <div className="numbers">


 {buttonNumbers.map(digit => {
  return < NumberButton key = {digit} text ={digit}/>
 }

   

  )}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       
    
    </div>
  );
};

export default Numbers;