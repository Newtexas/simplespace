import React from 'react';

import { ContentBoxFrame } from './styles/Frame';
import './App.css';
import Iot from './IOT/Iot';
import Test from './IOT/Test';






function App() {
  return (
    <>
  
<ContentBoxFrame>
<Test/>
<Iot/>

</ContentBoxFrame>

</>
  );
}

export default App;
