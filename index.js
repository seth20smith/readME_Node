// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')


// TODO: Create an array of questions for user input



inquirer.prompt([ {
    message:'what is your name?',
    name: 'Name' ,
    type: 'input' ,
},
{ 
    message:'What is your Project title?',
    name: 'Project' ,
    type: 'input' ,
},
{
    message:'Write a Description about your project?',
    name: 'Description' ,
    type: 'input' ,

},
{ 
    message:'What are the installation instructions?',
    name: 'Installation' ,
    type: 'input' ,
},
{
    message:'Describe what the examples of usage are if any?',
    name: 'Usage' ,
    type: 'input' ,

},
{ 
    message:'List any resources or collaborators you used?',
    name: 'Credits' ,
    type: 'input' ,
},
{
    message:'List any liscense (if applicable).',
    name: 'License' ,
    type: 'input' ,

},
{
    message:'List any features.',
    name: 'Features' ,
    type: 'input' ,

},
{ 
    message:'List any guidelines for contributing?',
    name: 'Contributing' ,
    type: 'input' ,
},
{
    message:'What Command should be used to run test?',
    name: 'Tests' ,
    type: 'input' ,

},

  ])
  .then((answers) => {
    console.log(answers.Name)       // Use user feedback for... whatever!!
    console.log(answers.Project) 
    console.log(answers.Description) 
    fs.writeFileSync(`readme.MD`, `
    
# Project title
## ${answers.Project}
# Description
## ${answers.Description} 
# Installation Instructions
## ${answers.Installation}
# Usage Information
## ${answers.Usage}
# Credits
## ${answers.Credits}
# License & Badges
## ${answers.License}
# Features
## ${answers.Features}
# Contributing
## ${answers.Contributing}
# Tests
## ${answers.Tests}
    
`)
})
  .catch((error) => {
    console.log(error)

  });



    