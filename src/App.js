import RightSide from './Components/Organism/RightSide'
import LeftSide from './Components/Organism/LeftSide'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='containerFather'>
        <LeftSide />
        <RightSide /> 
        
      </div>
    </div>
  );
}

export default App;
