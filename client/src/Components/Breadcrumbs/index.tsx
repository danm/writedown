import React from 'react';
import sanitize from '../../helpers/sanitize';

import {
  BreadcrumbList,
} from './style';

export default function ({ subject, file, site }:
{ subject?: string, file?: string, site: string }) {
  return (
    <BreadcrumbList>
      <li><a href="/">{site}</a></li>
      { subject && <li><a href={`/${sanitize(subject)}`}>{subject}</a></li> }
      { file && subject && <li><a href={`/${sanitize(subject)}/${sanitize(file)}`}>{file}</a></li> }
    </BreadcrumbList>
  );
}
