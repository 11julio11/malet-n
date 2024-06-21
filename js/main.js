// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
};

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
};

// Cierre de la barra de navegación lateral cuando hacemos clic en los enlaces de navegación
let navLinksMenu = document.querySelectorAll(".navbar li a");
for (let i = 0; i < navLinksMenu.length; i++) {
  navLinksMenu[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  });
};



//---------------------------------funcionamiento del cv --------------------------//
// Importación de módulos necesarios
import express from 'express'; // Importa Express, un framework web para Node.js
const app = express(); // Crea una instancia de la aplicación Express
import { readFileSync, writeFileSync } from 'fs'; // Importa el módulo 'fs' para trabajar con el sistema de archivos
import { join } from 'path'; // Importa el módulo 'path' para manejar rutas de archivos

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

// Ruta para descargar el CV
app.get('/pdf/CV_Jesus_David_Julio_Romero.pdf', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // Obtiene la dirección IP del cliente
  const downloads = getDownloads(); // Obtiene los registros de descargas

  if (downloads[ip]) {
    // Si la dirección IP ya tiene un registro de descarga, significa que ya se descargó el CV
    res.status(403).send('El CV ya ha sido descargado.'); // Envía un código de estado 403 (Prohibido)
    return;
  }

  const filePath = join(__dirname, 'pdf', 'CV_Jesus_David_Julio_Romero.pdf'); // Ruta del archivo CV
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
      </head>
      <body>
        <div class="button">
          <a id="download-cv-link" href="/pdf/CV_Jesus_David_Julio_Romero.pdf" target="_blank" style="text-decoration: none;">
            <button id="download-cv-button" onclick="disableButton()">Download CV</button>
          </a>
        </div>
        <script>
          // Script de cliente para deshabilitar el botón de descarga después de hacer clic
          function disableButton() {
            const button = document.getElementById('download-cv-button'); // Obtiene el botón de descarga
            button.disabled = true; // Deshabilita el botón después de hacer clic
            button.innerHTML = 'Downloading...'; // Cambia el texto del botón para indicar la descarga en curso
          }
        </script>
      </body>
    </html>
  `); // Envía una respuesta HTML con un botón de descarga y scripts de cliente
});

// Iniciar el servidor en el puerto 5500
app.listen(5500, () => {
  console.log('Servidor escuchando en el puerto 5500'); // Imprime un mensaje en la consola al iniciar el servidor
});

//-------------------funcionamiento del recaptcha--------///

