import React from 'react';
import { useSite } from '../context/SiteContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const { portfolios } = useSite();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
        <p className="text-slate-400 text-lg">
          에이픽마케팅이 만들어낸 실제 성공 사례와 작업물들을 확인하세요.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolios.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#162666] rounded-2xl overflow-hidden border border-blue-900/30 hover:border-white/30 transition-all hover:shadow-2xl hover:shadow-blue-900/20"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162666] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-4 left-4 bg-[#1F3590]/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                {item.description}
              </p>
              
              {item.linkUrl ? (
                <a 
                  href={item.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-white transition-colors"
                >
                  자세히 보기 <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="text-sm font-bold text-slate-500 cursor-default">
                  상세 페이지 준비중
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};