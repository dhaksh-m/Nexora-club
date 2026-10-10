'use client';

import React, { useEffect, useRef } from 'react';

export const OrbitalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Node particles
    const particleCount = Math.min(Math.floor(width / 18), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#8B35FF' : '#55D8FF',
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // Mouse interactive coordinates
    const mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.003;

      const centerX = width / 2;
      const centerY = height * 0.45;

      // 1. Orbital Ring Arcs
      ctx.save();
      ctx.translate(centerX, centerY);

      // Ring 1 (Purple)
      ctx.beginPath();
      ctx.rotate(angle);
      ctx.ellipse(0, 0, 280, 100, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 53, 255, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([15, 10]);
      ctx.stroke();

      // Ring 2 (Electric Blue / Cyan)
      ctx.beginPath();
      ctx.rotate(-angle * 1.5);
      ctx.ellipse(0, 0, 360, 140, -Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(85, 216, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([30, 15, 5, 15]);
      ctx.stroke();

      ctx.restore();

      // 2. Render particles & connections
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 53, 255, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if active
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(85, 216, 255, ${0.35 * (1 - mdist / 160)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
