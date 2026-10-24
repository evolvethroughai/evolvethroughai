import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { CornerBrackets } from './CornerBrackets';
import { Server, Cpu, Cloud, ShieldCheck, Activity, Terminal, Sparkles, BookOpen } from 'lucide-react';

interface AiMeshHalftoneMapProps {
  onOpenSyllabusModal?: (programId: string) => void;
}

export const AiMeshHalftoneMap: React.FC<AiMeshHalftoneMapProps> = ({ onOpenSyllabusModal }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, active: false });
  const [telemetryStats, setTelemetryStats] = useState({
    activeGpus: 128,
    p99Latency: 14.2,
    tokenRate: 1480,
    meshHealth: 99.98,
  });

  // Nodes corresponding to the Evolve Through AI Multi-Cloud Infrastructure Mesh
  const MESH_NODES = [
    {
      id: 'azure',
      name: 'Azure EastUS2 Landing Zone',
      service: 'Private Link Hub-Spoke & Bicep Fleet',
      programId: 'azure',
      coords: [240, 210] as [number, number],
      role: 'Enterprise Cloud Ingress',
      telemetry: '0.8ms VPC Peering // Zero Public IP',
    },
    {
      id: 'aws',
      name: 'AWS EU-Central-1 VPC Mesh',
      service: 'Control Tower & Terragrunt Multi-Account',
      programId: 'aws',
      coords: [520, 160] as [number, number],
      role: 'Cross-Cloud Core Network',
      telemetry: 'Transit Gateway // IRSA Policy Enforced',
    },
    {
      id: 'k8s',
      name: 'Multi-Cloud EKS/AKS Cluster Fleet',
      service: 'Cilium CNI & ArgoCD Progressive GitOps',
      programId: 'flagship',
      coords: [820, 240] as [number, number],
      role: 'Zero-Trust Orchestration',
      telemetry: 'Canary Rollout 100% // 0 Pod Restarts',
    },
    {
      id: 'vllm',
      name: 'Sovereign H100 vLLM Inference Node',
      service: 'PagedAttention 4x H100 KV Cache Tuning',
      programId: 'forward-ai',
      coords: [1080, 190] as [number, number],
      role: 'Private Token Streamer',
      telemetry: 'TTFT 13.2ms // 142.8 tok/sec stream',
    },
    {
      id: 'mcp',
      name: 'Autonomous LangGraph Agent Swarm',
      service: 'Model Context Protocol (MCP) Tool Servers',
      programId: 'forward-ai',
      coords: [960, 420] as [number, number],
      role: 'Self-Healing Remediation',
      telemetry: 'eBPF Telemetry Loop // Kernel Attestation',
    },
    {
      id: 'sre',
      name: 'Staff SRE Defense & RFC Post',
      service: 'Incident Triage & Oral Architectural Defense',
      programId: 'career-defense',
      coords: [440, 440] as [number, number],
      role: 'Staff Command Post',
      telemetry: 'SEV-1 Simulator Ready // 14 Verified Repos',
    },
  ];

  // Loop auto-rotation of active highlighted node
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % MESH_NODES.length);
      setTelemetryStats({
        activeGpus: 128,
        p99Latency: Number((13.8 + Math.random() * 1.5).toFixed(1)),
        tokenRate: Math.round(1450 + Math.random() * 80),
        meshHealth: 99.98,
      });
    }, 3800);
    return () => clearInterval(timer);
  }, [MESH_NODES.length]);

  // Canvas render: Halftone grid + interactive reticle + animated circuit trace
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lapTime = 0;
    const PITCH_X = 14;
    const PITCH_Y = 14;

    const handleResize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : 1200;
      const h = parent ? parent.clientHeight : 560;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const width = canvas.clientWidth || 1200;
      const height = canvas.clientHeight || 560;
      ctx.clearRect(0, 0, width, height);

      lapTime += 0.008;
      if (lapTime > 1) lapTime = 0;

      // 1. Draw Halftone Compute Grid Points
      const cols = Math.floor(width / PITCH_X);
      const rows = Math.floor(height / PITCH_Y);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * PITCH_X + PITCH_X / 2;
          const y = r * PITCH_Y + PITCH_Y / 2;

          // Distance from mouse for reticle chequer transformation
          const distToMouse = Math.hypot(x - mousePos.x, y - mousePos.y);
          const isNearMouse = mousePos.active && distToMouse < 80;

          // Check if close to crosshair lattice row/column
          const isCrosshair =
            mousePos.active &&
            (Math.abs(x - mousePos.x) < PITCH_X / 2 || Math.abs(y - mousePos.y) < PITCH_Y / 2) &&
            distToMouse < 260;

          if (isNearMouse) {
            // Square up into cyan/white chequer as described in the template
            const t = 1 - distToMouse / 80;
            const size = PITCH_X * (0.6 + t * 0.4);
            const isFilled = (r + c) % 2 === 0;

            if (isFilled) {
              ctx.fillStyle = t > 0.7 ? '#ffffff' : '#02d2e3';
              ctx.fillRect(x - size / 2, y - size / 2, size, size);
            }
          } else if (isCrosshair) {
            // Linear arm crosshair element
            const alpha = 0.5 * (1 - distToMouse / 260);
            ctx.fillStyle = `rgba(2, 210, 227, ${alpha})`;
            ctx.fillRect(x - 2, y - 2, 4, 4);
          } else {
            // Standard ambient dot
            ctx.fillStyle = 'rgba(77, 77, 77, 0.45)';
            ctx.beginPath();
            ctx.arc(x, y, 1.25, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 2. Draw Circuit Mesh Dataflow Path (connecting nodes)
      ctx.save();
      ctx.beginPath();
      const nodeCount = MESH_NODES.length;
      const pts = MESH_NODES.map((n) => {
        // Scaled coordinates relative to 1200x560 canvas
        const sx = (n.coords[0] / 1200) * width;
        const sy = (n.coords[1] / 560) * height;
        return [sx, sy] as [number, number];
      });

      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i][0], pts[i][1]);
      }
      ctx.closePath();

      // Ambient guide track
      ctx.strokeStyle = 'rgba(2, 210, 227, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.restore();

      // 3. Hot filament trace along the circuit
      // Calculate current position on circuit
      const totalSegs = pts.length;
      const currentSeg = (lapTime * totalSegs) % totalSegs;
      const segIndex = Math.floor(currentSeg);
      const segFrac = currentSeg - segIndex;
      const p1 = pts[segIndex];
      const p2 = pts[(segIndex + 1) % totalSegs];
      const sparkX = p1[0] + (p2[0] - p1[0]) * segFrac;
      const sparkY = p1[1] + (p2[1] - p1[1]) * segFrac;

      // Additive spark & filament bloom
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      // Bloom glow
      const bloom = ctx.createRadialGradient(sparkX, sparkY, 0, sparkX, sparkY, 28);
      bloom.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      bloom.addColorStop(0.3, 'rgba(2, 210, 227, 0.6)');
      bloom.addColorStop(1, 'rgba(2, 210, 227, 0)');
      ctx.fillStyle = bloom;
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, 28, 0, Math.PI * 2);
      ctx.fill();

      // Sharp core spark
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 4. Central Hub with concentric rings and radar ping
      const hubX = width * 0.55;
      const hubY = height * 0.52;

      ctx.save();
      // Outer ghost ring
      ctx.strokeStyle = 'rgba(77, 77, 77, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(hubX, hubY, 90, 0, Math.PI * 2);
      ctx.stroke();

      // Inner hub ring
      ctx.strokeStyle = 'rgba(2, 210, 227, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hubX, hubY, 36, 0, Math.PI * 2);
      ctx.stroke();

      // Expanding radar ping
      const pingPhase = (Date.now() / 3200) % 1;
      const pingRadius = 10 + pingPhase * 110;
      const pingAlpha = 0.5 * Math.pow(1 - pingPhase, 2);
      ctx.strokeStyle = `rgba(2, 210, 227, ${pingAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hubX, hubY, pingRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos, MESH_NODES]);

  const activeNode = MESH_NODES[activeNodeIndex];

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => {
        setMousePos((prev) => ({ ...prev, active: false }));
      }}
      className="relative w-full h-[580px] rounded-3xl bg-[#070b18] border border-cyan-500/30 overflow-hidden shadow-2xl flex flex-col justify-between p-6 select-none"
    >
      {/* Corner Brackets on the frame */}
      <CornerBrackets strokeColor="#02d2e3" size={14} strokeWidth={1.5} />

      {/* Halftone Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Top Header Row of the Instrument Panel */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-tech font-bold text-sm tracking-wide text-white uppercase">
                Enterprise Infrastructure Mesh &amp; AI Flight Deck
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 border border-cyan-400 text-cyan-300">
                LIVE TELEMETRY
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Interactive 8,004-Node Halftone Compute Grid • Move cursor to inspect
            </span>
          </div>
        </div>

        {/* Live Gauges */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 flex items-center gap-2">
            <span className="text-slate-400">P99:</span>
            <span className="text-cyan-300 font-bold">{telemetryStats.p99Latency}ms</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 flex items-center gap-2">
            <span className="text-slate-400">CLUSTER:</span>
            <span className="text-emerald-400 font-bold">{telemetryStats.meshHealth}% SLO</span>
          </div>
          <div className="hidden sm:flex px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 items-center gap-2">
            <span className="text-slate-400">TOKENS:</span>
            <span className="text-violet-300 font-bold">{telemetryStats.tokenRate} t/s</span>
          </div>
        </div>
      </div>

      {/* Node Marker Buttons placed on the canvas */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {MESH_NODES.map((node, idx) => {
          const isSelected = activeNodeIndex === idx;
          return (
            <div
              key={node.id}
              style={{
                left: `${(node.coords[0] / 1200) * 100}%`,
                top: `${(node.coords[1] / 560) * 100}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <button
                onClick={() => {
                  setActiveNodeIndex(idx);
                  if (onOpenSyllabusModal) onOpenSyllabusModal(node.programId);
                }}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-950/90 border-cyan-400 shadow-[0_0_20px_rgba(2,210,227,0.4)] scale-105'
                    : 'bg-[#060a17]/90 border-white/15 hover:border-cyan-400/50 hover:bg-slate-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 animate-ping' : 'bg-slate-500'}`} />
                <span className="font-tech font-bold text-xs uppercase text-slate-200 group-hover:text-cyan-300">
                  {node.name.split(' ')[0]}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Telemetry HUD Box */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1f]/90 border border-cyan-500/30 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-tech font-bold text-sm text-white">
                {activeNode.name}
              </span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                {activeNode.role}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 mt-0.5">
              {activeNode.service} • {activeNode.telemetry}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {onOpenSyllabusModal && (
            <button
              onClick={() => onOpenSyllabusModal(activeNode.programId)}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Inspect {activeNode.programId.toUpperCase()} Syllabus</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
