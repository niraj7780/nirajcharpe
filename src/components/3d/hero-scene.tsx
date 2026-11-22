'use client';

import * as React from 'react';

export function HeroScene() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Sphere Points
    const numPoints = 180;
    const radius = Math.min(width, height) * 0.38;
    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
      size: number;
    }

    const points: Point3D[] = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / numPoints);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      // Electric blue and violet accents
      const isElectricBlue = i % 3 === 0;
      const isViolet = i % 5 === 0;
      const color = isElectricBlue
        ? '#0066FF'
        : isViolet
        ? '#7C3AED'
        : '#00F0FF';

      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        color,
        size: Math.random() * 2 + 1.5,
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const rotY = (mouseX - width / 2) * 0.0001 + angleY;
      const rotX = (mouseY - height / 2) * 0.0001 + angleX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project and draw points
      const projectedPoints: { x: number; y: number; z: number; color: string; size: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate around Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate around X
        let y1 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        p.baseX = x1;
        p.baseY = y1;
        p.baseZ = z2;

        const fov = 400;
        const scale = fov / (fov + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y1 * scale;

        projectedPoints.push({
          x: px,
          y: py,
          z: z2,
          color: p.color,
          size: p.size * scale,
        });
      }

      // Sort points by depth for natural rendering
      projectedPoints.sort((a, b) => b.z - a.z);

      // Connect nearby points with delicate lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 45) {
            const alpha = (1 - dist / 45) * 0.22;
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw point nodes with glowing halos
      for (const p of projectedPoints) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);
        ctx.fill();

        if (p.size > 2.2) {
          ctx.fillStyle = 'rgba(0, 102, 255, 0.15)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

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
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[500px] flex items-center justify-center pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
      {/* Subtle overlay badge */}
      <div className="absolute bottom-4 right-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-500 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse"></span>
        Interactive 3D Geometry
      </div>
    </div>
  );
}
