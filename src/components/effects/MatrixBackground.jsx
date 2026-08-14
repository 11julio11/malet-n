import { useEffect, useRef, useState } from 'react';

function MatrixBackground() {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // characters for the rain
    const characters = '01';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const speeds = new Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5); // Speeds between 0.5 and 1
    const opacities = new Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.3); // Opacities between 0.3 and 0.8

    const drawMatrix = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));

        // Elegant colors: mostly cyan, occasionally purple or white
        const rand = Math.random();
        if (rand > 0.95) {
          ctx.fillStyle = 'rgba(0, 217, 255, 0.8)'; // white highlight
        } else if (rand > 0.8) {
          ctx.fillStyle = 'rgba(212, 175, 55, 0.6)'; // purple
        } else {
          ctx.fillStyle = 'rgba(212, 175, 55, 0.4)'; // cyan
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'var(--bg-dark)',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
        }}
      />

      {/* Mouse follow glow - Cyan */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
          transition: 'background 0.2s ease-out',
        }}
      />
      {/* Mouse follow glow - Purple */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(800px circle at ${mousePosition.x + 200}px ${mousePosition.y - 200}px, rgba(0, 217, 255, 0.1), transparent 40%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      {/* Overlay grid to give it texture over the rain */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.7,
        }}
      />
    </div>
  );
}

export default MatrixBackground;

