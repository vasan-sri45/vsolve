import { AnimatePresence } from 'framer-motion';
import ModalShell from './ModalShell';

export default function AboutSheet({ isOpen, onClose, onSafeTalk }) {
  const features = [
    ['Calming down fights', 'We prioritize lowering active family anger. Plain schedules and options keep home life stable.'],
    ['Absolute privacy protection', 'Your messages are kept fully offline and secret. We never display list names.'],
    ['Step-by-step guidance', 'We lay out simple ways to share custody or divide goods peacefully before signing anything official.'],
  ];
  return <AnimatePresence>{isOpen && <ModalShell title="Our Philosophy" subtitle="How and Why We Help" onClose={onClose}>
    <div className="flex-1 overflow-y-auto pr-0.5 space-y-6 scrollbar-none pb-4 font-sans text-left"><div className="space-y-2"><h4 className="font-serif text-[17px] text-[#1A1815] font-normal leading-tight">A quiet, safe space for family questions.</h4><p className="text-[13px] text-[#6E6B67] leading-relaxed">vSolve helps families resolve relationship disputes and separations with security and dignity by translating complex legal parameters into clear step-by-step checklists.</p></div><div className="grid grid-cols-1 gap-4 pt-1">{features.map(([title, desc]) => <div key={title} className="p-3 bg-[#F5F3EF] rounded-xl border border-[#D9D6D1]/20"><h5 className="font-sans text-[13px] font-bold text-[#1A1815] mb-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#016970]" />{title}</h5><p className="text-[12px] text-[#6E6B67] leading-relaxed">{desc}</p></div>)}</div><div className="p-4 bg-[#F5F3EF] rounded-xl border border-[#D9D6D1]/40 text-center"><p className="font-serif text-[14.5px] text-[#1A1815] mb-2 font-bold">Have private questions?</p><button onClick={() => { onClose(); setTimeout(onSafeTalk, 150); }} className="w-full py-2.5 bg-[#016970] text-white text-[13px] font-bold rounded-lg">Begin Safe Discussion</button></div></div>
  </ModalShell>}</AnimatePresence>;
}
