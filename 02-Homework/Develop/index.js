// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
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

]

// function to prompt user - returns answers object
const promptUser = () => {
    return inquirer
        .prompt(questions);
}

// function to write README file
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        console.log("Welcome to the README generator")

        // ask user for answers to questions
        const answers = await promptUser();

        // create markdown content from user answers
        const fileContent = generateMarkdown(answers);

        // write markdown content to README.md file
        await writeToFile("./README.md", fileContent);

        // notify user that file has been written
        console.log("README.md created");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}


// Function call to initialize app
init();