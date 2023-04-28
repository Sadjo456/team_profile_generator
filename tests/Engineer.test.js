import Engineer from "../lib/Engineer.js";

test("Can create a phone github.", () => {
    const testGitHub = "AliouDiallo";
    const employeeInstance = new Engineer("Aliou", 2, "aliudiallo@bootcamp.com", testGitHub);
    expect(employeeInstance.github).toBe(testGitHub);
});

test("Testing getGithub will return github.", () => {
    const testGitHub = "AliouDiallo";
    const employeeInstance = new Engineer("Aliou", 2, "alioudiallo@bootcamp.com", testGitHub);
    expect(employeeInstance.getGithub()).toBe(testGitHub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Aliou", 2, "alioudiallo@bootcamp.com", "AliouDiallo");
    expect(employeeInstance.getRole()).toBe(returnValue);
});