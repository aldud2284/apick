import React from 'react';
import { useSite } from '../context/SiteContext';
import { Icon } from '../components/Icon';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const ServicesPage: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white break-keep">Our Services</h1>
        <p className="text-gray-400 text-lg break-keep">
          에이픽마케팅은 로컬 비즈니스가 온라인에서 제대로 보이고,<br className="hidden md:block"/> 매력적으로 보이고, 지속적으로 선택받게 만드는 실행 중심 마케팅 스튜디오입니다.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {content.services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeInUp}
            className="bg-[#111111] p-10 md:p-12 rounded-3xl border border-white/5 hover:border-brand/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
            
            <div className="text-brand mb-8">
              <Icon name={service.iconName} size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-4 break-keep">
              <span className="text-gray-600 font-mono text-lg">0{index + 1}</span>
              {service.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 break-keep">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};