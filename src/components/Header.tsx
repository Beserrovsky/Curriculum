import React, { useState } from 'react'

import pfp from '../assets/pfp.JPG';
import { my_media } from './SocialMedia';

export default function Header() {

  const [Scrolled, setScrolled] = useState<boolean>(false);

  function gotoTop(){
    window.scrollTo(0, 0);
    setScrolled(false);
  }

  document.addEventListener('scroll', ()=>{
    if(window.scrollY > 50 && !Scrolled){
      setScrolled(true);
    }

    if(window.scrollY < 50 && Scrolled){
      setScrolled(false);
    }
  });

  return (
    <div className="Header">
      <div className="navbar bg-dark py-3 sm-12 d-flex justify-content-end">
        <div className="d-flex justify-content-between">
          {my_media.map((answer) => {        
              return (<div className="SocialMedia">
                <a className="mx-2" title={"@" + answer.username} href={answer.url}>{answer.icon_normal}</a>
              </div>); 
            })}
        </div>
      </div>
      <div className="name">
        <h3>Felipe Beserra de Oliveira</h3>
        <hr/>
      </div>
      <div className="fixed-profile">
        <img src={pfp} alt="Minha foto" title="Eu ai ;)"/>
        <button className={`btn btn-dark back ${Scrolled? 'active':''}`} onClick={gotoTop}>Voltar ao topo</button>
      </div>
    </div>
  )
}
