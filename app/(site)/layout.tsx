import type { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { FooterText } from '../components/FooterText';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Fixed background image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/bg-main.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Page column – natural scroll */}
      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col w-full max-w-5xl shadow-2xl">
          <Navbar />

          <div className="flex-1 bg-white/92 pb-32">
            <div className="flex justify-center items-start px-6 py-6">
              <div className="bg-white rounded-2xl shadow-xl px-10 pb-10 max-w-4xl w-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed footer – always visible */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-slate-800/90 backdrop-blur-sm border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center gap-4 py-6 px-6 md:gap-6 md:py-8 md:px-10 w-full max-w-5xl">
          <FooterText />
          <Link
            href="/podpis"
            data-umami-event="click_podepsat_footer"
            className="shrink-0 inline-block bg-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
          >
            Podepsat petici
          </Link>
        </div>
      </div>
    </>
  );
}
