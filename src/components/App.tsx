import React from 'react';
import './App.scss';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';

function App() {
  return (
    <div>
      <Wrapper>
        <Screen value="Yarden's Application" />
        <ButtonBox>
          <Button
            className=""
            value="0"
            onClick={() => {
              console.log("Button clicked!");
            }}
          />
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;