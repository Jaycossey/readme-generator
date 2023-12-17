// License Choices
const licenseOptions = ["Apache 2.0", 
                        "GNU General v3.0", 
                        "MIT", 
                        "BSD-2", 
                        "BSD-3", 
                        "Boost", 
                        "Creative Commons Zero v1.0", 
                        "Eclipse 2.0", 
                        "GNU Affero", 
                        "GNU General v2.0", 
                        "GNU Lesser v2.1", 
                        "Mozilla Public 2.0", 
                        "Unlicense"];

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
        // other information relevant to repo
        type: "input",
        name: "otherInfo",
        message: "Enter other relevant information:\n"
    },
    {
        // dependencies input
        type: "input",
        name: "dependencies",
        message: "Enter dependencies:\n"
    },
    {
        // test data input
        type: "input",
        name: "tests",
        message: "Input tests\n"
    },
    {
        // contributions - github repo link
        type: "url",
        name: "github",
        message: "Enter your GitHub repo URL:\n"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter how to use the project:\n"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:\n"
    },
    {
        // contact / support
        type: "email",
        name: "email",
        message: "Enter your email:\n"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license:\n",
        choices: licenseOptions,
    },
    {
        type: "input",
        name: "otherInfo",
        message: "Enter other relevant information:\n"
    }
];

// export arrays
module.exports = questions;