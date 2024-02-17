
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import NoPage from './page/NoPage';
import Header from './components/Header';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} >
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
