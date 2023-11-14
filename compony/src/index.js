// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );



import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Router>
  <App />
</Router>
);
