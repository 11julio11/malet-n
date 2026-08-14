const fs = require('fs');

const cssPath = 'C:/Mis_Proyectos(github)/malet-n/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Increase shatter image size slightly
css = css.replace(
    /\.shatter-container \{\s*position: relative;\s*width: [\s\S]*?aspect-ratio: [\s\S]*?\}/,
    `.shatter-container {
    position: relative;
    width: 100%;
    max-width: 480px; /* Increased from 400px */
    aspect-ratio: 3 / 4; /* Better portrait proportion */
}`
);

// Add animations for texts and buttons
const additionalStyles = `

/* Text and Button Animations */
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulseGlow {
    0% { box-shadow: 0 0 10px rgba(57, 255, 20, 0.2); }
    50% { box-shadow: 0 0 20px rgba(57, 255, 20, 0.6); }
    100% { box-shadow: 0 0 10px rgba(57, 255, 20, 0.2); }
}

.hero-text-animate {
    animation: slideInUp 1s ease-out forwards;
}

.hero-text-delay-1 { animation-delay: 0.2s; opacity: 0; }
.hero-text-delay-2 { animation-delay: 0.4s; opacity: 0; }
.hero-text-delay-3 { animation-delay: 0.6s; opacity: 0; }

.animated-btn {
    animation: slideInUp 1s ease-out 0.8s forwards, pulseGlow 3s infinite 1.8s;
    opacity: 0;
    transition: all 0.3s ease;
}

.animated-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(57, 255, 20, 0.8);
}
`;

if (!css.includes('hero-text-animate')) {
    fs.appendFileSync(cssPath, additionalStyles);
    console.log("CSS animations appended.");
} else {
    fs.writeFileSync(cssPath, css);
    console.log("CSS container size updated.");
}

