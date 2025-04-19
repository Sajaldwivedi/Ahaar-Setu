import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { FoodProvider } from './contexts/FoodContext';
import { PointsProvider } from './contexts/PointsContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import { AuthForm } from './components/AuthForm';
import { UserProfile } from './components/UserProfile';
import { useAuth } from './contexts/AuthContext';

// Import pages
import Home from './pages/Home';
import DonatePage from './pages/DonatePage';
import RequestPage from './pages/RequestPage';
import DonorDashboard from './pages/DonorDashboard';
import PartnerDashboard from './pages/PartnerDashboard';
import Community from './pages/Community';
import AllDonationsPage from './pages/AllDonationsPage';
import AllClaimsPage from './pages/AllClaimsPage';
import About from './pages/About';
import RedeemRewards from './pages/RedeemRewards';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <AuthProvider>
      <PointsProvider>
        <FoodProvider>
          <Router basename="/Ahaar-Setu">
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <Routes>
                <Route path="/auth" element={<AuthForm />} />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <UserProfile />
                    </PrivateRoute>
                  }
                />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/request" element={<RequestPage />} />
                <Route path="/donor-dashboard" element={<DonorDashboard />} />
                <Route path="/partner-dashboard" element={<PartnerDashboard />} />
                <Route path="/community" element={<Community />} />
                <Route path="/all-donations" element={<AllDonationsPage />} />
                <Route path="/all-claims" element={<AllClaimsPage />} />
                <Route path="/rewards" element={<RedeemRewards />} />
                <Route path="/redeem-rewards" element={<RedeemRewards />} />
              </Routes>
              <Toaster />
            </div>
          </Router>
        </FoodProvider>
      </PointsProvider>
    </AuthProvider>
  );
};

export default App;
