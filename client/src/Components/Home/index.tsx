import React from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@bbc/telescope-kit-icons';
import Breadcrumbs from '../Breadcrumbs';
import StyledLink from '../Button';
import Button from '@bbc/telescope-kit-button';

import {
  Masthead,
  Blurb,
  MainContent,
  Heading,
  SpacerBottom,
  Row,
  Container,
} from './style';

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
      <div className="col-shrink" key={file.index}>
        <a
          className="homepage-card-link"
          href={`/${sanitize(data.title)}/${sanitize(file.title)}`}
        >{file.title}</a>
      </div>
  ));
}

function buildSections(data: IMD) {
  if (!data) return <NoContent message="Check the url" />;
  const sections = data.directories
    .map((directory) => (
      <div key={directory.index}>
        <Row>
          <div className="col-sm-12">
            <Heading>{directory.title}</Heading>
          </div>
        </Row>
        <Row>
          {buildCards(directory)}
        </Row>
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
        <Container>
          <Row>
              <div className="col-sm-3 col-centre">
                <h1>{ title || jsondata.title}</h1>
              </div>
              <div className="col-sm-7 col-centre">
                <Blurb>{removeHeaders(jsondata.text)}</Blurb>
              </div>
              <div className="col-sm-2 col-centre">
                <Button
                  className="gel-button download-button"
                  href="#"
                  >
                  <Icon aria-hidden="true" className="icon" icon="download" />
                  Download the full guide
                </Button>
              </div>
            </Row>
        </Container>

      </Masthead>
      <MainContent>
        <Container>
          { subject && (
            <Breadcrumbs
              site={jsondata.title}
              subject={title}
            />
            ) }
            {buildSections(jsondata)}
            <SpacerBottom />
        </Container>
      </MainContent>
    </div>
  );
}
