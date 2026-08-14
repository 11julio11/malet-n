const fs = require('fs');

const shatterPath = 'C:/Mis_Proyectos(github)/malet-n/src/components/ShatterImage.jsx';
let shatterCode = fs.readFileSync(shatterPath, 'utf8');

shatterCode = shatterCode.replace(
    /onClick=\{\(\) => setIsAssembled\(!isAssembled\)\}/,
    `// El efecto ahora se hace solo (automatizado)`
);

shatterCode = shatterCode.replace(
    /useEffect\(\(\) => \{[\s\S]*?return \(\) => observer\.disconnect\(\);\s*\}, \[\]\);/,
    `useEffect(() => {
        let isMounted = true;
        let intervalId = null;
        let timeoutId = null;
        
        const triggerEffect = () => {
            if (!isMounted) return;
            setIsAssembled(false); // Desarmar
            timeoutId = setTimeout(() => {
                if (!isMounted) return;
                setIsAssembled(true); // Ensamblar
            }, 1200);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Esperar un poquito antes de disparar al entrar
                    setTimeout(triggerEffect, 500);
                    intervalId = setInterval(triggerEffect, 6000);
                } else {
                    if (intervalId) clearInterval(intervalId);
                    if (timeoutId) clearTimeout(timeoutId);
                }
            });
        }, { threshold: 0.3 }); 

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            isMounted = false;
            if (intervalId) clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);`
);

fs.writeFileSync(shatterPath, shatterCode);
console.log("ShatterImage automated.");
