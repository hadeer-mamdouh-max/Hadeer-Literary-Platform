import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Raw Approved Brand Palette
        palette: {
          'paper-ivory': 'var(--palette-paper-ivory)',
          'ink-black': 'var(--palette-ink-black)',
          'deep-wine': 'var(--palette-deep-wine)',
          'muted-taupe': 'var(--palette-muted-taupe)',
          'warm-sand': 'var(--palette-warm-sand)',
          'sage-reserve': 'var(--palette-sage-reserve)',
          'sepia-shade': 'var(--palette-sepia-shade)',
          'night-paper': 'var(--palette-night-paper)',
        },
        // Semantic Token Mapping
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          surface: 'var(--color-bg-surface)',
          elevated: 'var(--color-bg-elevated)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          accent: 'var(--color-text-accent)',
        },
        accent: {
          primary: 'var(--color-accent-primary)',
          hover: 'var(--color-accent-hover)',
          active: 'var(--color-accent-active)',
          secondary: 'var(--color-accent-secondary)',
          'secondary-hover': 'var(--color-accent-secondary-hover)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          default: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
        },
      },
      fontFamily: {
        'arabic-display': ['var(--font-arabic-display)'],
        'arabic-reading': ['var(--font-arabic-reading)'],
        'english-display': ['var(--font-english-display)'],
        'english-reading': ['var(--font-english-reading)'],
        ui: ['var(--font-ui)'],
      },
      maxWidth: {
        reading: 'var(--container-reading)',
        content: 'var(--container-content)',
        wide: 'var(--container-wide)',
        full: 'var(--container-full)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
      transitionTimingFunction: {
        literary: 'var(--ease-literary)',
      },
    },
  },
  plugins: [],
};

export default config;
