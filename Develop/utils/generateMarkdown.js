// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(renderLicenseBadge('None'));
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(renderLicenseBadge('None'));
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(renderLicenseBadge('None'));
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
