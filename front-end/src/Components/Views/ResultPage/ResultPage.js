import React from 'react'

function ResultPage(props) {
  const result = props.result;

  let resultArray = Object.keys(result).map(function (key) { 
    return [String(key), result[key]]; 
  }); 

  function shuffledArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffledArray(resultArray)
  
  return (
    
    <div style={{ height: '100vh', marginLeft: '25px', marginRight: '25px'}}>
      <div>
        <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '50px' }}>Keyword Result</h2>
        <div>
          {
            resultArray.map(word => (
                <span style={{ fontSize: `${(word[1]+2)*40}%` }}>{word[0]} </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ResultPage