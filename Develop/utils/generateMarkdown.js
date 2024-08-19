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
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD-3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-orange.svg',
    'MPL-2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  };

  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'MPL-2.0': 'https://opensource.org/licenses/MPL-2.0',
  };

  if (!license || !licenseBadges[license] || !licenseLinks[license]) {
    return '';
  }

  const badgeUrl = licenseBadges[license];
  const linkUrl = licenseLinks[license];
  const badgeText = license;

  return `## License\n\n![License Badge](${badgeUrl} "${badgeText} License")\n\nThis project is licensed under the [${badgeText} License](${linkUrl}).`;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const data = {
    title: 'ReadmeMagicCreation',
    description: 'come back later and fill.',
    tableofcontents: '',
    installation: '',
    usage: '',
    license: '',
    contributing: '',
    tests: '',
    questions: '',
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

  ## License
  ${data.license}

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