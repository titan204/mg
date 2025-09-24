import logo from './logo.svg';
import './App.css';
import Game from "./game"
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Start from './component/startMenue';
import { DefucultyBrovider } from './context/defficulty'
function App() {

  return (
    <DefucultyBrovider>
      <HashRouter>
        <div className="App flex justify-center bg-gradient-to-br from-blue-400/90 to-purple-300 absolute">
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/game' element={<Game />} />
          </Routes>
        </div>
      </HashRouter>
    </DefucultyBrovider>
  );
}

export default App;
