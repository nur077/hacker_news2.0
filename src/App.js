import './App.css';
import {  Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <>
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/choosenNews/:id" element ={<NewsPage/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
