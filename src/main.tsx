import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n'
import { resolveLocaleFromPathname, LOCALE_PATH_SEGMENT } from './i18n/locale'
import { HelmetProvider } from 'react-helmet-async';

const locale = resolveLocaleFromPathname(window.location.pathname);
const basename = locale === 'en' ? '' : `/${LOCALE_PATH_SEGMENT[locale]}`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <I18nProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
)
