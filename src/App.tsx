import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Api } from './api';

import './App.css';
import { useStore } from './hooks/useStore';


function App() {

  const { users } = useStore()
  console.log(JSON.stringify(users))
 
  return (
    <div className="App">
      spp
    </div>
  );
}

export default observer(App);
