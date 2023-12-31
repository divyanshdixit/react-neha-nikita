import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/Heading';
import DetailComponent from './components/Details';
import { useEffect, useState } from 'react';
import Export ,{NewVal} from './components/Export';
import Calculator from './components/Calculator';
import Arrays from './components/Arrays';
import Conditional, { Conditional2 } from './components/Conditional';
import BasicClassComponent from './components/BasicClassComponent';
import UseStateHook from './components/UseStateHook';
import UseStateHook1 from './components/UseStateHook1';
import UseEffectHook from './components/UseEffectHook';
import Parent from './components/Parent';
import Refs from './components/refs';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import HocComponent from './components/Hoc';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


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
      {/* <HeadingComponent from="app" id="heading1" value={<NewVal/>}/>
      <HeadingComponent from="apps" id="heading2"/>
      <DetailComponent/>
      <Export/>
      <NewVal/>
      <UseStateHook/>
      <UseStateHook1/>
      <Calculator n1={n1} n2={n2} getValueFromChild={getValueFromChild} getValueFromAdd={getValueFromAdd}/> // child component
      <Arrays arr={arr}/>
      <Conditional/>
      <Conditional2/>
      <BasicClassComponent/>
      <UseEffectHook/>
      <Parent/>
      <Refs/>
      <Counter1/>
      <Counter2/> */}
      {/* <HocComponent/> */}
    </div>
  );
}

export default App;
