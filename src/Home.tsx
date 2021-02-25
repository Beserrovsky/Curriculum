import React, { useState } from 'react'

interface Content{
  text: string;
  y_start: number;
  y_end: number;
}

export default function Home() {

  const [SumaryOpen, setSumaryOpen] = useState<boolean>(false);

  const [contentIndex, setcontentIndex] = useState(0);

  const content_array: Content[]= [
    {text: "Home",y_start: 100, y_end: 200},
    {text: "Contato",y_start: 200, y_end: 300}
  ]

  document.addEventListener('scroll',()=>{
    content_array.map((content, index)=>{
      if(contentIndex!== index && window.scrollY >= content.y_start && window.scrollY < content.y_end){
        setcontentIndex(index);
      }
      return null;
    });
  });

  return (
    <div className="Home">
      <div className="content-index bg-light border-rounded p-3">
        <div className="d-flex pointer" onClick={()=>setSumaryOpen(!SumaryOpen)}>
          <h3 className="text-primary">Sumário</h3>
        </div>
        <hr/>
        <div className={`index-body ${SumaryOpen? 'active' : ''}`}>
          <ul>
            {content_array.map((content, index)=>{
              return (
                <li className={`pointer text-${(index === contentIndex)? 'success' : 'secondary'}`} onClick={()=>window.scrollTo(0, content.y_start + 10)}>
                  {content.text}
                </li>
              )
            })
            }
          </ul>
        </div>
        {SumaryOpen && (
          <hr/>
        )}
        {!SumaryOpen && (
          <ul>
            <li className="text-success pointer" onClick={()=>window.scrollTo(0, content_array[contentIndex].y_start + 10)}>{content_array[contentIndex].text}</li>
          </ul>
        )}
        <div className="d-flex justify-content-end align-items-center pointer" onClick={()=>setSumaryOpen(!SumaryOpen)}>
          <h4 className="text-primary"><i className={`bi bi-chevron-double-${SumaryOpen? 'up' : 'down'}`}></i></h4>
        </div>
      </div>
    </div>
  )
}
