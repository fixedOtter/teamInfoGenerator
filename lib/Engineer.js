//
// made by fixedOtter on 22.7.2022
//

import { Employee } from './Employee.js';

// engineer constructor grabbing type, name, id, and email from employee parent
class EngineerClass extends Employee {
  constructor(type, name, ID, email, github) {
    super(type, name, ID, email);
    this.github = github;
  }
  // return object of basic user data
  returnInfo() {
    return { type: this.type, name: this.name, userID: this.ID, userEmail: this.email, github: this.github };
  }
}

export let Engineer = EngineerClass;