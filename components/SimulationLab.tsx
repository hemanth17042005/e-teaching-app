
import React, { useState, useEffect, useRef } from 'react';

// --- NEW: History Map Lab ---
export const HistoryMap: React.FC = () => {
  const [era, setEra] = useState<'kadamba' | 'hoysala' | 'vijayanagara'>('kadamba');
  const [info, setInfo] = useState<string | null>(null);

  const eras = {
    kadamba: { 
      title: 'Kadamba Dynasty (345–525 CE)', 
      capital: 'Banavasi', 
      desc: 'The first indigenous dynasty to use Kannada as an official language.',
      color: 'fill-amber-500'
    },
    hoysala: { 
      title: 'Hoysala Empire (1026–1343 CE)', 
      capital: 'Belur/Halebidu', 
      desc: 'Famous for their unique star-shaped temple architecture.',
      color: 'fill-emerald-500'
    },
    vijayanagara: { 
      title: 'Vijayanagara Empire (1336–1646 CE)', 
      capital: 'Hampi', 
      desc: 'The golden era of South Indian history, art, and literature.',
      color: 'fill-blue-500'
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🗺️ History of Karnataka</h3>
        <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest">Social Science</span>
      </div>
      <div className="flex-1 relative bg-slate-50 rounded-3xl border border-slate-100 p-4 flex flex-col items-center justify-center min-h-[250px]">
        <svg viewBox="0 0 200 300" className="w-48 h-auto drop-shadow-xl">
          <path 
            d="M50,20 L150,20 L170,100 L160,200 L100,280 L40,200 L30,100 Z" 
            className={`transition-all duration-700 ${eras[era].color} opacity-80 stroke-white stroke-2`}
          />
          <circle cx="100" cy="150" r="4" className="fill-white animate-ping" />
          <text x="100" y="165" textAnchor="middle" className="fill-white text-[8px] font-black uppercase tracking-tighter">{eras[era].capital}</text>
        </svg>
        
        <div className="mt-4 text-center space-y-2">
          <h4 className="text-sm font-black text-slate-800">{eras[era].title}</h4>
          <p className="text-[10px] font-bold text-slate-500 leading-relaxed px-4">{eras[era].desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6">
        {Object.keys(eras).map(e => (
          <button 
            key={e} 
            onClick={() => setEra(e as any)}
            className={`py-2 rounded-lg font-black text-[8px] uppercase tracking-widest transition-all ${era === e ? 'bg-amber-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- NEW: Math Step Solver ---
export const MathSolver: React.FC = () => {
  const [problem, setProblem] = useState('2x + 5 = 15');
  const [steps, setSteps] = useState<{s: string, d: string}[]>([]);
  const [solving, setSolving] = useState(false);

  const solve = () => {
    setSolving(true);
    setSteps([]);
    setTimeout(() => {
      if (problem.includes('2x + 5 = 15')) {
        setSteps([
          { s: '2x + 5 - 5 = 15 - 5', d: 'Subtract 5 from both sides to isolate the term with x.' },
          { s: '2x = 10', d: 'Simplify the equation.' },
          { s: '2x / 2 = 10 / 2', d: 'Divide both sides by 2 to solve for x.' },
          { s: 'x = 5', d: 'Final Answer!' }
        ]);
      } else {
        setSteps([{ s: 'Processing...', d: 'In a real app, this would use the Gemini API to break down the problem step-by-step.' }]);
      }
      setSolving(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🧮 Math Step-Solver</h3>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Mathematics</span>
      </div>
      <div className="space-y-4 flex-1 flex flex-col">
        <div className="relative">
          <input 
            type="text" 
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 font-black text-slate-700 focus:border-blue-500 transition-all outline-none"
            placeholder="Enter equation..."
          />
          <button 
            onClick={solve}
            disabled={solving}
            className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 disabled:opacity-50"
          >
            {solving ? '...' : 'Solve'}
          </button>
        </div>

        <div className="flex-1 bg-slate-900 rounded-3xl p-6 overflow-y-auto max-h-[250px] space-y-4 scrollbar-hide">
          {steps.length === 0 && !solving && (
            <div className="h-full flex items-center justify-center text-slate-500 text-xs font-bold italic">
              Enter a problem and click solve to see the breakdown.
            </div>
          )}
          {solving && (
            <div className="h-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {steps.map((step, i) => (
            <div key={i} className="animate-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 200}ms` }}>
              <div className="flex items-center gap-3 mb-1">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black">{i + 1}</span>
                <p className="text-white font-mono text-sm font-bold">{step.s}</p>
              </div>
              <p className="text-slate-400 text-[10px] font-medium ml-8 leading-tight">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- NEW: Microscope Lab ---
export const MicroscopeLab: React.FC = () => {
  const [magnification, setMagnification] = useState(10);
  const [slide, setSlide] = useState<'amoeba' | 'bacteria' | 'onion'>('amoeba');

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🔬 Microscope Lab</h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">Microbiology</span>
      </div>
      <div className="flex-1 bg-slate-900 rounded-full aspect-square relative overflow-hidden border-8 border-slate-800 flex items-center justify-center mx-auto w-48">
        <div 
          className="transition-all duration-700"
          style={{ transform: `scale(${magnification / 5})` }}
        >
          {slide === 'amoeba' && (
            <div className="w-20 h-20 bg-blue-200/40 rounded-full border-4 border-blue-400 relative animate-pulse">
              <div className="absolute top-4 left-6 w-4 h-4 bg-blue-600 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 right-8 w-2 h-2 bg-blue-800 rounded-full opacity-30"></div>
            </div>
          )}
          {slide === 'bacteria' && (
            <div className="flex flex-wrap gap-2 w-24">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-6 h-2 bg-emerald-400 rounded-full rotate-45 opacity-60"></div>
              ))}
            </div>
          )}
          {slide === 'onion' && (
            <div className="grid grid-cols-3 gap-0.5 w-24 border border-emerald-800">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 border border-emerald-600 bg-emerald-100/20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-emerald-900 rounded-full"></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60 pointer-events-none"></div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6">
        {(['amoeba', 'bacteria', 'onion'] as const).map(s => (
          <button 
            key={s} 
            onClick={() => setSlide(s)}
            className={`py-2 rounded-lg font-black text-[8px] uppercase tracking-widest transition-all ${slide === s ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-1">
        <label className="text-[9px] font-black text-slate-400 uppercase">Magnification ({magnification}x)</label>
        <input type="range" min="10" max="100" step="10" value={magnification} onChange={(e) => setMagnification(parseInt(e.target.value))} className="w-full accent-emerald-600" />
      </div>
    </div>
  );
};

// --- NEW: Lung Mechanics Lab ---
export const LungLab: React.FC = () => {
  const [inhale, setInhale] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🫁 Lung Mechanics</h3>
        <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[10px] font-black uppercase tracking-widest">Respiration</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div className="relative w-32 h-48 border-x-4 border-t-4 border-slate-300 rounded-t-3xl flex flex-col items-center pt-8">
          {/* Trachea */}
          <div className="w-4 h-12 bg-pink-100 border-x-2 border-pink-200"></div>
          {/* Lungs */}
          <div className="flex gap-2">
            <div 
              className="w-12 h-20 bg-pink-400 rounded-full transition-all duration-1000"
              style={{ transform: `scale(${inhale ? 1.3 : 1})`, transformOrigin: 'top' }}
            ></div>
            <div 
              className="w-12 h-20 bg-pink-400 rounded-full transition-all duration-1000"
              style={{ transform: `scale(${inhale ? 1.3 : 1})`, transformOrigin: 'top' }}
            ></div>
          </div>
          {/* Diaphragm */}
          <div 
            className="absolute bottom-0 w-full h-4 bg-slate-800 rounded-full transition-all duration-1000"
            style={{ transform: `translateY(${inhale ? '10px' : '0'})` }}
          ></div>
        </div>
      </div>
      <button 
        onMouseDown={() => setInhale(true)}
        onMouseUp={() => setInhale(false)}
        onMouseLeave={() => setInhale(false)}
        className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${inhale ? 'bg-pink-600 text-white shadow-inner' : 'bg-slate-900 text-white shadow-xl shadow-pink-100'}`}
      >
        {inhale ? 'Inhaling...' : 'Hold to Inhale'}
      </button>
      <p className="text-[9px] text-center font-bold text-slate-400 mt-4 uppercase">Diaphragm contracts → Volume increases → Pressure drops</p>
    </div>
  );
};

// --- NEW: Flower Anatomy Lab ---
export const FlowerLab: React.FC = () => {
  const [showParts, setShowParts] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🌸 Flower Anatomy</h3>
        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest">Reproduction</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6 relative">
        <div className="relative w-40 h-40">
          {/* Petals */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-20 h-20 bg-pink-300 rounded-full opacity-80"
              style={{ 
                left: '50%', top: '50%', 
                transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-30px)` 
              }}
            ></div>
          ))}
          {/* Stamen */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-12 bg-yellow-400 origin-bottom"
              style={{ 
                left: '50%', bottom: '50%', 
                transform: `translateX(-50%) rotate(${i * 60}deg)` 
              }}
            >
              <div className="w-3 h-2 bg-yellow-600 rounded-full -mt-1 -ml-1"></div>
              {showParts && <span className="absolute -top-4 left-4 text-[6px] font-black text-yellow-700 whitespace-nowrap">STAMEN</span>}
            </div>
          ))}
          {/* Pistil */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-emerald-500 rounded-full border-2 border-emerald-600">
            <div className="w-6 h-6 bg-emerald-400 rounded-full -mt-2 -ml-1.5 border-2 border-emerald-600"></div>
            {showParts && <span className="absolute top-0 left-8 text-[6px] font-black text-emerald-700">PISTIL</span>}
          </div>
        </div>
      </div>
      <button 
        onClick={() => setShowParts(!showParts)}
        className="w-full py-3 bg-slate-100 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-200 hover:bg-slate-200 transition-all"
      >
        {showParts ? 'Hide Labels' : 'Identify Parts'}
      </button>
    </div>
  );
};

// --- NEW: Food Test Lab ---
export const FoodTestLab: React.FC = () => {
  const [test, setTest] = useState<'starch' | 'protein' | 'fat'>('starch');
  const [isPositive, setIsPositive] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🧪 Food Testing</h3>
        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest">Nutrition</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div className="w-12 h-32 border-x-4 border-b-4 border-slate-300 rounded-b-2xl relative overflow-hidden bg-white/50">
          <div 
            className={`absolute bottom-0 w-full transition-all duration-1000 ${isPositive ? (test === 'starch' ? 'bg-blue-900' : test === 'protein' ? 'bg-purple-500' : 'bg-yellow-100') : 'bg-slate-100'}`}
            style={{ height: '60%' }}
          ></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-8 bg-amber-600/40 rounded-full animate-bounce"></div>
        </div>
        <p className="mt-4 text-[10px] font-black text-slate-400 uppercase">Reagent: {test === 'starch' ? 'Iodine' : test === 'protein' ? 'Biuret' : 'Ethanol'}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {(['starch', 'protein', 'fat'] as const).map(t => (
          <button 
            key={t} 
            onClick={() => { setTest(t); setIsPositive(false); }}
            className={`py-2 rounded-lg font-black text-[8px] uppercase tracking-widest transition-all ${test === t ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-400'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <button 
        onClick={() => setIsPositive(true)}
        className="w-full py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all"
      >
        Add Reagent
      </button>
      {isPositive && (
        <div className="mt-2 p-2 bg-emerald-50 text-emerald-700 rounded-lg text-center text-[9px] font-black uppercase animate-in fade-in">
          {test === 'starch' ? 'Blue-Black: Starch Present' : test === 'protein' ? 'Violet: Protein Present' : 'Cloudy: Fats Present'}
        </div>
      )}
    </div>
  );
};

// --- NEW: Reflex Arc Lab ---
export const ReflexArcLab: React.FC = () => {
  const [active, setActive] = useState(false);

  const trigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 1000);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">⚡ Reflex Arc</h3>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">Nervous System</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div className="relative w-full h-40">
          {/* Spinal Cord */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-24 bg-slate-200 rounded-xl border-2 border-slate-300 flex items-center justify-center">
             <div className="w-6 h-12 bg-white rounded-full border-2 border-slate-300"></div>
          </div>
          {/* Sensory Neuron */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path 
              d="M 40 80 Q 120 40 200 80" 
              fill="none" 
              stroke={active ? '#3b82f6' : '#cbd5e1'} 
              strokeWidth="3" 
              strokeDasharray="10 5"
              className={active ? 'animate-pulse' : ''}
            />
            <path 
              d="M 200 100 Q 120 140 40 100" 
              fill="none" 
              stroke={active ? '#ef4444' : '#cbd5e1'} 
              strokeWidth="3" 
              strokeDasharray="10 5"
              className={active ? 'animate-pulse' : ''}
            />
          </svg>
          {/* Hand/Stimulus */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className={`text-4xl transition-transform duration-100 ${active ? '-translate-y-8 rotate-12' : ''}`}>✋</div>
            <button onClick={trigger} className="px-4 py-2 bg-red-500 text-white rounded-lg font-black text-[8px] uppercase animate-pulse">Touch Pin 📍</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="p-2 bg-blue-50 rounded-lg text-center">
          <p className="text-[7px] font-black text-blue-400 uppercase">Sensory</p>
          <p className="text-[9px] font-bold text-blue-700">Stimulus → CNS</p>
        </div>
        <div className="p-2 bg-red-50 rounded-lg text-center">
          <p className="text-[7px] font-black text-red-400 uppercase">Motor</p>
          <p className="text-[9px] font-bold text-red-700">CNS → Response</p>
        </div>
      </div>
    </div>
  );
};

// --- NEW: Triangle Explorer ---
export const TriangleLab: React.FC = () => {
  const [a, setA] = useState(60);
  const [b, setB] = useState(60);
  const c = 180 - a - b;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">📐 Triangle Explorer</h3>
        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest">Geometry</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-10">
        <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-xl">
          <path 
            d={`M 100 20 L ${100 + 80 * Math.cos((180-a)*Math.PI/180)} ${20 + 80 * Math.sin((180-a)*Math.PI/180)} L ${100 - 80 * Math.cos((180-c)*Math.PI/180)} ${20 + 80 * Math.sin((180-c)*Math.PI/180)} Z`} 
            fill="#ffedd5" stroke="#f97316" strokeWidth="4" 
          />
          <text x="100" y="15" textAnchor="middle" className="text-[10px] font-bold fill-orange-600">{a}°</text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Angle A ({a}°)</label>
          <input type="range" min="10" max="160" value={a} onChange={(e) => {
            const val = parseInt(e.target.value);
            if (val + b < 175) setA(val);
          }} className="w-full accent-orange-500" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Angle B ({b}°)</label>
          <input type="range" min="10" max="160" value={b} onChange={(e) => {
            const val = parseInt(e.target.value);
            if (val + a < 175) setB(val);
          }} className="w-full accent-orange-500" />
        </div>
      </div>
      <div className="mt-4 p-3 bg-orange-50 rounded-2xl text-center border border-orange-100">
        <p className="text-[10px] font-black text-orange-500 uppercase">Angle C (Calculated)</p>
        <p className="text-sm font-black text-orange-900">{c}°</p>
      </div>
    </div>
  );
};

// --- NEW: Circle Theorems Lab ---
export const CircleLab: React.FC = () => {
  const [radius, setRadius] = useState(50);
  
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">⭕ Circle Properties</h3>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Geometry</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-10">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          <circle cx="100" cy="100" r={radius} fill="#dbeafe" stroke="#3b82f6" strokeWidth="4" />
          <line x1="100" y1="100" x2={100 + radius} y2="100" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="4" />
          <text x={100 + radius/2} y="95" textAnchor="middle" className="text-[8px] font-bold fill-blue-700">r</text>
          <circle cx="100" cy="100" r="3" fill="#1e3a8a" />
        </svg>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Radius ({radius} units)</label>
          <input type="range" min="20" max="80" value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} className="w-full accent-blue-600" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 p-2 rounded-xl text-center border border-blue-100">
            <p className="text-[8px] font-black text-blue-400 uppercase">Area</p>
            <p className="text-xs font-black">{(Math.PI * radius * radius).toFixed(0)} u²</p>
          </div>
          <div className="bg-blue-50 p-2 rounded-xl text-center border border-blue-100">
            <p className="text-[8px] font-black text-blue-400 uppercase">Circum.</p>
            <p className="text-xs font-black">{(2 * Math.PI * radius).toFixed(0)} u</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- NEW: Cell Structure Lab ---
export const CellLab: React.FC = () => {
  const [cellType, setCellType] = useState<'plant' | 'animal'>('plant');
  
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🧬 Cell Explorer</h3>
        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">Biology</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
        <div className={`w-48 h-48 relative transition-all duration-500 ${cellType === 'plant' ? 'rounded-3xl border-8 border-green-600 bg-green-100' : 'rounded-full border-4 border-pink-400 bg-pink-50'}`}>
          {/* Nucleus */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-400 rounded-full border-2 border-purple-600 flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-800 rounded-full opacity-40"></div>
          </div>
          {/* Vacuole */}
          {cellType === 'plant' && (
            <div className="absolute top-4 right-4 w-16 h-20 bg-blue-200/60 rounded-2xl border border-blue-300"></div>
          )}
          {/* Chloroplasts */}
          {cellType === 'plant' && (
            <>
              <div className="absolute bottom-6 left-6 w-6 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute top-8 left-10 w-6 h-3 bg-green-500 rounded-full"></div>
            </>
          )}
          {/* Mitochondria */}
          <div className="absolute bottom-10 right-10 w-8 h-4 bg-orange-400 rounded-full border border-orange-600 flex items-center justify-center overflow-hidden">
            <div className="w-full h-0.5 bg-orange-600 rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <button 
          onClick={() => setCellType('plant')}
          className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${cellType === 'plant' ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'bg-slate-100 text-slate-400'}`}
        >
          Plant Cell
        </button>
        <button 
          onClick={() => setCellType('animal')}
          className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${cellType === 'animal' ? 'bg-pink-500 text-white shadow-lg shadow-pink-200' : 'bg-slate-100 text-slate-400'}`}
        >
          Animal Cell
        </button>
      </div>
    </div>
  );
};

// --- NEW: Human Heart Lab ---
export const HeartLab: React.FC = () => {
  const [bpm, setBpm] = useState(72);
  
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">❤️ Cardiac Lab</h3>
        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest">Biology</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div 
          className="text-8xl transition-transform duration-100"
          style={{ 
            animation: `heartbeat ${60/bpm}s ease-in-out infinite`,
          }}
        >
          🫀
        </div>
        <style>{`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            15% { transform: scale(1.15); }
            30% { transform: scale(1); }
            45% { transform: scale(1.1); }
          }
        `}</style>
        <div className="mt-8 text-center">
          <p className="text-4xl font-black text-red-600">{bpm}</p>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Beats Per Minute</p>
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <label className="text-[9px] font-black text-slate-400 uppercase">Activity Level</label>
        <input type="range" min="40" max="180" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} className="w-full accent-red-600" />
        <div className="flex justify-between text-[8px] font-bold text-slate-400">
          <span>RESTING</span>
          <span>EXERCISE</span>
        </div>
      </div>
    </div>
  );
};

// --- NEW: Photosynthesis Lab ---
export const PhotosynthesisLab: React.FC = () => {
  const [light, setLight] = useState(50);
  const [co2, setCo2] = useState(50);
  const rate = (light * co2) / 100;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🍃 Photosynthesis</h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">Biology</span>
      </div>
      <div className="flex-1 bg-emerald-50 rounded-3xl relative overflow-hidden p-6 flex flex-col items-center justify-center">
        <div className="relative">
          <span className="text-7xl">🌳</span>
          {/* Oxygen Bubbles */}
          {[...Array(Math.floor(rate/5))].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-blue-200 rounded-full animate-float-up"
              style={{ 
                left: `${Math.random() * 100}%`,
                bottom: '20px',
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        <style>{`
          @keyframes float-up {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
          }
          .animate-float-up { animation: float-up 2s linear infinite; }
        `}</style>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Light Intensity</label>
          <input type="range" min="0" max="100" value={light} onChange={(e) => setLight(parseInt(e.target.value))} className="w-full accent-yellow-400" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">CO₂ Level</label>
          <input type="range" min="0" max="100" value={co2} onChange={(e) => setCo2(parseInt(e.target.value))} className="w-full accent-emerald-600" />
        </div>
      </div>
      <div className="mt-4 p-4 bg-emerald-600 text-white rounded-2xl text-center shadow-lg shadow-emerald-200">
        <p className="text-[9px] font-black uppercase opacity-60">Oxygen Production Rate</p>
        <p className="text-xl font-black">{rate.toFixed(1)} units/hr</p>
      </div>
    </div>
  );
};

// --- NEW: Symmetry Lab ---
export const SymmetryLab: React.FC = () => {
  const [symmetry, setSymmetry] = useState(2);
  
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🦋 Symmetry Lab</h3>
        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest">Geometry</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-10">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {[...Array(symmetry)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 border-4 border-purple-500 bg-purple-100/40 rounded-xl"
              style={{ transform: `rotate(${(360/symmetry) * i}deg)` }}
            ></div>
          ))}
          <div className="w-4 h-4 bg-purple-900 rounded-full z-10"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Order of Rotation ({symmetry})</label>
          <input type="range" min="1" max="12" value={symmetry} onChange={(e) => setSymmetry(parseInt(e.target.value))} className="w-full accent-purple-600" />
        </div>
        <div className="p-3 bg-purple-50 rounded-xl text-center border border-purple-100">
          <p className="text-[10px] font-black text-purple-500 uppercase">Angle of Rotation</p>
          <p className="text-sm font-black text-purple-900">{(360/symmetry).toFixed(1)}°</p>
        </div>
      </div>
    </div>
  );
};

// --- NEW: AC Generator Lab ---
export const ACGeneratorLab: React.FC = () => {
  const [rpm, setRpm] = useState(30);
  const [fieldStrength, setFieldStrength] = useState(1);
  const [angle, setAngle] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(a => (a + rpm / 10) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [rpm]);

  useEffect(() => {
    const rad = (angle * Math.PI) / 180;
    const voltage = Math.sin(rad) * fieldStrength * (rpm / 10);
    setHistory(h => [voltage, ...h].slice(0, 100));
  }, [angle, fieldStrength, rpm]);

  const points = history.map((v, i) => `${i * 2},${50 - v * 10}`).join(' ');

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🚡 AC Generator</h3>
        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest">Electricity</span>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="relative h-40 bg-slate-900 rounded-3xl overflow-hidden flex items-center justify-center">
           {/* Magnetic Field Lines */}
           <div className="absolute inset-0 flex flex-col justify-around py-4 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-0.5 bg-blue-400"></div>
              ))}
           </div>
           {/* Rotating Coil */}
           <div 
            className="w-24 h-16 border-4 border-amber-500 bg-amber-200/20 relative shadow-xl"
            style={{ transform: `rotateX(${angle}deg)` }}
           >
              <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-amber-600 uppercase">Coil</div>
           </div>
           <div className="absolute left-4 top-4 text-[10px] font-black text-blue-400 uppercase">B-Field: {fieldStrength}T</div>
        </div>
        <div className="h-24 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden relative">
           <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="50" x2="200" y2="50" stroke="#e2e8f0" strokeWidth="1" />
              <polyline points={points} fill="none" stroke="#ef4444" strokeWidth="2" />
           </svg>
           <div className="absolute top-2 right-4 text-[8px] font-black text-slate-400 uppercase">Voltage Output</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Rotation (RPM)</label>
          <input type="range" min="10" max="100" value={rpm} onChange={(e) => setRpm(parseInt(e.target.value))} className="w-full accent-slate-800" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Field Strength</label>
          <input type="range" min="0.5" max="2" step="0.1" value={fieldStrength} onChange={(e) => setFieldStrength(parseFloat(e.target.value))} className="w-full accent-blue-600" />
        </div>
      </div>
    </div>
  );
};

// --- NEW: Young's Double Slit Interference Lab ---
export const InterferenceLab: React.FC = () => {
  const [wavelength, setWavelength] = useState(500); // nm
  const [slitDist, setSlitDist] = useState(20); // micrometers
  
  const intensityPoints = [];
  for (let x = -100; x <= 100; x += 1) {
    const d = x / 5;
    const beta = (Math.PI * slitDist * Math.sin(d / 100)) / (wavelength / 1000);
    const intensity = Math.pow(Math.cos(beta), 2);
    intensityPoints.push(`${x + 100},${100 - intensity * 80}`);
  }

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🌈 Double Slit</h3>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">Wave Optics</span>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="h-48 bg-slate-950 rounded-3xl relative overflow-hidden flex items-center justify-center">
           {/* Simulated Interference Fringes */}
           <div className="absolute inset-0 flex justify-center">
              {[...Array(21)].map((_, i) => {
                const center = 10;
                const dist = Math.abs(i - center);
                const opacity = Math.pow(Math.cos((dist * slitDist) / (wavelength/20)), 2);
                return (
                  <div 
                    key={i} 
                    className="h-full w-2" 
                    style={{ 
                      backgroundColor: `hsl(${280 - (wavelength - 400) * 0.7}, 100%, 50%)`,
                      opacity: opacity,
                      margin: '0 1px'
                    }}
                  ></div>
                );
              })}
           </div>
           <div className="absolute bottom-4 left-4 text-[8px] font-black text-white/40 uppercase tracking-widest">Screen Pattern</div>
        </div>
        <div className="h-20 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden relative">
          <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
             <polyline points={intensityPoints.join(' ')} fill="none" stroke="#6366f1" strokeWidth="2" />
          </svg>
          <div className="absolute top-2 right-4 text-[8px] font-black text-slate-400 uppercase">Intensity Curve</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Wavelength ({wavelength}nm)</label>
          <input type="range" min="400" max="700" value={wavelength} onChange={(e) => setWavelength(parseInt(e.target.value))} className="w-full accent-indigo-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Slit Separation</label>
          <input type="range" min="10" max="50" value={slitDist} onChange={(e) => setSlitDist(parseInt(e.target.value))} className="w-full accent-slate-800" />
        </div>
      </div>
    </div>
  );
};

// --- NEW: Photoelectric Effect Lab ---
export const PhotoelectricLab: React.FC = () => {
  const [freq, setFreq] = useState(5); // 10^14 Hz
  const [intensity, setIntensity] = useState(50);
  const workFunction = 4; // eV
  const h = 4.135; // 10^-15 eV*s
  const energy = (h * freq);
  const isEmitting = energy > workFunction;
  const [electrons, setElectrons] = useState<{id: number, x: number}[]>([]);

  useEffect(() => {
    if (isEmitting && intensity > 0) {
      const interval = setInterval(() => {
        setElectrons(prev => [
          ...prev.map(e => ({...e, x: e.x + 5})).filter(e => e.x < 100),
          { id: Math.random(), x: 0 }
        ].slice(-Math.floor(intensity / 5)));
      }, 50);
      return () => clearInterval(interval);
    } else {
      setElectrons([]);
    }
  }, [isEmitting, intensity]);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">💡 Photoelectric</h3>
        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-[10px] font-black uppercase tracking-widest">Quantum</span>
      </div>
      <div className="flex-1 bg-slate-900 rounded-[2rem] relative overflow-hidden flex flex-col items-center justify-center p-4">
         {/* Vacuum Tube */}
         <div className="w-full h-24 border-2 border-slate-700 rounded-full relative overflow-hidden flex items-center justify-between px-8 bg-slate-800/40">
            {/* Cathode */}
            <div className="w-2 h-16 bg-slate-400 rounded-full relative">
               {/* Light Beam */}
               <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-8 blur-xl opacity-40 transition-all pointer-events-none"
                style={{ 
                  background: `linear-gradient(to right, hsl(${200 - freq * 20}, 100%, 50%), transparent)`,
                  opacity: intensity / 100
                }}
               ></div>
            </div>
            {/* Anode */}
            <div className="w-2 h-16 bg-slate-400 rounded-full"></div>

            {/* Moving Electrons */}
            {electrons.map(e => (
              <div 
                key={e.id} 
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] transition-all duration-75"
                style={{ left: `${15 + e.x * 0.7}%`, top: `${30 + (e.id % 40)}%` }}
              ></div>
            ))}
         </div>
         <div className="mt-6 flex gap-6 text-[10px] font-black uppercase tracking-tighter">
            <div className="text-slate-400">Photon E: <span className="text-white">{energy.toFixed(2)} eV</span></div>
            <div className="text-slate-400">Barrier: <span className="text-white">{workFunction} eV</span></div>
         </div>
         <div className={`mt-2 text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest ${isEmitting ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {isEmitting ? 'Electron Emission Active' : 'Insufficient Energy'}
         </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Frequency (ν)</label>
          <input type="range" min="1" max="10" step="0.5" value={freq} onChange={(e) => setFreq(parseFloat(e.target.value))} className="w-full accent-yellow-400" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Intensity</label>
          <input type="range" min="0" max="100" value={intensity} onChange={(e) => setIntensity(parseInt(e.target.value))} className="w-full accent-slate-800" />
        </div>
      </div>
    </div>
  );
};

// --- NEW: Radioactive Decay Lab ---
export const RadioactiveDecayLab: React.FC = () => {
  const TOTAL = 100;
  const [atoms, setAtoms] = useState(new Array(TOTAL).fill(true)); // true = parent, false = daughter
  const [halfLife, setHalfLife] = useState(2); // seconds
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState<{t: number, count: number}[]>([]);

  const reset = () => {
    setAtoms(new Array(TOTAL).fill(true));
    setElapsed(0);
    setHistory([]);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsed(e => e + 0.5);
        setAtoms(prev => prev.map(a => {
          if (!a) return false;
          // P(decay in dt) = 1 - exp(-lambda * dt)
          const lambda = Math.log(2) / halfLife;
          return Math.random() > (1 - Math.exp(-lambda * 0.5));
        }));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRunning, halfLife]);

  useEffect(() => {
    const activeCount = atoms.filter(a => a).length;
    setHistory(h => [...h, { t: elapsed, count: activeCount }]);
    if (activeCount === 0) setIsRunning(false);
  }, [atoms]);

  const path = history.length > 1 ? "M " + history.map(h => `${(h.t / 15) * 200},${100 - (h.count / TOTAL) * 100}`).join(" L ") : "";

  return (
    <div className="bg-white p-8 rounded-[4rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">☢️ Half-Life Lab</h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">Nuclear</span>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-10 gap-1 p-2 bg-slate-900 rounded-2xl">
           {atoms.map((a, i) => (
             <div 
              key={i} 
              className={`aspect-square rounded-full transition-all duration-500 ${a ? 'bg-emerald-400 shadow-[0_0_5px_#34d399]' : 'bg-slate-700'}`}
             ></div>
           ))}
        </div>
        <div className="h-24 bg-slate-50 border border-slate-100 rounded-2xl relative overflow-hidden">
          <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
             <path d={path} fill="none" stroke="#10b981" strokeWidth="2" />
          </svg>
          <div className="absolute top-2 right-4 text-[8px] font-black text-slate-400 uppercase">Decay Curve</div>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <div className="flex-1 space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Half-Life ({halfLife}s)</label>
          <input type="range" min="1" max="10" step="1" value={halfLife} onChange={(e) => setHalfLife(parseInt(e.target.value))} className="w-full accent-emerald-600" />
        </div>
        <div className="flex gap-2">
           <button onClick={() => setIsRunning(!isRunning)} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase">
            {isRunning ? 'Pause' : 'Start'}
           </button>
           <button onClick={reset} className="px-6 py-2 bg-slate-100 text-slate-900 rounded-xl font-black text-[10px] uppercase border border-slate-200">
            Reset
           </button>
        </div>
      </div>
    </div>
  );
};

// --- Pulley System Lab ---
export const PulleyLab: React.FC = () => {
  const [load, setLoad] = useState(100); // Newtons
  const [pulleys, setPulleys] = useState(1);
  const effort = load / pulleys;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🏗️ Pulley System</h3>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">Mechanics</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div className="relative w-full h-40 flex justify-center">
          {/* Support Beam */}
          <div className="absolute top-0 w-48 h-2 bg-slate-800 rounded-full"></div>
          {/* Pulleys */}
          <div className="flex gap-4 mt-1">
            {[...Array(pulleys)].map((_, i) => (
              <div key={i} className="w-10 h-10 border-4 border-slate-400 rounded-full bg-slate-100 flex items-center justify-center">
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              </div>
            ))}
          </div>
          {/* Rope & Load */}
          <div className="absolute top-10 flex flex-col items-center">
            <div className="w-0.5 h-16 bg-slate-400"></div>
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-xl">
              {load}N
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Load (Weight)</label>
          <input type="range" min="50" max="500" step="50" value={load} onChange={(e) => setLoad(parseInt(e.target.value))} className="w-full accent-blue-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Pulleys ({pulleys})</label>
          <input type="range" min="1" max="4" value={pulleys} onChange={(e) => setPulleys(parseInt(e.target.value))} className="w-full accent-slate-800" />
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-600 text-white rounded-2xl text-center shadow-lg shadow-blue-200">
        <p className="text-[9px] font-black uppercase opacity-60">Effort Required</p>
        <p className="text-xl font-black">{effort.toFixed(1)} N</p>
      </div>
    </div>
  );
};

// --- Free Fall Lab ---
export const GravityLab: React.FC = () => {
  const [isFalling, setIsFalling] = useState(false);
  const [pos, setPos] = useState(0);
  const [time, setTime] = useState(0);
  const [medium, setMedium] = useState<'vacuum' | 'air'>('vacuum');

  const startDrop = () => {
    setIsFalling(true);
    setPos(0);
    setTime(0);
  };

  useEffect(() => {
    let interval: any;
    if (isFalling && pos < 100) {
      interval = setInterval(() => {
        setTime(t => t + 0.05);
        // y = 0.5 * g * t^2
        const drag = medium === 'air' ? 0.7 : 1;
        setPos(p => Math.min(100, p + (0.5 * 9.8 * drag)));
      }, 50);
    } else if (pos >= 100) {
      setIsFalling(false);
    }
    return () => clearInterval(interval);
  }, [isFalling, pos, medium]);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🌍 Free Fall Lab</h3>
        <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">Gravity</span>
      </div>
      <div className="flex-1 bg-slate-100 rounded-3xl relative overflow-hidden mb-6 flex flex-col justify-between border-4 border-slate-200">
        <div className="absolute top-0 right-0 p-4 text-[10px] font-black text-slate-400 uppercase">{medium}</div>
        <div className="relative h-full w-full">
           <div 
            className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-lg"
            style={{ top: `${pos}%` }}
           >
            {pos >= 100 ? '💥' : '🏐'}
           </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setMedium(medium === 'vacuum' ? 'air' : 'vacuum')} className="flex-1 py-3 bg-slate-100 text-slate-800 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-200 hover:bg-slate-200 transition-all">Toggle Medium</button>
        <button onClick={startDrop} disabled={isFalling} className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 disabled:opacity-50 transition-all">Drop Object</button>
      </div>
      <div className="mt-4 p-3 bg-slate-50 rounded-2xl flex justify-between items-center px-6">
        <div>
          <p className="text-[8px] font-black text-slate-400 uppercase">Time</p>
          <p className="text-sm font-black">{time.toFixed(2)}s</p>
        </div>
        <div>
          <p className="text-[8px] font-black text-slate-400 uppercase">Velocity</p>
          <p className="text-sm font-black">{(time * 9.8).toFixed(1)} m/s</p>
        </div>
      </div>
    </div>
  );
};

// --- Density Column Lab ---
export const DensityColumnLab: React.FC = () => {
  const liquids = [
    { name: 'Honey', density: 1.42, color: 'bg-amber-600' },
    { name: 'Dish Soap', density: 1.06, color: 'bg-green-500' },
    { name: 'Water', density: 1.00, color: 'bg-blue-300' },
    { name: 'Oil', density: 0.92, color: 'bg-yellow-200' },
    { name: 'Alcohol', density: 0.79, color: 'bg-pink-200' }
  ];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🧪 Density Layers</h3>
        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-[10px] font-black uppercase tracking-widest">Fluids</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
        <div className="w-32 h-64 border-x-4 border-b-4 border-slate-300 rounded-b-3xl overflow-hidden flex flex-col-reverse relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm -z-10"></div>
          {liquids.map(l => (
            <div key={l.name} className={`${l.color} flex-1 flex items-center justify-center group/layer relative`}>
              <span className="text-[8px] font-black uppercase text-slate-900/40 opacity-0 group-hover/layer:opacity-100 transition-opacity">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-[10px] font-black text-slate-400 uppercase text-center tracking-[0.2em]">Liquid Stacking Principle</p>
        <div className="grid grid-cols-2 gap-2">
           {liquids.slice(0, 4).map(l => (
             <div key={l.name} className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
               <span className="text-[9px] font-bold text-slate-600">{l.name}</span>
               <span className="text-[8px] font-black text-slate-400">{l.density} ρ</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

// --- Hooke's Law Lab ---
export const HookesLawLab: React.FC = () => {
  const [mass, setMass] = useState(2); 
  const [k, setK] = useState(20); 
  const extension = (mass * 9.8) / k; 

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🪗 Hooke's Law</h3>
        <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest">Elasticity</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start py-6">
        <div className="w-full h-2 bg-slate-800 rounded-full mb-0"></div>
        <div className="relative flex flex-col items-center" style={{ height: `${100 + extension * 50}px` }}>
          <svg width="40" height="100%" viewBox="0 0 40 200" preserveAspectRatio="none">
            <path 
              d={`M 20 0 ${Array.from({length: 20}).map((_, i) => `L ${i % 2 === 0 ? 10 : 30} ${((i + 1) / 20) * 100}`).join(' ')} L 20 100`} 
              stroke="#64748b" strokeWidth="3" fill="none"
              style={{ transform: `scaleY(${(100 + extension * 50) / 100})`, transformOrigin: 'top' }}
            />
          </svg>
          <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-xl">
            {mass}kg
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Spring Constant (k)</label>
          <input type="range" min="10" max="100" value={k} onChange={(e) => setK(parseInt(e.target.value))} className="w-full accent-slate-800" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Mass (kg)</label>
          <input type="range" min="1" max="10" value={mass} onChange={(e) => setMass(parseInt(e.target.value))} className="w-full accent-rose-600" />
        </div>
      </div>
      <div className="mt-4 p-3 bg-slate-50 rounded-2xl text-center border border-slate-100">
        <p className="text-[10px] font-black text-slate-500 uppercase">Extension (x)</p>
        <p className="text-sm font-black text-slate-900">{extension.toFixed(2)} meters</p>
      </div>
    </div>
  );
};

// --- Inclined Plane Lab ---
export const InclinedPlaneLab: React.FC = () => {
  const [angle, setAngle] = useState(30);
  const [friction, setFriction] = useState(0.2);
  const rad = (angle * Math.PI) / 180;
  
  const gravityForce = Math.sin(rad);
  const frictionForce = Math.cos(rad) * friction;
  const netForce = Math.max(0, gravityForce - frictionForce);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">📐 Inclined Plane</h3>
        <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest">Mechanics</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-10">
        <div className="relative w-64 h-40 flex items-end">
          <div 
            className="w-full h-1 bg-slate-800 origin-bottom-left transition-transform duration-500"
            style={{ transform: `rotate(-${angle}deg)` }}
          >
            <div 
              className="absolute w-8 h-8 bg-blue-600 rounded shadow-lg transition-all duration-1000"
              style={{ left: netForce > 0 ? '80%' : '20%', bottom: '4px' }}
            ></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-300"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Slope Angle ({angle}°)</label>
          <input type="range" min="5" max="60" value={angle} onChange={(e) => setAngle(parseInt(e.target.value))} className="w-full accent-amber-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Friction (μ)</label>
          <input type="range" min="0" max="0.8" step="0.1" value={friction} onChange={(e) => setFriction(parseFloat(e.target.value))} className="w-full accent-slate-600" />
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-2">
        <div className="flex-1 p-2 bg-slate-50 rounded-xl text-center border border-slate-100">
          <p className="text-[8px] font-black text-slate-400">NET FORCE</p>
          <p className="text-xs font-black">{netForce.toFixed(2)} G</p>
        </div>
        <div className="flex-1 p-2 bg-slate-50 rounded-xl text-center border border-slate-100">
          <p className="text-[8px] font-black text-slate-400">STATE</p>
          <p className={`text-xs font-black ${netForce > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {netForce > 0 ? 'SLIDING' : 'STATIC'}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Doppler Effect Lab ---
export const DopplerLab: React.FC = () => {
  const [speed, setSpeed] = useState(50);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPos(p => (p + speed/10) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🔊 Doppler Effect</h3>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">Waves</span>
      </div>
      <div className="flex-1 bg-slate-900 rounded-3xl relative overflow-hidden mb-6 flex items-center">
        <div 
          className="absolute h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] z-20"
          style={{ left: `${pos}%` }}
        >
          📣
        </div>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute border-2 border-blue-400/30 rounded-full animate-doppler-wave"
            style={{ 
              left: `${(pos - (i * 15) + 100) % 100}%`,
              width: '100px',
              height: '100px',
              transform: `translate(-50%, 0) scale(${1 + i * 0.5})`,
              opacity: 1 - i * 0.2
            }}
          ></div>
        ))}
      </div>
      <div className="space-y-2">
        <label className="text-[9px] font-black text-slate-400 uppercase">Source Speed</label>
        <input type="range" min="10" max="100" value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} className="w-full accent-blue-600" />
        <p className="text-[10px] text-center font-bold text-slate-500">Observation: Waves bunch up in front (Higher Pitch)</p>
      </div>
    </div>
  );
};

// --- Circular Motion Lab ---
export const CircularMotionLab: React.FC = () => {
  const [radius, setRadius] = useState(50);
  const [velocity, setVelocity] = useState(2);
  const force = (velocity * velocity) / (radius / 10);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🎡 Centripetal Force</h3>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">Dynamics</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
        <div className="relative border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
          <div 
            className="absolute w-6 h-6 bg-indigo-600 rounded-full shadow-lg"
            style={{ 
              animation: `orbit ${10/velocity}s linear infinite`,
              transformOrigin: `-${radius - 12}px center`,
              left: '100%'
            }}
          ></div>
          <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
        </div>
      </div>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Orbit Radius</label>
          <input type="range" min="30" max="70" value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} className="w-full accent-slate-800" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Tangential Vel.</label>
          <input type="range" min="1" max="5" step="0.5" value={velocity} onChange={(e) => setVelocity(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
        </div>
      </div>
      <div className="mt-4 p-4 bg-indigo-900 text-white rounded-2xl text-center shadow-xl shadow-indigo-200">
         <p className="text-[9px] font-black uppercase opacity-60">Centripetal Force (F꜀)</p>
         <p className="text-xl font-black">{force.toFixed(2)} N</p>
      </div>
    </div>
  );
};

// --- Archimedes Principle Lab ---
export const ArchimedesLab: React.FC = () => {
  const [objectMass, setObjectMass] = useState(500); 
  const [objectVolume, setObjectVolume] = useState(200); 
  const [isDipped, setIsDipped] = useState(false);

  const waterDensity = 1; 
  const weightInAir = objectMass * 0.00981; 
  const buoyantForce = isDipped ? (objectVolume * waterDensity * 0.00981) : 0;
  const apparentWeight = Math.max(0, weightInAir - buoyantForce);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">
          <span className="text-3xl transform group-hover:rotate-12 transition-transform">⚖️</span> Archimedes Principle
        </h3>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Buoyancy</span>
      </div>
      <div className="flex-1 relative flex items-center justify-center py-10">
        <div className="relative w-48 h-64 bg-blue-100/30 border-x-4 border-b-4 border-slate-300 rounded-b-[3rem] overflow-hidden">
          <div className="absolute bottom-0 w-full bg-blue-400/50 border-t-2 border-blue-500 transition-all duration-700" style={{ height: isDipped ? '75%' : '55%' }}></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-400 border-2 border-slate-500 rounded-xl transition-all duration-1000 flex items-center justify-center font-black text-white shadow-lg" style={{ bottom: isDipped ? '35%' : '80%' }}>
            {objectMass}g
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Scale (N)</p>
            <p className="text-xl font-black text-slate-800">{apparentWeight.toFixed(2)}N</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Upthrust</p>
            <p className="text-xl font-black text-blue-600">{buoyantForce.toFixed(2)}N</p>
          </div>
        </div>
        <button onClick={() => setIsDipped(!isDipped)} className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${isDipped ? 'bg-red-50 text-red-600 border border-red-100 shadow-inner' : 'bg-blue-600 text-white shadow-xl shadow-blue-200 hover:scale-[1.02]'}`}>
          {isDipped ? 'Reset Level' : 'Submerge Object'}
        </button>
      </div>
    </div>
  );
};

// --- Ohm's Law Lab ---
export const OhmsLawLab: React.FC = () => {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(10);
  const current = voltage / resistance;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">
          <span className="text-3xl group-hover:animate-pulse transition-transform">⚡</span> Ohm's Law
        </h3>
        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-[10px] font-black uppercase tracking-widest">Circuits</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center py-6 gap-8">
        <div className="relative w-full h-32 flex flex-col items-center justify-center">
           <svg viewBox="0 0 200 100" className="w-48 h-24">
              <path d="M 20 50 L 50 50 M 150 50 L 180 50" stroke="#475569" strokeWidth="3" />
              <path d="M 50 50 L 60 30 L 70 70 L 80 30 L 90 70 L 100 30 L 110 70 L 120 30 L 130 70 L 140 30 L 150 50" stroke="#ef4444" strokeWidth="3" fill="none" />
              {current > 0.1 && (
                <circle r="4" fill="#fbbf24" className="filter drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">
                  <animateMotion path="M 20 50 L 180 50" dur={`${1.5/current}s`} repeatCount="indefinite" />
                </circle>
              )}
           </svg>
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mt-2">{resistance} Ω Load</div>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          <div className="bg-blue-600 p-3 rounded-2xl text-center text-white">
            <p className="text-[8px] font-black uppercase opacity-60">V</p>
            <p className="text-lg font-black">{voltage}</p>
          </div>
          <div className="bg-red-600 p-3 rounded-2xl text-center text-white">
            <p className="text-[8px] font-black uppercase opacity-60">Ω</p>
            <p className="text-lg font-black">{resistance}</p>
          </div>
          <div className="bg-yellow-400 p-3 rounded-2xl text-center text-slate-900 shadow-md">
            <p className="text-[8px] font-black uppercase opacity-60">A</p>
            <p className="text-lg font-black">{current.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Battery (V)</label>
           <input type="range" min="1" max="50" value={voltage} onChange={(e) => setVoltage(parseInt(e.target.value))} className="w-full h-1.5 accent-blue-600 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
        </div>
        <div className="space-y-1">
           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Resistance (Ω)</label>
           <input type="range" min="1" max="100" value={resistance} onChange={(e) => setResistance(parseInt(e.target.value))} className="w-full h-1.5 accent-red-600 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

// --- Wave Machine Lab ---
export const WaveMachine: React.FC = () => {
  const [amplitude, setAmplitude] = useState(20);
  const [frequency, setFrequency] = useState(1);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 0.1), 30);
    return () => clearInterval(interval);
  }, []);

  const points = [];
  for (let x = 0; x <= 100; x += 1) {
    const y = 50 + amplitude * Math.sin(frequency * (x / 5) - time);
    points.push(`${x},${y}`);
  }

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🌊 Wave Generator</h3>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">Physics</span>
      </div>
      <div className="flex-1 bg-slate-950 rounded-3xl relative overflow-hidden mb-6 flex items-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline points={points.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#1e293b" strokeWidth="1" strokeDasharray="2" />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Amplitude</label>
          <input type="range" min="5" max="40" value={amplitude} onChange={(e) => setAmplitude(parseInt(e.target.value))} className="w-full accent-sky-500" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Frequency</label>
          <input type="range" min="0.5" max="3" step="0.1" value={frequency} onChange={(e) => setFrequency(parseFloat(e.target.value))} className="w-full accent-indigo-500" />
        </div>
      </div>
    </div>
  );
};

// --- Projectile Launcher Lab ---
export const ProjectileLauncher: React.FC = () => {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(20);
  const g = 9.81;
  const range = (velocity * velocity * Math.sin(2 * (angle * Math.PI) / 180)) / g;
  const maxHeight = (velocity * velocity * Math.pow(Math.sin((angle * Math.PI) / 180), 2)) / (2 * g);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🏹 Projectile Motion</h3>
        <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-widest">Kinematics</span>
      </div>
      <div className="flex-1 bg-slate-900 rounded-3xl relative overflow-hidden mb-6 flex items-end justify-start p-4">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <path 
            d={`M 5,55 Q 50,${55 - maxHeight * 2} 95,55`} 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="0.5" 
            strokeDasharray="2" 
            className="opacity-50"
          />
          <circle cx="5" cy="55" r="2" fill="#fff" />
          <line x1="5" y1="55" x2={5 + 10 * Math.cos(angle * Math.PI / 180)} y2={55 - 10 * Math.sin(angle * Math.PI / 180)} stroke="#fff" strokeWidth="1" />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Launch Angle ({angle}°)</label>
          <input type="range" min="0" max="90" value={angle} onChange={(e) => setAngle(parseInt(e.target.value))} className="w-full accent-orange-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Velocity (m/s)</label>
          <input type="range" min="5" max="40" value={velocity} onChange={(e) => setVelocity(parseInt(e.target.value))} className="w-full accent-slate-600" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-2 bg-slate-50 rounded-xl text-center border border-slate-100">
          <p className="text-[8px] font-black text-slate-400">RANGE</p>
          <p className="text-xs font-black">{range.toFixed(1)}m</p>
        </div>
        <div className="p-2 bg-slate-50 rounded-xl text-center border border-slate-100">
          <p className="text-[8px] font-black text-slate-400">MAX HEIGHT</p>
          <p className="text-xs font-black">{maxHeight.toFixed(1)}m</p>
        </div>
      </div>
    </div>
  );
};

// --- Pendulum Lab ---
export const PendulumLab: React.FC = () => {
  const [length, setLength] = useState(80);
  const [gravity, setGravity] = useState(9.8);
  const [angle, setAngle] = useState(30);
  
  const period = 2 * Math.PI * Math.sqrt(length / 100 / gravity);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">⏳ Pendulum Lab</h3>
        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-[10px] font-black uppercase tracking-widest">SHM</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start py-4">
        <div className="w-full h-1 bg-slate-700 rounded-full mb-0"></div>
        <div className="relative origin-top transition-transform" style={{ 
          height: `${length * 1.5}px`, 
          transform: `rotate(${angle}deg)`,
          animation: `swing ${period}s ease-in-out infinite alternate`
        }}>
           <div className="w-0.5 h-full bg-slate-400 mx-auto"></div>
           <div className="absolute bottom-[-10px] left-[-10px] w-5 h-5 bg-slate-800 rounded-full shadow-lg"></div>
        </div>
      </div>
      <style>{`
        @keyframes swing {
          from { transform: rotate(-${angle}deg); }
          to { transform: rotate(${angle}deg); }
        }
      `}</style>
      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
          <p className="text-[8px] font-black text-slate-400 uppercase">Period (s)</p>
          <p className="text-sm font-black">{period.toFixed(2)}s</p>
        </div>
        <div className="space-y-1">
           <input type="range" min="40" max="100" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-full accent-purple-600" />
           <p className="text-[8px] text-center font-bold">Length: {length}cm</p>
        </div>
      </div>
    </div>
  );
};

// --- Induction Lab ---
export const InductionLab: React.FC = () => {
  const [magnetPos, setMagnetPos] = useState(0);
  const [voltage, setVoltage] = useState(0);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt(e.target.value);
    const delta = newVal - magnetPos;
    setVoltage(delta * 2);
    setMagnetPos(newVal);
    setTimeout(() => setVoltage(0), 100);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🧲 Induction Field</h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">Electromagnetism</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        <div className="relative w-full h-24 flex items-center justify-center">
           <div className="flex gap-1">
             {[...Array(8)].map((_, i) => (
               <div key={i} className="w-3 h-16 border-2 border-amber-600 rounded-full bg-amber-100/20"></div>
             ))}
           </div>
           <div 
            className="absolute h-8 w-24 bg-gradient-to-r from-red-600 to-slate-600 rounded-md shadow-lg flex items-center justify-between px-3 text-[10px] font-black text-white cursor-pointer active:scale-105"
            style={{ left: `${magnetPos}%`, transform: 'translateX(-50%)' }}
           >
             <span>N</span><span>S</span>
           </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
           <div className="w-32 h-16 bg-slate-900 rounded-xl border-4 border-slate-700 relative overflow-hidden flex items-center justify-center">
              <div className="w-1 h-12 bg-red-500 origin-bottom transition-transform duration-75" style={{ transform: `rotate(${voltage}deg)` }}></div>
              <div className="absolute bottom-1 text-[8px] text-white font-mono">GALVANOMETER</div>
           </div>
           <input type="range" min="0" max="100" value={magnetPos} onChange={handleDrag} className="w-full accent-slate-800" />
           <p className="text-[9px] font-black text-slate-400 uppercase">Slide magnet through coil</p>
        </div>
      </div>
    </div>
  );
};

// --- States of Matter Lab ---
export const StatesOfMatter: React.FC = () => {
  const [temp, setTemp] = useState(20);
  const particleCount = 20;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">☁️ States of Matter</h3>
        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest">Thermal</span>
      </div>
      <div className="flex-1 bg-slate-100 rounded-3xl relative overflow-hidden mb-6 border-4 border-slate-200 p-4">
        {[...Array(particleCount)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-3 h-3 bg-blue-500 rounded-full animate-vibrate"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDuration: `${Math.max(0.1, 2 - temp/100)}s`,
              opacity: temp > 150 ? 0.4 : 1
            }}
          ></div>
        ))}
      </div>
      <style>{`
        @keyframes vibrate {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-1px, -1px); }
        }
      `}</style>
      <div className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <p className="text-[10px] font-black text-slate-500 uppercase">Temperature</p>
          <p className="text-sm font-black text-red-600">{temp}°C</p>
        </div>
        <input type="range" min="-100" max="300" value={temp} onChange={(e) => setTemp(parseInt(e.target.value))} className="w-full accent-red-600" />
        <div className="text-[9px] font-black text-slate-400 text-center uppercase tracking-widest">
           {temp < 0 ? 'SOLID' : temp < 100 ? 'LIQUID' : 'GAS / PLASMA'}
        </div>
      </div>
    </div>
  );
};

// --- Fraction Explorer ---
export const FractionExplorer: React.FC = () => {
  const [denom, setDenom] = useState(4);
  const [num, setNum] = useState(1);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🍰 Fraction Slices</h3>
        <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-[10px] font-black uppercase tracking-widest">Mathematics</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
         <div className="relative w-40 h-40 rounded-full border-4 border-slate-200 overflow-hidden flex items-center justify-center">
            {[...Array(denom)].map((_, i) => (
               <div 
                key={i} 
                className={`absolute inset-0 border-r-2 border-slate-200 origin-center transition-all ${i < num ? 'bg-pink-500' : 'bg-transparent'}`}
                style={{ transform: `rotate(${(360 / denom) * i}deg)` }}
               ></div>
            ))}
            <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
               <span className="font-black text-xl border-b-2 border-slate-800">{num}</span>
               <span className="font-black text-xl">{denom}</span>
            </div>
         </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Numerator</label>
          <input type="range" min="1" max={denom} value={num} onChange={(e) => setNum(parseInt(e.target.value))} className="w-full accent-pink-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Denominator</label>
          <input type="range" min="2" max="12" value={denom} onChange={(e) => { setDenom(parseInt(e.target.value)); if(num > parseInt(e.target.value)) setNum(1); }} className="w-full accent-slate-600" />
        </div>
      </div>
    </div>
  );
};

// --- Prime Sieve ---
export const PrimeSieve: React.FC = () => {
  const [limit, setLimit] = useState(50);
  const isPrime = (n: number) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🔢 Number Sieve</h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">Number Theory</span>
      </div>
      <div className="flex-1 grid grid-cols-10 gap-1 p-2 bg-slate-50 rounded-2xl overflow-y-auto custom-scrollbar max-h-48 mb-6">
         {[...Array(limit)].map((_, i) => {
           const n = i + 1;
           const prime = isPrime(n);
           return (
             <div key={n} className={`w-full aspect-square flex items-center justify-center text-[10px] font-bold rounded-md border ${prime ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-white text-slate-300 border-slate-100'}`}>
                {n}
             </div>
           );
         })}
      </div>
      <div className="space-y-2">
         <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sieve Range: 1 to {limit}</label>
         <input type="range" min="10" max="100" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} className="w-full accent-emerald-600" />
         <p className="text-[9px] text-slate-400 font-medium italic">Highlighted numbers are Prime.</p>
      </div>
    </div>
  );
};

// --- Leverage Lever Lab ---
export const LeverLab: React.FC = () => {
  const [leftWeight, setLeftWeight] = useState(50);
  const [rightWeight, setRightWeight] = useState(50);
  const tilt = (rightWeight - leftWeight) / 10;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">⚖️ Lever Balance</h3>
        <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest">Torque</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-10">
        <div className="relative w-full h-2 flex items-center justify-center">
          <div className="w-64 h-2 bg-slate-700 rounded-full transition-transform duration-500 shadow-sm" style={{ transform: `rotate(${tilt}deg)` }}>
             <div className="absolute left-0 top-[-20px] w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black">{leftWeight}g</div>
             <div className="absolute right-0 top-[-20px] w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black">{rightWeight}g</div>
          </div>
        </div>
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-slate-400 mt-[-2px]"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Left Weight</label>
          <input type="range" min="10" max="100" step="10" value={leftWeight} onChange={(e) => setLeftWeight(parseInt(e.target.value))} className="w-full accent-blue-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Right Weight</label>
          <input type="range" min="10" max="100" step="10" value={rightWeight} onChange={(e) => setRightWeight(parseInt(e.target.value))} className="w-full accent-red-600" />
        </div>
      </div>
    </div>
  );
};

// --- Refraction Lab ---
export const RefractionLab: React.FC = () => {
  const [angle, setAngle] = useState(30);
  const n1 = 1.0; 
  const n2 = 1.5; 
  const angleRad = (angle * Math.PI) / 180;
  const refractedRad = Math.asin((n1 * Math.sin(angleRad)) / n2);
  const refractedAngle = (refractedRad * 180) / Math.PI;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">🔭 Ray Refraction</h3>
        <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-[10px] font-black uppercase tracking-widest">Optics</span>
      </div>
      <div className="flex-1 bg-slate-900 rounded-3xl relative overflow-hidden mb-6">
         <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-cyan-500/20"></div>
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <line x1="50" y1="0" x2="50" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#fff" strokeWidth="1" />
            <line x1={50 - 50 * Math.tan(angleRad)} y1="0" x2="50" y2="50" stroke="#facc15" strokeWidth="2" />
            <line x1="50" y1="50" x2={50 + 50 * Math.tan(refractedRad)} y2="100" stroke="#facc15" strokeWidth="2" strokeDasharray="2" />
         </svg>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black text-slate-400">Angle of Refraction</p>
          <p className="text-lg font-black text-cyan-600">{refractedAngle.toFixed(1)}°</p>
        </div>
        <input type="range" min="0" max="75" value={angle} onChange={(e) => setAngle(parseInt(e.target.value))} className="w-full accent-yellow-400" />
      </div>
    </div>
  );
};

// --- Thermal Conductivity Lab ---
export const ThermalConductivityLab: React.FC = () => {
  const [heat, setHeat] = useState(25);
  
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">🔥 Heat Transfer</h3>
        <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-widest">Thermodynamics</span>
      </div>
      <div className="flex-1 flex flex-col gap-4 py-4">
         {[
           { name: 'Copper', k: 1.0, color: 'bg-orange-500' },
           { name: 'Iron', k: 0.5, color: 'bg-slate-500' },
           { name: 'Glass', k: 0.1, color: 'bg-blue-200' }
         ].map(mat => (
           <div key={mat.name} className="space-y-1">
              <div className="flex justify-between text-[8px] font-black uppercase text-slate-400">
                 <span>{mat.name}</span>
                 <span>{(heat * mat.k).toFixed(0)}°C</span>
              </div>
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                 <div 
                  className={`h-full ${mat.color} transition-all duration-1000 opacity-80 shadow-sm`} 
                  style={{ width: `${heat * mat.k}%` }}
                 ></div>
              </div>
           </div>
         ))}
      </div>
      <div className="space-y-2 mt-4">
         <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Heat Source Intensity</label>
         <input type="range" min="25" max="100" value={heat} onChange={(e) => setHeat(parseInt(e.target.value))} className="w-full accent-orange-600" />
      </div>
    </div>
  );
};

// --- Angle Protractor Lab ---
export const AngleProtractor: React.FC = () => {
  const [angle, setAngle] = useState(45);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black">📐 Angle Measure</h3>
        <span className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-[10px] font-black uppercase tracking-widest">Geometry</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
         <div className="relative w-48 h-48 border-b-4 border-slate-800 flex items-end justify-center">
            <div 
              className="absolute h-48 w-1 bg-red-600 origin-bottom transition-all duration-300 shadow-sm" 
              style={{ transform: `rotate(${angle}deg)` }}
            ></div>
            <div className="absolute inset-0 border-4 border-slate-100 rounded-t-full -z-10 flex items-center justify-center bg-slate-50/50">
               <span className="text-3xl font-black text-slate-300">{angle}°</span>
            </div>
         </div>
      </div>
      <div className="space-y-2">
         <input type="range" min="0" max="180" value={angle} onChange={(e) => setAngle(parseInt(e.target.value))} className="w-full accent-slate-800" />
         <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
            <span>0°</span><span>90°</span><span>180°</span>
         </div>
      </div>
    </div>
  );
};

// --- Mapping standard placeholders to actual implementations ---
export const RayOpticsLab: React.FC = () => <RefractionLab />;
export const PHSimulator: React.FC = () => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
    <h3 className="text-xl font-black mb-6">🧪 pH Meter</h3>
    <div className="flex-1 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-500 font-bold p-6 text-center text-sm leading-relaxed border border-slate-100">Acidity/Alkalinity testing is best experienced in the "Play Chemicals" laboratory using Universal Indicators.</div>
  </div>
);
export const DensityLab: React.FC = () => <DensityColumnLab />;
export const CircuitLab: React.FC = () => <OhmsLawLab />;
export const ChemicalReactionLab: React.FC = () => (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <h3 className="text-xl font-black mb-6">⚗️ Reaction Mixer</h3>
      <div className="flex-1 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-500 font-bold p-6 text-center text-sm leading-relaxed border border-slate-100">For full chemical reactivity, color changes, and sparks, navigate to the "Play Chemicals" workbench.</div>
    </div>
);
export const TitrationLab: React.FC = () => (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <h3 className="text-xl font-black mb-6">🧪 Titration Station</h3>
      <div className="flex-1 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-500 font-bold p-6 text-center text-sm leading-relaxed border border-slate-100">Perform standard acid-base titrations with dropwise precision in the "Play Chemicals" tab.</div>
    </div>
);

// --- NEW: Pythagoras Theorem Lab ---
export const PythagorasLab: React.FC = () => {
  const [a, setA] = useState(30);
  const [b, setB] = useState(40);
  const c = Math.sqrt(a * a + b * b);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">📐 Pythagoras Lab</h3>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">Mathematics</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {/* Main Triangle */}
          <path d={`M 50 150 L 50 ${150 - a} L ${50 + b} 150 Z`} fill="#e0e7ff" stroke="#4f46e5" strokeWidth="3" />
          
          {/* Square on side a */}
          <rect x={50 - a} y={150 - a} width={a} height={a} fill="#fecaca" opacity="0.4" stroke="#ef4444" strokeWidth="1" />
          {/* Square on side b */}
          <rect x={50} y={150} width={b} height={b} fill="#bbf7d0" opacity="0.4" stroke="#22c55e" strokeWidth="1" />
          
          {/* Square on hypotenuse c (simplified visual) */}
          <g transform={`translate(${50 + b}, 150) rotate(${180 + Math.atan2(-a, -b) * 180 / Math.PI})`}>
             <rect x="0" y="0" width={c} height={c} fill="#fef08a" opacity="0.4" stroke="#eab308" strokeWidth="1" />
          </g>

          <text x="40" y={150 - a/2} textAnchor="end" className="text-[8px] font-bold fill-red-600">a={a}</text>
          <text x={50 + b/2} y="165" textAnchor="middle" className="text-[8px] font-bold fill-green-600">b={b}</text>
          <text x={50 + b/2 + 10} y={150 - a/2 - 10} textAnchor="start" className="text-[8px] font-bold fill-yellow-600">c={c.toFixed(1)}</text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Side A</label>
          <input type="range" min="10" max="60" value={a} onChange={(e) => setA(parseInt(e.target.value))} className="w-full accent-red-500" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Side B</label>
          <input type="range" min="10" max="60" value={b} onChange={(e) => setB(parseInt(e.target.value))} className="w-full accent-green-500" />
        </div>
      </div>
      <div className="mt-4 p-3 bg-slate-900 text-white rounded-2xl text-center font-mono text-xs">
        {a}² + {b}² = {c.toFixed(1)}²
        <br/>
        {a*a} + {b*b} = {(c*c).toFixed(0)}
      </div>
    </div>
  );
};

// --- NEW: Algebra Visualizer ---
export const AlgebraVisualizer: React.FC = () => {
  const [m, setM] = useState(1);
  const [c, setC] = useState(0);

  const points = [];
  for (let x = -10; x <= 10; x += 1) {
    const y = m * x + c;
    // Map x: -10..10 to 0..200, y: -10..10 to 200..0
    const px = (x + 10) * 10;
    const py = 100 - (y * 10);
    points.push(`${px},${py}`);
  }

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black flex items-center gap-3">📈 Algebra Visualizer</h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">Mathematics</span>
      </div>
      <div className="flex-1 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden mb-4">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Grid */}
          <line x1="0" y1="100" x2="200" y2="100" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* Line */}
          <polyline points={points.join(' ')} fill="none" stroke="#10b981" strokeWidth="3" />
          
          <text x="110" y="20" className="text-[10px] font-black fill-emerald-600">y = {m}x + {c}</text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Slope (m): {m}</label>
          <input type="range" min="-5" max="5" step="0.5" value={m} onChange={(e) => setM(parseFloat(e.target.value))} className="w-full accent-emerald-600" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase">Intercept (c): {c}</label>
          <input type="range" min="-10" max="10" value={c} onChange={(e) => setC(parseInt(e.target.value))} className="w-full accent-emerald-600" />
        </div>
      </div>
    </div>
  );
};
