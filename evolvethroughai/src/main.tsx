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

createRoot(document.getElementById('root')!).render(<AccountProvider><App /></AccountProvider>);

