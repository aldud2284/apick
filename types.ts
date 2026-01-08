export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points?: string[];
  quote?: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  principles: PrincipleItem[];
  services: ServiceItem[];
  contact: {
    phone?: string;
    email: string;
    address?: string;
    businessNumber?: string;
    openTalkUrl?: string;
    blogUrl?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  linkUrl?: string;
  description?: string;
}