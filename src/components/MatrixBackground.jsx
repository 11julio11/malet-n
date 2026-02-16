import { useEffect, useRef } from 'react'

function MatrixBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const characters = '01'
        const fontSize = 16
        const columns = Math.floor(canvas.width / fontSize)
        const drops = new Array(columns).fill(1)

        const drawMatrix = () => {
            // Semi-transparent black to create trailing effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length))

                // Mix Neon Green and Fuchsia Pink for the new theme
                ctx.fillStyle = Math.random() > 0.5 ? '#39FF14' : '#FF007F'
                ctx.font = `${fontSize}px monospace`
                ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }
            animationFrameId = requestAnimationFrame(drawMatrix)
        }

        drawMatrix()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.15, // Subtle effect
                pointerEvents: 'none'
            }}
        />
    )
}

export default MatrixBackground
