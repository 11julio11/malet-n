const fs = require('fs');
const path = require('path');

const rootDir = 'C:/Mis_Proyectos(github)/malet-n';
const srcDir = path.join(rootDir, 'src');
const componentsDir = path.join(srcDir, 'components');
const publicDir = path.join(rootDir, 'public');

// 1. Clean up Root (Move scripts to scripts/archive)
const archiveDir = path.join(rootDir, 'scripts', 'archive');
if (!fs.existsSync(path.join(rootDir, 'scripts'))) fs.mkdirSync(path.join(rootDir, 'scripts'));
if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir);

const rootFiles = fs.readdirSync(rootDir);
rootFiles.forEach(file => {
    if ((file.endsWith('.cjs') || file.endsWith('.js')) && file !== 'vite.config.js') {
        fs.renameSync(path.join(rootDir, file), path.join(archiveDir, file));
    }
});

// 2. Create subdirectories
const subdirs = {
    layout: path.join(componentsDir, 'layout'),
    sections: path.join(componentsDir, 'sections'),
    ui: path.join(componentsDir, 'ui'),
    effects: path.join(componentsDir, 'effects')
};
Object.values(subdirs).forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// 3. Move components
const componentMap = {
    'Navbar.jsx': 'layout',
    'Footer.jsx': 'layout',
    'ScrollToTop.jsx': 'layout',
    'Hero.jsx': 'sections',
    'About.jsx': 'sections',
    'Projects.jsx': 'sections',
    'Skills.jsx': 'sections',
    'Contact.jsx': 'sections',
    'ArchitectureModal.jsx': 'ui',
    'ShatterImage.jsx': 'ui',
    'MatrixBackground.jsx': 'effects'
};

Object.entries(componentMap).forEach(([file, folder]) => {
    const srcPath = path.join(componentsDir, file);
    const destPath = path.join(subdirs[folder], file);
    if (fs.existsSync(srcPath)) {
        fs.renameSync(srcPath, destPath);
    }
});

// 4. Rename assets
const videoDir = path.join(publicDir, 'video');
const imgDir = path.join(publicDir, 'img');

if (fs.existsSync(videoDir)) {
    const oldVideo = path.join(videoDir, 'primer video.mp4');
    const newVideo = path.join(videoDir, 'hero-bg.mp4');
    if (fs.existsSync(oldVideo)) fs.renameSync(oldVideo, newVideo);
}

if (fs.existsSync(imgDir)) {
    const oldImg = path.join(imgDir, 'diseño01.jpg');
    const newImg = path.join(imgDir, 'design01.jpg');
    if (fs.existsSync(oldImg)) fs.renameSync(oldImg, newImg);
}

// 5. Update App.jsx imports
const appPath = path.join(srcDir, 'App.jsx');
if (fs.existsSync(appPath)) {
    let appContent = fs.readFileSync(appPath, 'utf8');
    
    // Replace old component imports with new paths
    Object.entries(componentMap).forEach(([file, folder]) => {
        const componentName = file.replace('.jsx', '');
        const regex = new RegExp(`import\\s+${componentName}\\s+from\\s+['"]\\.\\/components\\/${componentName}['"]`, 'g');
        appContent = appContent.replace(regex, `import ${componentName} from './components/${folder}/${componentName}'`);
    });

    fs.writeFileSync(appPath, appContent, 'utf8');
}

// 6. Update Hero.jsx video path
const heroPath = path.join(subdirs.sections, 'Hero.jsx');
if (fs.existsSync(heroPath)) {
    let heroContent = fs.readFileSync(heroPath, 'utf8');
    heroContent = heroContent.replace(/primer\s+video\.mp4/g, 'hero-bg.mp4');
    fs.writeFileSync(heroPath, heroContent, 'utf8');
}

// 7. Update About.jsx/Projects.jsx image paths
const aboutPath = path.join(subdirs.sections, 'About.jsx');
if (fs.existsSync(aboutPath)) {
    let aboutContent = fs.readFileSync(aboutPath, 'utf8');
    aboutContent = aboutContent.replace(/diseño01\.jpg/g, 'design01.jpg');
    fs.writeFileSync(aboutPath, aboutContent, 'utf8');
}
const projectsPath = path.join(subdirs.sections, 'Projects.jsx');
if (fs.existsSync(projectsPath)) {
    let projectsContent = fs.readFileSync(projectsPath, 'utf8');
    projectsContent = projectsContent.replace(/diseño01\.jpg/g, 'design01.jpg');
    fs.writeFileSync(projectsPath, projectsContent, 'utf8');
}

console.log("Restructuring completed.");
