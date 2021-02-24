import React from 'react';
import './App.scss';
import Maintenance from './Maintenance';

function App() {

  const maintenance = true; // TRUE FOR MAINTENANCE SCREEN

  if(maintenance){

    setTitle("Maintenance (Home)");

    return (
      <Maintenance/>
    ); 

  }else{

    setTitle("Home");

    return (
      <div className="App">
  
      </div>
    );
  }
}

export function setTitle(title: string){
  document.title = `Felipe - ${title}`;
}

export default App;
