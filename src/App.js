import React from "react";
import { Header, Slider} from "./Components/Layout.components";
import { Routes, Route} from "react-router-dom";
import AllTodos from './Pages/AllTodos.pages';
import InProgress from './Pages/InProgress.pages'
import { InputBox } from "./Components/InputBox.components";


function App() {
  return (
    <>
      <Header/>
      <div style={{display:'flex'}}>
        <Slider/>
        <div>
          <InputBox/>
          <Routes>
            <Route path='/' element={<AllTodos/>}/>
            <Route path='/inprogress' element={<InProgress/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
