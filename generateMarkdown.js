// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if(license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
 }
  if(license ===  'ISC'){
     return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  }
  if(license ===  'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
 }
  else {return '' }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'IBM'){
    return '(https://opensource.org/licenses/IPL-1.0)';
  }
  if(license === 'ISC'){
    return '(https://opensource.org/licenses/ISC)';
  }
  if(license ===  'MIT'){
    return '(https://opensource.org/licenses/MIT)';
  }
  else {return '' }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'IBM'){
    return 'IBM License';
  }
  if(license === 'ISC'){
    return 'ISC License';
  }
  if(license ===  'MIT'){
    return 'MIT License';
  }
  else {return ''; }
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
