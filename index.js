// Importing required packages
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown")

// Array of questions
const questions = [{
    type: "",
    name: "",
    message: ""
}, 
{
    type: "",
    
}, 
{

}, 
{

}, 
{

}, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(data),
        err ? console.log(err) : console.log("Thank you for your input! A READMe.md file has been successfully generated from your responses.")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("./sampleREADME/README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
