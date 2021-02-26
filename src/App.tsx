import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

function App() {

  const maintenance = false; // TRUE FOR MAINTENANCE SCREEN
  if(maintenance){
    return Maintenance();
  }

  const scroll_debug = false; // TRUE FOR CONSOLE LOGGING SCROLL
  scroll_debug && scrollDebuger();

  setTitle("Home");

  return (
    <div className="App">
      <Header/>
      <Home/>
      <div className="debuger-size"/> {/* REMOVE */}
      <Footer/>
    </div>
  );
}

function scrollDebuger(){
  document.addEventListener('scroll', ()=>{console.log(window.scrollY)});
}

export function setTitle(title: string){
  document.title = `Felipe - ${title}`;
}

export default App;
