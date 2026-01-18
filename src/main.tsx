import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </I18nProvider>
  </StrictMode>,
)
