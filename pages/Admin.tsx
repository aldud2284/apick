import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { LayoutDashboard, FileText, Settings, LogOut, Save, Plus, Trash2, Home, Image, Edit2, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const { login } = useSite();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple demo password
      login();
      navigate('/admin/dashboard');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1F3590]">
      <div className="bg-[#162666] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-800">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">에이픽 관리자</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm mb-2">비밀번호</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#101C4F] border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
              placeholder="비밀번호 입력"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-white hover:bg-slate-100 text-[#1F3590] font-bold py-3 rounded-lg transition-colors">
            로그인
          </button>
        </form>
        <div className="mt-6 text-center">
            <Link to="/" className="text-slate-400 text-sm hover:text-white">사이트로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard: React.FC = () => {
  const { isLoggedIn, logout, content, updateHero, portfolios, addPortfolio, updatePortfolio, deletePortfolio } = useSite();
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'portfolio' | 'settings'>('overview');
  const [heroForm, setHeroForm] = useState(content.hero);
  
  // Portfolio state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [portfolioForm, setPortfolioForm] = useState({ title: '', category: '', linkUrl: '', description: '', imageUrl: '' });

  if (!isLoggedIn) {
    return <AdminLogin />;
  }

  const handleSaveHero = () => {
    updateHero(heroForm);
    alert('메인 히어로 섹션이 업데이트되었습니다.');
  };

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Default image if empty
    const finalImageUrl = portfolioForm.imageUrl.trim() || `https://picsum.photos/800/600?random=${Date.now()}`;

    if (editingId) {
        updatePortfolio(editingId, { ...portfolioForm, imageUrl: finalImageUrl });
        alert('포트폴리오가 수정되었습니다.');
        setEditingId(null);
    } else {
        addPortfolio({
            ...portfolioForm,
            imageUrl: finalImageUrl
        });
        alert('새 포트폴리오가 등록되었습니다.');
    }
    
    // Reset form
    setPortfolioForm({ title: '', category: '', linkUrl: '', description: '', imageUrl: '' });
  };

  const startEdit = (item: any) => {
      setEditingId(item.id);
      setPortfolioForm({
          title: item.title,
          category: item.category,
          linkUrl: item.linkUrl || '',
          description: item.description || '',
          imageUrl: item.imageUrl || ''
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
      setEditingId(null);
      setPortfolioForm({ title: '', category: '', linkUrl: '', description: '', imageUrl: '' });
  };

  return (
    <div className="flex h-screen bg-[#1F3590]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#162666] border-r border-[#101C4F] hidden md:flex flex-col">
        <div className="p-6 border-b border-[#101C4F]">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs text-[#1F3590]">A</span>
            Apick Admin
          </h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <LayoutDashboard size={18} /> 대시보드
          </button>
          <button 
             onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'content' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <FileText size={18} /> 메인 콘텐츠 관리
          </button>
          <button 
             onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'portfolio' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Image size={18} /> 포트폴리오 관리
          </button>
          <button 
             onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Settings size={18} /> 설정
          </button>
        </nav>
        <div className="p-4 border-t border-[#101C4F] space-y-2">
          <Link to="/" className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white text-sm">
            <Home size={18} /> 사이트 바로가기
          </Link>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 text-sm w-full">
            <LogOut size={18} /> 로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            {activeTab === 'overview' && '대시보드'}
            {activeTab === 'content' && '메인 콘텐츠 수정'}
            {activeTab === 'portfolio' && '포트폴리오 관리'}
            {activeTab === 'settings' && '사이트 설정'}
          </h1>
          <div className="md:hidden flex gap-4">
             <Link to="/" className="text-slate-400"><Home/></Link>
             <button onClick={logout} className="text-slate-400"><LogOut/></button>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#162666] p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-slate-400 text-sm font-medium mb-2">포트폴리오</h3>
              <p className="text-3xl font-bold text-white">{portfolios.length}</p>
            </div>
            <div className="bg-[#162666] p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-slate-400 text-sm font-medium mb-2">활성 서비스</h3>
              <p className="text-3xl font-bold text-white">{content.services.length}</p>
            </div>
            
            <div className="col-span-1 md:col-span-3 bg-[#162666] p-6 rounded-xl border border-blue-900/30 mt-6">
              <h3 className="text-lg font-bold text-white mb-4">빠른 시작</h3>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('portfolio')} className="bg-blue-600 px-4 py-2 rounded text-white text-sm hover:bg-blue-500">포트폴리오 관리</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-[#162666] p-8 rounded-xl border border-blue-900/30 max-w-2xl">
            <h3 className="text-lg font-bold text-white mb-6">히어로 섹션 텍스트</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-slate-400 text-sm mb-2">메인 타이틀</label>
                <textarea 
                  value={heroForm.title}
                  onChange={(e) => setHeroForm({...heroForm, title: e.target.value})}
                  className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none h-32"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">서브 타이틀</label>
                <textarea 
                  value={heroForm.subtitle}
                  onChange={(e) => setHeroForm({...heroForm, subtitle: e.target.value})}
                  className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none h-24"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">버튼 텍스트</label>
                <input 
                  type="text" 
                  value={heroForm.ctaText}
                  onChange={(e) => setHeroForm({...heroForm, ctaText: e.target.value})}
                  className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none"
                />
              </div>
              <button 
                onClick={handleSaveHero}
                className="flex items-center gap-2 bg-white text-[#1F3590] hover:bg-slate-100 px-6 py-3 rounded-lg font-bold transition-colors"
              >
                <Save size={18} /> 변경사항 저장
              </button>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-8">
            <div className="bg-[#162666] p-6 rounded-xl border border-blue-900/30">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-bold text-white">{editingId ? '포트폴리오 수정' : '새 포트폴리오 추가'}</h3>
                 {editingId && (
                     <button onClick={cancelEdit} className="text-sm text-slate-400 hover:text-white flex items-center gap-1"><X size={14}/> 취소</button>
                 )}
              </div>
              
              <form onSubmit={handlePortfolioSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <input 
                    type="text" 
                    placeholder="프로젝트 제목" 
                    required
                    value={portfolioForm.title}
                    onChange={(e) => setPortfolioForm({...portfolioForm, title: e.target.value})}
                    className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none"
                  />
                </div>
                <div>
                   <input 
                    type="text" 
                    placeholder="카테고리 (예: 촬영, 영상)" 
                    required
                    value={portfolioForm.category}
                    onChange={(e) => setPortfolioForm({...portfolioForm, category: e.target.value})}
                    className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none"
                  />
                </div>
                <div>
                   <input 
                    type="text" 
                    placeholder="노션/외부 링크 URL (선택)" 
                    value={portfolioForm.linkUrl}
                    onChange={(e) => setPortfolioForm({...portfolioForm, linkUrl: e.target.value})}
                    className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                   <label className="block text-slate-400 text-xs mb-1">썸네일 이미지 URL (구글 드라이브 링크 등)</label>
                   <input 
                    type="text" 
                    placeholder="https://..." 
                    value={portfolioForm.imageUrl}
                    onChange={(e) => setPortfolioForm({...portfolioForm, imageUrl: e.target.value})}
                    className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white focus:border-white outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    placeholder="프로젝트 설명" 
                    required
                    value={portfolioForm.description}
                    onChange={(e) => setPortfolioForm({...portfolioForm, description: e.target.value})}
                    className="w-full bg-[#101C4F] border border-blue-900 rounded p-3 text-white h-24 focus:border-white outline-none"
                  />
                </div>
                <button type="submit" className={`md:col-span-2 flex items-center justify-center gap-2 ${editingId ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500'} text-white px-4 py-3 rounded-lg font-bold`}>
                  {editingId ? <><Save size={18} /> 수정사항 저장</> : <><Plus size={18} /> 포트폴리오 등록</>}
                </button>
              </form>
            </div>

            <div className="bg-[#162666] p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-4">포트폴리오 목록</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-blue-900/50 text-slate-400 text-sm">
                      <th className="py-3 px-4">제목</th>
                      <th className="py-3 px-4">카테고리</th>
                      <th className="py-3 px-4">링크</th>
                      <th className="py-3 px-4 text-right">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolios.map(item => (
                      <tr key={item.id} className={`border-b border-blue-900/30 hover:bg-blue-900/20 ${editingId === item.id ? 'bg-blue-900/40' : ''}`}>
                        <td className="py-3 px-4 text-white font-medium">{item.title}</td>
                        <td className="py-3 px-4 text-slate-400 text-sm">{item.category}</td>
                        <td className="py-3 px-4 text-slate-400 text-sm truncate max-w-[150px]">{item.linkUrl ? item.linkUrl : '-'}</td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                                onClick={() => startEdit(item)}
                                className="text-blue-400 hover:text-blue-300 p-1 rounded hover:bg-blue-900/20"
                            >
                                <Edit2 size={16} />
                            </button>
                            <button 
                                onClick={() => deletePortfolio(item.id)}
                                className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-900/20"
                            >
                                <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
            <div className="bg-[#162666] p-8 rounded-xl border border-blue-900/30">
                 <h3 className="text-lg font-bold text-white mb-6">환경 설정</h3>
                 <p className="text-slate-400 mb-4">SEO 설정 및 소셜 미디어 연동 키 관리 (데모 버전)</p>
                 <div className="space-y-4 max-w-xl">
                     <div className="flex flex-col gap-2">
                         <label className="text-sm text-slate-300">Meta Title</label>
                         <input type="text" value="에이픽 마케팅 - 실행 중심 마케팅 스튜디오" disabled className="bg-[#101C4F] border border-blue-900 p-2 rounded text-slate-500 cursor-not-allowed"/>
                     </div>
                     <div className="flex flex-col gap-2">
                         <label className="text-sm text-slate-300">Instagram API Key</label>
                         <input type="text" value="******************" disabled className="bg-[#101C4F] border border-blue-900 p-2 rounded text-slate-500 cursor-not-allowed"/>
                     </div>
                 </div>
            </div>
        )}
      </main>
    </div>
  );
};