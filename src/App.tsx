import { Analytics } from '@vercel/analytics/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Culture from './pages/Culture';
import CV from './pages/CV';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
        <Footer />
      </Router>
      <Analytics/>
    </>
  );
}

export default App;