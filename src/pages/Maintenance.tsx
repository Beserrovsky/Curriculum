import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { setTitle } from '../App';

import Music from '../components/Music';

export default function Maintenance() {

  setTitle('Maintenance');

  return (
    <div className="Maintenance bg-warning">
      <Jumbotron className="bg-light px-5 shadow">
        <h1>Página em manutenção!</h1>
        <Music/>
      </Jumbotron>
    </div>
  )
}
