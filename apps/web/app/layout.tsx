import type { Metadata } from 'next';
import { amiri, ibmPlexSansArabic, newsreader } from '../lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'هدير ممدوح — المنصة الأدبية والملاذ الفكري',
  description: 'المنصة الأدبية الرقمية للكاتبة المعاصرة والروائية هدير ممدوح',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${ibmPlexSansArabic.variable} ${newsreader.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
