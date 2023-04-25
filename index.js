// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 

const fs = require('fs'); 

const generateMarkdown = require('./utils/generateMarkdown.js'); 


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',  
    },
    {
        type: 'input',
        message: 'Give a description of your project :',
        name: 'description',  
      },
    {
        type: 'input',
        message: 'Give an explanation on how to install this application :',
        name: 'installation',  
    }, 
    {
        type: 'input',
        message: 'Describe how this application can be used :',
        name: 'usage',  
    },
    {
        type: 'list',
        message: 'Please select a license for this project :',
        choices: [
           'MIT', 
           'GPLv2',
           'Apache',
           'GPLv3',
           'BSD 3-clause',
        ],
        name: 'license',  
    },
    {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contributing',  
    },
    {
        type: 'input',
        message: 'Enter any testing instructions you would like to provide :',
        name: 'tests',  
    },
    {
        type: 'input',
        message: 'Enter your GitHub username :',
        name: 'userName',  
    },
    {
        type: 'input',
        message: 'Enter your email so contributers may contact you :',
        name: 'Email',  
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err){
        if (err){ 
            return console.log(err);
        } 
        else{ 
            console.log("Succesfully created file!")
        }
    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((data)=>{
        writeToFile('./test/README.md', data);
    });
}

// Function call to initialize app
init();
