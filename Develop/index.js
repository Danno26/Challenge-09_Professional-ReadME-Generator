const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: "input",
        message: "What is the project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Write a description of the project:",
        name: "Description"
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "Install"
    },
    {
        type: "input",
        message: "Explain how to use the app",
        name: "Usage"
    },
    {
        type: "list",
        message: "Which license are you using?",
        name: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "No License"
        ]
    },
    {
        type: "input",
        message: "Are there any contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How do you test the app?",
        name: "Test"
    },
    {
        type: "input",
        message: "Any questions?",
        name: "Questions"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "Github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadMe was created!")
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}

// function call to initialize program
init();