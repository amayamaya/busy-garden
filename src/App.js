import AdminPage from './AdminPage';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Link to="/admin">Admin</Link>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
