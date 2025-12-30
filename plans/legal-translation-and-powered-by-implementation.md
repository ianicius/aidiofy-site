# Implementation Plan: Legal Page Translation & "Powered By" Section

## Overview
This plan details the implementation of:
1. Translation of Polish text on Privacy Policy and Terms of Use pages to all supported languages
2. Addition of "Powered by" section with ElevenLabs, Inworld, and Gemini branding on main pages and language-specific pages (NOT on Privacy Policy or Terms of Use)
3. SEO optimization of all new content

## Current State
- Polish text is hardcoded in `src/components/legal/LegalLayout.tsx` (lines 24, 33-36)
- Project has i18n system with 10 languages: en, pl, de, es, fr, it, ja, ko, pt, zh-CN
- Legal pages use separate `LegalLayout` component
- Main pages use `Footer` component

## Implementation Steps

### Step 1: Update i18n Types
**File:** `src/i18n/types.ts`

Add a new `legal` section to the `Copy` type:

```typescript
legal: {
  description: string;
  backToHome: string;
  poweredBy: string;
  elevenLabs: string;
  inworld: string;
  gemini: string;
};
```

### Step 2: Add Translations to All Locale Files

#### English (`src/i18n/locales/en.ts`)
```typescript
legal: {
  description: "This document describes the rules for using AIdiofy and how user data is processed. We value transparency and security, so we encourage you to review the content carefully.",
  backToHome: "Back to homepage",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Polish (`src/i18n/locales/pl.ts`)
```typescript
legal: {
  description: "Poniższy dokument opisuje zasady korzystania z AIdiofy oraz sposób przetwarzania danych użytkowników. Dbamy o przejrzystość i bezpieczeństwo, dlatego zachęcamy do dokładnego zapoznania się z treścią.",
  backToHome: "Powrót do strony głównej",
  poweredBy: "Wspierane przez",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### German (`src/i18n/locales/de.ts`)
```typescript
legal: {
  description: "Dieses Dokument beschreibt die Nutzungsbedingungen von AIdiofy und die Verarbeitung von Benutzerdaten. Wir legen Wert auf Transparenz und Sicherheit und empfehlen Ihnen, den Inhalt sorgfältig zu lesen.",
  backToHome: "Zurück zur Startseite",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Spanish (`src/i18n/locales/es.ts`)
```typescript
legal: {
  description: "Este documento describe las reglas de uso de AIdiofy y cómo se procesan los datos de los usuarios. Valoramos la transparencia y la seguridad, por lo que le recomendamos revisar cuidadosamente el contenido.",
  backToHome: "Volver a la página de inicio",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### French (`src/i18n/locales/fr.ts`)
```typescript
legal: {
  description: "Ce document décrit les règles d'utilisation d'AIdiofy et le traitement des données des utilisateurs. Nous valorisons la transparence et la sécurité, nous vous encourageons donc à examiner attentivement le contenu.",
  backToHome: "Retour à l'accueil",
  poweredBy: "Propulsé par",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Italian (`src/i18n/locales/it.ts`)
```typescript
legal: {
  description: "Questo documento descrive le regole per l'utilizzo di AIdiofy e il modo in cui vengono elaborati i dati degli utenti. Apprezziamo la trasparenza e la sicurezza, quindi ti incoraggiamo a leggere attentamente il contenuto.",
  backToHome: "Torna alla home page",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Japanese (`src/i18n/locales/ja.ts`)
```typescript
legal: {
  description: "このドキュメントは、AIdiofyの利用規則とユーザーデータの処理方法について説明しています。透明性と安全性を重視しているため、内容をよくお読みいただくことをお勧めします。",
  backToHome: "ホームに戻る",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Korean (`src/i18n/locales/ko.ts`)
```typescript
legal: {
  description: "이 문서는 AIdiofy 사용 규칙과 사용자 데이터 처리 방식을 설명합니다. 투명성과 보안을 중요시하므로 내용을 주의 깊게 검토하시기 바랍니다.",
  backToHome: "홈페이지로 돌아가기",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Portuguese (`src/i18n/locales/pt.ts`)
```typescript
legal: {
  description: "Este documento descreve as regras de uso do AIdiofy e como os dados dos usuários são processados. Valorizamos a transparência e a segurança, por isso incentivamos você a revisar cuidadosamente o conteúdo.",
  backToHome: "Voltar à página inicial",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

#### Chinese Simplified (`src/i18n/locales/zh-CN.ts`)
```typescript
legal: {
  description: "本文件描述了使用AIdiofy的规则以及用户数据的处理方式。我们重视透明度和安全性，因此建议您仔细阅读内容。",
  backToHome: "返回首页",
  poweredBy: "Powered by",
  elevenLabs: "ElevenLabs",
  inworld: "Inworld",
  gemini: "Gemini",
},
```

### Step 3: Update LegalLayout Component
**File:** `src/components/legal/LegalLayout.tsx`

Changes:
1. Import `useI18n` hook
2. Replace hardcoded Polish text with i18n translations

```typescript
import type { FC, ReactNode } from "react";
import { Logo } from "../Logo";
import { useI18n } from "../i18n";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export const LegalLayout: FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  const { copy } = useI18n();
  
  return (
    <div className="min-h-screen w-full bg-background-dark text-text-main">
      <header className="w-full border-b border-border-subtle/60 bg-background-dark/90 backdrop-blur-lg sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3 text-text-main font-bold text-xl">
            <Logo className="w-9 h-9" />
            AIdiofy
          </a>
          <a
            href="#/"
            className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            aria-label="Back to homepage"
          >
            {copy.legal.backToHome}
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-10 md:mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Last updated: {lastUpdated}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-main">{title}</h1>
          <p className="text-base text-text-muted">
            {copy.legal.description}
          </p>
        </div>

        <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-10 shadow-glow-obsidian space-y-10 text-sm md:text-base leading-relaxed text-text-muted">
          {children}
        </div>
      </main>
    </div>
  );
};
```

### Step 4: Update Footer Component
**File:** `src/components/Footer.tsx`

Add "Powered by" section at the bottom:

```typescript
import type { FC } from "react";
import { Logo } from "./Logo";
import { useI18n } from "../i18n";

export const Footer: FC = () => {
  const { copy } = useI18n();
  return (
    <footer className="border-t border-border-subtle/60 py-12 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold text-text-main">AIdiofy</span>
        </div>
        
        <div className="flex gap-8 text-sm text-text-muted">
          <a href="#/privacy-policy" className="hover:text-text-main transition-colors">{copy.footer.privacy}</a>
          <a href="#/terms-of-use" className="hover:text-text-main transition-colors">{copy.footer.terms}</a>
          <a href="mailto:rj@aidiofy.com" className="hover:text-text-main transition-colors">{copy.footer.contact}</a>
        </div>

        <p className="text-xs text-text-muted">
          {copy.footer.copyright}
        </p>

        <div className="mt-4 pt-4 border-t border-border-subtle/30 w-full flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-text-muted">{copy.legal.poweredBy}</p>
          <div className="flex items-center gap-6 text-text-muted">
            <span className="text-sm hover:text-text-main transition-colors" title="AI Voice Technology">
              {copy.legal.elevenLabs}
            </span>
            <span className="text-sm hover:text-text-main transition-colors" title="AI Character Platform">
              {copy.legal.inworld}
            </span>
            <span className="text-sm hover:text-text-main transition-colors" title="Google AI">
              {copy.legal.gemini}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

## SEO Optimization Details

### 1. Semantic HTML
- Use `<footer>` element for the "Powered by" section
- Use proper heading hierarchy (already implemented)
- Use `<span>` with `title` attributes for company names

### 2. Accessibility & SEO
- `title` attributes provide context for screen readers and search engines
- Descriptive alt text would be added if using actual logos
- ARIA labels already present in navigation

### 3. Keywords in Translations
The translations include relevant keywords:
- "AIdiofy" - brand name
- "user data" / "user data processing" - privacy-related terms
- "transparency and security" - trust signals
- Company names (ElevenLabs, Inworld, Gemini) - technology partners

### 4. Meta Tags (Future Enhancement)
Consider adding:
- Meta descriptions for legal pages
- Open Graph tags
- Schema.org markup for organization and legal documents

## Testing Checklist

After implementation:
- [ ] Verify Polish text is replaced with translations on legal pages
- [ ] Test all 10 languages on Privacy Policy page
- [ ] Test all 10 languages on Terms of Use page
- [ ] Verify "Powered by" section does NOT appear on legal pages
- [ ] Verify "Powered by" section appears on main page and all language-specific pages
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Verify accessibility with screen reader
- [ ] Test language switching functionality
- [ ] Validate HTML structure
- [ ] Check for console errors

## Notes

1. **Text-based approach**: Using company names instead of logos as requested. This is SEO-friendly and accessible.
2. **Future enhancement**: When logo assets are available, they can replace the text spans with `<img>` tags or SVG components.
3. **Title attributes**: Provide additional context for SEO and accessibility.
4. **Consistent styling**: "Powered by" section uses existing design tokens (colors, spacing, typography).
5. **Responsive design**: Flexbox layout adapts to different screen sizes.
6. **Scope limitation**: "Powered by" section only appears on main pages and language-specific pages, NOT on Privacy Policy or Terms of Use pages.

## File Changes Summary

1. `src/i18n/types.ts` - Add legal section type
2. `src/i18n/locales/en.ts` - Add English translations
3. `src/i18n/locales/pl.ts` - Add Polish translations
4. `src/i18n/locales/de.ts` - Add German translations
5. `src/i18n/locales/es.ts` - Add Spanish translations
6. `src/i18n/locales/fr.ts` - Add French translations
7. `src/i18n/locales/it.ts` - Add Italian translations
8. `src/i18n/locales/ja.ts` - Add Japanese translations
9. `src/i18n/locales/ko.ts` - Add Korean translations
10. `src/i18n/locales/pt.ts` - Add Portuguese translations
11. `src/i18n/locales/zh-CN.ts` - Add Chinese translations
12. `src/components/legal/LegalLayout.tsx` - Use i18n translations only
13. `src/components/Footer.tsx` - Add "Powered by" section

Total: 13 files to modify
