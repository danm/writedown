import React from 'react';
import Markdown from '../Markdown';
import { Content } from '../../Types/markdownJSON';
import {
  PageContainer,
} from './style';

export default function ({ contents }: { contents: Content[] }) {
  return (
    <div>
      <PageContainer>
        { contents.map((p) => (
          <section>
            <Markdown data={p.data} />
          </section>
        ))}
      </PageContainer>
    </div>
  );
}
