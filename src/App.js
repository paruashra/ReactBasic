import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello';
// import Message from './component/Message';
// import Counter from './component/Counter';
// import FunctionClick from './component/FunctionClick';
// import ClassClick from './component/ClassClick';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import Stylesheet from './component/Stylesheet';
// import Inline from './component/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './component/Form';
// import LifecycleA from './component/LifecycleA';
// import FragmentDemo from './component/FragmentDemo';
// import Table from './component/Table';
// import ParentComp from './component/ParentComp';
// import RefsDemo from './component/RefsDemo';
// import FocusInput from './component/FocusInput';
// import FRParentInput from './component/FRParentInput';
// import PortalDemo from './component/PortalDemo';
// import ErrorBoundary1 from './component/ErrorBoundary1'
// import Hero from './component/Hero'
// import ClickCount from './component/ClickCounter';
// import HoverCounter from './component/HoverCounter';
// import Counter1 from './component/Counter1';
// import ClickCounterTwo from './component/ClickCounterTwo';
// import HoverCounterTwo from './component/HoverCounterTwo';
// import {UserProvider} from './component/userContext';
// import ComponentC from './component/ComponentC';
// import PostList from './component/PostList';
import PostForm from './component/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PostForm />
          {/* <PostList /> */}
          {/* <UserProvider value='Paresh'>
            <ComponentC />
          </UserProvider> */}

        {/* <Counter1
					render1={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount} name="Paresh">
					</ClickCounterTwo>}>
				</Counter1>
				<Counter1
					render1={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter1> */}
          {/* <ClickCount />
          <HoverCounter /> */}
        {/* <ErrorBoundary1>
        <Hero heroName="Batman" />
        </ErrorBoundary1>
        <ErrorBoundary1>
				<Hero heroName="Superman" />
        </ErrorBoundary1>
				<ErrorBoundary1>
					<Hero heroName="Joker" />
				</ErrorBoundary1> */}
          {/* <PortalDemo /> */}
          {/* <FRParentInput /> */}
          {/* <FocusInput /> */}
          {/* <RefsDemo /> */}
          {/* <MemoComp /> */}
          {/* <ParentComp /> */}
          {/* <Table /> */}
          {/* <FragmentDemo /> */}
          {/* <LifecycleA /> */}
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
