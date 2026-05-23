// import {motion, AnimatePresence } from 'framer-motion';

// export default function HeroSection({ onSafeTalk }) {
//   const scrollToGuides = () => document.getElementById('conflict-types')?.scrollIntoView({ behavior: 'smooth' });
//   return (
//     <main id="hero-main" className="px-4 pt-16 pb-12 flex flex-col items-center">
//       <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[#6E6B67] text-[12px] uppercase tracking-widest text-center mb-5 font-bold">Paid Specialist Consultation · 100% Secure · Confidential Advisory</motion.div>
//       <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="font-serif text-[28px] md:text-[38px] lg:text-[44px] leading-[1.2] text-center text-[#1A1815] max-w-[325px] md:max-w-2xl mb-6 font-normal">Simple support for family problems.</motion.h1>
//       <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="font-sans text-[14px] md:text-[16px] leading-[1.5] text-center text-[#6E6B67] max-w-[320px] md:max-w-2xl mb-8">Confused about marriage, separations, safety or kids? We explain your steps in standard, child-plain words with zero pressure.</motion.p>
//       <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.52 }} className="w-full max-w-[300px] md:max-w-sm mb-4">
//         <button onClick={onSafeTalk} className="w-full h-[54px] bg-[#016970] hover:bg-[#0C4E54] active:bg-[#093e43] text-white font-sans text-[15px] font-bold tracking-wide rounded-[10px] transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer">Talk to a kind advisor privately</button>
//       </motion.div>
//       <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="mb-8 text-center">
//         <button onClick={scrollToGuides} className="font-sans text-[13px] text-[#6E6B67] hover:text-[#1A1815] hover:underline transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer font-medium">Read our simple guides below first ↓</button>
//       </motion.div>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }} className="w-full max-w-[280px] md:max-w-md text-center text-[#6E6B67] text-[11px] leading-relaxed pb-2">Safe Consultation · We never share your data · Professional Counsel</motion.div>
//     </main>
//   );
// }


import { motion } from "framer-motion";
import heroImage from "../assets/hero_image.png";

export default function HeroSection({ onSafeTalk }) {
  const scrollToGuides = () =>
    document
      .getElementById("conflict-types")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <main
      id="hero-main"
      className="px-6 pt-16 pb-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#6E6B67] text-[12px] uppercase tracking-widest mb-5 font-bold"
          >
            Paid Specialist Consultation · 100% Secure · Confidential Advisory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-serif text-[34px] md:text-[48px] lg:text-[58px] leading-[1.15] text-[#1A1815] max-w-xl mb-6"
          >
            Simple support for family problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-[15px] md:text-[18px] leading-[1.7] text-[#6E6B67] max-w-lg mb-8"
          >
            Confused about marriage, separations, safety or kids? We explain
            your steps in standard, child-plain words with zero pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="w-full max-w-sm mb-5"
          >
            <button
              onClick={onSafeTalk}
              className="w-full md:w-auto px-8 h-[56px] bg-[#016970] hover:bg-[#0C4E54] active:bg-[#093e43] text-white font-sans text-[15px] font-bold tracking-wide rounded-[12px] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Talk to a kind advisor privately
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mb-8"
          >
            <button
              onClick={scrollToGuides}
              className="font-sans text-[14px] text-[#6E6B67] hover:text-[#1A1815] hover:underline transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer font-medium"
            >
              Read our simple guides below first ↓
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="text-[#6E6B67] text-[12px] leading-relaxed"
          >
            Safe Consultation · We never share your data · Professional Counsel
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={heroImage}
            alt="Family Support Illustration"
            className="w-full max-w-[520px] object-contain"
          />
        </motion.div>
      </div>
    </main>
  );
}