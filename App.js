import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Image from './assets/pokemon.png' //Have to import images 
import { API } from './components/API';
import { Score } from './components/score';

function App() {
  const [forceRerender, setForceRerender] = useState(0);
  const rerenderAPI = () => {
    setForceRerender(prevValue => prevValue + 1);
  };
  return (
    <div className="Container">
      <div class="Header">
          <h1>Pokemon Memory Test</h1>
          <img src={Image} height={200} width={300}/>
      </div>
      <div class="grid">
          <div class="grid-item i1" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i2" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i3" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i4" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i5" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i6" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i7" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <div class="grid-item i8" onClick={rerenderAPI}><API key={forceRerender}/></div>
          <Score/>
      </div>
    </div>
    
  );
}

export default App;
