// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl = '';

  switch (license) {
    case 'ISC':
      badgeUrl = 'https://img.shields.io/badge/License-ISC-blue.svg';
      break;
  }

  return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'MPL-2.0': 'https://opensource.org/licenses/MPL-2.0',
  };

  return license ? `[${license} License](${licenseLinks[license] || ''})` : '';
}


const noLicense = '';
const noLink = renderLicenseLink(noLicense);
console.log(noLink); // if none provided it outputs: ''


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const badgeUrl = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return `
## License

This project is licensed under the [${license} License](${licenseLink}).

![License Badge](${badgeUrl})
    `.trim();
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const data = {
    title: 'ReadmeMagicCreation',
    description: 'come back later and fill.',
  }


  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table Of Contents
  ${data.tableofcontents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}




export default generateMarkdown;


console.log(renderLicenseBadge('ISC'));
console.log(renderLicenseLink('ISC'));
console.log(renderLicenseSection('ISC'));