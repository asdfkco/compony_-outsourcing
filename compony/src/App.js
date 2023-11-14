import { Route, Routes } from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import MainPage from "./mainPage";
import Form_app from "./form";


function App() {
  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  }
  return (

        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/form" element={<Form_app />} />
          <Route path="/*" element={<div style={{margin:"0 auto"}}><h2 style={{fontSize:"40px"}}>not found page</h2></div>} />

        </Routes>
  );
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );