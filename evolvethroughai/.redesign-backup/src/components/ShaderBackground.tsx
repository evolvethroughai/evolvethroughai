import React, { useEffect, useRef, useState } from 'react';

export const ShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let gl: WebGLRenderingContext | null = null;
    try {
      gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    } catch {
      setWebglSupported(false);
      return;
    }

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    const syncSize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();
    window.addEventListener('resize', syncSize);

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;
        
        vec2 mouse = u_mouse / u_resolution.xy;
        float t = u_time * 0.22;

        float n1 = snoise(st * 1.5 + vec2(t * 0.25, t * 0.18));
        float n2 = snoise(st * 2.2 - vec2(t * 0.15, n1 * 0.35) + mouse * 0.15);
        float n3 = snoise(st * 3.0 + vec2(n2 * 0.45, t * 0.28));

        vec3 bgBase = vec3(0.031, 0.047, 0.086); // #080c16 deep midnight
        vec3 electricBlue = vec3(0.145, 0.388, 0.921); // #2563eb
        vec3 cyberCyan = vec3(0.023, 0.713, 0.831); // #06b6d4
        vec3 deepViolet = vec3(0.545, 0.361, 0.965); // #8b5cf6

        float f1 = smoothstep(-0.25, 0.85, n1 + n2 * 0.5);
        float f2 = smoothstep(0.15, 0.92, n2 * n3 + 0.28);
        float f3 = smoothstep(0.45, 0.98, n3);

        vec3 color = bgBase;
        color = mix(color, electricBlue * 0.7, f1 * 0.55);
        color = mix(color, cyberCyan * 0.85, f2 * 0.6);
        color = mix(color, deepViolet * 0.85, f3 * 0.5);

        float vignette = smoothstep(1.6, 0.25, length(gl_FragCoord.xy / u_resolution.xy - 0.5));
        color *= (0.78 + 0.22 * vignette);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse = { x: nx * canvas.width, y: ny * canvas.height };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (time: number) => {
      if (!gl) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Dynamic Animated Ambient Glow Mesh (Guaranteed pure CSS fallback) */}
      <div className="absolute inset-0 bg-[#050811]" />
      
      {/* Floating Animated Kinetic Orbs */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[130px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-20 left-1/3 w-[650px] h-[650px] rounded-full bg-violet-600/15 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Subtle Dynamic Dot Matrix */}
      <div className="absolute inset-0 ai-dot-pattern opacity-40" />

      {/* WebGL Canvas Overlay (Renders generative simplex noise on top if supported) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none opacity-75 mix-blend-screen"
      />
    </div>
  );
};
