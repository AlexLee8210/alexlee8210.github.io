import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element = {<HomePage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
