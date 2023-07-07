import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/Heading';
import DetailComponent from './components/Details';
import { useState } from 'react';
import Export ,{NewVal} from './components/Export';
import Calculator from './components/Calculator';

function App() {

  return (
    <div className="App" id='' >
      {/* dom element => html tag */}
      <HeadingComponent from="app" id="heading1" value={<NewVal/>}/>
      <HeadingComponent from="apps" id="heading2"/>
      <DetailComponent/>
      <Export/>
      <NewVal/>
      {/* calcluator.jsx */}
    </div>
  );
}

export default App;
