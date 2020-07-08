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
     <ErrorBoundary>
     <Hero heroName='Batman'/>
     <Hero heroName='Superman'/>
     <Hero heroName='Joker'/>
     </ErrorBoundary>
    </div>
  );
}

export default App;
