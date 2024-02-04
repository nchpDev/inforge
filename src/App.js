import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import Blog from './pages/Blog';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
  );
}

export default App;
