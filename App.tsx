import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { PortfolioPage } from './pages/Portfolio';
import { AdminDashboard } from './pages/Admin';
import { SiteProvider } from './context/SiteContext';

const App: React.FC = () => {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          {/* Admin Route - No LayoutWrapper */}
          <Route path="/admin/*" element={<AdminDashboard />} />
          
          {/* Public Routes - Wrapped in Layout */}
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </SiteProvider>
  );
};

export default App;