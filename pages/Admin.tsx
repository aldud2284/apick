import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { LayoutDashboard, FileText, Settings, LogOut, Save, Plus, Trash2, Home, Image, Edit2, X, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="bg-[#151515] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">에이픽 관리자</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">비밀번호</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#222] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand"
              placeholder="비밀번호 입력"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-3 rounded-lg transition-colors">
            로그인
          </button>
        </form>
        <div className="mt-6 text-center">
            <Link to="/" className="text-gray-500 text-sm hover:text-white">사이트로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard: React.FC = () => {
  const { isLoggedIn, logout, content, updateHero, updateProblem, updateMockup, portfolios, addPortfolio, updatePortfolio, deletePortfolio } = useSite();
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'portfolio' | 'settings'>('overview');
  const [heroForm, setHeroForm] = useState(content.hero);
  const [problemForm, setProblemForm] = useState(content.problem);
  const [mockupForm, setMockupForm] = useState(content.mockup || { 
    beforeImage: '', mainImage: '', subImage1: '', subImage2: '',
    beforeText: '', afterText: '', mockupTitle: '', mockupSubtitle: ''
  });
  
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

  const handleSaveProblem = () => {
    updateProblem(problemForm);
    alert('문제 제기 섹션이 업데이트되었습니다.');
  };

  const handleSaveMockup = () => {
    updateMockup(mockupForm);
    alert('목업 섹션이 업데이트되었습니다.');
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
    <div className="flex h-screen bg-dark">
      {/* Sidebar */}
      <aside className="w-64 bg-[#151515] border-r border-white/5 hidden md:flex flex-col">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 bg-brand rounded flex items-center justify-center text-xs text-white">A</span>
            Apick Admin
          </h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-brand/10 text-brand' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <LayoutDashboard size={18} /> 대시보드
          </button>
          <button 
             onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'content' ? 'bg-brand/10 text-brand' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <FileText size={18} /> 메인 콘텐츠 관리
          </button>
          <button 
             onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'portfolio' ? 'bg-brand/10 text-brand' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Image size={18} /> 포트폴리오 관리
          </button>
          <button 
             onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-brand/10 text-brand' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Settings size={18} /> 설정
          </button>
        </nav>
        <div className="p-4 border-t border-white/5 space-y-2">
          <Link to="/" className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white text-sm">
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
             <Link to="/" className="text-gray-400"><Home/></Link>
             <button onClick={logout} className="text-gray-400"><LogOut/></button>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
              <h3 className="text-gray-400 text-sm font-medium mb-2">포트폴리오</h3>
              <p className="text-3xl font-bold text-white">{portfolios.length}</p>
            </div>
            <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
              <h3 className="text-gray-400 text-sm font-medium mb-2">활성 서비스</h3>
              <p className="text-3xl font-bold text-white">{content.services.length}</p>
            </div>
            
            <div className="col-span-1 md:col-span-3 bg-[#151515] p-6 rounded-xl border border-white/5 mt-6">
              <h3 className="text-lg font-bold text-white mb-4">빠른 시작</h3>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('portfolio')} className="bg-brand px-4 py-2 rounded text-white text-sm hover:bg-brand/90">포트폴리오 관리</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="bg-[#151515] p-8 rounded-xl border border-white/5 max-w-2xl">
              <h3 className="text-lg font-bold text-white mb-6">히어로 섹션 텍스트</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">메인 타이틀</label>
                  <textarea 
                    value={heroForm.title}
                    onChange={(e) => setHeroForm({...heroForm, title: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none h-32"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">서브 타이틀</label>
                  <textarea 
                    value={heroForm.subtitle}
                    onChange={(e) => setHeroForm({...heroForm, subtitle: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none h-24"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">버튼 텍스트</label>
                  <input 
                    type="text" 
                    value={heroForm.ctaText}
                    onChange={(e) => setHeroForm({...heroForm, ctaText: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">배경 이미지 URL</label>
                  <input 
                    type="text" 
                    value={heroForm.backgroundImage || ''}
                    onChange={(e) => setHeroForm({...heroForm, backgroundImage: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <button 
                  onClick={handleSaveHero}
                  className="flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  <Save size={18} /> 변경사항 저장
                </button>
              </div>
            </div>

            <div className="bg-[#151515] p-8 rounded-xl border border-white/5 max-w-2xl">
              <h3 className="text-lg font-bold text-white mb-6">문제 제기 섹션 텍스트</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">타이틀</label>
                  <textarea 
                    value={problemForm.title}
                    onChange={(e) => setProblemForm({...problemForm, title: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none h-24"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">상세 설명</label>
                  <textarea 
                    value={problemForm.description}
                    onChange={(e) => setProblemForm({...problemForm, description: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none h-48"
                  />
                </div>
                <button 
                  onClick={handleSaveProblem}
                  className="flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  <Save size={18} /> 변경사항 저장
                </button>
              </div>
            </div>

            <div className="bg-[#151515] p-8 rounded-xl border border-white/5 max-w-2xl">
              <h3 className="text-lg font-bold text-white mb-6">목업(Mockup) 섹션 콘텐츠</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">왼쪽 상단 텍스트</label>
                    <input 
                      type="text" 
                      value={mockupForm.beforeText || ''}
                      onChange={(e) => setMockupForm({...mockupForm, beforeText: e.target.value})}
                      className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">오른쪽 상단 텍스트</label>
                    <input 
                      type="text" 
                      value={mockupForm.afterText || ''}
                      onChange={(e) => setMockupForm({...mockupForm, afterText: e.target.value})}
                      className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">목업 타이틀</label>
                  <input 
                    type="text" 
                    value={mockupForm.mockupTitle || ''}
                    onChange={(e) => setMockupForm({...mockupForm, mockupTitle: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">목업 서브타이틀</label>
                  <input 
                    type="text" 
                    value={mockupForm.mockupSubtitle || ''}
                    onChange={(e) => setMockupForm({...mockupForm, mockupSubtitle: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <hr className="border-white/10 my-4" />
                <div>
                  <label className="block text-gray-400 text-sm mb-2">과거의 전단지 이미지 URL</label>
                  <input 
                    type="text" 
                    value={mockupForm.beforeImage || ''}
                    onChange={(e) => setMockupForm({...mockupForm, beforeImage: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                    placeholder="입력하지 않으면 기본 도형이 표시됩니다."
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">현재의 쇼룸 메인 이미지 URL</label>
                  <input 
                    type="text" 
                    value={mockupForm.mainImage || ''}
                    onChange={(e) => setMockupForm({...mockupForm, mainImage: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">현재의 쇼룸 서브 이미지 1 URL</label>
                  <input 
                    type="text" 
                    value={mockupForm.subImage1 || ''}
                    onChange={(e) => setMockupForm({...mockupForm, subImage1: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">현재의 쇼룸 서브 이미지 2 URL</label>
                  <input 
                    type="text" 
                    value={mockupForm.subImage2 || ''}
                    onChange={(e) => setMockupForm({...mockupForm, subImage2: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <button 
                  onClick={handleSaveMockup}
                  className="flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  <Save size={18} /> 변경사항 저장
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-8">
            <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-bold text-white">{editingId ? '포트폴리오 수정' : '새 포트폴리오 추가'}</h3>
                 {editingId && (
                     <button onClick={cancelEdit} className="text-sm text-gray-400 hover:text-white flex items-center gap-1"><X size={14}/> 취소</button>
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
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div>
                   <input 
                    type="text" 
                    placeholder="카테고리 (예: 촬영, 영상)" 
                    required
                    value={portfolioForm.category}
                    onChange={(e) => setPortfolioForm({...portfolioForm, category: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div>
                   <input 
                    type="text" 
                    placeholder="노션/외부 링크 URL (선택)" 
                    value={portfolioForm.linkUrl}
                    onChange={(e) => setPortfolioForm({...portfolioForm, linkUrl: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                   <label className="block text-gray-400 text-xs mb-1">썸네일 이미지 URL (구글 드라이브 링크 등)</label>
                   <input 
                    type="text" 
                    placeholder="https://..." 
                    value={portfolioForm.imageUrl}
                    onChange={(e) => setPortfolioForm({...portfolioForm, imageUrl: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white focus:border-brand outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    placeholder="프로젝트 설명" 
                    required
                    value={portfolioForm.description}
                    onChange={(e) => setPortfolioForm({...portfolioForm, description: e.target.value})}
                    className="w-full bg-[#222] border border-white/10 rounded p-3 text-white h-24 focus:border-brand outline-none"
                  />
                </div>
                <button type="submit" className={`md:col-span-2 flex items-center justify-center gap-2 ${editingId ? 'bg-green-600 hover:bg-green-500 shadow-green-900/20' : 'bg-brand hover:bg-brand/90 shadow-brand/20'} text-white px-4 py-3 rounded-lg font-bold transition-all shadow-lg mt-2`}>
                  {editingId ? <><Save size={18} /> 저장</> : <><Plus size={18} /> 새 포트폴리오 추가</>}
                </button>
              </form>
            </div>

            <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">포트폴리오 목록</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                      <th className="py-3 px-4">제목</th>
                      <th className="py-3 px-4">카테고리</th>
                      <th className="py-3 px-4 text-center">링크 여부</th>
                      <th className="py-3 px-4 text-right">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolios.map(item => (
                      <tr key={item.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${editingId === item.id ? 'bg-white/10' : ''}`}>
                        <td className="py-4 px-4 text-white font-medium align-middle">{item.title}</td>
                        <td className="py-4 px-4 align-middle">
                          <span className="bg-white/10 text-gray-300 px-2.5 py-1 rounded-full text-xs font-medium">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center align-middle">
                          {item.linkUrl ? (
                            <span className="inline-flex items-center gap-1 bg-brand/10 text-brand px-2.5 py-1 rounded-full text-xs font-medium">
                              <ExternalLink size={12} /> 있음
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-white/5 text-gray-500 px-2.5 py-1 rounded-full text-xs font-medium">
                              없음
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right align-middle">
                          <div className="flex justify-end gap-2">
                            <button 
                                onClick={() => startEdit(item)}
                                className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm transition-colors"
                            >
                                <Edit2 size={14} /> 수정
                            </button>
                            <button 
                                onClick={() => deletePortfolio(item.id)}
                                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm transition-colors"
                            >
                                <Trash2 size={14} /> 삭제
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
            <div className="bg-[#151515] p-8 rounded-xl border border-white/5">
                 <h3 className="text-lg font-bold text-white mb-6">환경 설정</h3>
                 <p className="text-gray-400 mb-4">SEO 설정 및 소셜 미디어 연동 키 관리 (데모 버전)</p>
                 <div className="space-y-4 max-w-xl">
                     <div className="flex flex-col gap-2">
                         <label className="text-sm text-gray-300">Meta Title</label>
                         <input type="text" value="에이픽 마케팅 - 실행 중심 마케팅 스튜디오" disabled className="bg-[#222] border border-white/10 p-2 rounded text-gray-500 cursor-not-allowed"/>
                     </div>
                     <div className="flex flex-col gap-2">
                         <label className="text-sm text-gray-300">Instagram API Key</label>
                         <input type="text" value="******************" disabled className="bg-[#222] border border-white/10 p-2 rounded text-gray-500 cursor-not-allowed"/>
                     </div>
                 </div>
            </div>
        )}
      </main>
    </div>
  );
};