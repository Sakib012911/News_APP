import './App.css';
import React, {useState} from 'react'
import Navbar from './component/Navbar.js';
import News from './component/News.js'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App =()=> {
  const [progress,setprogress]=useState(0);
  
 
  
    return (
      <>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<News  setprogress={setprogress}  key="general"  pageSize={4} category="General"/>}/>
        <Route exact path="/business" element={ <News  setprogress={setprogress} key="business" pageSize={4} category="Business"/>}/>
        <Route exact path="/entertainment" element={ <News setprogress={setprogress} key="entertainment" pageSize={4} category="Entertainment"/>}/>
        <Route exact path="/technology" element={ <News   setprogress={setprogress} key="technology" pageSize={4} category="Technology"/>}/>
        <Route exact path="/health" element={ <News   setprogress={setprogress} key="health" pageSize={4} category="Health"/>}/>
        <Route exact path="/science" element={ <News   setprogress={setprogress} key="technology" pageSize={4} category="Science"/>}/>
        <Route  exact path="/sports" element={ <News   setprogress={setprogress} key="sports" pageSize={4} category="Sports"/>}/>
      </Routes>
    </BrowserRouter>
      </>
      
    )
  
}



export default App;