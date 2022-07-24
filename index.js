//
// made by fixedOtter on 22.7.2022
//

/* imported goods */
import inquirer from 'inquirer';
import fs from 'fs';
import { Engineer } from './lib/Engineer.js';
import { Intern } from './lib/Intern.js';
import { Manager } from './lib/Manager.js';
import { dataPrinter } from './lib/dataPrinter.js';

/* declaring falsy for input while */
let userDataArray = [];

/* question array */
const questionArray = [
  {
    type: 'list',
    name: 'userType',
    message: `What type of user do you want to add?`,
    choices: ['Manager', 'Engineer', 'Intern'],
    default: 'Engineer',
  },
  {
    name: 'userName',
    message: `What's the name of the user?`,
  },
  {
    name: 'userID',
    message: `What is the ID of the user?`,
  },
  {
    name: 'userEmail',
    message: `What's the email of the user?`,
  },
  {
    name: 'managerOfficeNum',
    message: `What is the manager's office number?`,
    when(answers) {
      return answers.userType == 'Manager';
    },
  },
  {
    name: 'engineerGitHub',
    message: `What is the engineer's GitHub?`,
    when(answers) {
      return answers.userType == 'Engineer';
    },
  },
  {
    name: 'internSchoolName',
    message: `What is the intern's school name?`,
    when(answers) {
      return answers.userType == 'Intern';
    },
  },
]

/* my kinda recursive func for iterating through the user input */
const userInput = () => {
  inquirer.prompt(questionArray)
  .then((answers) => {
    
    // call class for the right userType
    switch (answers.userType) {
      case 'Manager':
        let managerInfo = new Manager(answers.userType, answers.userName, answers.userID, answers.userEmail, answers.managerOfficeNum);
        userDataArray.push(managerInfo.returnInfo());
        console.log(managerInfo.returnInfo());
        break;
      case 'Engineer':
        let engineerInfo = new Engineer(answers.userType, answers.userName, answers.userID, answers.userEmail, answers.engineerGitHub);
        userDataArray.push(engineerInfo.returnInfo());
        console.log(engineerInfo.returnInfo());
        break;
      case 'Intern':
        let internInfo = new Intern(answers.userType, answers.userName, answers.userID, answers.userEmail, answers.internSchoolName);
        userDataArray.push(internInfo.returnInfo());
        console.log(internInfo.returnInfo());
        break;
      default:
        break;
    }

    confirmLoop();
  })
}

/* confirms if the userinput is done to make userInput recursive */
const confirmLoop = () => {
  // checks if user wants to add another user
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'keepGoing',
      message: `Do you want to add another user?`,
    }
  ])
  // call userInput if keepgoing
  .then((ans) => {
    if (ans.keepGoing) {
      userInput();
    } else {
      console.log(userDataArray);
      let fileData = dataPrinter.dataPrinter(userDataArray);
      fs.writeFile('./dist/index.html', fileData, (err) => {
        err ? console.error(err) : console.log('HTML generated!');
      });
    }
  });
}

userInput();

// while loop 
// do {
//   userInput();
//   confirmLoop();

// } while (gettingInput);