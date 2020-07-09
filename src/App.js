import React from 'react';
import './App.css';

import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import ParentComponent from './components/ParentComponent';
import Condintional from './components/Condintional';
import NameList from './components/NameList';
import Form from './components/Form';
import ParentCom from './components/ParentCom';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import Counter3 from './components/Counter3';

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <Counter2/> */}
      {/* <ParentComponent/> */}
      {/* <Condintional/> */}
      {/* <NameList/> */}
      {/* <Form/> */}
      {/* <ParentCom/> */}
      {/* <RefsDemo/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
     <Hero heroName='Batman'/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName='Superman'/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName='Joker'/>
     </ErrorBoundary> */}
      {/* <ClickCounter2 />
     <HoverCounter2 />
     <User render={(isLogin)=>isLogin? 'Lina' : 'Guest'}/> */}
      <Counter3>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount}
          />)}
      </Counter3>

      <Counter3>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount}
          />)}
      </Counter3>

    </div>
  );
}

export default App;
