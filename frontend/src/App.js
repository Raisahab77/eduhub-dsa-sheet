import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DsaList from './pages/DsaList';

function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path={'/login'} element={<Login/>} />
              <Route path={'/sign-up'} element={<Signup/>} />
              <Route path={'/'} element={<DsaList/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
