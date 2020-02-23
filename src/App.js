import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'
import EventBind from './component/EventBind'
import ParentComponent from './component/ParentComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <ParentComponent />
           {/* <Greet name="Bruce" heroName="Batman">
             <p>This is children props</p>
           </Greet>
           <Greet Clark="Bruce" heroName="Superman">
           <button>Action</button>
           </Greet>
           <Greet name="Diana" heroName="Wonder Woman"/>
          <Welcome name="Bruce" heroName="Batman"/> 
          <Welcome Clark="Bruce" heroName="Superman"/> 
          <Welcome name="Diana" heroName="Wonder Woman"/>  */}
          {/* <Message /> */}
          {/* <Hello /> */}
          {/* <Counter /> */}
          {/* <FunctionClick />
          <ClassClick /> */}
          {/* <EventBind />  */}
        </p>
      </header>
    </div>
  );
}

export default App;
