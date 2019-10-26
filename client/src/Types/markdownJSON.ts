
export interface NavigationButton {
  // title of the button 
  title: string;
  // array position of the link subject
  dir: number;
  // array position of the article
  file: number;
}

export interface Content {
  // the actual markdown content
  data: string;
  // name of the secion
  name: string;
  // the slug
  id: string;
}

export interface File {
  // name of the article
  name: string;
  // name of the article for presentation
  title: string;
  // position of the content
  index: number;
  // the contents of the article
  contents: Content[];
  // what the next button should navigate to
  next?: NavigationButton;
  previous?: NavigationButton;
}

export interface Subject {
  // name of the subject
  name: string;
  // name of the subject for presentation
  title: string;
  // position of the content
  index: number;
  // the assets which make up the subject
  files: Array<File>;
}

export interface IMD {
  // the blurb for the homepage
  text: string;
  // title of the site
  title: string;
  // a list of directories which hold content
  directories: Array<Subject>;
}