import { SmoothScroll } from './components/SmoothScroll';
import { AccountProvider } from './auth/ConversationAccess';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './refinement.css';
import './brand-theme.css';
import './homepage-refinement.css';
import './immersive-milestone.css';
import './hero-motion.css';
import './components/HeaderRefinement.css';
import './premium-flow.css';
import './intelligent-aurora.css';

// A homepage reload starts at the hero rather than restoring a lower section.
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
if (navigation?.type === 'reload' && !new URLSearchParams(location.search).has('pathway')) {
  history.scrollRestoration = 'manual';
  history.replaceState(history.state, '', location.pathname + location.search);
  window.scrollTo({ top: 0, behavior: 'instant' });
}
createRoot(document.getElementById('root')!).render(<AccountProvider><SmoothScroll /><App /></AccountProvider>);


import './curated-backgrounds.css';

import './royal-green-theme.css';

import './hero-robot-video.css';

import './hero-graphite.css';
