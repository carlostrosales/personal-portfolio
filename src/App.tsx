import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BlogPost } from './pages/BlogPost';
import { BeliefPost } from './pages/BeliefPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/beliefs/:slug" element={<BeliefPost />} />
      </Routes>
    </Router>
  );
}
export default App;
