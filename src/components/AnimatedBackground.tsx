import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{
                zIndex: 0,
                opacity: 0.4 // Global opacity control
            }}
        />
    );
};

export default AnimatedBackground;
