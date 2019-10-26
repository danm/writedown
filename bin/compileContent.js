const fs = require('fs');
const dir = './content';
const server = 'http://localhost:3000'
// create index
const data = fs.readdirSync(dir);

// filter out files that are not needed;
const clean = (data) => {
  const files = data.filter((row) => {
    if (isNaN(row.substr(0, 1)) === false) {
      return true;
    }
    return false
  });
  return files;
};

const files = clean(data);

const arr = files.map((row) => {
  // get data for this directory
  const data = fs.readdirSync(`${dir}/${row}`);
  const docs = clean(data);
  const documents = docs.map((doc) => {
    // get the md file and split each line
    const md = fs.readFileSync(`${dir}/${row}/${doc}`).toString().split(/(\n\n|\r\n)/);
    
    let name = '';
    const sections = {};
    const sectionArray = [];
    let cleanName;
    // loop through all the rows looking for new sections
    md.forEach((row) => {
      if (row.indexOf('## ') === 0) {
        // if a new section is found, create an object of it
        name = row.substr(3);
        cleanName = name.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;\s<=>?@\[\]^_`{|}~]/g, '');
        cleanName = cleanName.toLowerCase();
        sections[cleanName] = {};
        sections[cleanName].data = [];
        sections[cleanName].name = name;
        sections[cleanName].id = cleanName;
      }
      
      if (row.indexOf('../images/') >= 0) {
        row = row.replace('../images/', `${server}/images/`);
      }

      if (cleanName !== undefined) {
        sections[cleanName].data.push(row);
      }
    });
    
    // we are finished with this md file, we can join the data up now it has been seperated by section.
    for (const o in sections) {
      sections[o].data = sections[o].data.join('\r\n');
      sectionArray.push(sections[o]);
    }

    const o = {
      name: doc,
      title: doc.substr(doc.indexOf('.') + 1, doc.indexOf('.md') - 2 ).trim(),
      index: parseInt(doc.substr(0, doc.indexOf('.')), 10),
      contents: sectionArray,
    };
    return o;
  });
  const o = {
    name: row,
    title: row.substr(row.indexOf('.') + 1).trim(),
    index: parseInt(row.substr(0, row.indexOf('.')), 10),
    files: documents,
  };
  return o;
});

// generate previous and next tabs
arr.forEach((dir, idx) => {
  dir.index = idx;
  dir.files.forEach((file, i) => {
    file.index = i;
    // next 
    if (i + 1 < dir.files.length) {
      dir.files[i].next = {
        title: dir.files[i + 1].title,
        dir: idx,
        file: i + 1,
      }
    } else if (idx + 1 < arr.length) {
      dir.files[i].next = {
        title: arr[idx + 1].files[0].title,
        dir: idx + 1,
        file: 0,
      }
    }

    // previous
    if (i > 0) {
      dir.files[i].previous = {
        title: dir.files[i - 1].title,
        dir: idx,
        file: i - 1,
      }
    } else if (idx > 0) {
      dir.files[i].previous = {
        title: arr[idx - 1].files[arr[idx - 1].files.length - 1].title,
        dir: idx - 1,
        file: arr[idx - 1].files.length - 1,
      }
    }
  });
});

const indexText = fs.readFileSync(`${dir}/index.md`).toString();

let title = 'Change title';

if (indexText.indexOf('##') === 0) {
  title = indexText.split(/(\n\n|\r\n)/)[0].substr(2).trim();
}

const index = {
  text: indexText,
  title: title || '',
  directories: arr
};

fs.writeFileSync('./client/src/guides-formated.json', JSON.stringify(index));
