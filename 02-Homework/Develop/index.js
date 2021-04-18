// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptQuestions () {
  return inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "Title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Brief description of Project",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Requirements?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license used for the Project?",
        choices:
        [
            "Apache license 2.0",
            "GNU General Public License v3.0",
            "MIT",
            "Unlicensed"
        ],
        default: 2
    },
    {
        type: "input",
        name: "contribute",
        message: "Contributions for this Project",
    },
    {
        type: "input",
        name: "test",
        message: "Link to Demo Video",
    },
    {
        type: "input",
        name: "username",
        message: "Type your github username?",
        validate: function(answer)
        { 
            if(answer === "") {
                return "You must enter your github username";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function(answer)
        { 
            if(answer === "") {
                return "You must enter email address";
            }
            return true;
        }
    }
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to readme file generator")
    try{
        const data = await promptQuestions();
        const fileContent = generateMd(answers);
        await writeToFile("./prof_README.md", fileContent);
        console.log("readme.MD succesfully generated");
    } catch(err) {
      console.log(err);
    }
}

// Function call to initialize app
init();