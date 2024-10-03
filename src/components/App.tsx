import React, { useState, useCallback } from 'react';
import './App.scss';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';

const DIVISION_WARNING = "Can't divide by 0";

const buttonsValues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "X"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const getInvertedNumberString = (numStr: string) => (Number(numStr) * -1).toString();
const executePercentOnNumberString = (numStr: string) => (Number(numStr) / 100).toString();
const calculate = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "X":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
};

function App() {
  const [num, setNum] = useState("0");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const resetClickHandler = () => {
    setNum("0");
    setResult("");
  };

  const invertSignClickHandler = () => {
    if (num) {
      setNum(getInvertedNumberString(num));
    }

    if (result) {
      setResult(getInvertedNumberString(result));
    }
  };

  const percentClickHandler = () => {
    if (num) {
      setNum(executePercentOnNumberString(num));
    }

    if (result) {
      setResult(executePercentOnNumberString(result));
    }
  };

  const equalsClickHandler = () => {
    if (operator && num) {
      const isDivisionByZero = num === "0" && operator === "/";
      const newResult = isDivisionByZero ? DIVISION_WARNING : calculate(Number(result), Number(num), operator).toString();
      setResult(newResult);
      setNum("");
      setOperator("");
    }
  };

  const operatorClickHandler = (buttonVal: string) => {
    setOperator(buttonVal);
    setResult(!result && num ? num : result);
    setNum("");
  };
  
  const dotClickHandler = () => {
    // Needs to be implemented
  };

  const numClickHandler = (buttonVal: string) => {
    console.log("num = " + num);
    console.log("button = " + buttonVal);

    if (num === "0" && buttonVal !== "0") {
      setNum(buttonVal);
    } else if (num !== "0") {
      setNum(num + buttonVal);
    }
  };

  const handleClick = (buttonVal: string): void => {
    console.log(`Button ${buttonVal} clicked!`);
    if (result === DIVISION_WARNING) {
      setResult("");
    }

    switch(buttonVal) {
      case "C":
        resetClickHandler();
        break;
      case "+-":
        invertSignClickHandler();
        break;
      case "%":
        percentClickHandler();
        break;
      case "=":
        equalsClickHandler();
        break;
      case "/":
      case "X":
      case "-":
      case "+":
        operatorClickHandler(buttonVal);
        break;
      case ".":
        dotClickHandler();
        break;
      default:
        numClickHandler(buttonVal);
    }
  };

  return (
    <div>
      <Wrapper>
        <Screen value={num? num.toString() : result.toString()} />
        <ButtonBox>
          {
            buttonsValues.flat().map((buttonVal, i) => 
              <Button 
                key={i}
                className={buttonVal === "=" ? "equals" : ""} 
                value={buttonVal.toString()} 
                onClick={() => handleClick(buttonVal)} 
              />
            )
          }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;