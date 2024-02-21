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


//funcion de proteccion de cv
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const DOWNLOAD_LIMIT = 1;
const DOWNLOADS_FILE = path.join(__dirname, 'downloads.json');

function getDownloads() {
  let downloads;
  try {
    const rawData = fs.readFileSync(DOWNLOADS_FILE);
    downloads = JSON.parse(rawData);
  } catch (err) {
    downloads = {};
  }
  return downloads;
}

function saveDownloads(downloads) {
  const data = JSON.stringify(downloads, null, 2);
  fs.writeFileSync(DOWNLOADS_FILE, data);
}

app.get('/pdf/CV_Jesus David Julio Romero.pdf', (req, res) => {
  const downloads = getDownloads();
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const companyDownloads = downloads[ip] || { count: 0, timestamp: Date.now() };

  if (companyDownloads.count >= DOWNLOAD_LIMIT) {
    res.status(403).send('Download limit reached for your company.');
    return;
  }

  const filePath = path.join(__dirname, 'pdf', 'CV_Jesus_David_Julio_Romero.pdf');
  res.download(filePath, 'CV_Jesus_David_Julio_Romero.pdf');

  companyDownloads.count++;
  companyDownloads.timestamp = Date.now();
  downloads[ip] = companyDownloads;
  saveDownloads(downloads);
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Download CV</title>
      </head>
      <body>
        <div class="button">
          <a id="download-cv-link" href="/pdf/CV_Jesus David Julio Romero.pdf">
            <button id="download-cv-button">Download CV</button>
          </a>
        </div>
        <script>
          const link = document.getElementById('download-cv-link');
          const button = document.getElementById('download-cv-button');

          button.addEventListener('click', () => {
            link.download = 'CV_Jesus_David_Julio_Romero.pdf';
            button.disabled = true;
          });

          //Agregue un mensaje de advertencia para intentos de descarga de terceros
          link.addEventListener('click', (event) => {
            if (event.which !== 1) {
              alert('Third-party download attempts are not allowed.');
              event.preventDefault();
            }
          });
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

