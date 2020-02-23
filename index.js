const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([{
                type: "input",
                message: "What is your GitHub user name?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your project's name?",
                name: "project"
            },
            {
                type: "input",
                message: "Please write a short description of your project.",
                name: "description"
            },
            {
                type: "list",
                message: "What kind of license should your project have?",
                choices: ["BSD", "Apache", "Eclipse"],
                name: "licensetype"
            },
            {
                type: "input",
                message: "What command should be run to install dependencies?",
                name: "dependencies",
                default: "npm i"
            },
            {
                type: "input",
                message: "What command should be run to run tests?",
                name: "tests",
                default: "npm test"
            },
            {
                type: "input",
                message: "What does the user need to know about using the repo?",
                name: "about"
            },
            {
                type: "input",
                message: "What does the user need to know about contributing to the repo?",
                name: "contributing"

                // function writeToFile(fileName, data) {}

                // function init() {

                // }

                // init();