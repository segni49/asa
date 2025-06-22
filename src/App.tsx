import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/Booking';
import Explore from './pages/Explore';
import Plan from './pages/Plan';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plan" element={<Plan/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;