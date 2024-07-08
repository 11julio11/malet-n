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

//-----------------------------menu de  navegacion---------------------------//

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

// Importación de módulos necesarios
import express from 'express'; // Importa Express, un framework web para Node.js
const app = express(); // Crea una instancia de la aplicación Express
const fs = require('fs'); // Importa el módulo 'fs' para trabajar con el sistema de archivos
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos

// Definición de constantes
const DOWNLOADS_FILE = join(__dirname, 'downloads.json'); // Ruta del archivo para guardar registros de descargas

// Función para obtener las descargas registradas
function getDownloads() {
  try {
    const rawData = readFileSync(DOWNLOADS_FILE); // Lee el archivo de registros de descargas
    return JSON.parse(rawData); // Parsea el contenido del archivo JSON
  } catch (err) {
    // Si hay un error al leer el archivo o el archivo no existe, se retorna un objeto vacío
    return {};
  }
}

// Función para guardar las descargas registradas
function saveDownloads(downloads) {
  const data = JSON.stringify(downloads, null, 2); // Convierte los registros de descargas a formato JSON
  writeFileSync(DOWNLOADS_FILE, data); // Escribe los registros en el archivo
}

// Ruta para descargar el CV con reCAPTCHA
app.get('/pdf/CV_Jesus_David_Julio_Romero.pdf', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // Obtiene la dirección IP del cliente
  const downloads = getDownloads(); // Obtiene los registros de descargas

  if (downloads[ip]) {
    // Si la dirección IP ya tiene un registro de descarga, significa que ya se descargó el CV
    res.status(403).send('El CV ya ha sido descargado.'); // Envía un código de estado 403 (Prohibido)
    return;
  }

  const filePath = path.join(__dirname, 'pdf', 'CV_Jesus_David_Julio_Romero.pdf'); // Ruta del archivo CV
  res.download(filePath, 'CV_Jesus_David_Julio_Romero.pdf', () => {
    // Descarga el archivo CV y luego ejecuta esta función de devolución de llamada
    // Registra la descarga una vez que se ha completado
    downloads[ip] = true; // Registra la descarga para la dirección IP actual
    saveDownloads(downloads); // Guarda los registros actualizados en el archivo
  });
});

// Ruta de inicio
app.get('/', (req, res) => {
  // Maneja las solicitudes GET a la ruta de inicio
  res.send(`
    <html>
      <head>
        <title>Download CV</title>
        <script src="https://www.google.com/recaptcha/api.js?render=TU_SITE_KEY"></script>
        <script>
          // Función para manejar la descarga del CV con reCAPTCHA
          function handleDownload() {
            grecaptcha.ready(function() {
              // Reemplaza TU_SITE_KEY con tu clave de sitio de reCAPTCHA
              grecaptcha.execute('TU_SITE_KEY', { action: 'download_cv' }).then(function(token) {
                // Aquí puedes realizar la descarga del CV si el reCAPTCHA se completó correctamente
                // Por ejemplo, redirigir al endpoint '/pdf/CV_Jesus_David_Julio_Romero.pdf' donde se encuentra el archivo PDF.
                window.location.href = '/pdf/CV_Jesus_David_Julio_Romero.pdf?token=' + token;
              });
            });
          }
        </script>
      </head>
      <body>
        <div class="button">
          <button id="download-cv-button" onclick="handleDownload()">Download CV</button>
        </div>
      </body>
    </html>
  `); // Envía una respuesta HTML con un botón de descarga y scripts de cliente
});

// Iniciar el servidor en el puerto 5500
app.listen(5500, () => {
  console.log('Servidor escuchando en el puerto 5500'); // Imprime un mensaje en la consola al iniciar el servidor
});


//-------------------funcionamiento del recaptcha--------///

