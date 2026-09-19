import { Check, RotateCcw, Sparkles, X } from "lucide-react";
import { ThemeConfig } from "../../types";

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeConfig;
  onUpdateTheme: (updated: Partial<ThemeConfig>) => void;
  onResetTheme: () => void;
}

export default function CustomizeDrawer({
  isOpen,
  onClose,
  theme,
  onUpdateTheme,
  onResetTheme,
}: CustomizeDrawerProps) {
  if (!isOpen) return null;

  const colorPresets = [
    { name: "Delectus Blue", value: "#3B52F6" },
    { name: "Indigo Royal", value: "#4F46E5" },
    { name: "Emerald Growth", value: "#059669" },
    { name: "Violet Spark", value: "#7C3AED" },
    { name: "Rose Sunset", value: "#E11D48" },
  ];

  const radiusOptions = [
    { name: "Rounded (Default)", value: "1rem" },
    { name: "Pill Soft", value: "1.5rem" },
    { name: "Modern Sharp", value: "0.375rem" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-white shadow-2xl p-6 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    Live Theme Customizer
                  </h3>
                  <p className="text-xs text-slate-400">
                    Personalize color theme and aesthetics
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Customization Options */}
            <div className="py-6 space-y-6">
              {/* Accent Color Palette */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Brand Primary Accent Color
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {colorPresets.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => onUpdateTheme({ primaryColor: c.value })}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all ${
                        theme.primaryColor === c.value
                          ? "bg-slate-800 border-blue-500 text-white"
                          : "bg-slate-800/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full ring-2 ring-white/20"
                          style={{ backgroundColor: c.value }}
                        />
                        <span>{c.name}</span>
                      </div>
                      {theme.primaryColor === c.value && (
                        <Check className="w-4 h-4 text-blue-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Corner Radius */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Card Corner Radius
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {radiusOptions.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => onUpdateTheme({ borderRadius: r.value })}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                        theme.borderRadius === r.value
                          ? "bg-blue-600 border-blue-500 text-white font-bold"
                          : "bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      {r.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Preview Canvas Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onUpdateTheme({ darkMode: false })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      !theme.darkMode
                        ? "bg-white text-slate-900 border-white shadow-md"
                        : "bg-slate-800/40 text-slate-400 border-slate-800"
                    }`}
                  >
                    Light Theme
                  </button>
                  <button
                    type="button"
                    onClick={() => onUpdateTheme({ darkMode: true })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      theme.darkMode
                        ? "bg-blue-600 text-white border-blue-500 shadow-md"
                        : "bg-slate-800/40 text-slate-400 border-slate-800"
                    }`}
                  >
                    Dark Theme
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetTheme}
              className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30"
            >
              Apply Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
