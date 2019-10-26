import React from 'react';
import marked from 'marked';

interface IProps {
  data: string;
}

export default function ({ data }: IProps) {
  return (
    <div dangerouslySetInnerHTML={{ __html: marked(data) }} />
  );
}
