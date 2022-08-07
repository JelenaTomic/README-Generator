// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation steps');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's test instructions?",
        name: "tests",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("You need to enter your project's test instructions!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's test instructions?",
        name: "tests",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("You need to enter your project's test instructions!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of the four options')
                return false;
                }
        }
    },
    
    {
        type: 'input',
        name: 'askMe',
        message: 'What is your Github username so others can reach you for questions?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please provide your username so others can reach out to you with questions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email so there is another way to be reached for questions?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        console.log(generateMarkdown(data))
        writeToFile('./testREADME.md', generateMarkdown(data))
    });
};

// Function call to initialize app
init();
