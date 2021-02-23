import React from 'react';
import './App.scss';

function App() {

  setTitle("Home");

  return (
    <div className="App">
      
    </div>
  );
}

export function setTitle(title: string){
  document.title = `Beserra - ${title}`;
}

export default App;
