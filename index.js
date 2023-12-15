const inquirer = require('inquirer');
const fs = require('fs');

// console.log(fs);
// console.log(inquirer);

const questions = [
    {
        type: "input",
        name: "userName",
        message: "Welcome! To create your README file, please answer the following prompts:\nEnter your username:\n"
    },
    {
        type: "email",
        name: "email",
        message: "Enter your email:\n"
    },
    {
        type: "url",
        name: "github",
        message: "Enter your GitHub URL:\n"
    },
    {
        type: "input",
        name: "project",
        message: "Project Name / Title:\n"
    }
];

const answers = {
    userName: "",
    email: "",
    projectName: "",
    description: "",
    license: "",
    dependencies: [],
    tests: [],
    repoInfo: [],
    contributions: ""
};

const assignAnswers = (data) => {
    console.log(data);
}

const runPrompt = () => {
    inquirer
        .prompt(questions)
        .then((data) => {
            assignAnswers(data);
        })
        .catch((err) => {
            console.error(err);
        })
}

runPrompt();