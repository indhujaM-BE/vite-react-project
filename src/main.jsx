import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import CuurentDate from './Task/CuurentDate.jsx'
// import Form from './Task/Form.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
  <CuurentDate/>
</StrictMode>
)
