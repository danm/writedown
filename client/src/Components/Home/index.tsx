import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

import {
  Masthead,
  Blurb,
  MainContent,
  Heading,
  SpacerBottom,
} from './style';

import Button from '../Button';
import { IMD, Subject } from '../../Types/markdownJSON';
import jsondata from '../../guides-formated.json';
import sanitize from '../../helpers/sanitize';
import NoContent from '../204';

function removeHeaders(d: string): string | null {
  if (!d) return null;
  const re = /#.*/;
  return d.replace(re, '').trim(); // Remove the first markdown header
}

function buildCards(data: Subject) {
  return data.files.map((file) => (
    <div className="col-sm-3" key={file.index}>
      <Button
        title={file.title}
        href={`/${sanitize(data.title)}/${sanitize(file.title)}`}
      />
    </div>
  ));
}

function buildSections(data: IMD) {
  if (!data) return <NoContent message="Check the url" />;
  const sections = data.directories
    .map((directory) => (
      <div key={directory.index}>
        <div className="row">
          <div className="col-sm-12">
            <Heading>{directory.title}</Heading>
          </div>
        </div>
        <div className="row">{buildCards(directory)}</div>
      </div>
    )).filter((o) => o);
  if (sections.length === 0) {
    return <NoContent message="Check the url" />;
  }
  return sections;
}

export default function () {
  const { subject } = useParams();
  let title;
  if (subject) {
    const cleanSub = subject.split('-').join('');
    jsondata.directories = jsondata.directories.filter((dir) => {
      const cleaned = sanitize(dir.title).split('-').join('');
      if (cleaned === cleanSub) return true;
      return false;
    });
    title = (jsondata.directories && jsondata.directories[0] && jsondata.directories[0].title);
  }

  return (
    <div>
      <Masthead>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h1>{ title || jsondata.title}</h1>
            </div>
            <div className="col-sm-7">
              <Blurb>{removeHeaders(jsondata.text)}</Blurb>
            </div>
            <div className="col-sm-2 btn-container">
              {/* <Button
                title="Download the full guide"
              /> */}
            </div>
          </div>
        </div>
      </Masthead>
      <MainContent>
        <div className="container">
          { subject && (
          <Breadcrumbs
            site={jsondata.title}
            subject={title}
          />
          ) }
          {buildSections(jsondata)}
          <SpacerBottom />
        </div>
      </MainContent>
    </div>
  );
}
