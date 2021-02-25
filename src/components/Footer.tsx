import React from 'react'

export default function Footer() {
  return (
    <div className="Footer d-flex justify-content-center align-items-center bg-light">
      <div className="sm-12 mb-0">
        <p className="my-1">Felipe Beserra &copy; {new Date(Date.now()).getFullYear()} - <a href="https://github.com/Beserrovsky/react-curriculum/blob/main/LICENSE">MIT license</a>. Mais sobre na <a href="https://github.com/Beserrovsky/react-curriculum/blob/main/README.md">documentação</a>.</p>
      </div>
    </div>
  )
}
