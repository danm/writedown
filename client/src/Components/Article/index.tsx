import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../guides-formated.json';
import getArticle from '../../helpers/getArticle';
import NavButton from '../NavButton';
import Page from '../Page';
import Breadcrumbs from '../Breadcrumbs';
import Sidebar from '../Sidebar';
import NoContent from '../204';

import {
  Masthead,
  Blurb,
  MainContent,
  Heading,
  SpacerBottom,
  Row,
  Container,
} from '../Home/style';

export default function () {
  const { subject, article } = useParams();
  let fileClean;
  let subjectClean;

  try {
    ({
      article: fileClean,
      subject: subjectClean,
    } = getArticle(data, subject, article));
  } catch (e) {
    return (
      <NoContent message={e.message} />
    );
  }

  return (

    <div>
      <Container>
        <Row>
          <div className="col-sm-3">
            <h2>{fileClean.title}</h2>
            <Breadcrumbs
              site={data.title}
              file={fileClean.title}
              subject={subjectClean.title}
            />
            <Sidebar file={fileClean} />
          </div>
          <div className="col-sm-7">
            <Page contents={fileClean.contents} />
            <NavButton
              direction="previous"
              subject={subjectClean}
              file={fileClean}
            />
            <NavButton
              direction="next"
              subject={subjectClean}
              file={fileClean}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
