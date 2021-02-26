import React from 'react'
import ContentIndex from '../components/ContentIndex'

export default function Home() {

  const home_content = [
    {text: "Topo",y_start: 0, y_end: 20},
    {text: "Home",y_start: 20, y_end: 200},
    {text: "Contato",y_start: 200, y_end: 300}
  ];

  return (
    <div className="Home d-flex justify-content-center">
      <ContentIndex content_array = {home_content}/>
      <div className="container" style={{margin: '150px 0 0 0'}}>
        <div className="row">
          <div className="col d-flex justify-content-center">
          <blockquote className="blockquote text-left text-md-right">
            <p className="display-1 mb-1">Bem Vindo!</p>
            <footer className="blockquote-footer">Sempre caminhando para o sucesso <cite title="Source Title">Felipe Beserra</cite></footer>
          </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
