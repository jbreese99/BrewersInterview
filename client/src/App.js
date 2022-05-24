//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import PlayersCard from './components/PlayersCard';
import PlayerCard from './components/PlayerCard';

import TCard from './components/TCard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element ={<TCard/>} />
            <Route path='/Players/:team_id' element={<PlayersCard/>} />
            <Route path="/Player/:player_id" element={<PlayerCard/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;