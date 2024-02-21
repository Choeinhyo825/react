import logo from './logo.svg';
import './App.css';
import Board from './board/Board';
import NaviBar from './navigate/NaviBar';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <NaviBar></NaviBar>
      <Board></Board>
    </div>
  );
}

export default App;
