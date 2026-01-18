/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./de/index.html",
    "./es/index.html",
    "./fr/index.html",
    "./it/index.html",
    "./ja/index.html",
    "./ko/index.html",
    "./pl/index.html",
    "./pt/index.html",
    "./zh-cn/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'background-dark': '#0a0a0b',
        'surface': '#141416',
        'surface-elevated': '#1c1c1f',
        'border-subtle': '#2a2a2e',

        // Accent Colors
        'primary': '#ff6b35',
        'primary-hover': '#ff7b4a',
        'secondary': '#ffb347',
        'secondary-hover': '#ffc266',
        'accent-crimson': '#dc143c',

        // Text Colors (WCAG AAA)
        'text-main': '#f5f5f7',
        'text-muted': '#a1a1a6',
        'text-tertiary': '#6e6e73',
        'text-disabled': '#48484a',

        // Glow Colors
        'glow-primary': 'rgba(255, 107, 53, 0.15)',
        'glow-secondary': 'rgba(255, 179, 71, 0.12)',
        'glow-ambient': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'SF Pro Text', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-3': ['28px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-accent-intense': '0 0 30px rgba(255, 107, 53, 0.5)',
        'glow-obsidian': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'glow-obsidian-subtle': '0 2px 12px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 2000ms ease-in-out infinite',
        'glow-pulse': 'glowPulse 3000ms ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-ember': 'linear-gradient(135deg, #ff6b35 0%, #ffb347 100%)',
        'gradient-ember-subtle': 'linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(255, 179, 71, 0.8) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
