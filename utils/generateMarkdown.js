// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (value === 'MIT'){
    return"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  else if (value === 'GPLv2'){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  }
  else if (value === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } 
  else if (value === 'GPLv3'){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";

  } 
  else if (value === 'BSD 3-clause'){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  }
  else {
    return " ";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value === 'MIT'){
    return "(https://opensource.org/licenses/MIT)";
  }
  else if (value === 'GPLv2'){
    return"(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } 
  else if (value === 'Apache'){
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  else if(value === 'GPLv3'){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (value === 'BSD 3-clause'){
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  else {
  return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;