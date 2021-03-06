import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import DetailsMovie from "./page/DetailsMovie";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={ <Home />}/>
        <Route  path='/movie/:id' element={ <DetailsMovie /> }/>
      </Routes>
    </BrowserRouter>
      

  );
}

export default App;
