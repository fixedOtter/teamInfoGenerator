//
// made by fixedOtter on 22.7.2022
//

class EmployeeClass {
  constructor(type, name, ID, email) {
    this.type = type;
    this.name = name;
    this.ID = ID;
    this.email = email;
  }
  returnInfo() {
    return { type: this.type, name: this.name, userID: this.ID, userEmail: this.email };
  }
}

export let Employee = EmployeeClass;
// module.exports = EmployeeClass;