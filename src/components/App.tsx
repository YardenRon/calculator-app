import React from 'react';
import './App.scss';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';

const buttonsValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div>
      <Wrapper>
        <Screen value="0" />
        <ButtonBox>
          {
            buttonsValues.flat().map((buttonVal, i) => 
              <Button 
                key={i}
                className={buttonVal === "=" ? "equals" : ""} 
                value={buttonVal.toString()} 
                onClick={() => console.log(`Button ${buttonVal} clicked!`)} 
              />
            )
          }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;