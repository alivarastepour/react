import React from 'react'
import Setup from "./tutorial/11-react-router/tutorial";
import App1 from "./tutorial/11-react-router/tutorial/link1";
import App2 from "./tutorial/11-react-router/tutorial/link2";
import useData from "./tutorial/11-react-router/tutorial/data";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App3 from "./tutorial/11-react-router/tutorial/link3";


function App() {
  return (
      <div className='container'>
          <BrowserRouter>
              <Route path='/' element={<Setup/>}/>
              <Routes>
                  <Route path='/link1' element={<App1/>}/>
                  <Route path='/link2' element={<App2/>}/>
                  <Route path='/link3' element={<App3/>}/>
                  <Route path='*' element={<h1>oi🤨</h1>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
