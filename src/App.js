// import React, { Component } from 'react'
// import TodoApp from './component/TodoApp/TodoApp'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <TodoApp/>
//       </div>
//     )
//   }
// }
/*---fragment normal---*/
// import React,{fragment}from 'react';


// export default function App() {
//   return (
//     <div>
//     <fragment></fragment>
//     </div>
//   )
// }
/*---fragment short---*/
import React from 'react'
import About from './component/TodoApp/About/About';
import Header from './component/TodoApp/Header/Header';
import TodoApp from './component/TodoApp/TodoApp';
import {BrowserRouter as Router,Route}  from "react-router-dom";

export default function App() {
 
  return (

      // <About/>
     // <TodoApp/> 
      <Router>
      <Header/>
        <Route path="/" exact component={TodoApp} />
        <Route path="/about" component={About} />

   </Router> 
 
  );
};










