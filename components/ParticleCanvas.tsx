"use client";
import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    type Shape = "star" | "circle" | "sparkle";

    class Particle {
      x: number; y: number; size: number;
      speedX: number; speedY: number;
      opacity: number; opacitySpeed: number;
      color: string; shape: Shape; rotation: number; rotSpeed: number;

      constructor() {
        this.x = Math.random() * (canvas?.width ?? window.innerWidth);
        this.y = Math.random() * (canvas?.height ?? window.innerHeight);
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = -(Math.random() * 0.5 + 0.1);
        this.opacity = Math.random() * 0.5 + 0.1;
        this.opacitySpeed = (Math.random() > 0.5 ? 1 : -1) * 0.004;
        const colors = ["#c9a84c", "#4a7c35", "#a0c080", "#e2c87a", "#ffffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        const shapes: Shape[] = ["star", "circle", "sparkle"];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.04;
      }

      drawStar(c: CanvasRenderingContext2D, x: number, y: number, r: number) {
        const spikes = 4, innerR = r * 0.4;
        c.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const angle = (i * Math.PI) / spikes + this.rotation;
          const rad = i % 2 === 0 ? r : innerR;
          i === 0 ? c.moveTo(x + rad * Math.cos(angle), y + rad * Math.sin(angle))
                  : c.lineTo(x + rad * Math.cos(angle), y + rad * Math.sin(angle));
        }
        c.closePath();
        c.fill();
      }

      drawSparkle(c: CanvasRenderingContext2D, x: number, y: number, r: number) {
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2 + this.rotation;
          c.beginPath();
          c.moveTo(x, y);
          c.lineTo(x + r * 1.5 * Math.cos(angle), y + r * 1.5 * Math.sin(angle));
          c.strokeStyle = this.color;
          c.globalAlpha = this.opacity;
          c.lineWidth = this.size * 0.4;
          c.stroke();
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        this.opacity += this.opacitySpeed;
        if (this.opacity <= 0.05 || this.opacity >= 0.6) this.opacitySpeed *= -1;
        const w = canvas?.width ?? window.innerWidth;
        const h = canvas?.height ?? window.innerHeight;
        if (this.y < -10) { this.y = h + 10; this.x = Math.random() * w; }
        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.globalAlpha = this.opacity;
        c.fillStyle = this.color;
        if (this.shape === "circle") {
          c.beginPath();
          c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          c.fill();
        } else if (this.shape === "star") {
          this.drawStar(c, this.x, this.y, this.size);
        } else {
          this.drawSparkle(c, this.x, this.y, this.size);
        }
        c.restore();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(ctx); });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
