import { test, expect } from '@playwright/test';
import { paraBankUrl, HomePage } from '../pages/HomePage';

test('Verify all Home Page objects are visible', async ({ page }) => {
  await page.goto(paraBankUrl);

  // Check header/title
  await expect(page.locator(HomePage.HomeTitle)).toBeVisible();
  await expect(page.locator(HomePage.HomePageCaption)).toBeVisible();
  await expect(page.locator(HomePage.AdminLogo)).toBeVisible();

  // Navigation buttons
  await expect(page.locator(HomePage.btnAboutUs)).toBeVisible();
  await expect(page.locator(HomePage.btnService)).toBeVisible();
  await expect(page.locator(HomePage.btnProducts)).toBeVisible();
  await expect(page.locator(HomePage.btnLocations)).toBeVisible();
  await expect(page.locator(HomePage.btnAdminPage)).toBeVisible();

  // Login section
  await expect(page.locator(HomePage.lblCustomerLogin)).toBeVisible();
  await expect(page.locator(HomePage.lblUserName)).toBeVisible();
  await expect(page.locator(HomePage.txtBox_UserName)).toBeVisible();
  await expect(page.locator(HomePage.lblPassword)).toBeVisible();
  await expect(page.locator(HomePage.txtBox_Password)).toBeVisible();
  await expect(page.locator(HomePage.btn_Login)).toBeVisible();
  await expect(page.locator(HomePage.lnk_ForgotLoginInfo)).toBeVisible();
  await expect(page.locator(HomePage.Register)).toBeVisible();

  // Header links
  await expect(page.locator(HomePage.btn_Home)).toBeVisible();
  await expect(page.locator(HomePage.btn_About)).toBeVisible();
  await expect(page.locator(HomePage.btn_Contact)).toBeVisible();

  // Services section
  await expect(page.locator(HomePage.lbl_AtmServices)).toBeVisible();
  await expect(page.locator(HomePage.lnk_WithdrawFunds)).toBeVisible();
  await expect(page.locator(HomePage.lnk_TransferFunds)).toBeVisible();
  await expect(page.locator(HomePage.lnk_CheckBalance)).toBeVisible();
  await expect(page.locator(HomePage.lnk_MakeDeposit)).toBeVisible();

  await expect(page.locator(HomePage.lbl_OnlineServices)).toBeVisible();
  await expect(page.locator(HomePage.lnk_BillPay)).toBeVisible();
  await expect(page.locator(HomePage.lnk_AccountHistory)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Online_TransferFund)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Service_ReadMore)).toBeVisible();

  // News section
  await expect(page.locator(HomePage.lbl_LatestNews)).toBeVisible();
  await expect(page.locator(HomePage.lnk_News_link1)).toBeVisible();
  await expect(page.locator(HomePage.lnk_News_link2)).toBeVisible();
  await expect(page.locator(HomePage.lnk_News_link3)).toBeVisible();
  await expect(page.locator(HomePage.lnk_News_ReadMore)).toBeVisible();

  // Footer links
  await expect(page.locator(HomePage.lnk_Footer_Home)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_AboutUs)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_Services)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_Products)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_Locations)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_Forum)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_SiteMap)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_ContactUs)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_CopyRights)).toBeVisible();
  await expect(page.locator(HomePage.lbl_Footer_VisitUs)).toBeVisible();
  await expect(page.locator(HomePage.lnk_Footer_VisitUs)).toBeVisible();
});