import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '../reader';
import { markdocConfig } from '../../keystatic.config';

export async function FooterText() {
  const entry = await reader.collections.components.read('footer');
  if (!entry) return null;

  const { node } = await entry.content();
  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) return null;

  const renderable = Markdoc.transform(node, markdocConfig);
  const content = Markdoc.renderers.react(renderable, React);

  return (
    <div className="text-white/90 text-sm leading-relaxed flex-1 text-center md:text-left hidden md:block [&_p]:m-0 [&_strong]:text-white">
      {content}
    </div>
  );
}
