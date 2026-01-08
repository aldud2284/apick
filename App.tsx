import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { PortfolioPage } from './pages/Portfolio';
import { AdminDashboard } from './pages/Admin';
import { SiteProvider } from './context/SiteContext';

const ContactPlaceholder = () => (
    <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto glass-panel p-10 rounded-3xl border border-white/10">
            <h1 className="text-3xl font-bold mb-8 text-center">무료 상담 신청</h1>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">이름</label>
                        <input type="text" className="w-full bg-[#101C4F] border border-blue-900 rounded-lg p-3 text-white focus:border-white outline-none" placeholder="홍길동" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">연락처</label>
                        <input type="text" className="w-full bg-[#101C4F] border border-blue-900 rounded-lg p-3 text-white focus:border-white outline-none" placeholder="010-0000-0000" />
                    </div>
                </div>
                <div>
                     <label className="block text-sm font-medium text-slate-300 mb-2">업체명 / 업종</label>
                     <input type="text" className="w-full bg-[#101C4F] border border-blue-900 rounded-lg p-3 text-white focus:border-white outline-none" placeholder="에이픽 카페 / 요식업" />
                </div>
                <div>
                     <label className="block text-sm font-medium text-slate-300 mb-2">문의 내용</label>
                     <textarea className="w-full bg-[#101C4F] border border-blue-900 rounded-lg p-3 text-white focus:border-white outline-none h-32" placeholder="마케팅 고민을 자유롭게 적어주세요."></textarea>
                </div>
                <button type="button" className="w-full bg-white hover:bg-slate-100 text-[#1F3590] font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/30">
                    상담 신청하기
                </button>
            </form>
        </div>
    </div>
);

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
                <Route path="/contact" element={<ContactPlaceholder />} />
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