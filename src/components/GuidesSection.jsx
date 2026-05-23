import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/categories';
import { problemTypes } from '../data/blogData';
import { renderCategoryIcon } from '../utils/renderCategoryIcon';

export default function GuidesSection({ problemTypes, expandedCategoryId, setExpandedCategoryId, onSelectBlog }) {
  return (
    <section id="conflict-types" className="w-full py-16 bg-[#FBFAF8] border-t border-b border-[#D9D6D1]/50 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#016970]">Guides & Articles</span>
        <h2 className="font-serif text-[28px] md:text-[34px] text-[#1A1815] mt-2 leading-tight">Helpful Family Guides</h2>
        <p className="text-[#6E6B67] text-[14px] md:text-[15px] leading-relaxed mt-3 max-w-xl mx-auto">We write premium advisory articles and searchable FAQs for tough home situations. Tap any topic to read.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {categories.map((category) => {
          const isExpanded = expandedCategoryId === category.id;
          const matchedProblems = problemTypes.filter((problem) => category.blogIds.includes(problem.id));
          return (
            <div key={category.id} className="w-full text-left p-5 rounded-xl bg-[#F5F3EF] border border-[#D9D6D1]/40 hover:border-[#016970] hover:shadow-md transition-all duration-300 shadow-3xs flex flex-col justify-between">
              <div className="flex justify-between items-start w-full cursor-pointer select-none" onClick={() => setExpandedCategoryId(isExpanded ? null : category.id)}>
                <div className="pr-1 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#016970]/5 border border-[#016970]/10 flex items-center justify-center shrink-0 mt-0.5">{renderCategoryIcon(category.iconName)}</div>
                  <div><span className="text-[10px] font-bold text-[#016970] uppercase tracking-wider">{category.meta}</span><h4 className="font-serif text-[16px] text-[#1A1815] leading-snug font-medium mt-0.5">{category.title}</h4></div>
                </div>
                <span className="text-[11px] text-[#016970] font-bold bg-[#016970]/5 px-2.5 py-1.5 rounded-lg text-nowrap shrink-0 hover:bg-[#016970] hover:text-white">{isExpanded ? 'Collapse ▲' : `View Guides (${matchedProblems.length}) ▼`}</span>
              </div>
              <p className="text-[12px] text-[#6E6B67] leading-relaxed mt-3 pl-11">{category.desc}</p>
              <AnimatePresence initial={false}>{isExpanded && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden pl-11 pr-1 mt-3.5 pt-3.5 border-t border-[#D9D6D1]/40 space-y-2.5">
                {matchedProblems.map((prob) => <div key={prob.id} onClick={(e) => { e.stopPropagation(); onSelectBlog(prob); }} className="p-3 rounded-lg bg-[#FBFAF8] border border-[#D9D6D1]/30 hover:border-[#016970]/40 hover:scale-[1.01] cursor-pointer transition-all duration-205 flex justify-between items-center group/item"><div className="pr-4 flex-1"><h5 className="font-sans font-semibold text-[12.5px] text-[#1A1815] group-hover/item:text-[#016970] line-clamp-2 leading-snug">{prob.title}</h5><p className="text-[10px] text-[#6E6B67] line-clamp-1 mt-0.5">{prob.desc}</p></div><span className="shrink-0 text-[11px] text-[#016970] font-bold bg-[#016970]/5 group-hover/item:bg-[#016970] group-hover/item:text-white px-2.5 py-1 rounded">Read →</span></div>)}
              </motion.div>}</AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

