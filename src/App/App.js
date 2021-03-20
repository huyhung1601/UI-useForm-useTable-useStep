import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Header from '../components/header/Header';
import Employees from '../pages/Employees/Employees';


function App() {
  return (
    <>
      <div>
        <Header/>
          <Employees/>
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
