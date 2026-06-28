import { getTranslations } from 'next-intl/server'
import { QuickBrief } from '@/components/forms/QuickBrief'

const steps = ['source', 'verify', 'ship'] as const

export async function Process() {
  const t = await getTranslations('Process')
  const tq = await getTranslations('QuickBrief')
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-navy-100 bg-navy-900 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur sm:text-xs">
            {t('eyebrow')}
          </div>
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Step 01 — Brief is the live on-ramp, not dead text */}
          <li className="relative bg-navy-800 p-5 sm:p-6 md:p-8">
            <span className="font-mono text-xs tracking-[0.2em] text-white/40">
              {t('steps.brief.n')}
            </span>
            <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">
              {tq('title')}
            </h3>
            <div className="mt-3">
              <QuickBrief />
            </div>
          </li>
          {steps.map((k) => (
            <li key={k} className="relative bg-navy-900 p-5 sm:p-6 md:p-8">
              <span className="font-mono text-xs tracking-[0.2em] text-white/40">
                {t(`steps.${k}.n`)}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">
                {t(`steps.${k}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {t(`steps.${k}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
