import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/"><Login /></Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
