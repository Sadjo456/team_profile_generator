import Employee from "./Employee.js";

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }

}

// const manager = new Manager("Dennis", "001", "d@gmail.com", "777777777");

// const xY = manager.officeNumber

// console.log("CLASS: ", xY)

export default Manager;