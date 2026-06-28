import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export async function Coverage() {
  const t = await getTranslations('Coverage')
  const tFounder = await getTranslations('About.team.members.founder')
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-5 md:gap-12 md:py-28">
        <div className="md:col-span-3">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {t('eyebrow')}
          </div>
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute sm:mt-5 md:text-lg">
            {t('body')}
          </p>
        </div>

        {/* Founder card — a real face beats stock photography */}
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-paper">
            {/* aspect matches the source photo exactly — no cropping */}
            <div className="relative aspect-[4/5]">
              <Image
                src="/team/founder.jpg"
                alt={`${tFounder('name')} — ${tFounder('role')}`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="text-base font-semibold text-navy-900">
                {tFounder('name')}
              </div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-navy-600">
                {tFounder('role')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
