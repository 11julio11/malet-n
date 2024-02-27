// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

//funcionamiento del cv
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const DOWNLOAD_LIMIT = 2;
const DOWNLOADS_FILE = path.join(__dirname, 'downloads.json');

// Función para obtener las descargas registradas
function getDownloads() {
  try {
    const rawData = fs.readFileSync(DOWNLOADS_FILE);
    return JSON.parse(rawData);
  } catch (err) {
    // Si hay un error al leer el archivo o el archivo no existe, se retorna un objeto vacío
    return {};
  }
}

// Función para guardar las descargas registradas
function saveDownloads(downloads) {
  const data = JSON.stringify(downloads, null, 2);
  fs.writeFileSync(DOWNLOADS_FILE, data);
}

// Ruta para descargar el CV
app.get('/pdf/CV_Jesus_David_Julio_Romero.pdf', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const downloads = getDownloads();
  const companyDownloads = downloads[ip] || { count: 0, timestamp: Date.now() };

  if (companyDownloads.count >= DOWNLOAD_LIMIT) {
    res.status(403).send('Límite de descargas alcanzado para su empresa.');
    return;
  }

  const filePath = path.join(__dirname, 'pdf', 'CV_Jesus_David_Julio_Romero.pdf');
  res.download(filePath, 'CV_Jesus_David_Julio_Romero.pdf', () => {
    // Incrementar el contador de descargas después de que se haya completado la descarga
    companyDownloads.count++;
    companyDownloads.timestamp = Date.now();
    downloads[ip] = companyDownloads;
    saveDownloads(downloads);
  });
});

// Ruta de inicio
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Download CV</title>
      </head>
      <body>
        <div class="button">
          <a id="download-cv-link" href="/pdf/CV_Jesus_David_Julio_Romero.pdf">
            <button id="download-cv-button">Descargar CV</button>
          </a>
        </div>
        <script>
          const link = document.getElementById('download-cv-link');
          const button = document.getElementById('download-cv-button');

          button.addEventListener('click', () => {
            link.download = 'CV_Jesus_David_Julio_Romero.pdf';
            button.disabled = true;
          });

          link.addEventListener('click', (event) => {
            if (event.which !== 1) {
              alert('No se permiten intentos de descarga de terceros.');
              event.preventDefault();
            }
          });
        </script>
      </body>
    </html>
  `);
});

// Iniciar el servidor en el puerto 3000
app.listen(5500, () => {
  console.log('Servidor escuchando en el puerto 5500');
});


