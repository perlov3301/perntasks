import React, { Fragment } from 'react';
import './App.css';
// components
import InputTask from "./components/InputTask";

function App() {
  return (
    <div className="container">
       <Fragment>
         <InputTask/>
       </Fragment>
    </div>
  );
}

export default App;
