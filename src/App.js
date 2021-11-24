import React from 'react'
import Setup from "./tutorial/11-react-router/tutorial";
import App1 from "./tutorial/11-react-router/tutorial/link1";
import App2 from "./tutorial/11-react-router/tutorial/link2";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {
  return (
      <div className='container'>
          <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Setup/>}/>
                    <Route path='link1' element={<App1/>}/>
                    <Route path='link2' element={<App2/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
