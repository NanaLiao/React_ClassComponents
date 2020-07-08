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
     <ClickCounter name='Lina'/>
     <HoverCounter age={18}/>
    </div>
  );
}

export default App;
