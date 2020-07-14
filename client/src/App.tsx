import React, { Fragment } from 'react';
import './App.css';
// components
import InputTask from "./components/InputTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="container">
       <Fragment>
         <InputTask/>
         <ListTasks />
       </Fragment>
    </div>
  );
}

export default App;
