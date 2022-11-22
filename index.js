// Importing required packages
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown")

// Array of questions
const questions = [{
    type: "input",
    name: "ProjectTitle",
    message: "What is the title of your application?"
}, 
{
    type: "input",
    name: "Description",
    message: "Please give a succinct overview of your application:"
}, 
{
    type: "input",
    name: "Installation",
    message: "What dependencies/packages will users need to install for this application?"
}, 
{
    type: "input",
    name: "Usage",
    message: "What do users need to do in order to run this application?"
}, 
{
    type: "confirm",
    name: "Contributions",
    message: "Would you like to include contribution guidelines for this application?"
}, 
{
    type: "input",
    name: "Tests",
    message: "How should users test your application?"
},
{
    type: "confirm",
    name: "License",
    message: "Would you like to include a license for your application?"
},
{
    type: "list",
    name: "LicenseType",
    message: "Which license would you like to use for your application?",
    choices: ["MIT", "Creative Commons Attribution", "GNU GPL v3", "Apache"],
    when: (answers) => answers.License === true
},
{
    type: "input",
    name: "Contributors",
    message: "Please list the full names of all contributors to your application:"
},
{
    type: "input",
    name: "Username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "Email",
    message: "What is your email address?"
}
];

// writes README file with user input, displays success message to user if file created
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(data),
        err ? console.log(err) : console.log("Thank you for your input! A README.md file has been successfully generated from your responses.")
    })
}

// initializes app, runs through questions array, calls writeToFile function with desired file name and generated markdown text as arguments
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
