//
// made by fixedOtter on 22.7.2022
//

// parent class constructor to grab the common data of any employee
class EmployeeClass {
  constructor(type, name, ID, email) {
    this.type = type;
    this.name = name;
    this.ID = ID;
    this.email = email;
  }
  // return object of basic user data for testing
  returnInfo() {
    return { type: this.type, name: this.name, userID: this.ID, userEmail: this.email };
  }
}

// for using
export let Employee = EmployeeClass;