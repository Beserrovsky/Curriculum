import React, { useState } from 'react'

interface Props{
  content_array: Content[]
}

interface Content{
  text: string;
  y_start: number;
  y_end: number;
}

const ContentIndex: React.FC<Props> = ({content_array})=>{

  const [IndexOpen, setIndexOpen] = useState<boolean>(false);

  const [contentIndex, setcontentIndex] = useState(0);

  document.addEventListener('scroll',()=>{
    content_array.map((content, index)=>{
      if(contentIndex!== index && window.scrollY >= content.y_start && window.scrollY < content.y_end){
        setcontentIndex(index);
      }
      return null;
    });
  });


  return (
    <div className="content-index bg-light border-rounded  p-3">
      <div className="d-flex pointer" onClick={()=>setIndexOpen(!IndexOpen)}>
        <h4 className="text-primary subtitle">Sumário</h4>
      </div>
      <hr/>
      <div className={`index-body ${IndexOpen? 'active' : ''}`}>
        {content_array.map((content, index)=>{
          return (
            <p className={`pointer text-${(index === contentIndex)? 'success' : 'secondary'}`} onClick={()=>window.scrollTo(0, content.y_start)}>
              <i className="bi bi-dot"></i>{content.text}<br/>
            </p>
          )
        })
        }
      </div>
      {IndexOpen && (
        <hr/>
      )}
      {!IndexOpen && (
        <p className="text-success pointer" onClick={()=>window.scrollTo(0, content_array[contentIndex].y_start)}>
          <i className="bi bi-dot"></i>{content_array[contentIndex].text}
        </p>
      )}
      <div className="d-none d-md-flex justify-content-end align-items-center pointer" onClick={()=>setIndexOpen(!IndexOpen)}>
        <button className="btn btn-light text-primary"><i className={`bi subicon bi-chevron-double-${IndexOpen? 'up' : 'down'}`}></i></button>
      </div>
    </div>
  )
}

export default ContentIndex;