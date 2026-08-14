const fs = require('fs');
const path = require('path');

const heroPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/Hero.jsx';
const aboutPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/sections/About.jsx';

// 1. Refactor About.jsx
if (fs.existsSync(aboutPath)) {
    let aboutContent = fs.readFileSync(aboutPath, 'utf8');
    // Replace <div className="content"> with <article className="content">
    aboutContent = aboutContent.replace(/<div className="content">/g, '<article className="content">');
    // The closing tag for content is far down, easier to do semantic replacements
    aboutContent = aboutContent.replace(/<div className="title">/g, '<header className="title">');
    aboutContent = aboutContent.replace(/<\/div>\s*(?=<\/?div className="about-details">)/g, '</header>');
    
    aboutContent = aboutContent.replace(/<div className="about-details">/g, '<figure className="about-details">');
    
    aboutContent = aboutContent.replace(/<div className="left">/g, '<aside className="left">');
    aboutContent = aboutContent.replace(/<\/div>\s*<div className="right">/g, '</aside>\n                    <section className="right">');
    aboutContent = aboutContent.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, '</section>\n                </figure>\n            </article>\n        </section>');

    // Optional: write back
    fs.writeFileSync(aboutPath, aboutContent, 'utf8');
}

// 2. Refactor Hero.jsx
if (fs.existsSync(heroPath)) {
    let heroContent = fs.readFileSync(heroPath, 'utf8');
    
    // Replace <div className="hero-grid"> with <article className="hero-grid">
    heroContent = heroContent.replace(/<div className="hero-grid">/g, '<article className="hero-grid">');
    
    // Replace <div style={{ padding: '2rem' }}> with <header className="hero-content">
    heroContent = heroContent.replace(/<div style={{ padding: '2rem' }}>/g, '<header className="hero-content">');
    
    // Replace <div className="text-1" style={{ fontSize: '1.2rem', color: '#8b949e', marginBottom: '0.5rem', fontWeight: 600 }}>
    heroContent = heroContent.replace(/<div className="text-1".*?>/g, '<p className="text-1 subtitle">');
    // Replace closing div
    heroContent = heroContent.replace(/(Hola, soy)<\/div>/g, '$1</p>');

    heroContent = heroContent.replace(/<div className="text-2".*?>/g, '<h1 className="text-2 title">');
    heroContent = heroContent.replace(/(Jesus David Julio Romero\.)<\/div>/g, '$1</h1>');
    
    heroContent = heroContent.replace(/<div className="text-3".*?>/g, '<h2 className="text-3 typed-role">');
    heroContent = heroContent.replace(/(<span className="typing">.*?<\/span>)<\/div>/g, '$1</h2>');

    // Replace the closing tags correctly
    heroContent = heroContent.replace(/<\/div>\s*<div className="hero-visuals">/g, '</header>\n                <figure className="hero-visuals">');
    
    // Match the closing tags of hero-visuals and hero-grid
    heroContent = heroContent.replace(/<\/div>\s*<\/div>\s*<\/section>/, '</figure>\n            </article>\n        </section>');

    fs.writeFileSync(heroPath, heroContent, 'utf8');
}

console.log("Refactored Hero and About.");
