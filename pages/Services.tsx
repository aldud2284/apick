import React from 'react';
import { useSite } from '../context/SiteContext';
import { Icon } from '../components/Icon';
import { motion } from 'framer-motion';

export const ServicesPage: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-slate-400 text-lg">
          에이픽마케팅은 로컬 비즈니스가 온라인에서 제대로 보이고,<br className="hidden md:block"/> 매력적으로 보이고, 지속적으로 선택받게 만드는 실행 중심 마케팅 스튜디오입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {content.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="shrink-0">
               <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-900/40">
                <Icon name={service.iconName} size={40} />
               </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed border-b border-white/5 pb-8">
                {service.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};