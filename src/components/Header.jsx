import { Shield } from 'lucide-react';

export default function Header({ isScrolled, onHome, onAbout, onSafeTalk }) {
  return (
    <header id="navbar" className={`w-full sticky top-0 z-40 transition-all duration-300 bg-[#F5F3EF]/90 backdrop-blur-md ${isScrolled ? 'border-b border-[#D9D6D1] bg-[#F5F3EF] shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span id="brand-logo" onClick={onHome} className="tracking-tight cursor-pointer select-none inline-flex items-center gap-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-[#016970] to-[#0A8E97] text-white rounded-lg shadow-md border border-[#016970]/10 shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Shield size={15} className="stroke-[2.5]" />
            </div>
            <span className="font-sans font-extrabold text-[#1A1815] text-[19px] tracking-tight flex items-center">v<span className="text-[#016970] font-normal">Solve</span><span className="text-[10px] text-[#6E6B67] font-semibold tracking-wider uppercase ml-2 hidden sm:inline-block border border-[#D9D6D1]/80 px-2 py-0.5 rounded-md bg-[#FBFAF8]">Companion</span></span>
          </span>
          <span className="text-[#D9D6D1] text-[12px] font-light hidden sm:inline-block">|</span>
          <button onClick={onAbout} className="font-sans text-[13px] text-[#6E6B67] hover:text-[#016970] hover:underline transition-all duration-200 cursor-pointer pt-[2px]">Our Philosophy</button>
        </div>
        <button onClick={onSafeTalk} className="h-[38px] px-4 bg-transparent border-2 border-[#016970] text-[#016970] font-sans text-[13px] tracking-wide font-medium rounded-lg hover:bg-[#016970]/5 active:bg-[#016970]/10 transition-colors duration-200 cursor-pointer">Safe Talk</button>
      </div>
    </header>
  );
}
