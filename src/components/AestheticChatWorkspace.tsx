/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Paperclip, 
  Globe, 
  BookOpen, 
  Mic, 
  ArrowUp,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Terminal,
  FileCode,
  CheckCircle2,
  Loader2,
  Cpu,
  History,
  Code2,
  ExternalLink,
  Settings,
  HelpCircle,
  Download,
  Check,
  ArrowRight
} from 'lucide-react';
import { audio } from '../utils/audio';
import { TimelineSpeed, ThinkingStep, FileItem } from '../types';

interface AestheticChatWorkspaceProps {
  speed: TimelineSpeed;
  onComplete: () => void;
}

const CONSTANT_FILES: FileItem[] = [
  {
    name: 'RasyaHero.tsx',
    language: 'typescript',
    code: `import React from 'react';\nimport { motion } from 'motion/react';\n\n// ⚡ Neural Scaffolding initialized for:\n// RASYA ABHISTA INDRABASWARA\n\nexport default function RasyaHero() {\n  return (\n    <section className="font-sans min-h-screen relative overflow-hidden flex items-center justify-center bg-[#09090b] text-neutral-100 p-8">\n      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">\n        <motion.div \n          initial={{ opacity: 0, y: 20 }}\n          animate={{ opacity: 1, y: 0 }}\n          className="text-xs font-mono text-white tracking-widest px-4 py-1 border border-neutral-850 rounded-full bg-neutral-900/50 mb-6 uppercase"\n        >\n          Creative Developer & Designer\n        </motion.div>\n        \n        <motion.h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">\n          Rasya Abhista Indrabaswara\n        </motion.h1>\n        \n        <motion.p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mb-8 font-sans">\n          Integrating interactive mechanical audio systems, fast-rendering web frames, and high-contrast editorial designs.\n        </motion.p>\n      </div>\n    </section>\n  );\n}`
  },
  {
    name: 'theme.config.ts',
    language: 'typescript',
    code: `export const visualTokenTheme = {\n  canvas: '#09090b',\n  ink: '#f3f4f6',\n  monochrome: {\n    pure: '#ffffff',\n    charcoal: '#111112',\n    slate: '#222225',\n    smoke: '#a1a1aa'\n  },\n  accents: {\n    highlight: '#ffffff',\n    soft: '#71717a'\n  },\n  fontPairings: {\n    corporate: 'Inter, sans-serif',\n    futuristic: 'Space Grotesk, sans-serif',\n    engine: 'JetBrains Mono, monospace'\n  },\n  motionCurves: {\n    fluid: [0.16, 1, 0.3, 1],\n    snappy: [0.19, 1, 0.22, 1]\n  }\n};`
  }
];

// Rich Code Highlighting Token Parser
function highlightCode(codeText: string) {
  if (!codeText) return <span className="text-neutral-400">{codeText}</span>;
  
  const lines = codeText.split('\n');
  return (
    <span className="block font-mono text-[11px] md:text-xs leading-relaxed text-left">
      {lines.map((line, idx) => {
        // Handle comment lines
        if (line.trim().startsWith('//')) {
          return (
            <span key={idx} className="block text-neutral-500 italic pr-3 min-h-[1.2rem]">
              {line}
            </span>
          );
        }

        // Tokenize line based on syntax structures
        const tokens = line.split(/(\s+|\(|\)|\{|\}|\[|\]|<|>|=|\+|-|\*|\/|;|,|\.|\"|\')/);

        return (
          <span key={idx} className="block min-h-[1.2rem] whitespace-pre">
            {tokens.map((token, tIdx) => {
              const trimmed = token.trim();
              if (!trimmed) return <span key={tIdx}>{token}</span>;

              // Action Keywords
              const keywords = [
                'import', 'from', 'export', 'default', 'function', 'return', 
                'const', 'let', 'type', 'interface', 'class', 'extends'
              ];
              if (keywords.includes(trimmed)) {
                return <span key={tIdx} className="text-amber-500 font-medium">{token}</span>;
              }

              // Built-ins or React structures
              if (['React', 'useState', 'useEffect', 'useRef', 'motion', 'AnimatePresence'].includes(trimmed)) {
                return <span key={tIdx} className="text-purple-400">{token}</span>;
              }

              // Strings
              if ((token.startsWith("'") && token.endsWith("'")) || (token.startsWith('"') && token.endsWith('"')) || token.startsWith('`')) {
                return <span key={tIdx} className="text-emerald-400">{token}</span>;
              }

              // HTML/JSX Elements & Brackets
              if (trimmed.startsWith('<') || trimmed.endsWith('>') || trimmed.startsWith('</')) {
                return <span key={tIdx} className="text-amber-200/90">{token}</span>;
              }

              // Core layout elements
              if (['section', 'div', 'h1', 'p', 'span', 'button'].includes(trimmed)) {
                return <span key={tIdx} className="text-rose-400">{token}</span>;
              }

              // Numbers
              if (/^\d+(\.\d+)?$/.test(trimmed)) {
                return <span key={tIdx} className="text-amber-500">{token}</span>;
              }

              // Plain text variables
              return <span key={tIdx} className="text-neutral-200">{token}</span>;
            })}
          </span>
        );
      })}
    </span>
  );
}

export default function AestheticChatWorkspace({ speed, onComplete }: AestheticChatWorkspaceProps) {
  const [workspaceStage, setWorkspaceStage] = useState<'typing' | 'post-type' | 'thinking' | 'canvas' | 'done'>('typing');
  const [promptText, setPromptText] = useState('');
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [compilerLogs, setCompilerLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadArtifact = () => {
    audio.playCompileSuccessChime();
    const heroComponentContent = `import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#09090b] text-neutral-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Rasya Abhista Indrabaswara
        </h1>
        <p className="text-neutral-400 max-w-xl mb-8">
          Creative Developer & Designer. Komponen React siap pakai dengan integrasi visual tokens dan micro sound scaffolds.
        </p>
      </div>
    </section>
  );
}`;
    const blob = new Blob([heroComponentContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HeroSection.jsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsDownloaded(true);
  };

  const fullPrompt = "Buatkan Website Portofolio Rasya Abhista Indrabaswara";
  const logContainerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  const speedMultiplier = 
    speed === 'fast' ? 0.35 :
    speed === 'slow' ? 1.7 :
    speed === 'instant' ? 0 : 1;

  // Checklist sequence state with neutral/emerald theme colors
  const [checklist, setChecklist] = useState<ThinkingStep[]>([
    { id: 1, label: 'Sourcing aesthetic assets & color palettes...', duration: 700, status: 'pending' },
    { id: 2, label: 'Generating responsive grid scaffolding...', duration: 800, status: 'pending' },
    { id: 3, label: 'Compiling high-performance React modules...', duration: 900, status: 'pending' },
    { id: 4, label: 'Optimizing build outputs & structural AST...', duration: 600, status: 'pending' },
  ]);

  const threads = [
    { title: "Buatkan Website Portofolio...", active: true },
    { title: "Acoustic synthesizer node", active: false },
    { title: "React 19 Tailwind v4.0", active: false },
    { title: "Swiss brutalist layout guide", active: false },
    { title: "Optimize index-96a833.js", active: false },
    { title: "Interactive Canvas mechanics", active: false }
  ];

  // 1. Initial Typing and Zoom Controller
  useEffect(() => {
    if (speed === 'instant') {
      setPromptText(fullPrompt);
      audio.playKeypress(false, true);
      setWorkspaceStage('thinking');
      return;
    }

    let timer: NodeJS.Timeout;
    
    const typingDelay = setTimeout(() => {
      const typeNextChar = () => {
        if (indexRef.current < fullPrompt.length) {
          const char = fullPrompt[indexRef.current];
          setPromptText(prev => prev + char);
          indexRef.current++;

          const isSpace = char === ' ';
          audio.playKeypress(isSpace, false);

          // Realistic rhythmic human typing speed
          let delay = isSpace ? 140 : 75;
          delay += Math.random() * 60 - 25;
          delay *= speedMultiplier;

          timer = setTimeout(typeNextChar, Math.max(15, delay));
        } else {
          timer = setTimeout(() => {
            setWorkspaceStage('post-type');
            audio.playKeypress(false, true); // final enter swing

            timer = setTimeout(() => {
              setWorkspaceStage('thinking');
            }, 800 * speedMultiplier);
          }, 600 * speedMultiplier);
        }
      };
      typeNextChar();
    }, 1200 * speedMultiplier);

    return () => {
      clearTimeout(typingDelay);
      clearTimeout(timer);
    };
  }, [speed, speedMultiplier]);

  // 2. Thinking & Checklist sequence triggers
  useEffect(() => {
    if (workspaceStage !== 'thinking') return;

    audio.startThinkingHum();

    if (speed === 'instant') {
      setProgress(100);
      setChecklist(prev => prev.map(item => ({ ...item, status: 'completed' })));
      audio.stopThinkingHum();
      setWorkspaceStage('canvas');
      return;
    }

    let activeIdx = 0;
    let progressTimer: NodeJS.Timeout;
    let seqTimer: NodeJS.Timeout;

    const totalDuration = checklist.reduce((acc, step) => acc + step.duration, 0) * speedMultiplier;
    const intervalDelta = 50;
    const inc = (100 / (totalDuration / intervalDelta));

    progressTimer = setInterval(() => {
      setProgress(prev => {
        const next = prev + inc;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, intervalDelta);

    const runChecklistStep = () => {
      if (activeIdx < checklist.length) {
        setChecklist(prev => prev.map((step, idx) => {
          if (idx === activeIdx) return { ...step, status: 'active' };
          if (idx < activeIdx) return { ...step, status: 'completed' };
          return step;
        }));

        const currentStep = checklist[activeIdx];
        seqTimer = setTimeout(() => {
          activeIdx++;
          runChecklistStep();
        }, currentStep.duration * speedMultiplier);
      } else {
        setChecklist(prev => prev.map(s => ({ ...s, status: 'completed' })));
        setProgress(100);
        audio.stopThinkingHum();
        
        setTimeout(() => {
          setWorkspaceStage('canvas');
        }, 600 * speedMultiplier);
      }
    };

    runChecklistStep();

    return () => {
      clearInterval(progressTimer);
      clearTimeout(seqTimer);
      audio.stopThinkingHum();
    };
  }, [workspaceStage, speedMultiplier, speed]);

  // 3. Canvas (Code Typing + Compiler Stream Logs) trigger
  useEffect(() => {
    if (workspaceStage !== 'canvas') return;

    setIsCompiling(true);

    let fileIdx = 0;
    let codeStrIdx = 0;
    let codeTypeTimer: NodeJS.Timeout;
    
    const streamCodeLines = () => {
      const activeFile = CONSTANT_FILES[fileIdx];
      const codeToType = activeFile.code;

      if (speed === 'instant') {
        setDisplayedCode(codeToType);
        return;
      }

      if (codeStrIdx < codeToType.length) {
        const cs = Math.max(14, Math.floor(28 / speedMultiplier));
        const chunk = codeToType.substring(codeStrIdx, codeStrIdx + cs);
        setDisplayedCode(prev => prev + chunk);
        codeStrIdx += cs;

        if (Math.random() < 0.25) {
          audio.playUIAudioTick();
        }

        codeTypeTimer = setTimeout(streamCodeLines, 16);
      } else {
        if (fileIdx === 0) {
          fileIdx = 1;
          setTimeout(() => {
            setActiveTab(1);
            codeStrIdx = 0;
            setDisplayedCode('');
            codeTypeTimer = setTimeout(streamCodeLines, 100 * speedMultiplier);
          }, 300 * speedMultiplier);
        }
      }
    };

    streamCodeLines();

    const logList = [
      'Sourcing workspace environment packages...',
      'Compiling React codebase bundle...',
      'Injecting Tailwind CSS decorators...',
      'Validating TypeScript constraints: SUCCESS',
      'Minified global assets index-96a833.js (21.4 kB)',
      'READY: Deploying showcase sandbox server...',
      'SUCCESS: Mount terminal frames completely.'
    ];

    let logIdx = 0;
    let compilerTimer: NodeJS.Timeout;

    const runCompilerLogs = () => {
      if (speed === 'instant') {
        setCompilerLogs(logList);
        audio.playCompileSuccessChime();
        setIsCompiling(false);
        setWorkspaceStage('done');
        return;
      }

      if (logIdx < logList.length) {
        const nextLogStr = logList[logIdx];
        if (nextLogStr) {
          setCompilerLogs(prev => [...prev, nextLogStr]);
        }
        logIdx++;

        audio.playUIAudioTick();

        setTimeout(() => {
          if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
          }
        }, 10);

        const buildPace = (logIdx === 5) 
          ? 300 * speedMultiplier 
          : (150 + Math.random() * 150) * speedMultiplier;

        if (logIdx === 6) {
          setTimeout(() => {
            audio.playCompileSuccessChime();
            setIsCompiling(false);
          }, 100 * speedMultiplier);
        }

        compilerTimer = setTimeout(runCompilerLogs, buildPace);
      } else {
        setTimeout(() => {
          setWorkspaceStage('done');
        }, 300 * speedMultiplier);
      }
    };

    const startCompilerDelay = setTimeout(() => {
      runCompilerLogs();
    }, 400 * speedMultiplier);

    return () => {
      clearTimeout(codeTypeTimer);
      clearTimeout(startCompilerDelay);
      clearTimeout(compilerTimer);
    };
  }, [workspaceStage, speedMultiplier, speed]);

  // 4. Elegant auto-transition after compile is fully complete and success card reveals
  useEffect(() => {
    if (workspaceStage !== 'done') return;

    // Direct automated parallax slide transition into the portfolio showcase after 2.5 seconds
    const autoTransitionTimer = setTimeout(() => {
      onComplete();
    }, 2800 * speedMultiplier);

    return () => {
      clearTimeout(autoTransitionTimer);
    };
  }, [workspaceStage, speedMultiplier, onComplete]);

  // Compute camera tracking progress ratio during typing stage
  const typeRatio = promptText.length / (fullPrompt.length || 1);

  return (
    <div className="flex h-screen w-screen bg-[#212121] text-neutral-100 font-sans overflow-hidden select-none">
      
      {/* 1. SEAMLESS CHATGPT LEFT SIDEBAR */}
      <aside className={`w-64 bg-[#171717] h-full shrink-0 flex-col justify-between border-r border-[#2d2d2d]/30 relative z-30 ${
        (workspaceStage === 'typing' || workspaceStage === 'post-type') ? 'hidden' : 'hidden md:flex'
      }`}>
        
        {/* New Thread Action Area */}
        <div className="p-3.5">
          <div className="flex items-center justify-between text-neutral-300 font-medium mb-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-neutral-800 text-[10px] text-white flex items-center justify-center font-bold font-mono">G</div>
              <span className="text-sm font-semibold tracking-wide">ChatGPT 4.0</span>
            </div>
            <button className="text-neutral-500 hover:text-white p-1 rounded hover:bg-neutral-800 transition-all cursor-pointer">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <button className="w-full flex items-center justify-between text-xs px-3 py-2.5 rounded-lg border border-[#2d2d2d] bg-neutral-900/40 text-neutral-300 hover:bg-[#2d2d2d]/30 transition-all cursor-pointer">
            <span className="font-medium">+ New Chat</span>
            <span className="text-[10px] font-mono text-neutral-500">⌘N</span>
          </button>
        </div>

        {/* History Stream */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-2 space-y-1">
          <div className="px-3 text-[11px] font-mono font-bold text-neutral-500 tracking-wider uppercase mb-1 flex items-center gap-1.5 mt-2">
            <History className="w-3 h-3 text-neutral-600" />
            <span>Recent Chats</span>
          </div>

          {threads.map((t, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] truncate transition-all cursor-pointer ${
                t.active 
                  ? 'bg-[#2d2d2d]/70 text-white font-semibold' 
                  : 'text-neutral-400 hover:bg-[#2d2d2d]/30 hover:text-neutral-200'
              }`}
            >
              <MessageSquare className={`w-3.5 h-3.5 shrink-0 ${t.active ? 'text-neutral-200' : 'text-neutral-500'}`} />
              <span className="truncate">{t.title}</span>
            </div>
          ))}
        </div>

        {/* User Account / Footer settings line inside sidebar */}
        <div className="p-3 border-t border-[#2d2d2d]/30">
          <div className="flex items-center justify-between px-2 text-[11px] text-neutral-500">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-300">
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-neutral-300">
              <HelpCircle className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN WORKING FRAME AREA */}
      <div className="flex-1 flex h-full relative overflow-hidden bg-[#212121]">
        
        {/* Dynamic Canvas/Split Container */}
        <div className="w-full h-full flex flex-row items-center transition-all duration-700 relative">
          
          {/* LEFT CONVERSATION PANEL */}
          <div 
            className={`h-full flex flex-col justify-between transition-all duration-700 ease-in-out px-4 md:px-8 py-6 relative z-10 ${
              (workspaceStage === 'canvas' || workspaceStage === 'done')
                ? 'w-full lg:w-[40%] border-r border-[#2d2d2d]/30 flex'
                : 'w-full'
            }`}
          >
            {/* Top ChatGPT Header label */}
            {workspaceStage !== 'typing' && workspaceStage !== 'post-type' && (
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800/40">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-400 font-sans">
                  <Sparkles className="w-4 h-4 text-neutral-400" />
                  <span>ChatGPT Canvas Workspace</span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500">SESSION: ACTIVE</span>
              </div>
            )}

            {/* Scrolling Chat messages Thread container */}
            <div className={`flex-1 overflow-y-auto no-scrollbar flex flex-col justify-center py-6 ${
              (workspaceStage === 'typing' || workspaceStage === 'post-type') ? 'items-center' : ''
            }`}>
              
              {/* STAGES 1 & 2: TYPING & CENTER PROMPT BOX FOCUS STATE */}
              {(workspaceStage === 'typing' || workspaceStage === 'post-type') && (
                <motion.div 
                  initial={{ y: "100vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-2xl mx-auto flex flex-col items-center px-4"
                >
                  
                  {/* ChatGPT center display name */}
                  <motion.h2 
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white text-3xl font-sans font-medium tracking-tight mb-8"
                  >
                    ChatGPT
                  </motion.h2>

                  {/* ⚡ REALISTIC STATIC TYPE-PROMPT BOX */}
                  <div className="w-full bg-[#2f2f2f] rounded-2xl flex flex-col p-4 border border-[#3e3e3e]/40 overflow-hidden text-neutral-200 shadow-2xl">
                    {/* Prompt input field output */}
                    <div className="flex items-start min-h-[50px] px-1 py-1">
                      <div className="w-full text-base font-sans leading-relaxed text-neutral-100 bg-transparent relative select-text text-left flex items-center min-h-[24px]">
                        {promptText === '' ? (
                          <div className="flex items-center gap-1 min-h-[22px]">
                            <span className="text-neutral-500 pointer-events-none select-none">
                              Ask anything
                            </span>
                            {workspaceStage === 'typing' && (
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-[1.5px] h-[18px] bg-cyan-400 shrink-0 self-center"
                              />
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center flex-wrap w-full min-h-[22px]">
                            <span className="whitespace-pre-wrap">{promptText}</span>
                            {workspaceStage === 'typing' && (
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-[1.5px] h-[18px] ml-1 bg-cyan-400 shrink-0 self-center"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Accessories bottom strip (Exactly ChatGPT design, gray/sleek without unrequested colors) */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#3e3e3e]/30 font-medium">
                      
                      {/* Left Attach buttons */}
                      <div className="flex items-center gap-1.5 text-[12px] text-neutral-400">
                        <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:bg-neutral-800/30 border border-[#3e3e3e]/30">
                          <Paperclip className="w-3.5 h-3.5 text-neutral-400" />
                          <span className="hidden sm:inline text-[11px]">Attach</span>
                        </span>
                        <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:bg-neutral-800/30 border border-[#3e3e3e]/30">
                          <Globe className="w-3.5 h-3.5 text-neutral-400" />
                          <span className="hidden sm:inline text-[11px]">Search</span>
                        </span>
                        <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:bg-neutral-800/30 border border-[#3e3e3e]/30">
                          <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                          <span className="hidden sm:inline text-[11px]">Study</span>
                        </span>
                      </div>

                      {/* Right micro voice / send key states */}
                      <div className="flex items-center gap-2 text-neutral-400">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-neutral-800/30 border border-[#3e3e3e]/10 text-xs">
                          <Mic className="w-3.5 h-3.5" />
                          <span>Voice</span>
                        </span>
                        <div className={`p-2 rounded-full flex items-center justify-center ${promptText.length > 0 ? 'bg-white text-black' : 'bg-[#1f1f1f] text-neutral-600'}`}>
                          <ArrowUp className="w-4 h-4 font-extrabold" />
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGES 3, 4 & 5: RESPONSE THREAD VIEW */}
              {(workspaceStage !== 'typing' && workspaceStage !== 'post-type') && (
                <div className="w-full flex-1 flex flex-col justify-start space-y-8 mt-4">
                  
                  {/* User sent prompt bubble */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#2f2f2f] hover:bg-[#343434] text-sm md:text-base text-neutral-100 px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-lg shadow-md border border-[#3a3a3a]/40 font-medium transition-all text-left">
                      {fullPrompt}
                    </div>
                  </motion.div>

                  {/* GPT Response Row containing Thinking state */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-start gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-300 tracking-wider">Assistant [Neural Model 4.0]</span>
                    </div>

                    {/* Integrated Thinking Block (White / Grey monochrome theme) */}
                    <div className="w-full bg-[#1e1e1e] border border-neutral-800 p-5 rounded-2xl shadow-xl space-y-4 max-w-xl text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {workspaceStage === 'done' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
                          ) : (
                            <Loader2 className="w-4 h-4 text-neutral-300 animate-spin shrink-0" />
                          )}
                          <span className="text-xs font-semibold text-white tracking-wide">
                            {workspaceStage === 'done' ? 'Compilation Successful!' : 'Thinking...'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-white font-bold bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700">
                          {Math.round(progress)}%
                        </span>
                      </div>

                      {/* Micro Progress Bar */}
                      <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                        <motion.div 
                          className="h-full bg-white rounded-full"
                          animate={{ width: `${progress}%` }}
                          transition={{ ease: 'easeOut', duration: 0.15 }}
                        />
                      </div>

                      {/* Progressive checklist items */}
                      <div className="space-y-2.5 pt-2">
                        {checklist.map((step) => {
                          const isAct = step.status === 'active';
                          const isDone = step.status === 'completed';

                          return (
                            <div 
                              key={step.id} 
                              className={`flex items-center gap-2 text-[11px] font-mono transition-all duration-300 ${
                                isAct ? 'text-white bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700' :
                                isDone ? 'text-neutral-400' : 'text-neutral-500'
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                              ) : isAct ? (
                                <Loader2 className="w-3.5 h-3.5 text-neutral-300 animate-spin shrink-0" />
                              ) : (
                                <div className="w-3.5 h-3.5 rounded-full border border-neutral-800 shrink-0" />
                              )}
                              <span className="truncate flex-1">{step.label}</span>
                              <span className="text-[9px] uppercase font-bold tracking-wider shrink-0">
                                {isDone ? 'COMPLETE' : isAct ? 'ACTIVE' : 'WAIT'}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                    </div>

                    {/* Interactive Claude/GPT-style Artifact Download Card (Matches Image 1 layout) */}
                    {workspaceStage === 'done' && (
                      <div className="w-full flex flex-col items-start gap-4 mt-2">
                        
                        {/* IMAGE 1 EXACT RESEMBLANCE CARD */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="w-full bg-[#1c1c1e] border border-[#2d2d2f] hover:border-neutral-700 rounded-xl px-4 py-3.5 flex items-center justify-between shadow-2xl max-w-xl text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#27272a] flex items-center justify-center border border-neutral-800 text-white shrink-0">
                              <FileCode className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-neutral-100 tracking-wide">HeroSection.jsx</span>
                              <span className="text-xs text-neutral-400 font-sans mt-0.5">Komponen React siap pakai</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={handleDownloadArtifact}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-neutral-800/50 text-neutral-300 hover:text-white transition-all text-xs font-semibold cursor-pointer border border-transparent active:scale-95"
                          >
                            {isDownloaded ? (
                              <>
                                <Check className="w-4 h-4 text-white shrink-0" />
                                <span className="text-white">Downloaded</span>
                              </>
                            ) : (
                              <>
                                <Download className="w-4 h-4 text-neutral-300 shrink-0" />
                                <span>Download</span>
                              </>
                            )}
                          </button>
                        </motion.div>

                        {/* EXPLANATION TEXT DIRECTLY BELOW THE ARTIFACT CARD */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-sm text-neutral-300 leading-relaxed max-w-xl text-left pl-1 pr-4"
                        >
                          Website portofolio Anda sudah jadi! Silakan coba aplikasinya dengan mengetuk tombol di bawah ini.
                        </motion.div>

                        {/* COBA SEKARANG / LAUNCH BUTTON */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="w-full flex justify-start pl-1"
                        >
                          <button
                            onClick={() => {
                              audio.playCompileSuccessChime();
                              onComplete();
                            }}
                            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                          >
                            <span>Coba Sekarang</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-950 transition-transform group-hover:translate-x-1" />
                          </button>
                        </motion.div>

                      </div>
                    )}
                  </motion.div>

                </div>
              )}

            </div>

            {/* Bottom micro notice line */}
            <div className="text-[10px] text-neutral-500 font-mono text-center pt-2 border-t border-neutral-800/20">
              ChatGPT can make mistakes. Verify layout tree structure.
            </div>
          </div>

          {/* RIGHT CANVAS SLIDE-OUT CONTAINER (CHATGPT CANVAS MODE) */}
          <AnimatePresence>
            {(workspaceStage === 'canvas' || workspaceStage === 'done') && (
              <motion.div
                initial={{ opacity: 0, x: 250, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 250, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex lg:w-[60%] h-full bg-[#0d0d0f] flex-col border-l border-neutral-800 relative z-20"
              >
                
                {/* Canvas Title Header panel */}
                <div className="bg-[#141416] border-b border-neutral-900 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-[#1f1f23] border border-neutral-800 text-neutral-200">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-semibold text-white font-sans">ChatGPT Canvas (Aesthetic Compiler)</span>
                      <span className="text-[9px] text-neutral-500 font-mono">FILE VIEWPORTS</span>
                    </div>
                  </div>

                  {/* Active Live Signal indicators (White/Neutral for compiling signal) */}
                  <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-850 rounded px-2.5 py-0.5 text-[9px] font-mono text-neutral-305">
                    <Loader2 className="w-3 h-3 animate-spin text-neutral-300" />
                    <span>REAL-TIME COMPILING STREAM</span>
                  </div>
                </div>

                {/* Main Canvas Body Split: Editor Top, Terminal Log Console Bottom */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Visual Editor Workspace */}
                  <div className="flex-1 flex flex-col bg-[#0b0b0d] overflow-hidden">
                    {/* File Tabs line */}
                    <div className="flex items-center justify-between bg-[#111113] border-b border-neutral-900 px-4">
                      <div className="flex items-center">
                        {CONSTANT_FILES.map((file, idx) => (
                          <button
                            key={file.name}
                            onClick={() => {
                              audio.playUIAudioTick();
                              setActiveTab(idx);
                            }}
                            className={`flex items-center gap-2 px-4 py-2.5 text-xs tracking-wide transition-all border-r border-[#1e1e1e] font-sans cursor-pointer ${
                              activeTab === idx
                                ? 'bg-[#0b0b0d] text-white border-t-2 border-t-neutral-100 font-semibold'
                                : 'text-neutral-500 hover:text-neutral-300'
                            }`}
                          >
                            <FileCode className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{file.name}</span>
                          </button>
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-600 font-mono">UTF-8 // TypeScript</span>
                    </div>

                    {/* Preformatted Code editor stream output with CUSTOM TOKEN CODE HIGHLIGHTER */}
                    <div className="flex-1 p-5 overflow-auto text-left flex font-mono bg-[#09090b]">
                      <div className="text-neutral-700 pr-3 mr-3 select-none text-right font-mono text-[11px] leading-relaxed border-r border-neutral-900">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div key={i}>{i + 1}</div>
                        ))}
                      </div>
                      <div className="text-[11px] md:text-xs leading-relaxed font-mono w-full whitespace-pre overflow-x-auto relative min-h-full">
                        {highlightCode(
                          (workspaceStage === 'done' && CONSTANT_FILES[activeTab]) 
                            ? CONSTANT_FILES[activeTab].code 
                            : displayedCode
                        )}
                        {workspaceStage !== 'done' && (
                          <span className="inline-block w-1.5 h-4 ml-0.5 bg-white animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Terminal Log Console Bottom block */}
                  <div className="h-44 bg-[#070709] border-t border-neutral-900 flex flex-col overflow-hidden">
                    {/* Log Terminal header */}
                    <div className="bg-[#111113] border-b border-neutral-900 px-4 py-1.5 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                      <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-neutral-500" /> COMPILER_CONSOLE_LOG</span>
                      <span className="text-[9px] text-neutral-300">STATE: {isCompiling ? 'BUNDLING_AST' : 'ACTIVE_PRISTINE'}</span>
                    </div>

                    {/* Logs Streams (Neutral / White compile lists) */}
                    <div 
                      ref={logContainerRef}
                      className="flex-1 p-3.5 text-left font-mono font-bold text-[9px] md:text-[10px] space-y-2 overflow-y-auto"
                    >
                      {compilerLogs.map((log, idx) => {
                        if (typeof log !== 'string' || !log) return null;
                        const isS = log.includes('SUCCESS');
                        const isR = log.includes('READY');

                        return (
                          <div 
                            key={idx} 
                            className={`flex items-start gap-1 pb-0.5 ${isS ? 'text-white font-extrabold pb-1' : isR ? 'text-neutral-200' : 'text-neutral-400'}`}
                          >
                            <span>&gt;</span>
                            <span className="flex-1 leading-relaxed">{log}</span>
                          </div>
                        );
                      })}

                      {compilerLogs.length === 0 && (
                        <div className="text-neutral-600 italic py-2 flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded-full border border-neutral-800 border-t-neutral-600 animate-spin shrink-0" />
                          <span>Waiting for active file compilations...</span>
                        </div>
                      )}
                    </div>

                    {/* Terminal settings bar */}
                    <div className="bg-[#101014] px-4 py-1 flex items-center justify-between text-[9px] text-neutral-600 font-mono border-t border-neutral-900">
                      <span>STREAMPASS // HOST: SANDBOX</span>
                      <span>PORT: 3000</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </div>
  );
}
