import { ShoppingCart, Palette } from 'lucide-react';

interface FloatingWidgetsProps {
  onOpenBuyNow: () => void;
  onOpenCustomize: () => void;
}

export default function FloatingWidgets({
  onOpenBuyNow,
  onOpenCustomize,
}: FloatingWidgetsProps) {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-1 font-['Plus_Jakarta_Sans']">
      
      {/* Buy Now Floating Button */}
      <button
        type="button"
        onClick={onOpenBuyNow}
        className="flex items-center gap-2.5 bg-[#3B52F6] hover:bg-[#2e43e6] text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-l-lg shadow-xl shadow-blue-600/30 transition-all duration-200 transform hover:-translate-x-1 border-y border-l border-blue-400/30"
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Buy Now</span>
      </button>

      {/* Customize Floating Button */}
      <button
        type="button"
        onClick={onOpenCustomize}
        className="flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm px-4 py-3 rounded-l-lg shadow-xl transition-all duration-200 transform hover:-translate-x-1 border-y border-l border-slate-200"
      >
        <Palette className="w-4 h-4 text-slate-700" />
        <span>Customize</span>
      </button>

    </div>
  );
}
