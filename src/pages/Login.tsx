
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { User, Building } from 'lucide-react';
import BridgeDivider from '../components/ui/BridgeDivider';

const Login = () => {
  const navigate = useNavigate();
  
  const handleDonorSelect = () => {
    navigate('/donor-dashboard');
  };
  
  const handlePartnerSelect = () => {
    navigate('/partner-dashboard');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-cream">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative bridge-motif animate-fade-in">
            <div className="p-8 text-center">
              <h1 className="text-3xl font-bold text-purple mb-6">Welcome to Aahaar Setu</h1>
              <p className="text-slate mb-8 text-lg">
                Building bridges between surplus food and those in need
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <button 
                  onClick={handleDonorSelect}
                  className="flex flex-col items-center p-6 border-2 border-coral rounded-lg hover:bg-coral/10 transition-colors transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mb-4 shadow-md">
                    <User size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Donor</h3>
                  <p className="text-slate text-base">
                    I want to donate surplus food and make an impact
                  </p>
                </button>
                
                <button 
                  onClick={handlePartnerSelect}
                  className="flex flex-col items-center p-6 border-2 border-teal rounded-lg hover:bg-teal/10 transition-colors transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mb-4 shadow-md">
                    <Building size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Community Partner</h3>
                  <p className="text-slate text-base">
                    I represent an organization that distributes food to those in need
                  </p>
                </button>
              </div>
              
              <p className="text-sm text-slate mt-8">
                Select a role to experience Aahaar Setu. No login required for demo.
              </p>
            </div>
          </div>
          
          <BridgeDivider className="my-16" />
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-purple mb-6">Join Our Mission</h2>
            <p className="text-slate mb-8 text-lg leading-relaxed">
              Aahaar Setu is bridging the gap between food waste and hunger, creating a sustainable 
              cycle of nourishment and hope in our communities. By connecting donors with surplus food 
              to community partners who distribute it to those in need, we're building bridges of 
              nourishment across society.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-light/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-coral text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-purple mb-2">Donate Surplus</h3>
                <p className="text-slate">Share your excess food instead of wasting it</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-light/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-purple mb-2">Connect Digitally</h3>
                <p className="text-slate">Our platform matches donations with community needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-light/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-purple mb-2">Create Impact</h3>
                <p className="text-slate">Feed communities and reduce environmental waste</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
