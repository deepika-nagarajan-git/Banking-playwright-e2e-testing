import { test, expect } from '@playwright/test';
import { paraBankUrl, RegistrationPage } from '../pages/RegistrationPage';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
dotenv.config();

test('Verify Registration Page fields and enter values', async ({ page }) => {
  await page.goto(paraBankUrl);
  const regPage = new RegistrationPage(page);

  await regPage.lnk_Register.click();

  await expect(regPage.title).toHaveText('Signing up is easy!');
  await expect(regPage.infoText).toBeVisible();

  await expect(regPage.firstName).toBeVisible();
  await expect(regPage.lastName).toBeVisible();
  await expect(regPage.address).toBeVisible();
  await expect(regPage.city).toBeVisible();
  await expect(regPage.state).toBeVisible();
  await expect(regPage.zipCode).toBeVisible();
  await expect(regPage.phone).toBeVisible();
  await expect(regPage.ssn).toBeVisible();
  await expect(regPage.username).toBeVisible();
  await expect(regPage.password).toBeVisible();
  await expect(regPage.confirmPassword).toBeVisible();
  await expect(regPage.registerButton).toBeVisible();

  //Generate dynamic names
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  //Build username from first + last + timestamp (to ensure uniqueness)
  const username = `${firstName}${lastName}`;

  
  await regPage.firstName.fill(firstName);
  await regPage.lastName.fill(lastName);
  await regPage.address.fill('123 main street');
  await regPage.city.fill('Chennai');
  await regPage.state.fill('TamilNadu');
  await regPage.zipCode.fill('600023');
  await regPage.phone.fill('9080238670');
  await regPage.ssn.fill('123-45-6789');
  await regPage.username.fill(username);
  await regPage.password.fill(process.env.REGISTRATION_PASSWORD);
  await regPage.confirmPassword.fill(process.env.REGISTRATION_PASSWORD);

  await regPage.registerButton.click();

  // success assertion
  await expect(page.locator('text=Your account was created successfully. You are now logged in.')).toBeVisible();
  console.log(`username used : ${username}`);
  
});
