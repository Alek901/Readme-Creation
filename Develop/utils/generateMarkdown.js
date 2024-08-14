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
  let licenseLink = '';

  switch (license) {

    case 'ISC':
      licenseLink = 'https://opensource.org/licenses/ISC';
      break;
  }

  return licenseLink;
}

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