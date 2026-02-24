
import React, { useState, useEffect, useMemo, useCallback } from 'react';

interface Chemical {
  id: string;
  name: string;
  formula: string;
  type: 'acid' | 'base' | 'salt' | 'indicator' | 'solvent' | 'metal' | 'nonmetal' | 'organic' | 'oxidizer' | 'gas' | 'misc';
  ph: number;
  color: string;
  state: 'liquid' | 'solid' | 'gas';
  description: string;
  hazardLevel: 0 | 1 | 2 | 3;
  flammable?: boolean;
  reactive?: boolean; 
}

type Glassware = 'beaker' | 'test_tube' | 'conical_flask';

const CHEMICALS: Chemical[] = [
  // 1. ACIDS
  { id: 'hcl', name: 'Hydrochloric Acid', formula: 'HCl', type: 'acid', ph: 1.0, color: 'rgba(255, 255, 255, 0.1)', state: 'liquid', description: 'Strong mineral acid.', hazardLevel: 2 },
  { id: 'h2so4', name: 'Sulfuric Acid', formula: 'H₂SO₄', type: 'acid', ph: 0.5, color: 'rgba(255, 255, 255, 0.2)', state: 'liquid', description: 'Highly corrosive strong acid.', hazardLevel: 3 },
  { id: 'hno3', name: 'Nitric Acid', formula: 'HNO₃', type: 'acid', ph: 1.2, color: 'rgba(255, 255, 200, 0.3)', state: 'liquid', description: 'Strong acid and powerful oxidizer.', hazardLevel: 3 },
  { id: 'ch3cooh', name: 'Acetic Acid', formula: 'CH₃COOH', type: 'acid', ph: 3.0, color: 'rgba(255, 255, 255, 0.1)', state: 'liquid', description: 'Weak organic acid (Vinegar).', hazardLevel: 1 },

  // 2. BASES / ALKALIS
  { id: 'naoh', name: 'Sodium Hydroxide', formula: 'NaOH', type: 'base', ph: 14.0, color: 'rgba(255, 255, 255, 0.1)', state: 'liquid', description: 'Strong caustic base.', hazardLevel: 3 },
  { id: 'koh', name: 'Potassium Hydroxide', formula: 'KOH', type: 'base', ph: 13.5, color: 'rgba(255, 255, 255, 0.1)', state: 'liquid', description: 'Strong base used in batteries.', hazardLevel: 3 },
  { id: 'nh4oh', name: 'Ammonium Hydroxide', formula: 'NH₄OH', type: 'base', ph: 11.5, color: 'rgba(255, 255, 255, 0.1)', state: 'liquid', description: 'Weak base with pungent odor.', hazardLevel: 2 },
  { id: 'caoh2', name: 'Calcium Hydroxide', formula: 'Ca(OH)₂', type: 'base', ph: 12.4, color: 'rgba(255, 255, 255, 0.5)', state: 'liquid', description: 'Limewater.', hazardLevel: 1 },

  // 3. SALTS
  { id: 'nacl', name: 'Sodium Chloride', formula: 'NaCl', type: 'salt', ph: 7.0, color: 'white', state: 'solid', description: 'Common table salt.', hazardLevel: 0 },
  { id: 'cuso4', name: 'Copper Sulfate', formula: 'CuSO₄', type: 'salt', ph: 4.5, color: 'rgba(59, 130, 246, 0.8)', state: 'solid', description: 'Bright blue crystals.', hazardLevel: 2 },
  { id: 'feso4', name: 'Ferrous Sulfate', formula: 'FeSO₄', type: 'salt', ph: 4.0, color: 'rgba(167, 243, 208, 0.6)', state: 'solid', description: 'Green vitriol.', hazardLevel: 1 },
  { id: 'agno3', name: 'Silver Nitrate', formula: 'AgNO₃', type: 'salt', ph: 6.0, color: 'rgba(255, 255, 255, 0.4)', state: 'solid', description: 'Colorless salt solution.', hazardLevel: 3 },
  { id: 'na2co3', name: 'Sodium Carbonate', formula: 'Na₂CO₃', type: 'salt', ph: 11.0, color: 'white', state: 'solid', description: 'Washing soda.', hazardLevel: 1 },
  { id: 'nahco3', name: 'Sodium Bicarbonate', formula: 'NaHCO₃', type: 'salt', ph: 8.3, color: 'white', state: 'solid', description: 'Baking soda.', hazardLevel: 0 },

  // 4. INDICATORS
  { id: 'universal_ind', name: 'Universal Indicator', formula: 'UI', type: 'indicator', ph: 7.0, color: 'rgba(34, 197, 94, 0.5)', state: 'liquid', description: 'Full range pH indicator.', hazardLevel: 0 },
  { id: 'phenolphthalein', name: 'Phenolphthalein', formula: 'Phph', type: 'indicator', ph: 7.0, color: 'rgba(255, 255, 255, 0.1)', state: 'liquid', description: 'Colorless in acid, Pink in base.', hazardLevel: 1 },
  { id: 'methyl_orange', name: 'Methyl Orange', formula: 'MeOr', type: 'indicator', ph: 7.0, color: 'rgba(249, 115, 22, 0.6)', state: 'liquid', description: 'Red in acid, Yellow in base.', hazardLevel: 1 },

  // 5. METALS / REDUCING
  { id: 'zn', name: 'Zinc Granules', formula: 'Zn', type: 'metal', ph: 7.0, color: '#94a3b8', state: 'solid', description: 'Gray reactive metal.', hazardLevel: 1, reactive: true },
  { id: 'fe_filings', name: 'Iron Filings', formula: 'Fe', type: 'metal', ph: 7.0, color: '#334155', state: 'solid', description: 'Small iron particles.', hazardLevel: 0 },

  // 6. MISC
  { id: 'h2o', name: 'Distilled Water', formula: 'H₂O', type: 'solvent', ph: 7.0, color: 'rgba(186, 230, 253, 0.3)', state: 'liquid', description: 'Pure water.', hazardLevel: 0 },
  { id: 'iodine', name: 'Iodine Solution', formula: 'I₂', type: 'misc', ph: 5.0, color: 'rgba(120, 53, 15, 0.8)', state: 'liquid', description: 'Brown starch-test reagent.', hazardLevel: 2 },
  { id: 'starch', name: 'Starch Solution', formula: 'Starch', type: 'misc', ph: 7.0, color: 'rgba(255, 255, 255, 0.5)', state: 'liquid', description: 'Polysaccharide solution.', hazardLevel: 0 },
];

const PlayChemicalsLab: React.FC = () => {
  const [safetyCleared, setSafetyCleared] = useState(false);
  const [safetyItems, setSafetyItems] = useState({ goggles: false, labcoat: false, gloves: false });
  const [beakerContents, setBeakerContents] = useState<{ chemical: Chemical; amount: number }[]>([]);
  const [selectedChem, setSelectedChem] = useState<Chemical | null>(null);
  const [amountToAdd, setAmountToAdd] = useState(50);
  const [glassware, setGlassware] = useState<Glassware>('beaker');
  const [isBurnerOn, setIsBurnerOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [currentPh, setCurrentPh] = useState(7.00);
  const [totalVolume, setTotalVolume] = useState(0);
  const [gasEvolution, setGasEvolution] = useState(false);
  const [solutionColor, setSolutionColor] = useState('rgba(255, 255, 255, 0.1)');
  const [sparks, setSparks] = useState<{x: number, y: number, id: number, color: string}[]>([]);
  const [bubbles, setBubbles] = useState<{id: number, left: number, delay: number, size: number}[]>([]);
  const [warning, setWarning] = useState<string | null>(null);
  const [mixtureResult, setMixtureResult] = useState<string>('Empty Glassware');
  const [chemicalEquation, setChemicalEquation] = useState<string>('');

  const filteredChemicals = useMemo(() => CHEMICALS.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.formula.toLowerCase().includes(searchQuery.toLowerCase())
  ), [searchQuery]);

  const handleAddChemical = () => {
    if (selectedChem) {
      setBeakerContents(prev => [...prev, { chemical: selectedChem, amount: amountToAdd }]);
    }
  };

  const triggerSparks = useCallback((color: string = '#facc15') => {
    const newSparks = Array.from({ length: 15 }).map((_, i) => ({
      x: 35 + Math.random() * 30,
      y: 40 + Math.random() * 30,
      id: Date.now() + i,
      color: color
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 800);
  }, []);

  useEffect(() => {
    if (gasEvolution) {
      const newBubbles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: 3 + Math.random() * 5
      }));
      setBubbles(newBubbles);
    } else {
      setBubbles([]);
    }
  }, [gasEvolution]);

  // CORE REACTION & VISUAL ENGINE
  useEffect(() => {
    if (beakerContents.length === 0) {
      setCurrentPh(7.00); setTotalVolume(0); setGasEvolution(false); setWarning(null);
      setSolutionColor('transparent');
      setMixtureResult('Empty Glassware');
      setChemicalEquation('');
      return;
    }

    let tVol = 0;
    let netH = 0; // tracking H+ and OH- balance for better pH
    const ids = beakerContents.map(c => c.chemical.id);

    // Calculate concentrations for pH and volume
    beakerContents.forEach(item => {
      tVol += item.amount;
      // Simplified: acidic chemicals subtract from netH, basic add.
      // netH tracks the 'strength' relative to neutral 7
      if (item.chemical.type === 'acid') netH -= (7 - item.chemical.ph) * item.amount;
      if (item.chemical.type === 'base') netH += (item.chemical.ph - 7) * item.amount;
    });

    // Determine pH based on net acidity/alkalinity
    let calculatedPh = 7.00;
    if (netH > 0) calculatedPh = 7 + Math.min(7, Math.log10(1 + netH / 5));
    else if (netH < 0) calculatedPh = 7 - Math.min(6.5, Math.log10(1 + Math.abs(netH) / 5));
    
    calculatedPh = Math.max(0.1, Math.min(14, calculatedPh));
    setCurrentPh(Number(calculatedPh.toFixed(2)));
    setTotalVolume(tVol);

    // DYNAMIC COLOR & REACTION RESULT ENGINE
    let finalColor = 'rgba(255, 255, 255, 0.2)'; 
    let resultDesc = beakerContents.length === 1 ? `Pure ${beakerContents[0].chemical.name}` : "Complex Mixture";
    let equation = "";
    let gassing = false;
    let currentWarning: string | null = null;

    // 1. Check for specific products (Neutralization etc)
    if (ids.includes('hcl') && ids.includes('naoh')) {
      equation = "HCl + NaOH → NaCl + H₂O";
      const isNeutral = Math.abs(calculatedPh - 7) < 0.5;
      resultDesc = isNeutral ? "Aqueous Sodium Chloride (NaCl) Salt" : "Sodium Chloride Solution";
      currentWarning = isNeutral 
        ? "NEUTRALIZATION: Acid and Base reacted perfectly to form Salt + Water." 
        : `PARTIAL NEUTRALIZATION: pH shifted to ${calculatedPh.toFixed(1)}.`;
    } 
    else if (ids.includes('zn') && ids.includes('hcl')) {
      equation = "Zn + 2HCl → ZnCl₂ + H₂↑";
      resultDesc = "Zinc Chloride Solution";
      gassing = true;
      triggerSparks('#94a3b8');
      currentWarning = "GAS EVOLUTION: Zinc is displacing Hydrogen from the acid.";
    }
    else if (ids.includes('nahco3') && ids.includes('hcl')) {
      equation = "NaHCO₃ + HCl → NaCl + H₂O + CO₂↑";
      resultDesc = "Sodium Chloride Solution";
      gassing = true;
      currentWarning = "EFFERVESCENCE: Rapid release of Carbon Dioxide gas.";
    }
    else if (ids.includes('agno3') && ids.includes('nacl')) {
      equation = "AgNO₃ + NaCl → AgCl↓ + NaNO₃";
      resultDesc = "Silver Chloride Precipitate";
      finalColor = 'rgba(255, 255, 255, 0.95)'; // Opaque white
      currentWarning = "PRECIPITATION: An insoluble white salt (AgCl) has formed.";
    }
    else if (ids.includes('cuso4') && ids.includes('fe_filings')) {
      equation = "CuSO₄ + Fe → FeSO₄ + Cu↓";
      resultDesc = "Ferrous Sulfate Solution";
      finalColor = 'rgba(167, 243, 208, 0.8)';
      currentWarning = "DISPLACEMENT: Iron is replacing Copper. Note the green color.";
    }
    else if (ids.includes('starch') && ids.includes('iodine')) {
      equation = "Starch + I₂ → Amylose-Iodine Complex";
      resultDesc = "Iodine-Starch Complex";
      finalColor = 'rgba(15, 23, 42, 0.98)'; 
      currentWarning = "STARCH TEST POSITIVE: Intense Blue-Black color detected.";
    }

    // 2. Indicator Color Logic (Overrides base mixture color)
    if (ids.includes('universal_ind')) {
      if (calculatedPh < 3) finalColor = 'rgba(239, 68, 68, 0.85)'; // Red
      else if (calculatedPh < 5) finalColor = 'rgba(249, 115, 22, 0.85)'; // Orange
      else if (calculatedPh < 7) finalColor = 'rgba(234, 179, 8, 0.85)'; // Yellow
      else if (Math.abs(calculatedPh - 7) < 0.3) finalColor = 'rgba(34, 197, 94, 0.85)'; // Green
      else if (calculatedPh < 9) finalColor = 'rgba(37, 99, 235, 0.85)'; // Blue
      else if (calculatedPh < 11) finalColor = 'rgba(124, 58, 237, 0.85)'; // Indigo
      else finalColor = 'rgba(139, 92, 246, 0.85)'; // Violet
    } 
    else if (ids.includes('phenolphthalein')) {
      finalColor = calculatedPh > 8.5 ? 'rgba(236, 72, 153, 0.75)' : 'rgba(255, 255, 255, 0.1)';
    }
    else if (ids.includes('methyl_orange')) {
      finalColor = calculatedPh < 3.5 ? 'rgba(239, 68, 68, 0.85)' : 'rgba(245, 158, 11, 0.85)';
    }
    // Base layer colors for specific salts if no indicators present
    else if (finalColor === 'rgba(255, 255, 255, 0.2)') {
      if (ids.includes('cuso4')) finalColor = 'rgba(59, 130, 246, 0.7)';
      else if (ids.includes('feso4')) finalColor = 'rgba(167, 243, 208, 0.6)';
      else if (ids.includes('iodine')) finalColor = 'rgba(120, 53, 15, 0.8)';
    }

    setSolutionColor(finalColor);
    setMixtureResult(resultDesc);
    setChemicalEquation(equation);
    setGasEvolution(gassing);
    setWarning(currentWarning);

  }, [beakerContents, triggerSparks, currentPh]);

  if (!safetyCleared) {
    return (
      <div className="max-w-4xl mx-auto p-12 bg-white rounded-[4rem] shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
        <div className="text-center space-y-4 mb-16">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-[2rem] flex items-center justify-center text-5xl mx-auto shadow-xl transform -rotate-6">🥽</div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mt-6">Safety Protocol</h2>
          <p className="text-slate-500 font-medium text-lg text-pretty">Ensure all protective gear is equipped before starting the simulation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { id: 'goggles', n: 'Eye Goggles', i: '🥽' }, { id: 'labcoat', n: 'Lab Coat', i: '🥼' }, { id: 'gloves', n: 'Rubber Gloves', i: '🧤' }
          ].map(item => (
            <button key={item.id} onClick={() => setSafetyItems(p => ({...p, [item.id]: !p[item.id as keyof typeof p]}))} 
              className={`p-10 rounded-[3rem] border-4 transition-all flex flex-col items-center gap-6 ${safetyItems[item.id as keyof typeof safetyItems] ? 'border-blue-600 bg-blue-50 shadow-lg' : 'border-slate-50 bg-slate-50 hover:border-slate-200'}`}>
              <span className="text-6xl">{item.i}</span>
              <p className="font-black text-slate-800">{item.n}</p>
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${safetyItems[item.id as keyof typeof safetyItems] ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'}`}>
                {safetyItems[item.id as keyof typeof safetyItems] && '✓'}
              </div>
            </button>
          ))}
        </div>
        <button disabled={!Object.values(safetyItems).every(v => v)} onClick={() => setSafetyCleared(true)} className="w-full py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:bg-slate-800 disabled:opacity-20 transition-all active:scale-95">Enter Laboratory</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20 animate-in fade-in duration-700">
      <header className="bg-white p-10 rounded-[4rem] shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-6">
           <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[1.5rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl transform rotate-3">E</div>
           <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Chemistry Workbench</h2>
              <p className="text-slate-500 font-medium text-lg">Full-Scale Reaction Simulation v4.2</p>
           </div>
        </div>
        <div className="flex gap-4">
           <div className="bg-slate-100 p-2 rounded-[2rem] flex border border-slate-200 shadow-inner">
              {(['beaker', 'test_tube', 'conical_flask'] as Glassware[]).map(g => (
                <button key={g} onClick={() => setGlassware(g)} className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${glassware === g ? 'bg-white shadow-xl text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                  {g.replace('_', ' ')}
                </button>
              ))}
           </div>
           <button onClick={() => setBeakerContents([])} className="px-10 py-4 bg-red-600 text-white font-black rounded-[1.5rem] shadow-2xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95">Reset Lab</button>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Reagent Shelf */}
        <div className="lg:col-span-3">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-200 h-[800px] flex flex-col">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Chemical Store</p>
            <input type="text" placeholder="Search chemicals..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-100 border-none rounded-[1.5rem] py-5 px-8 text-sm font-bold text-slate-700 mb-6 shadow-inner focus:ring-2 focus:ring-blue-500 transition-all" />
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 mb-6">
              {filteredChemicals.map(chem => (
                <button key={chem.id} onClick={() => setSelectedChem(chem)} className={`w-full p-5 rounded-[2rem] border-2 transition-all text-left flex items-center justify-between group ${selectedChem?.id === chem.id ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-slate-50 bg-slate-50 hover:border-slate-200'}`}>
                   <div>
                      <p className="font-black text-xs text-slate-800">{chem.name}</p>
                      <div className="flex gap-2 items-center mt-1">
                        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{chem.formula}</p>
                        <span className="text-[7px] font-black bg-slate-200 px-1.5 py-0.5 rounded text-slate-500 uppercase">{chem.state}</span>
                      </div>
                   </div>
                   <div className={`w-2 h-8 rounded-full shrink-0 ${chem.hazardLevel >= 3 ? 'bg-red-500 animate-pulse' : chem.hazardLevel >= 2 ? 'bg-orange-400' : 'bg-green-500'}`}></div>
                </button>
              ))}
            </div>
            
            <div className="pt-6 border-t border-slate-100 space-y-6">
              <div className="space-y-2">
                 <div className="flex justify-between items-end px-2">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Dispense Amt</label>
                    <span className="text-xs font-black text-blue-600">{amountToAdd} ml</span>
                 </div>
                 <input type="range" min="10" max="250" step="10" value={amountToAdd} onChange={(e) => setAmountToAdd(parseInt(e.target.value))} className="w-full h-1.5 accent-blue-600 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
              </div>
              <button onClick={handleAddChemical} disabled={!selectedChem} className="w-full py-6 bg-blue-600 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-500/40 hover:bg-blue-500 disabled:opacity-20 transition-all transform active:scale-95">
                {selectedChem ? `Dispense ${selectedChem.formula}` : 'Select Reagent'}
              </button>
            </div>
          </div>
        </div>

        {/* Lab Center Area */}
        <div className="lg:col-span-6 relative bg-slate-200 rounded-[6rem] border-8 border-slate-300 h-[800px] shadow-[inset_0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center overflow-hidden">
           {/* Lab Stand */}
           <div className="absolute bottom-4 flex flex-col items-center z-0">
             <div className="w-16 h-32 bg-slate-400 rounded-t-xl border-x-4 border-slate-500"></div>
             <div className="w-24 h-6 bg-slate-600 rounded-full"></div>
           </div>

           {isBurnerOn && <div className="absolute bottom-36 w-16 h-40 bg-gradient-to-t from-blue-600 via-blue-300 to-transparent blur-xl animate-flame opacity-60 z-10"></div>}
           
           {/* Visual Particles */}
           <div className="absolute inset-0 z-40 pointer-events-none">
             {sparks.map(s => (
               <div key={s.id} className="absolute w-2 h-2 rounded-full animate-spark-fly shadow-[0_0_8px_currentColor]" style={{ left: `${s.x}%`, top: `${s.y}%`, color: s.color, backgroundColor: 'currentColor' }}></div>
             ))}
           </div>

           {/* Glassware & Liquid Rendering */}
           <div className={`relative z-20 border-x-[12px] border-b-[12px] border-white/60 flex items-end shadow-2xl transition-all duration-700 overflow-hidden ${glassware === 'beaker' ? 'w-80 h-[450px] rounded-b-[5rem]' : glassware === 'test_tube' ? 'w-20 h-[500px] rounded-b-full' : 'w-80 h-[450px] [clip-path:polygon(25%_0%,75%_0%,100%_100%,0%_100%)] rounded-b-3xl'}`}>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] z-10 pointer-events-none"></div>
              <div 
                className="w-full transition-all duration-1000 relative" 
                style={{ height: `${Math.min(98, totalVolume/12)}%`, backgroundColor: solutionColor }}
              >
                {/* Surface Animation */}
                <div className="absolute top-0 left-0 right-0 h-4 -mt-1.5 overflow-hidden z-20">
                    <div className="absolute top-0 w-[400%] h-full animate-liquid-wave opacity-40 bg-white/40 blur-sm"></div>
                </div>

                {/* Swirl Effects for Mixing Appearance */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-white/20 blur-3xl animate-swirl-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-black/10 blur-3xl animate-swirl-reverse-slow"></div>
                </div>

                {/* Reaction Bubbles */}
                {gasEvolution && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                    <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                    {bubbles.map(b => (
                      <div 
                        key={b.id} 
                        className="absolute bottom-0 bg-white/70 rounded-full animate-rise shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                        style={{ 
                          left: `${b.left}%`, 
                          width: `${b.size}px`, 
                          height: `${b.size}px`, 
                          animationDelay: `${b.delay}s`,
                          animationDuration: '1.2s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                <div className="absolute top-0 w-full h-1.5 bg-white/20 z-40"></div>
              </div>
           </div>

           {/* Workbench Controls */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 bg-slate-900/95 p-3 rounded-[2.5rem] shadow-2xl border border-white/10 z-50">
              <button onClick={() => setIsBurnerOn(true)} className={`px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${isBurnerOn ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500 hover:text-slate-400'}`}>Ignite</button>
              <button onClick={() => setIsBurnerOn(false)} className={`px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${!isBurnerOn ? 'bg-red-600 text-white shadow-xl' : 'text-slate-500 hover:text-slate-400'}`}>Douse</button>
           </div>
        </div>

        {/* Digital Analyzers Console */}
        <div className="lg:col-span-3 space-y-6 h-[800px] flex flex-col">
           <div className="bg-slate-900 p-8 rounded-[4rem] text-white shadow-2xl flex-1 flex flex-col font-mono relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-7xl pointer-events-none">⌬</div>
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10">Digital Analytics Console</h3>
              
              <div className="space-y-10 flex-1 flex flex-col justify-between">
                 {/* Accurate pH Section */}
                 <div>
                    <p className="text-[10px] text-blue-400 font-black mb-3">CONCENTRATION pH</p>
                    <p className="text-6xl font-black text-white tracking-tighter">{currentPh.toFixed(2)}</p>
                    <div className="mt-5 h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex gap-0.5 shadow-inner">
                       {[...Array(14)].map((_, i) => (
                         <div key={i} className={`flex-1 h-full transition-all duration-700 ${i < Math.floor(currentPh) ? (currentPh < 5 ? 'bg-red-500' : currentPh > 9 ? 'bg-purple-500' : 'bg-green-500') : 'bg-slate-700 opacity-30'}`}></div>
                       ))}
                    </div>
                    <div className="flex justify-between text-[8px] font-black text-slate-500 mt-2 px-1">
                       <span>ACIDIC</span><span>NEUTRAL</span><span>ALKALINE</span>
                    </div>
                 </div>

                 {/* Mixture Synthesis Output */}
                 <div className="p-6 bg-slate-800/40 rounded-[2.5rem] border border-white/5 shadow-xl">
                    <p className="text-[9px] text-emerald-400 font-black mb-4 uppercase tracking-widest border-b border-emerald-500/10 pb-2">Synthesis Monitor</p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Observation</p>
                        <p className="text-lg font-black text-white leading-tight min-h-[2.5rem]">{mixtureResult}</p>
                      </div>
                      
                      {chemicalEquation && (
                        <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 shadow-inner">
                           <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Equation</p>
                           <p className="text-[12px] text-emerald-300 font-mono italic leading-relaxed">{chemicalEquation}</p>
                        </div>
                      )}
                      
                      <div className="pt-2 flex justify-between items-center text-[9px] font-black text-slate-500">
                         <span>Vol: {totalVolume}ml</span>
                         <span className={isBurnerOn ? 'text-orange-400' : ''}>Temp: {isBurnerOn ? '98.5°C' : (gasEvolution ? '32.1°C' : '22.4°C')}</span>
                      </div>
                    </div>
                 </div>

                 {/* Prominent Reaction Notes / Warnings */}
                 <div className={`p-6 rounded-[2.5rem] border-2 transition-all duration-500 min-h-[140px] flex flex-col justify-center ${warning ? 'border-amber-500/50 bg-amber-500/10 text-amber-50 animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.1)]' : 'border-slate-800 bg-slate-800/20 text-slate-400'}`}>
                    <div className="flex items-center gap-2 mb-3">
                       <span className="text-xs">{warning ? '⚠️' : 'ℹ️'}</span>
                       <p className="text-[10px] font-black uppercase tracking-widest">Reaction Monitor</p>
                    </div>
                    <p className={`text-sm leading-relaxed font-bold italic ${warning ? 'text-amber-100' : 'text-slate-500'}`}>
                       {warning || 'Standard lab conditions. Awaiting chemical interaction...'}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes spark-fly {
          0% { transform: scale(1) translate(0, 0); opacity: 1; }
          100% { transform: scale(0) translate(calc(var(--tw-translate-x, 0) + (random()*240 - 120)px), -250px); opacity: 0; }
        }
        .animate-spark-fly { animation: spark-fly 0.8s ease-out forwards; }
        
        @keyframes liquid-wave {
          0% { transform: translateX(0) skewX(0deg); }
          25% { transform: translateX(-20%) skewX(1deg); }
          50% { transform: translateX(-40%) skewX(0deg); }
          75% { transform: translateX(-20%) skewX(-1deg); }
          100% { transform: translateX(0) skewX(0deg); }
        }
        .animate-liquid-wave { animation: liquid-wave 8s infinite ease-in-out; }

        @keyframes swirl-slow {
          0% { transform: translate(-10%, -10%) rotate(0deg); }
          50% { transform: translate(10%, 10%) rotate(180deg); }
          100% { transform: translate(-10%, -10%) rotate(360deg); }
        }
        .animate-swirl-slow { animation: swirl-slow 15s infinite linear; }

        @keyframes swirl-reverse-slow {
          0% { transform: translate(10%, 10%) rotate(0deg); }
          50% { transform: translate(-10%, -10%) rotate(-180deg); }
          100% { transform: translate(10%, 10%) rotate(-360deg); }
        }
        .animate-swirl-reverse-slow { animation: swirl-reverse-slow 20s infinite linear; }

        @keyframes flame {
          0%, 100% { transform: scaleY(1) rotate(-0.5deg); }
          50% { transform: scaleY(1.2) rotate(0.5deg); }
        }
        .animate-flame { animation: flame 0.25s infinite alternate; transform-origin: bottom; }
        
        @keyframes rise {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-450px); opacity: 0; }
        }
        .animate-rise { animation: rise 1.5s ease-out infinite; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 20px; }
      `}</style>
    </div>
  );
};

export default PlayChemicalsLab;
