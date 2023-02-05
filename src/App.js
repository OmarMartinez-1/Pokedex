import RightSide from './Components/RightSide/RightSide'
import LeftSide from './Components/LeftSide/LeftSide'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='containerFather'>
        <RightSide /> 
        <LeftSide />
        
      </div>
    </div>
  );
}

export default App;
