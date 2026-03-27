import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import Admissions from './pages/Admissions';
import AdminApp from './admin/AdminApp';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-shell">
      <QuickLinks />
      <NavBar />
      <AdmissionBanner />
      {!isAdminRoute && <FloatingCtas />}

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
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/resources/books" element={<Books />} />
          <Route path="/resources/transport" element={<Transport />} />
          <Route path="/resources/uniform" element={<Uniform />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
