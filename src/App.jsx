import React, { useState } from "react";
import SignatureCanvas from 'react-signature-canvas';


function App() {
  const [sign,setSign] = useState()
  const [url,setUrl] = useState()
  

    const handleClear= () =>{
      sign.clear()
      setUrl('')
  }
  const handleGenerate= () =>{
      setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
  }
  console.log(url);
  return(
      <div>
          <div style={{border:"2px solid black",width: 500, height: 200}}>
              <SignatureCanvas 
                  canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
                  ref={data=>setSign(data)}
              />
          </div>

          <br></br>
          <button style={{height:"30px",width:"60px"}} onClick={handleClear}>Clear</button>
          <button  style={{height:"30px",width:"60px"}} onClick={handleGenerate}>Save</button>

          <br/><br/>
          <img src={url} />
          
      </div>
  )
}

export default App

