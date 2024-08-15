import React, { useState } from 'react'
import './App.css';
// import ReactHook1 from './Components/ReactHook1';
import NavBar from './Components/Navbar'
import News from './Components/News'
import './App.css'
import AboutUs from './Components/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY


  return (
    <>
      {/* <ReactHook1/> */}
      <Router>
        <div>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />

          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={"in"} category={"general"} />} />
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={"in"} category={"business"} />} />
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={"in"} category={"entertainment"} />} />
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country={"in"} category={"health"} />} />
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country={"in"} category={"science"} />} />
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country={"in"} category={"sports"} />} />
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country={"in"} category={"technology"} />} />
            <Route path='/AboutUs' element={<AboutUs />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
