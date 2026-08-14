import { useState, useEffect } from 'react'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="scroll-button">
            <a
                href="#home"
                style={{ display: isVisible ? 'block' : 'none' }}
            >
                <i className="fas fa-arrow-up"></i>
            </a>
        </div>
    )
}

export default ScrollToTop
