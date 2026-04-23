import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '../reader';
import { markdocConfig } from '../../keystatic.config';

export async function ContentPage({ slug }: { slug: string }) {
  const entry = await reader.collections.content.read(slug);

  let content: React.ReactNode = null;
  if (entry) {
    const { node } = await entry.content();
    const errors = Markdoc.validate(node, markdocConfig);
    if (!errors.length) {
      const renderable = Markdoc.transform(node, markdocConfig);
      content = Markdoc.renderers.react(renderable, React);
    }
  }

  return (
    <div className="prose prose-slate max-w-none">
      {content ?? <p className="text-slate-500">Obsah se načítá…</p>}
    </div>
  );
}
