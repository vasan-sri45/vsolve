import { AnimatePresence } from 'framer-motion';
import ModalShell from './ModalShell';

export default function OptionsSheet({ isOpen, onClose, onSafeTalk }) {
  const steps = [
    ['Take a slow, deep breath', 'Do not make fast promises or write angry text messages when you feel stressed.'],
    ['Seek calm solutions', 'Before costly litigation, a silent co-parenting split or division agreement can keep things peaceful.'],
    ['Speak with friendly helpers', 'Discuss your worries with a warm family structures counselor anonymously.'],
  ];
  return <AnimatePresence>{isOpen && <ModalShell title="Friendly Advice" subtitle="Simple steps to stay calm" onClose={onClose}>
    <div className="flex-1 overflow-y-auto pr-0.5 space-y-6 scrollbar-none pb-4"><p className="text-[13px] text-[#6E6B67] leading-relaxed">Going through family issues is emotionally active and tiring. These simple steps help protect you and your loved ones.</p>{steps.map(([title, desc], i) => <div key={title} className="space-y-2"><div className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-[#016970]/10 flex items-center justify-center font-serif text-[11px] font-bold text-[#016970]">{i+1}</span><h4 className="font-sans text-[13px] font-bold text-[#1A1815]">{title}</h4></div><p className="text-[12px] text-[#6E6B67] pl-7 leading-relaxed">{desc}</p></div>)}<div className="p-4 bg-[#F5F3EF] rounded-xl border border-[#D9D6D1]/40 text-center"><p className="font-serif text-[14px] text-[#1A1815] mb-2">Ready to seek a friendly talk?</p><button onClick={() => { onClose(); setTimeout(onSafeTalk, 150); }} className="w-full py-2.5 bg-[#016970] text-white text-[13px] font-bold rounded-lg">Connect Safely Now</button></div></div>
  </ModalShell>}</AnimatePresence>;
}
