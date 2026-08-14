const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Mis_Proyectos(github)/malet-n/src';
let totalDivs = 0;
let semanticTags = 0;
let cssPxCount = 0;
let displayNoneCount = 0;
let posAbsoluteCount = 0;
let floatCount = 0;

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
};

const scanFiles = () => {
    if (!fs.existsSync(srcDir)) {
        console.log("Source directory not found!");
        return;
    }
    const files = walk(srcDir);
    const report = { filesScanned: 0, violations: [] };

    files.forEach(file => {
        if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
            report.filesScanned++;
            const content = fs.readFileSync(file, 'utf8');
            
            // Divitis & Semantics
            const divs = (content.match(/<div/g) || []).length;
            totalDivs += divs;
            const semantics = (content.match(/<(main|article|header|nav|section|footer)/g) || []).length;
            semanticTags += semantics;

            if (divs > 10 && semantics === 0) {
                report.violations.push(`Divitis in ${path.basename(file)}: ${divs} divs, 0 semantic tags`);
            }

            // CSS rules
            const pxWidths = (content.match(/width:\s*\d+px/g) || []).length;
            const pxFonts = (content.match(/font-size:\s*\d+px/g) || []).length;
            if (pxWidths > 0) report.violations.push(`Rigid width (px) in ${path.basename(file)}: ${pxWidths} occurrences`);
            if (pxFonts > 0) report.violations.push(`Rigid font-size (px) in ${path.basename(file)}: ${pxFonts} occurrences`);

            const abs = (content.match(/position:\s*absolute/g) || []).length;
            if (abs > 0) {
                posAbsoluteCount += abs;
                report.violations.push(`position:absolute in ${path.basename(file)}: ${abs} occurrences`);
            }

            const floats = (content.match(/float:\s*(left|right)/g) || []).length;
            if (floats > 0) {
                floatCount += floats;
                report.violations.push(`float in ${path.basename(file)}: ${floats} occurrences`);
            }

            const dnone = (content.match(/display:\s*none/g) || []).length;
            if (dnone > 0) {
                displayNoneCount += dnone;
                report.violations.push(`display:none in ${path.basename(file)}: ${dnone} occurrences`);
            }
        }
    });

    console.log("=== FRONT-END MODERNIZATION AUDIT REPORT ===");
    console.log(`Files scanned: ${report.filesScanned}`);
    console.log(`Total <div> tags: ${totalDivs}`);
    console.log(`Total Semantic tags: ${semanticTags}`);
    console.log(`Total absolute positions: ${posAbsoluteCount}`);
    console.log(`Total floats: ${floatCount}`);
    console.log(`Total display:none: ${displayNoneCount}`);
    console.log("\n--- Specific Violations ---");
    report.violations.forEach(v => console.log(v));
};

scanFiles();
