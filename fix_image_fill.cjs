const fs = require('fs');

const aboutPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/About.jsx';
let aboutCode = fs.readFileSync(aboutPath, 'utf8');

// Replace the image style to fill the container and remove the duplicate inline border
aboutCode = aboutCode.replace(
    /<img src="\/img\/profile2\.jpg" alt="David Julio R\." style=\{\{ width: "100%", maxWidth: "480px", borderRadius: "12px", border: "1px solid var\(--primary-color\)", boxShadow: "0 0 20px rgba\(57, 255, 20, 0\.3\)" \}\} \/>/,
    '<img src="/img/profile2.jpg" alt="David Julio R." style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />'
);

fs.writeFileSync(aboutPath, aboutCode);
console.log("Image style fixed in About.jsx");
