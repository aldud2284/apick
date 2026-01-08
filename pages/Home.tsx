import React from 'react';
import { useSite } from '../context/SiteContext';
import { Icon } from '../components/Icon';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Home: React.FC = () => {
  const { content, posts } = useSite();

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-[#1F3590] to-[#1F3590] z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 font-semibold text-sm tracking-wider uppercase mb-4">
              Execution Focused Marketing Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
              {content.hero.subtitle}
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
               <a 
                 href="https://forms.gle/vTtFToLF6NADK5wDA"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white hover:bg-blue-50 text-[#1F3590] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-900/50 flex items-center justify-center gap-2"
               >
                {content.hero.ctaText} <ArrowRight />
              </a>
              <Link to="/services" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center">
                서비스 더보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">에이픽의 원칙</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {content.principles.map((principle, idx) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group glass-panel rounded-3xl p-10 hover:bg-white/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {idx === 0 ? <Icon name="ShieldAlert" size={120} /> : <Icon name="Heart" size={120} />}
              </div>
              
              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 rounded text-sm font-bold mb-4 ${idx === 0 ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                  {principle.subtitle}
                </span>
                <h3 className="text-3xl font-bold mb-6 text-white">{principle.title}</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {principle.description}
                </p>
                {principle.quote && (
                  <blockquote className="border-l-4 border-white/50 pl-4 italic text-blue-200">
                    "{principle.quote}"
                  </blockquote>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#162666]/50 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Services</h2>
              <p className="text-slate-300 max-w-xl">
                브랜딩부터 실행, 퍼포먼스까지. <br/>
                로컬 비즈니스 성장에 필요한 모든 것을 원스톱으로 제공합니다.
              </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-blue-300 hover:text-white mt-4 md:mt-0">
              전체 서비스 보기 <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {content.services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-white/30 group"
              >
                <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#1F3590] transition-colors">
                  <Icon name={service.iconName} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.slice(0, 2).map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={12} className="mt-0.5 text-blue-400 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-white">
              전체 서비스 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-12">
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">지금, 우리 매장의 마케팅을 진단해보세요.</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              초기 컨설팅은 무료로 진행됩니다. 현재의 문제점과 개선 방향을 제안해 드립니다.
            </p>
            <a 
              href="https://forms.gle/vTtFToLF6NADK5wDA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1F3590] px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-2xl"
            >
              무료 진단 신청하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};