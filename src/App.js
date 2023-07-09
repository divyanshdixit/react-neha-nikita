import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/Heading';
import DetailComponent from './components/Details';
import { useEffect, useState } from 'react';
import Export ,{NewVal} from './components/Export';
import Calculator from './components/Calculator';
import Arrays from './components/Arrays';

function App() { // parent component 
  const n1 = 10;
  const n2 = 20;

  const getValueFromChild = (value) => {
    console.log(value);
  }

  const getValueFromAdd = (value) => {
    console.log(value);
  }

  const arr = [1,2,3,4,5,1];

  return (
    <div className="App" id='' >
      {/* dom element => html tag */}
      <HeadingComponent from="app" id="heading1" value={<NewVal/>}/>
      <HeadingComponent from="apps" id="heading2"/>
      <DetailComponent/>
      <Export/>
      <NewVal/>
      <Calculator n1={n1} n2={n2} getValueFromChild={getValueFromChild} getValueFromAdd={getValueFromAdd}/> // child component
      <Arrays arr={arr}/>
    </div>
  );
}

export default App;
