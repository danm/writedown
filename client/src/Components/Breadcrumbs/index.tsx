import React from 'react';
import sanitize from '../../helpers/sanitize';

export default function ({ subject, file, site }:
{ subject?: string, file?: string, site: string }) {
  return (
    <ul>
      <li><a href="/">{site}</a></li>
      { subject && <li><a href={`/${sanitize(subject)}`}>{subject}</a></li> }
      { file && subject && <li><a href={`/${sanitize(subject)}/${sanitize(file)}`}>{file}</a></li> }
    </ul>
  );
}
