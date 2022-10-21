// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'what is the title of your Project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'How would you describe your Project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a description of your  Project');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'email',
            message: 'What are the installaitons instructions for project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your installation details');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'email',
            message: 'How do we use your application',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please tells how we use this application');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your github address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your github address');
                    return false; 
                }
            }
    
        },
    

// TODO: Create a function to write README file
const writeToFile= require('generateMarkdown.js')

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
