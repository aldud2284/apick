import React from 'react';
import { useSite } from '../context/SiteContext';
import { Icon } from '../components/Icon';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export const Home: React.FC = () => {
  const { content, portfolios } = useSite();

  return (
    <div className="flex flex-col bg-dark text-white font-sans selection:bg-brand selection:text-white">
      {/* SECTION 1. Main Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.hero.backgroundImage || "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop"} 
            alt="Delicious food sizzle cut" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/60 to-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-white whitespace-pre-line drop-shadow-2xl break-keep">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto whitespace-pre-line leading-relaxed break-keep">
              {content.hero.subtitle}
            </p>
            <div className="pt-12 flex flex-col sm:flex-row justify-center gap-6">
               <a 
                 href="https://forms.gle/vTtFToLF6NADK5wDA"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-brand hover:bg-brand-dark text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,94,0,0.4)] flex items-center justify-center gap-3"
               >
                {content.hero.ctaText} <ArrowRight size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* SECTION 2. Problem */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight text-white whitespace-pre-line break-keep">
              {content.problem?.title}
            </h2>
            <div className="w-24 h-1 bg-brand mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed whitespace-pre-line font-light break-keep">
              {content.problem?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3. Core Services */}
      <section className="py-32 bg-[#151515] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-24"
          >
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Core Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">에이픽의 3대 무기</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {content.services.map((service, idx) => (
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
                  <span className="text-gray-600 font-mono text-lg">0{idx + 1}</span>
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
      </section>

      {/* SECTION 4. Selected Works */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <div>
              <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">성과 증명</h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-brand transition-colors mt-6 md:mt-0">
              포트폴리오 전체보기 <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="relative"
            >
              {/* Mockup Comparison */}
              <div className="flex gap-4 md:gap-8 justify-center">
                <div className="w-1/2 max-w-[280px] relative">
                  <div className="absolute -top-10 left-0 right-0 text-center text-gray-500 font-medium">{content.mockup?.beforeText || "과거의 전단지"}</div>
                  <div className="aspect-[9/19] bg-[#1a1a1a] rounded-[2rem] border-8 border-[#222] overflow-hidden relative shadow-2xl opacity-60 grayscale">
                    {content.mockup?.beforeImage ? (
                      <img src={content.mockup.beforeImage} alt="과거의 전단지" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="p-4 flex flex-col gap-3 h-full">
                        <div className="w-full h-32 bg-[#333] rounded-lg"></div>
                        <div className="w-3/4 h-4 bg-[#333] rounded"></div>
                        <div className="w-1/2 h-4 bg-[#333] rounded"></div>
                        <div className="w-full h-20 bg-[#333] rounded-lg mt-4"></div>
                        <div className="w-full h-20 bg-[#333] rounded-lg"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="w-1/2 max-w-[280px] relative">
                  <div className="absolute -top-10 left-0 right-0 text-center text-brand font-bold">{content.mockup?.afterText || "현재의 쇼룸"}</div>
                  <div className="aspect-[9/19] bg-white rounded-[2rem] border-8 border-[#222] overflow-hidden relative shadow-[0_0_50px_rgba(255,94,0,0.2)]">
                    <img src={content.mockup?.mainImage || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"} alt="App Mockup" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                    <div className="p-4">
                      <h4 className="text-black font-bold text-lg mb-1">{content.mockup?.mockupTitle || "프리미엄 다이닝"}</h4>
                      <p className="text-gray-500 text-xs mb-4">{content.mockup?.mockupSubtitle || "입맛이 확 도는 육즙 가득한 스테이크"}</p>
                      <div className="grid grid-cols-2 gap-2">
                        <img src={content.mockup?.subImage1 || "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop"} alt="Food" className="w-full h-20 object-cover rounded-lg" referrerPolicy="no-referrer" />
                        <img src={content.mockup?.subImage2 || "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"} alt="Food" className="w-full h-20 object-cover rounded-lg" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid sm:grid-cols-2 gap-6"
            >
              {portfolios.slice(0, 4).map((item) => (
                   <motion.div variants={fadeInUp} key={item.id} className="group block cursor-pointer"> 
                      <div className="aspect-square overflow-hidden rounded-2xl bg-[#151515] relative mb-5">
                          {item.imageUrl ? (
                             <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-700">No Image</div>
                          )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div>
                           <div className="text-brand text-xs font-bold tracking-wider uppercase mb-2">{item.category}</div>
                           <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors line-clamp-1">{item.title}</h3>
                      </div>
                   </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="mt-16 text-center md:hidden">
             <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand transition-colors">
              포트폴리오 전체보기 <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5. Our Principles */}
      <section className="py-32 bg-[#151515] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-20"
          >
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Our Principles</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">에이픽의 철학</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {content.principles.map((principle, idx) => (
              <motion.div
                key={principle.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="bg-dark p-12 rounded-[2rem] border border-white/5 relative"
              >
                <div className="text-brand mb-6 font-mono text-sm tracking-widest uppercase">
                  {principle.subtitle}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white break-keep">{principle.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed break-keep">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6. Footer & CTA */}
      <section className="py-32 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight break-keep">
              복잡한 마케팅 고민은<br/>
              에이픽에 맡기시고,<br/>
              사장님은 주방에서<br/>
              맛과 서비스에만 집중하세요.
            </h2>
            <p className="text-xl text-white/80 mb-12 break-keep">
              초기 상담은 무료입니다. 현재 문제점과 개선 방향을 함께 진단해 드립니다.
            </p>
            <a 
              href="https://forms.gle/vTtFToLF6NADK5wDA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dark text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-black transition-all transform hover:scale-105 shadow-2xl"
            >
              에이픽과 함께, 다시 설계하세요
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
