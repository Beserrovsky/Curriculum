import React from 'react'
import { Jumbotron } from 'react-bootstrap';

export default function Maintenance() {
  return (
    <div className="Maintenance bg-danger">
      <Jumbotron className="bg-light px-5 shadow">
        <h1>Página em manutenção!</h1>
      </Jumbotron>
    </div>
  )
}
