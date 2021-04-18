//License
async function renderBadge(license){
  let badge = "";
  switch(license){
      case "Apache license 2.0":
          return badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Public License v3.0":
          return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "MIT":
          return badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "The Unlicense":
          return badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      default:
          console.log("Render badge failed");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Demo Video](#Project-Demo-Video)
  * [Questions?](#questions)
  
  ## Project Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is under ${data.license} for licensing.
  
  ${badge}
  
  ## Contributing
  
  ${data.contribute}
  
  ## Project Demo Video
  
  ${data.test}
  
  ## Questions
  
  please feel free to ask me any questions.
  
  Github username: ${data.username}
  
  Github Email: <${data.email}>
 `;
}

module.exports = generateMarkdown;