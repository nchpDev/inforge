import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/inforge" component={Home} />
        <Route path="/inforge/subscribe" component={Subscribe} />
        <Route path="/inforge/blog" component={Blog} />
      </Routes>
    </Router>
  );
}

export default App;
