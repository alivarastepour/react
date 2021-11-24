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


function App() {
  return (
      <div className='container'>
          <BrowserRouter>
              <Setup/>
              <Routes>
                  <Route exact path='/'/>
                  <Route path='/link1' element={<App1/>}/>
                  <Route path='/link2' element={<App2/>}/>
                  <Route path='*' element={<h1>oi🤨</h1>}/>
              </Routes>
          </BrowserRouter>
          {
              useData().map(a => {
                  return <div key={a.id}>{a.login}</div>
              })
          }
      </div>
  )
}

export default App
