import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure any stale service workers or caches from previous deployments are unregistered and purged
if (typeof window !== 'undefined') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    }).catch(() => {
      // ignore
    });
  }
  if ('caches' in window) {
    caches.keys().then((names) => {
      for (const name of names) {
        caches.delete(name);
      }
    }).catch(() => {
      // ignore
    });
  }
}

createRoot(document.getElementById('root')!).render(<App />);
