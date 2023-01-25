import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <div style={{alignContent:'center', width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h1 >Dev Crush</h1>
      <App />
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
)