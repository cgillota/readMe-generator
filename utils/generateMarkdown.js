// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = { 
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    GPLv2: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]",
    Apache: "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
    GPLv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    BSD3Clause:  "[![License: BSD3Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
  }
  return badge[license] 
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    GPLv2: '[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    Apache: '[Apache](https://opensource.org/licenses/Apache-2.0)', 
    GPLv3: '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
    BSD3Clause: '[BSD3Clause](https://opensource.org/licenses/BSD-3-Clause)'
  }
  return link[license]
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `licensed under  ${this.renderLicenseLink(data.license)} license`
  }
  else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
   ${renderLicenseBadge(data.license)}

  ## Description
   
  ${data.description} 

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
 
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## License 

  Please see the link below for detailed information on this license
  ${renderLicenseLink(data.license)}

  ## Contributing
  
  ${data.contributing} 

  ## Tests
  
  ${data.tests}

  ## Questions 

  If you have any questions please feel free to contact me here  

  GitHub Username: ${data.userName}
  Email: ${data.Email}


`;
}

module.exports = generateMarkdown;
