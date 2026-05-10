export const paraBankUrl = 'https://parabank.parasoft.com/parabank/index.htm';

export class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.lnk_Register = page.locator('//a[text()="Register"]');
    this.title = page.locator('//h1[@class="title"]');
    this.infoText = page.locator('//p[text()="If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."]');
    this.firstName = page.locator('//b[normalize-space(text())="First Name:"]/following::input[@name="customer.firstName"][1]');
    this.lastName = page.locator('//b[normalize-space(text())="Last Name:"]/following::input[@name="customer.lastName"][1]');
    this.address = page.locator('//b[normalize-space(text())="Address:"]/following::input[@name="customer.address.street"][1]');
    this.city = page.locator('//b[normalize-space(text())="City:"]/following::input[@name="customer.address.city"][1]');
    this.state = page.locator('//b[normalize-space(text())="State:"]/following::input[@name="customer.address.state"][1]');
    this.zipCode = page.locator('//b[normalize-space(text())="Zip Code:"]/following::input[@name="customer.address.zipCode"][1]');
    this.phone = page.locator('//b[normalize-space(text())="Phone #:"]/following::input[@name="customer.phoneNumber"][1]');
    this.ssn = page.locator('//b[normalize-space(text())="SSN:"]/following::input[@name="customer.ssn"][1]');
    this.username = page.locator('//b[normalize-space(text())="Username:"]/following::input[@name="customer.username"][1]');
    this.password = page.locator('//b[normalize-space(text())="Password:"]/following::input[@name="customer.password"][1]');
    this.confirmPassword = page.locator('//b[normalize-space(text())="Confirm:"]/following::input[@name="repeatedPassword"][1]');
    this.registerButton = page.locator('//input[@value="Register"]');
  }
}