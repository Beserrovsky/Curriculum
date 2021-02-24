import React, { useState } from 'react'
import soundfile from '../assets/hit.mp3';

export default function Music() {
  const [controls_open, setControls_open] = useState<boolean>(false);
  
  return (
    <div>
      <div className="d-flex justify-content-end">
        <p className="font-italic">
          <a title="Background Music Link" onClick={()=>{window.open('https://www.youtube.com/watch?v=MPmD6hFaomk&ab_channel=EDMBot')}} href="javascript:void(0)">
            Hit the Road Jack (Wolfgang Lohr & Maskarade Remix)
          </a>
          &nbsp;
          <a title="Music Settings" className="Music-config pointer text-dark" onClick={()=>{setControls_open(!controls_open)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
          </a>
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <audio src={soundfile} autoPlay={true} loop={true} controls={controls_open}>
          <source src={soundfile} type="audio/mp3"/>
          Seu navegador não suporta audio.
        </audio>
      </div>
    </div>
  )
}
