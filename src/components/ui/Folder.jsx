import React, { useState } from 'react';

const Folder = ({ color = '#E67E22', size = 1, title = '', items = [], className = '' }) => {
  const maxItems = items.length || 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index) => {
    const transforms = [
      'translate(-120%, -70%) rotate(-15deg)',
      'translate(10%, -70%) rotate(15deg)',
      'translate(-50%, -100%) rotate(5deg)',
      'translate(-110%, -110%) rotate(-5deg)',
      'translate(0%, -110%) rotate(10deg)',
      'translate(-140%, -40%) rotate(-20deg)',
      'translate(30%, -40%) rotate(20deg)',
    ];
    return transforms[index % transforms.length];
  };

  return (
    <div style={scaleStyle} className={`${className} relative ${open ? 'z-50' : 'z-10 hover:z-40'} transition-all duration-300`}>
      <div
        className={`group relative transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
          !open ? 'hover:-translate-y-2' : ''
        }`}
        style={{
          '--folder-color': color,
          transform: open ? 'translateY(-8px)' : undefined
        }}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={open ? 'Close folder' : 'Open folder'}
      >
        <div className="relative w-[100px] h-[80px] rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[var(--folder-color)] overflow-visible z-0">
          <div className="absolute inset-0 bg-black/10 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] z-0"></div>
          
          <span className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none bg-[var(--folder-color)]">
            <div className="absolute inset-0 bg-black/10 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none" />
          </span>

          {papers.map((item, i) => {
            const sizeClasses = open ? 'w-[75%] h-[80%]' : 'w-[75%] h-[75%]';
            const bgClasses = ['bg-slate-200 dark:bg-zinc-700', 'bg-slate-100 dark:bg-zinc-600', 'bg-white dark:bg-zinc-500'];
            const bgClass = bgClasses[i % bgClasses.length];

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-transform ${
                  !open ? '-translate-x-1/2 translate-y-[10%]' : 'hover:scale-110'
                } ${!open ? 'group-hover:translate-y-0 group-hover:-translate-x-1/2' : ''} ${sizeClasses} ${bgClass} rounded-[10px] flex flex-col items-center justify-center p-2 text-center overflow-hidden shadow-sm`}
                style={!open ? {} : { transform: transformStyle }}
              >
                {item}
              </div>
            );
          })}
          
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-transform bg-[var(--folder-color)] rounded-tl-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] ${
              !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
            }`}
            style={open ? { transform: 'skew(15deg) scaleY(0.6)' } : {}}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-transform bg-[var(--folder-color)] rounded-tl-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] flex items-center justify-center ${
              !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
            }`}
            style={open ? { transform: 'skew(-15deg) scaleY(0.6)' } : {}}
          >
            {title && (
              <span className="text-white/90 font-bold text-[10px] px-2 text-center drop-shadow-md select-none transition-opacity duration-200">
                {title}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
