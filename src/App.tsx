import React from 'react';
import './App.scss';
import Maintenance from './Maintenance';

function App() {

  setTitle("Maintenance (Home)");

  return (
    <Maintenance/>
  );
}

export function setTitle(title: string){
  document.title = `Felipe - ${title}`;
}

export default App;
