// GLOBALS -------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const readmeStruct = require('./readmeStruct');
const questions = require('./promptData');

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