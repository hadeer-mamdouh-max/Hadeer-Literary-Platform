import type { HealthResponse, PlatformMetadata } from '@hadeer/types';
import { Button, Container, Divider, Heading, Prose, Section, Text } from '../components/ui';

export default function HomePage() {
  const platformMeta: PlatformMetadata = {
    name: 'المنصة الأدبية والملاذ الفكري',
    author: 'هدير ممدوح',
    version: '0.2.0',
    defaultLocale: 'ar',
    direction: 'rtl',
  };

  const healthState: HealthResponse = {
    status: 'ok',
    service: 'apps/web',
    timestamp: new Date().toISOString(),
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      {/* Editorial Header Bar */}
      <header className="border-b border-border-subtle bg-bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
        <Container size="wide" className="flex items-center justify-between py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-arabic-display text-xl sm:text-2xl font-bold tracking-normal text-text-primary">
              {platformMeta.author}
            </span>
            <span className="text-xs text-text-muted hidden sm:inline-block border-s border-border-subtle ps-3">
              {platformMeta.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-palette-warm-sand px-2.5 py-1 text-xs font-medium text-text-secondary border border-border-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              <span>المرحلة الثانية: لغة التصميم والهوية</span>
            </span>
          </div>
        </Container>
      </header>

      {/* Literary Hero & Design Foundation Showcase */}
      <Section spacing="lg">
        <Container size="reading">
          <div className="text-center mb-10">
            <Text variant="metadata" color="accent" className="mb-3 block">
              نظام التصميم الطباعي والمعماري (Phase 2)
            </Text>
            <Heading level={1} variant="display" className="mb-6">
              هدير ممدوح
            </Heading>
            <Text variant="body-lg" color="secondary" className="mx-auto max-w-xl">
              تأسيس الهوية البصرية الطباعية — حوار حيّ بين الورق الأرشيفي، الحبر الكلاسيكي، وروح
              الكتابة المعاصرة.
            </Text>
          </div>

          <Divider variant="ornament" />

          {/* Literary Prose Typography Preview */}
          <Prose className="my-10">
            <p>
              الكتابة ليست مجرد ترتيبٍ للكلمات على شاشة زجاجية؛ إنها إحساس باللمس، واحتفاءٌ بالبياض،
              وهدوءٌ بصري يمنح الفكرة حقها في التنفّس والتأمّل.
            </p>
            <blockquote>
              «في عزلة الحرف يتشكّل المعنى، وما الطباعة الرفيعة إلا جسرٌ من الحبر يربط وجدان الكاتب
              بصمت القارئ.»
            </blockquote>
            <p>
              تم تصميم هذه المنصة بنهج طباعي معاصر (Tactile Literary Print Design)، مُهندسة بالكامل
              لتضع راحة العين في صدارة الأولويات، وتستحضر عراقة الكتب المطبوعة دون بهرجة أو زخارف
              تقنية زائفة.
            </p>
          </Prose>

          {/* Brand Palette & Semantic Architecture Cards */}
          <div className="my-12 rounded-sm border border-border-subtle bg-bg-surface p-6 sm:p-8">
            <Text variant="metadata" color="muted" className="mb-4">
              لوحة الألوان المعتمدة (The Approved Architectural Palette)
            </Text>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-arabic-reading">
              <div className="rounded-sm border border-border-subtle bg-palette-paper-ivory p-3 text-palette-ink-black">
                <span className="block font-bold">Paper Ivory</span>
                <span className="text-[11px] text-text-muted">
                  <bdi dir="ltr">#F4F0EA</bdi> — الخلفية
                </span>
              </div>
              <div className="rounded-sm border border-border-subtle bg-palette-ink-black p-3 text-palette-paper-ivory">
                <span className="block font-bold">Ink Black</span>
                <span className="text-[11px] opacity-80">
                  <bdi dir="ltr">#1A1816</bdi> — الحبر
                </span>
              </div>
              <div className="rounded-sm border border-transparent bg-palette-deep-wine p-3 text-palette-paper-ivory">
                <span className="block font-bold">Deep Wine</span>
                <span className="text-[11px] opacity-80">
                  <bdi dir="ltr">#6B2D38</bdi> — التمييز الأدبي
                </span>
              </div>
              <div className="rounded-sm border border-border-subtle bg-palette-warm-sand p-3 text-palette-ink-black">
                <span className="block font-bold">Warm Sand</span>
                <span className="text-[11px] text-text-muted">
                  <bdi dir="ltr">#E8E1D5</bdi> — المساحات
                </span>
              </div>
              <div className="rounded-sm border border-border-subtle bg-palette-muted-taupe p-3 text-palette-ink-black">
                <span className="block font-bold">Muted Taupe</span>
                <span className="text-[11px] text-palette-ink-black">
                  <bdi dir="ltr">#9C8E7E</bdi> — الحدود الرقيقة
                </span>
              </div>
              <div className="rounded-sm border border-border-subtle bg-palette-sage-reserve p-3 text-palette-paper-ivory">
                <span className="block font-bold">Sage Reserve</span>
                <span className="text-[11px] opacity-80">
                  <bdi dir="ltr">#5E6855</bdi> — تمييز ثانوي
                </span>
              </div>
              <div className="rounded-sm border border-border-subtle bg-palette-sepia-shade p-3 text-palette-ink-black">
                <span className="block font-bold">Sepia Shade</span>
                <span className="text-[11px] text-text-muted">
                  <bdi dir="ltr">#EDE6DA</bdi> — نمط القراءة
                </span>
              </div>
              <div className="rounded-sm border border-border-subtle bg-palette-night-paper p-3 text-palette-paper-ivory">
                <span className="block font-bold">Night Paper</span>
                <span className="text-[11px] opacity-80">
                  <bdi dir="ltr">#121110</bdi> — القراءة الليلية
                </span>
              </div>
            </div>
          </div>

          {/* Interactive UI Primitives Showcase */}
          <div className="my-10 space-y-6">
            <Text variant="metadata" color="muted">
              العناصر التفاعلية الأساسية{' '}
              <span className="inline-block">
                <bdi dir="ltr">(Tactile Interaction Primitives)</bdi>
              </span>
            </Text>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary">زر تمييز أدبي (Deep Wine)</Button>
              <Button variant="secondary">زر ثانوي (Warm Sand)</Button>
              <Button variant="outline">زر محدد (Hairline Outline)</Button>
              <Button variant="ghost">زر هادئ (Ghost)</Button>
            </div>
          </div>

          <Divider variant="subtle" />

          {/* System Integrity & Architectural Contracts */}
          <footer className="mt-8 pt-4 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-text-muted font-mono">
              <span className="whitespace-nowrap">SHARED_TYPES: @hadeer/types</span>
              <span>•</span>
              <span className="whitespace-nowrap text-emerald-700">
                STATUS: {healthState.status}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="whitespace-nowrap">
                LOCALE: {platformMeta.defaultLocale} ({platformMeta.direction.toUpperCase()})
              </span>
            </div>
            <p className="mt-3 text-xs text-text-muted">
              نظام التصميم معتمد ومبني على Tailwind CSS 3.4 ومحكوم بمتغيرات CSS الدلالية.
            </p>
          </footer>
        </Container>
      </Section>
    </main>
  );
}
