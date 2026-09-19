import { useState, useEffect } from 'react';
import { X, ShoppingCart, Check, ShieldCheck, Zap } from 'lucide-react';

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuyNowModal({ isOpen, onClose }: BuyNowModalProps) {
  const [tier, setTier] = useState<'single' | 'agency'>('single');
  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {purchased ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <Check className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Package License Activated!</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Thank you for choosing Soul-D. Digital Marketing Solutions! Our team will reach out with your project access credentials immediately.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Soul-D. Solutions Package</h3>
                <p className="text-xs text-slate-400">All 8 Digital Marketing & Development Services at Reasonable Rates</p>
              </div>
            </div>

            {/* License Selector */}
            <div className="grid grid-cols-2 gap-3 my-6">
              <button
                type="button"
                onClick={() => setTier('single')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  tier === 'single'
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Single Site</div>
                <div className="text-2xl font-extrabold text-white mt-1">$49</div>
                <div className="text-[11px] text-slate-400 mt-1">1 Commercial Website</div>
              </button>

              <button
                type="button"
                onClick={() => setTier('agency')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  tier === 'agency'
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Unlimited Agency</div>
                <div className="text-2xl font-extrabold text-white mt-1">$149</div>
                <div className="text-[11px] text-slate-400 mt-1">Unlimited Client Sites</div>
              </button>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5 mb-8 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Full React 19 + TypeScript + Tailwind source code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>HubSpot drag-and-drop module integration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-400" />
                <span>Lifetime free updates & priority developer support</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setPurchased(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-2xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 text-base"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Complete Order (${tier === 'single' ? '49' : '149'})</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
