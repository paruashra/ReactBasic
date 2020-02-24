import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <LifecycleA />
          {/* <Form /> */}
          {/* <Stylesheet primary='true'/>
          <Inline/>
          <h1 className='error'>Error</h1>
          <h1 className={styles.success}>Success</h1> */}
          {/* <NameList /> */}
          {/* <UserGreeting /> */}
          {/* <ParentComponent /> */}
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
        </div>
      </header>
    </div>
  );
}

export default App;
