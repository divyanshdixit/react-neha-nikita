import logo from './logo.svg';
import './App.css';
import HeadingComponent from './Heading';
import DetailComponent from './Details';

function App() {
  return (
    <div className="App">
      <HeadingComponent from="app" />
      <DetailComponent/>
    </div>
  );
}

export default App;
