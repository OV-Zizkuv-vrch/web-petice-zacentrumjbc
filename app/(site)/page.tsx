import type { Metadata } from 'next';
import { ContentPage } from '../components/ContentPage';
import { OG_IMAGE } from '../config';

export const metadata: Metadata = {
  title: 'Petice proti tramvaji středem centra Jablonce nad Nisou',
  description:
    'Nesouhlasíme s vedením tramvajové trati středem historického centra Jablonce nad Nisou. Podepište petici a podpořte hledání rozumnější varianty mimo centrum.',
  openGraph: {
    title: 'Petice proti tramvaji středem centra Jablonce nad Nisou',
    description:
      'Nesouhlasíme s vedením tramvajové trati středem historického centra Jablonce nad Nisou. Podpořte hledání lepší varianty.',
    url: '/',
    images: [OG_IMAGE],
  },
};

export default function Homepage() {
  return <ContentPage slug="petice" />;
}
