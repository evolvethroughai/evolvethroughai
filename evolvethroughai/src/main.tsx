import { AboutPage } from './components/BrandJourney';
import { ScrollActivity } from './components/ScrollActivity';
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

// Refresh returns any pathway to the homepage hero, as requested.
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
if (navigation?.type === 'reload') {
  history.scrollRestoration = 'manual';
  const homeUrl = new URL(location.href);
  homeUrl.searchParams.delete('pathway');
  homeUrl.hash = '';
  history.replaceState(null, '', homeUrl.pathname + homeUrl.search);
  window.scrollTo({ top: 0, behavior: 'instant' });
}
createRoot(document.getElementById('root')!).render(<AccountProvider><ScrollActivity /><SmoothScroll />{location.pathname.replace(/\/$/, '') === '/about' ? <AboutPage /> : <App />}</AccountProvider>);


import './curated-backgrounds.css';

import './royal-green-theme.css';

import './hero-robot-video.css';

import './hero-graphite.css';

import './solutions-showcase.css';

import './site-stability.css';

import './pathway-readability.css';

import './components/BrandJourney.css';
