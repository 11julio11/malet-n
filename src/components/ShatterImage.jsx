import React, { useState, useEffect, useRef, useMemo } from 'react';

const ShatterImage = ({ src, alt, rows = 20, cols = 20 }) => {
    const [isAssembled, setIsAssembled] = useState(false);
    const containerRef = useRef(null);

    const fragments = useMemo(() => {
        const frags = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Calculate background position percentages
                const xPct = (c / (cols - 1)) * 100;
                const yPct = (r / (rows - 1)) * 100;

                // Center coordinates for radial dispersion
                const cx = cols / 2;
                const cy = rows / 2;
                
                const dx = c - cx;
                const dy = r - cy;
                
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);

                // Disperse outward based on distance from center
                const scatterDist = 400 + Math.random() * 600;
                
                // Vortex effect
                const sX = Math.cos(angle + (distance * 0.1)) * scatterDist;
                const sY = Math.sin(angle + (distance * 0.1)) * scatterDist;
                
                const sRot = (Math.random() - 0.5) * 720; // up to 360deg rotation
                const delay = Math.random() * 0.4; // random delay

                frags.push({
                    id: `${r}-${c}`,
                    xPct, yPct,
                    sX, sY, sRot,
                    delay
                });
            }
        }
        return frags;
    }, [rows, cols]);

    useEffect(() => {
        let isMounted = true;
        let intervalId = null;
        let timeoutId = null;
        
        const triggerEffect = () => {
            if (!isMounted) return;
            setIsAssembled(false); // Desarmar
            timeoutId = setTimeout(() => {
                if (!isMounted) return;
                setIsAssembled(true); // Ensamblar
            }, 1200);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(triggerEffect, 500);
                    intervalId = setInterval(triggerEffect, 6000);
                } else {
                    if (intervalId) clearInterval(intervalId);
                    if (timeoutId) clearTimeout(timeoutId);
                }
            });
        }, { threshold: 0.3 }); 

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            isMounted = false;
            if (intervalId) clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            className="shatter-container" 
            ref={containerRef}
            style={{ perspective: '1200px' }} 
        >
            <div className="shatter-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
                {fragments.map(f => (
                    <div 
                        key={f.id} 
                        className={`shatter-piece ${isAssembled ? 'assembled' : 'scattered'}`}
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundPosition: `${f.xPct}% ${f.yPct}%`,
                            backgroundSize: `${cols * 100}% ${rows * 100}%`,
                            '--sx': `${f.sX}px`,
                            '--sy': `${f.sY}px`,
                            '--srot': `${f.sRot}deg`,
                            transitionDelay: `${f.delay}s`,
                            transition: `transform 2s cubic-bezier(0.25, 1, 0.5, 1) ${f.delay}s, opacity 2s ease ${f.delay}s, filter 2s ease ${f.delay}s`
                        }}
                    />
                ))}
            </div>
            <img src={src} alt={alt} className="shatter-base-img" />
        </div>
    );
};

export default ShatterImage;
