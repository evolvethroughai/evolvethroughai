/** Share one decoder between decorative videos near section boundaries. */
const candidates = new Map<HTMLVideoElement, boolean>();
const continuous = new Set<HTMLVideoElement>();
function updatePlayback() {
  const eligible = [...candidates].filter(([video, visible]) => visible && !continuous.has(video) && !document.hidden && video.isConnected);
  eligible.sort(([a], [b]) => {
    const distance = (video: HTMLVideoElement) => {
      const r = video.getBoundingClientRect();
      return Math.abs((r.top + r.bottom) / 2 - innerHeight / 2);
    };
    return distance(a) - distance(b);
  });
  const selected = eligible[0]?.[0];
  for (const [video] of candidates) {
    if (!document.hidden && (continuous.has(video) || video === selected)) { if (video.paused) void video.play().catch(() => {}); }
    else if (!video.paused) video.pause();
  }
}
export function requestBackgroundPlayback(video: HTMLVideoElement, visible: boolean, keepPlaying = false) {
  if (keepPlaying) continuous.add(video); else continuous.delete(video);
  candidates.set(video, visible);
  updatePlayback();
}
export function releaseBackgroundPlayback(video: HTMLVideoElement) {
  candidates.delete(video);
  continuous.delete(video);
  video.pause();
  updatePlayback();
}
window.addEventListener('evolve:scroll-activity', updatePlayback);
if (import.meta.hot) import.meta.hot.dispose(() => window.removeEventListener('evolve:scroll-activity', updatePlayback));
