import React from 'react';
import Markdown from '../Markdown';
import { Content } from '../../Types/markdownJSON';

export default function ({ contents }: { contents: Content[] }) {
  return (
    <div>
      { contents.map((p) => (
        <section>
          <Markdown data={p.data} />
        </section>
      ))}
    </div>
  );
}
