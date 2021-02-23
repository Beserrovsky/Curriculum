import React from 'react'
import { Jumbotron } from 'react-bootstrap';

import soundfile from './assets/hit.mp3';

export default function Maintenance() {
  return (
    <div className="Maintenance bg-danger">
      <Jumbotron className="bg-light px-5 shadow">
        <h1>Página em manutenção!</h1>

        <div className="d-flex justify-content-end">
          <p className="font-italic"><a title="Background Music" onClick={()=>{window.open('https://www.youtube.com/watch?v=MPmD6hFaomk&ab_channel=EDMBot')}} href="javascript:void(0)">Hit the Road Jack (Wolfgang Lohr & Maskarade Remix)</a></p>
        </div>
        <div className="d-none justify-content-end">
          <audio src={soundfile} autoPlay={true} controls>
            <source src={soundfile} type="audio/mp3"/>
            Seu navegador não suporta audio.
          </audio>
        </div>
      </Jumbotron>
      
    </div>
  )
}
