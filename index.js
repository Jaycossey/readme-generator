// GLOBALS -------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const readmeStruct = require('./readmeStruct');

const testAnswers = {
    userName: "UserTest",
    project: "TestProject",
    description: "Description Test Data",
    techStack: ["HTML", "CSS", "JavaScript", "C"],
    dependencies: "Test dependencies",
    tests: "test data test",
    github: "github.com",
    otherInfo: "other test example info",
    email: "example.email.com"
};

// Tech stack choices
const choicesArray = ["HTML", 
                        "CSS", 
                        "JavaScript", 
                        "TypeScript", 
                        "React.JS", 
                        "NodeJS", 
                        "npm", 
                        "C", 
                        "C++", 
                        "C#", 
                        "Haskell", 
                        "Ruby", 
                        "Assembly", 
                        "WebAssembly"];

// Inquirer qestions array                        
const questions = [
    {
        // Username - author
        type: "input",
        name: "userName",
        message: "Welcome! To create your README file, please answer the following prompts:\nEnter your username:\n"
    },
    {
        // title
        type: "input",
        name: "project",
        message: "Project Name / Title:\n"
    },
    {
        // description
        type: "input",
        name: "description",
        message: "Enter a short project description:\n"
    },
    {
        // tech stack
        type: "checkbox",
        name: "techStack",
        message: "Select languages used:\n",
        choices: choicesArray
    },
    {
        // contact / support
        type: "email",
        name: "email",
        message: "Enter your email:\n"
    },
    {
        // contributions - github repo link
        type: "url",
        name: "github",
        message: "Enter your GitHub repo URL:\n"
    },
    {
        // other information relevant to repo
        type: "input",
        name: "otherInfo",
        message: "Enter other relevant information:\n"
    },
    {
        // test data input
        type: "input",
        name: "tests",
        message: "Input tests\n"
    },
    {
        // dependencies input
        type: "input",
        name: "dependencies",
        message: "Enter dependencies:\n"
    }
];

// assign and write input into readme 
const assignAnswers = (answers) => {
    // create readme structure
    const fileStruct = readmeStruct(answers);
    // write new readme file
    fs.writeFile('README.md', fileStruct, (err) => {
        // if no error, log success and where to find file
        if (!err) {
            console.log("Success! View your README in the local directory.");
        } else {
            // else log the error
            console.error(err);
        }
    });
}

// prompt user for content
const runPrompt = () => {
    // inquirer npm package
    inquirer
        // prompt user
        .prompt(questions)
        // then assign data
        .then((data) => {
            assignAnswers(data);
        })
        // catch errors and log
        .catch((err) => {
            console.error(err);
        })
}

// function call
runPrompt();

// assignAnswers(testAnswers);
