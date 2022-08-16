import React, { useState, useEffect } from 'react'
import axios from 'axios';

function ResultPage() {

  const [UrlResult, setUrlResult] = useState("")

  useEffect(() => {
    // axios.get('/api/keyword')
    //   .then(res => {
    //       if (res.data.success) {
    //         setUrlResult(res.data.result)
    //       } else {
    //         alert('Url Error.')
    //       }
    //   })
  }, [])
  
  return (
    
    <div style={{ height: '100vh' }}>
      {UrlResult ? (<div>
      <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '50px' }}>Result</h2>
      <div>{ UrlResult }</div>
    </div>) : ( <div style={{ display: 'flex', justifyContent: 'center', fontSize: '50px', alignItems: 'center', height: '100%' }}>Loading...</div> )}
    </div>
    
  )
}

export default ResultPage