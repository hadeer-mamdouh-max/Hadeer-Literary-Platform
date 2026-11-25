import { Amiri, IBM_Plex_Sans_Arabic, Newsreader } from 'next/font/google';

/**
 * Arabic Display Typography — Amiri
 * Evokes classical literary elegance, traditional naskh typesetting,
 * and intellectual gravitas for titles, headings, and poetic verses.
 */
export const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
  fallback: ['Traditional Arabic', 'Scheherazade New', 'serif'],
});

/**
 * Arabic Reading Typography — IBM Plex Sans Arabic
 * Designed for exceptional screen legibility and reading comfort
 * in long-form prose, essays, and reflective thoughts without eye strain.
 */
export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
  fallback: ['Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
});

/**
 * English Literary & Editorial Typography — Newsreader
 * High-end editorial serif designed specifically for continuous
 * literary reading, translations, and bilingual publishing.
 */
export const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
  fallback: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
});
