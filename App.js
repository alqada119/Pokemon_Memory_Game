import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Image from './assets/pokemon.png' //Have to import images 
import { API } from './components/API';

function App() {
  return (
    <div className="Container">
      <div class="Header">
          <h1>Pokemon Memory Test</h1>
          <img src={Image} height={200} width={300}/>
      </div>
      <div class="grid">
          <div class="grid-item i1"><API/></div>
          <div class="grid-item i2"><API/></div>
          <div class="grid-item i3"><API/></div>
          <div class="grid-item i4"><API/></div>
          <div class="grid-item i5"><API/></div>
          <div class="grid-item i6"><API/></div>
          <div class="grid-item i7"><API/></div>
          <div class="grid-item i8"><API/></div>
      </div>
    </div>
    
  );
}

export default App;
