import Employee from "../lib/Employee.js";

test("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Aliou";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Aliou", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "alioudiallo@bootcamp.com";
    const employeeInstance = new Employee("Aliou", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Gets name through getName method.", () => {
    const testName = "Aliou";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test Id through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Aliou", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "alioudiallo@bootcamp.com";
    const employeeInstance = new Employee("Aliou", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Aliou", 2, "alioudiallo@bootcamp.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})