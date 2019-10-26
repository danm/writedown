import React from 'react';
import { File } from '../../Types/markdownJSON';
import sanitize from '../../helpers/sanitize';

export default function ({ file }: {file: File }) {
  return (
    <ul>
      {file.contents.map((section) => (
        <li><a href={`#${sanitize(section.name)}`}>{section.name}</a></li>
      ))}
    </ul>
  );
}
