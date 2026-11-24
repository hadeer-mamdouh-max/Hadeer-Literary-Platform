import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'هدير ممدوح — المنصة الأدبية والملاذ الفكري',
  description: 'المنصة الأدبية الرقمية للكاتبة المعاصرة والروائية هدير ممدوح',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
