import React, { useState } from 'react'

export default function Home() {

  const [SumaryOpen, setSumaryOpen] = useState<boolean>(false);

  return (
    <div className="Home">
      <div className="content-index bg-light border-rounded p-3">
        <h3 className="pointer" onClick={()=>setSumaryOpen(!SumaryOpen)}>Sumário <i className={`bi bi-chevron-double-${SumaryOpen? 'up' : 'down'}`}></i></h3>
        <hr/>
        <div className={`index-body ${SumaryOpen? 'active' : ''}`}>
          <ul>
            <li><i className="bi-alarm"></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
