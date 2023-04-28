class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return "Employee"
    }

    // getElementById () {
    //     return "We just playing around!"
    // }

             
}

// const doc = new Employee("Dennis Itua", 7, "d@gmail.com", 7777777777);

// const y = doc.getElementById();

// console.log(y);



export default Employee;