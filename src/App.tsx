import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { supabase } from '../utils/supabase'

// Pages
import LandingPage from './pages/LandingPage';
import RegistrationChoice from './pages/RegistrationChoice';
import RegisterForm from './pages/RegisterForm';
import EmailVerification from './pages/EmailVerification';
import LoginChoice from './pages/LoginChoice';
import LoginForm from './pages/LoginForm';
import DonorDashboard from './pages/DonorDashboard';
import OrphanageDashboard from './pages/OrphanageDashboard';
import DonorProfileComplete from './pages/DonorProfileComplete';
import OrphanegeProfileComplete from './pages/OrphanegeProfileComplete';
import OrphanageProfile from './pages/OrphanageProfile';
import DonationPage from './pages/DonationPage';
import SuccessPage from './pages/SuccessPage';
import DonationRequestsPage from './pages/DonationRequestsPage';
import Orphanages from './pages/Orphanages';
import { UserProvider } from "./Context/userContext"

function App() {
  return (
    <Router>
      <div className="app">
          <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationChoice />} />
          <Route path="/register/orphanage" element={<RegisterForm role="Orphanage" />} />
          <Route path="/register/donor" element={<RegisterForm role="Donor" />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/login" element={<LoginChoice />} />
          <Route path="/login/orphanage" element={<LoginForm role="Orphanage" />} />
          <Route path="/login/donor" element={<LoginForm role="Donor" />} />
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/orphanage/dashboard" element={<OrphanageDashboard />} />
          <Route path="/donor/profile-complete" element={<DonorProfileComplete />} />
          <Route path="/orphanage/profile-complete" element={<OrphanegeProfileComplete />} />
          <Route path="/orphanage/:id" element={<OrphanageProfile />} />
          <Route path="/donation/:orphanageId" element={<DonationPage />} />
          <Route path="/donation/success" element={<SuccessPage />} />
          <Route path="/orphanage/requests" element={<DonationRequestsPage />} />
          <Route path="/orphanages" element={<Orphanages />} />
        </Routes>
          </UserProvider>
      </div>
    </Router>
  );
}

export default App;