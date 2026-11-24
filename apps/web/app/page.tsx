import type { HealthResponse, PlatformMetadata } from '@hadeer/types';

export default function HomePage() {
  // Shared type verification from @hadeer/types
  const platformMeta: PlatformMetadata = {
    name: 'المنصة الأدبية — هدير ممدوح',
    author: 'هدير ممدوح',
    version: '0.1.0',
    defaultLocale: 'ar',
    direction: 'rtl',
  };

  const initialHealth: HealthResponse = {
    status: 'ok',
    service: 'apps/web',
    timestamp: new Date().toISOString(),
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center sm:p-12">
      <div className="w-full max-w-xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <header className="mb-6">
          <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
            المرحلة الأولى — تأسيس المشروع والمستودع الموحد
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {platformMeta.author}
          </h1>
          <p className="mt-2 text-base text-stone-600">{platformMeta.name}</p>
        </header>

        <section className="space-y-4 rounded-xl bg-stone-50 p-5 text-sm text-stone-700">
          <div className="flex items-center justify-between border-b border-stone-200/60 pb-3">
            <span className="font-medium text-stone-500">حزمة الأنواع المشتركة:</span>
            <code className="rounded bg-stone-200 px-2 py-0.5 text-xs text-stone-800">
              @hadeer/types
            </code>
          </div>
          <div className="flex items-center justify-between border-b border-stone-200/60 pb-3">
            <span className="font-medium text-stone-500">حالة النظام المشترك:</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {initialHealth.status}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-stone-500">اتجاه المحتوى الأساسي:</span>
            <span className="font-mono text-xs text-stone-800 uppercase">
              {platformMeta.direction} ({platformMeta.defaultLocale})
            </span>
          </div>
        </section>

        <footer className="mt-6 text-xs text-stone-400">
          البنية الهندسية الأساسية جاهزة ومتحقق منها بنجاح.
        </footer>
      </div>
    </main>
  );
}
