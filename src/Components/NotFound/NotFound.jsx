import React, { useEffect } from 'react'

import   errorPage  from "../../images/pngtree-error-404.jpg";


export default function NotFound() {
  
  useEffect(() => {
    document.title='not found'
   }, [])
   
  return (
    <>
     <div class="d-flex flex-column align-items-center justify-content-center vh-100 bg-primary">
        <h1 class="display-1 fw-bold text-white">404</h1>
        <h2>ERROR PAGE</h2>
    </div>
    </>
  )
}
