//
// made by fixedOtter on 22.7.2022
//

import { Employee } from './Employee.js';

class InternClass extends Employee {
  constructor(type, name, ID, email, schoolName) {
    super(type, name, ID, email);
    this.schoolName = schoolName;
  }
  returnInfo() {
    return { type: this.type, name: this.name, userID: this.ID, userEmail: this.email, schoolName: this.schoolName };
  }
}

export let Intern = InternClass;