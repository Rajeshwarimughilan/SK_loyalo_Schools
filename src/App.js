import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdmissionBanner from './components/AdmissionBanner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FloatingCtas from './components/FloatingCtas';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import Faculty from './pages/Faculty';
import Administrators from './pages/Administrators';
import FoodAtLoyalo from './pages/FoodAtLoyalo';
import Events from './pages/Events';
import Announcements from './pages/Announcements';
import Hostel from './pages/Hostel';
import HealthRoom from './pages/HealthRoom';
import Counselling from './pages/Counselling';
import Books from './pages/Books';
import Transport from './pages/Transport';
import Uniform from './pages/Uniform';
import QuickLinks from './components/QuickLinks';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <QuickLinks />
        <NavBar />
        <AdmissionBanner />
        <FloatingCtas />
        
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/subjects-activities" element={<Navigate to="/academics" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/administrators" element={<Administrators />} />
            <Route path="/food-at-loyalo" element={<FoodAtLoyalo />} />
            <Route path="/achievements" element={<Navigate to="/food-at-loyalo" replace />} />
            <Route path="/events" element={<Events />} />
            <Route path="/health-room" element={<HealthRoom />} />
            <Route path="/counselling" element={<Counselling />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/resources/books" element={<Books />} />
            <Route path="/resources/transport" element={<Transport />} />
            <Route path="/resources/uniform" element={<Uniform />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
