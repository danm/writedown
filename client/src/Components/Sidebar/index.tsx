import React from 'react';
import { File } from '../../Types/markdownJSON';
import sanitize from '../../helpers/sanitize';

import {
  SidebarContent,
} from './style';

export default function ({ file }: {file: File }) {
  return (
    <SidebarContent>
      <span>Contents</span>
      <ul>
        {file.contents.map((section) => (
          <li><a href={`#${sanitize(section.name)}`}>{section.name}</a></li>
        ))}
      </ul>
    </SidebarContent>
  );
}
