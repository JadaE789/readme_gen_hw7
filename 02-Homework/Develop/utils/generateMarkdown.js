const licenseBadgeLinks = require("./licenseBadges");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.licenseBadge = licenseBadgeLinks[data.license];
  return `# ${data.title}

  ${data.licenseBadge}

  ## Table of Contents

  * [Project Description](#project-description)
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Demo Video](#Project-Demo-Video)
  * [Questions?](#questions)
  
  ## Project Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## License
  
  This project is under ${data.license} for licensing.
  
  ## Contributing
  
  ${data.contribute}
  
  ## Project Demo Video
  
  ${data.test}
  
  ## Questions
  
  Feel free to ask me any questions.
  
  Github username: ${data.username}
  
  Github Email: <${data.email}>
 `;
}

module.exports = generateMarkdown;