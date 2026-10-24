import React, { useEffect, useRef } from 'react';

interface ContourFieldCanvasProps {
  className?: string;
  color?: string; // CSS color string or token
  lineOpacity?: number;
  lineScale?: number;
  lineCount?: number;
  waveSpeed?: number;
  waveAmount?: number;
}

/**
 * Procedural contour backdrop implementing the analytic 4-sine marching squares field
 * from the creative template specification.
 */
export const ContourFieldCanvas: React.FC<ContourFieldCanvasProps> = ({
  className = 'absolute inset-0 pointer-events-none',
  color = 'rgba(2, 210, 227, 0.12)',
  lineOpacity = 0.85,
  lineScale = 3.8,
  lineCount = 2.5,
  waveSpeed = 1.4,
  waveAmount = 0.35,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let startTime: number | null = null;
    const CELLS = 84; // 84 grid cells for smooth performance & clean resolution

    // Continuous 4-harmonic analytic scalar field
    const field = (x: number, y: number, t: number) => {
      let f = Math.sin(x * 1.0 + t * 0.6) * 0.5;
      f += Math.sin(y * 0.85 - t * 0.45) * 0.45;
      f += Math.sin((x + y) * 0.65 + t * 0.35) * 0.35;
      f += Math.sin((x - y) * 0.95 - t * 0.55) * 0.25;
      return f * 0.5 + 0.5;
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = (now: number) => {
      if (startTime === null) startTime = now;
      const t = ((now - startTime) / 1000) * waveSpeed;

      const width = canvas.clientWidth || 1440;
      const height = canvas.clientHeight || 800;
      if (width <= 0 || height <= 0) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const cols = width >= height ? CELLS : Math.max(8, Math.round((CELLS * width) / height));
      const rows = Math.max(8, Math.round((cols * height) / width));
      const stepX = width / cols;
      const stepY = height / rows;
      const aspect = width / height;

      const values = new Float32Array((cols + 1) * (rows + 1));
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          const nx = ((i / cols) * 2 - 1) * aspect * lineScale;
          const ny = ((j / rows) * 2 - 1) * lineScale;
          const qx = nx + Math.sin(ny * 0.8 + t * 0.7) * waveAmount;
          const qy = ny + Math.cos(nx * 0.7 - t * 0.6) * waveAmount;
          values[j * (cols + 1) + i] = field(qx, qy, t) * lineCount;
        }
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = lineOpacity;
      ctx.beginPath();

      const segment = (p: [number, number], q: [number, number]) => {
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(q[0], q[1]);
      };

      // Marching squares algorithm
      for (let level = 0.5; level < lineCount; level += 1) {
        for (let j = 0; j < rows; j++) {
          for (let i = 0; i < cols; i++) {
            const a = values[j * (cols + 1) + i];
            const b = values[j * (cols + 1) + i + 1];
            const c = values[(j + 1) * (cols + 1) + i + 1];
            const d = values[(j + 1) * (cols + 1) + i];

            const index =
              (a > level ? 8 : 0) |
              (b > level ? 4 : 0) |
              (c > level ? 2 : 0) |
              (d > level ? 1 : 0);

            if (index === 0 || index === 15) continue;

            const x0 = i * stepX;
            const y0 = j * stepY;

            const top: [number, number] = [x0 + stepX * ((level - a) / (b - a || 1e-5)), y0];
            const right: [number, number] = [x0 + stepX, y0 + stepY * ((level - b) / (c - b || 1e-5))];
            const bottom: [number, number] = [x0 + stepX * ((level - d) / (c - d || 1e-5)), y0 + stepY];
            const left: [number, number] = [x0, y0 + stepY * ((level - a) / (d - a || 1e-5))];

            switch (index) {
              case 1:
              case 14:
                segment(left, bottom);
                break;
              case 2:
              case 13:
                segment(bottom, right);
                break;
              case 3:
              case 12:
                segment(left, right);
                break;
              case 4:
              case 11:
                segment(top, right);
                break;
              case 6:
              case 9:
                segment(top, bottom);
                break;
              case 7:
              case 8:
                segment(left, top);
                break;
              case 5:
                segment(left, top);
                segment(bottom, right);
                break;
              case 10:
                segment(left, bottom);
                segment(top, right);
                break;
            }
          }
        }
      }

      ctx.stroke();
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, lineOpacity, lineScale, lineCount, waveSpeed, waveAmount]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
};
