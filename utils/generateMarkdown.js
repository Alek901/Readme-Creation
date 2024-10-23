// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ''; // Return an empty string if there is no license
    }

    // License badges map
    const licenseBadges = {
      'MIT': '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![Apache License](https://img.shields.io/badge/License-Apache%202.0-green.svg)',
      'BSD 3-Clause': '![BSD License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
      // Add more licenses as needed
    };

    return licenseBadges[license] || ''; // Return the corresponding badge or an empty string if the license is not found
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''; // Return an empty string if there is no license
  }

  // License links map
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    // Add more licenses as needed
  };

  return licenseLinks[license] || ''; // Return the corresponding link or an empty string if the license is not found
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return an empty string if there is no license
  }

  const licenseLink = renderLicenseLink(license);

  return `
## License

This project is licensed under the ${license} license. For more information, see [here](${licenseLink}).
    `;
}



export function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, you can reach me through:
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: ${data.email}
`;
}



export default generateMarkdown; 


console.log(renderLicenseBadge('ISC'));
console.log(renderLicenseLink('ISC'));
console.log(renderLicenseSection('ISC'));