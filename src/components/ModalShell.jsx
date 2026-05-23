import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ModalShell({ title, subtitle, onClose, children, maxWidth = 'md:max-w-2xl' }) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-[#1A1815]/40 backdrop-blur-xs z-50" />
      <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 220 }} className={`fixed bottom-0 md:bottom-auto inset-x-0 md:inset-x-auto md:top-[10vh] md:left-1/2 md:-translate-x-1/2 bg-[#FBFAF8] rounded-t-[24px] md:rounded-2xl z-50 px-5 pt-6 pb-8 flex flex-col border border-[#D9D6D1] h-[90%] md:h-[80vh] md:max-h-[720px] md:w-full ${maxWidth} shadow-2xl`}>
        <div className="flex items-center justify-between mb-4 border-b border-[#D9D6D1]/40 pb-3 shrink-0">
          <div><h3 className="font-serif text-[16px] text-[#1A1815] leading-tight">{title}</h3>{subtitle && <p className="text-[10px] text-[#016970] tracking-wider uppercase font-semibold mt-0.5">{subtitle}</p>}</div>
          <button onClick={onClose} className="p-1 hover:bg-[#F5F3EF] rounded-full text-[#6E6B67] transition-colors cursor-pointer"><X size={18} /></button>
        </div>
        {children}
      </motion.div>
    </>
  );
}
