import React from 'react';
import { useSite } from '../context/SiteContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const { portfolios } = useSite();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white break-keep">Portfolio</h1>
        <p className="text-gray-400 text-lg break-keep">
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
            className="group relative bg-[#151515] rounded-2xl overflow-hidden border border-white/5 hover:border-brand/30 transition-all hover:shadow-2xl hover:shadow-brand/10"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur text-brand text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                {item.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand transition-colors line-clamp-2 break-keep">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-6 break-keep">
                {item.description}
              </p>
              
              {item.linkUrl ? (
                <a 
                  href={item.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-white transition-colors"
                >
                  자세히 보기 <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="text-sm font-bold text-gray-600 cursor-default">
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