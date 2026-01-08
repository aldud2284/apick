import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SiteContent, BlogPost, PortfolioItem } from '../types';
import { INITIAL_CONTENT, SAMPLE_POSTS, SAMPLE_PORTFOLIOS } from '../constants';

interface SiteContextType {
  content: SiteContent;
  posts: BlogPost[];
  portfolios: PortfolioItem[];
  updateContent: (newContent: Partial<SiteContent>) => void;
  updateHero: (hero: SiteContent['hero']) => void;
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  deletePost: (id: string) => void;
  addPortfolio: (portfolio: Omit<PortfolioItem, 'id'>) => void;
  deletePortfolio: (id: string) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(INITIAL_CONTENT);
  const [posts, setPosts] = useState<BlogPost[]>(SAMPLE_POSTS);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>(SAMPLE_PORTFOLIOS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

  const updateHero = (hero: SiteContent['hero']) => {
    setContent(prev => ({ ...prev, hero }));
  };

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Math.random().toString(36).substr(2, 9),
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const addPortfolio = (portfolio: Omit<PortfolioItem, 'id'>) => {
    const newPortfolio: PortfolioItem = {
      ...portfolio,
      id: Math.random().toString(36).substr(2, 9),
    };
    setPortfolios(prev => [newPortfolio, ...prev]);
  };

  const deletePortfolio = (id: string) => {
    setPortfolios(prev => prev.filter(p => p.id !== id));
  };

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <SiteContext.Provider value={{ content, posts, portfolios, updateContent, updateHero, addPost, deletePost, addPortfolio, deletePortfolio, isLoggedIn, login, logout }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};