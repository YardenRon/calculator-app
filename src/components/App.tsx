import React from 'react';
import './App.scss';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';

function App() {
  return (
    <div>
      <Wrapper>
        <Screen value="Yarden's Application" />
        <ButtonBox></ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;