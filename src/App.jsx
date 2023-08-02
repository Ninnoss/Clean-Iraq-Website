import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components//Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Campaigns from './pages/Campaigns';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/campaigns"
          element={<Campaigns />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/blogs"
          element={<Blogs />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
