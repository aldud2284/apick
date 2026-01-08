import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, isLoggedIn, logout } = useSite();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAdmin) {
    return <div className="min-h-screen bg-[#1F3590] text-white">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1F3590] text-slate-100 font-light overflow-x-hidden selection:bg-white selection:text-[#1F3590]">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-[#1F3590]/90 backdrop-blur-md border-white/10 py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <span className="bg-white w-8 h-8 flex items-center justify-center rounded-lg text-lg text-[#1F3590]">A</span>
            APICK
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <Link to="/services" className="hover:text-white transition-colors">서비스</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link>
            {isLoggedIn ? (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                <Link to="/admin" className="text-blue-200 hover:text-white">관리자</Link>
                <button onClick={logout} className="text-slate-300 hover:text-white">로그아웃</button>
              </div>
            ) : (
               <Link to="/admin" className="flex items-center gap-1 text-slate-300 hover:text-white text-xs">
                <ShieldCheck size={14} /> 관리자
               </Link>
            )}
            <a
              href="https://forms.gle/vTtFToLF6NADK5wDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1F3590] px-5 py-2.5 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              문의하기 <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1F3590] border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
             <Link to="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>홈</Link>
            <Link to="/services" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>서비스</Link>
            <Link to="/portfolio" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>포트폴리오</Link>
            <a 
              href="https://forms.gle/vTtFToLF6NADK5wDA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-200" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
            </a>
            {isLoggedIn && (
               <Link to="/admin" className="text-lg font-medium text-purple-300" onClick={() => setIsMobileMenuOpen(false)}>관리자 대시보드</Link>
            )}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/10 border-t border-white/20 backdrop-blur-md py-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link to="/" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                APICK
              </Link>
              <p className="text-blue-100 leading-relaxed max-w-md">
                {content.hero.subtitle} <br/>
                제대로 보이고, 매력적으로 보이고, 지속적으로 선택받게 만드는 실행 중심 마케팅 파트너.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-blue-100 text-sm">
                {content.contact.address && <li>{content.contact.address}</li>}
                <li>Email: {content.contact.email}</li>
                {content.contact.phone && <li>Tel: {content.contact.phone}</li>}
                {content.contact.businessNumber && <li>사업자등록번호: {content.contact.businessNumber}</li>}
              </ul>
              <div className="flex gap-3 mt-4">
                {content.contact.openTalkUrl && (
                  <a href={content.contact.openTalkUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-[#FEE500] text-[#3c1e1e] text-xs font-bold rounded hover:opacity-90">
                    오픈톡
                  </a>
                )}
                 {content.contact.blogUrl && (
                  <a href={content.contact.blogUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-[#2DB400] text-white text-xs font-bold rounded hover:opacity-90">
                    블로그
                  </a>
                )}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Service</h4>
              <ul className="space-y-4 text-blue-100 text-sm">
                <li>브랜딩 & 컨설팅</li>
                <li>네이버 플레이스</li>
                <li>콘텐츠 제작</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
            <p>© 2024 APICK Marketing. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};