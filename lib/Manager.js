//
// made by fixedOtter on 22.7.2022
//

import { Employee } from './Employee.js';

// manager constructor grabbing type, name, id, and email from employee parent
class ManagerClass extends Employee {
  constructor(type, name, ID, email, officeNum) {
    super(type, name, ID, email);
    this.officeName = officeNum;
  }
  // return object of basic user data
  returnInfo() {
    return { type: this.type, name: this.name, userID: this.ID, userEmail: this.email, officeNum: this.officeName };
  }
}

export let Manager = ManagerClass;