"Use strict";

class Employee {
  constructor(employeeId, firstName, lastName) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.lastName}, ${this.firstName}`;
  }
}
let employee = new Employee(1, "James", "Lee");
console.log(employee.getFullName());

let employee2 = new Employee(2, "D", "F");
console.log(employee2.getFullName());
