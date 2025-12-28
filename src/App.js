import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdmissionBanner from './components/AdmissionBanner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FloatingCtas from './components/FloatingCtas';
import Home from './pages/Home';
import About from './pages/About';
import SubjectsActivities from './pages/SubjectsActivities';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';
import ClubsCells from './pages/ClubsCells';
import Announcements from './pages/Announcements';
import Hostel from './pages/Hostel';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <AdmissionBanner />
        <NavBar />
        <FloatingCtas />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/subjects-activities" element={<SubjectsActivities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/clubs-cells" element={<ClubsCells />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/hostel" element={<Hostel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
