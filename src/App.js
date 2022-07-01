import './App.css';
// is the react import below necessary?
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
