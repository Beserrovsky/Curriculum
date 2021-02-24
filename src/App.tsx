import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Maintenance from './Maintenance';

function App() {

  const maintenance = false; // TRUE FOR MAINTENANCE SCREEN
  if(maintenance){
    return Maintenance();
  }

  setTitle("Home");

  return (
    <div className="App">
      <Header/>
      <Footer/>
      <div className="debuger-size"/> {/* REMOVE */}
    </div>
  );
}

export function setTitle(title: string){
  document.title = `Felipe - ${title}`;
}

export default App;
