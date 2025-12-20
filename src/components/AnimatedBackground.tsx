import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            baseAlpha: number;
            activeAlpha: number;
            speed: number;
            offset: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1; // Random size between 1 and 3
                this.baseAlpha = 0.1; // Faint base visibility
                this.activeAlpha = Math.random() * 0.5 + 0.2; // Max brightness
                this.speed = Math.random() * 0.002 + 0.001; // Slow pulsation
                this.offset = Math.random() * Math.PI * 2; // Random starting phase
            }

            update(time: number) {
                // Sine wave pulsation for opacity
                const alpha = this.baseAlpha + Math.abs(Math.sin(time * this.speed + this.offset)) * (this.activeAlpha - this.baseAlpha);
                return alpha;
            }
        }

        const initParticles = () => {
            particles = [];
            // Create a grid of dots
            const spacing = 40; // Pixel spacing between dots
            const rows = Math.ceil(canvas.height / spacing);
            const cols = Math.ceil(canvas.width / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    // Add slight random offset to grid position for more organic look
                    const x = i * spacing;
                    const y = j * spacing;
                    particles.push(new Particle(x, y));
                }
            }
        };

        const draw = (time: number) => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                const alpha = p.update(time);
                // Use white dots for dark mode, black dots for light mode
                const r = theme === 'dark' ? 255 : 0;
                const g = theme === 'dark' ? 255 : 0;
                const b = theme === 'dark' ? 255 : 0;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run effect when theme changes to update color logic dynamically

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{
                zIndex: 0,
                opacity: theme === 'dark' ? 0.4 : 0.15 // Lower opacity for black dots in light mode
            }}
        />
    );
};

export default AnimatedBackground;
