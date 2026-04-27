import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '../../components/ContentPage';
import { EPETITION_URL, OG_IMAGE } from '../../config';

const PODPISOVY_ARCH_URL = '/files/petice-tramvaj.pdf';

export const metadata: Metadata = {
  title: 'Podepsat petici – tramvaj mimo centrum Jablonce',
  description:
    'Přidejte svůj podpis k petici proti vedení tramvaje středem historického centra Jablonce nad Nisou a za prověření alternativní trasy.',
  openGraph: {
    title: 'Podepsat petici – tramvaj mimo centrum Jablonce',
    description:
      'Přidejte svůj podpis k petici proti vedení tramvaje středem historického centra Jablonce nad Nisou a za prověření alternativní trasy.',
    url: '/podpis',
    images: [OG_IMAGE],
  },
};

export default function PodpisPage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Podepište petici</h1>
      <p className="text-slate-600 mb-8">
        Vyberte si způsob, který vám nejlépe vyhovuje.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {/* Option 1: Online */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="text-3xl">💻</div>
          <h2 className="text-lg font-bold text-slate-900">Online podpis</h2>
          <p className="text-slate-600 text-sm flex-1">
            Podepište petici elektronicky prostřednictvím oficiální státní služby ePetice. <strong className="text-green-700">Vyžaduje přihlášení
            prostřednictvím Identity občana</strong> (přihlášení <span className="text-red-600">datovou schránkou</span> pro podpis ePetice <span className="text-red-600">nezafunguje</span>).
          </p>
          <a
            href={EPETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="click_podepsat_online"
            className="inline-block text-center bg-amber-600 text-white font-semibold px-5 py-3 rounded-full shadow hover:bg-amber-700 transition-colors text-sm"
          >
            Podepsat online
          </a>
        </div>

        {/* Option 2: Print and deliver */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="text-3xl">🖨️</div>
          <h2 className="text-lg font-bold text-slate-900">Tisk a odevzdání</h2>
          <p className="text-slate-600 text-sm flex-1">
            Stáhněte si{' '}
            <a
              href={PODPISOVY_ARCH_URL}
              target="_blank"
              data-umami-event="click_podpisovy_arch_link"
              className="text-green-700 font-medium hover:underline"
            >
              podpisový arch
            </a>
            , vytiskněte ho, vyplňte a odevzdejte na některém z podpisových míst (viz níže).
          </p>
          <a
            href={PODPISOVY_ARCH_URL}
            target="_blank"
            data-umami-event="click_stahnout_arch_button"
            className="inline-block text-center border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-full hover:bg-slate-50 transition-colors text-sm"
          >
            Stáhnout arch (PDF)
          </a>
        </div>

        {/* Option 3: In person */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="text-3xl">📍</div>
          <h2 className="text-lg font-bold text-slate-900">Osobně na místě</h2>
          <p className="text-slate-600 text-sm flex-1">
            Přijďte a podepište přímo na jednom z podpisových míst (viz níže). Arch bude k dispozici, stačí
            se podepsat a uvést adresu trvalého bydliště.
          </p>
        </div>
      </div>

      <ContentPage slug="podpis" />
    </div>
  );
}
