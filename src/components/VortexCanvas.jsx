import { useEffect, useRef } from 'react';

const NUM_PARTICLES = 160;
const COLORS = ['#FFE680', '#D4AF37', '#AA820A', '#F5D061', '#FFFFFF'];

// Fondo animado de partículas doradas (canvas fijo detrás de todo el contenido).
export default function VortexCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let particles = [];
    let frameId = 0;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 3;
    }

    class StarParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.radius = Math.random() * Math.max(width, height) * 0.65 + 40;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.0012 + 0.0004;
        this.size = Math.random() * 2.2 + 0.8;
        this.alpha = Math.random() * 0.6 + 0.25;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }

      update() {
        this.angle += this.speed;
        this.radius -= 0.12;
        if (this.radius <= 10) {
          this.reset();
        }
      }

      draw() {
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * (this.radius * 0.42);

        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#D4AF37';
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < NUM_PARTICLES; i += 1) {
        particles.push(new StarParticle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      frameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="vortex-canvas" ref={canvasRef} aria-hidden="true" />;
}
