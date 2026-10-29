import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import C_UpdateCalculator from './Class_components/C_UpdateCalculator.jsx'
// import Simplecalculator from './Function_component/Simplecalculator.jsx'
import Mainpage from './StudentDetailManagement/Mainpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mainpage/>
  </StrictMode>
)
