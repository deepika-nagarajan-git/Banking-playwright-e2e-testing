// Base URL
export const paraBankUrl = 'https://parabank.parasoft.com/parabank/index.htm';

// Home Page Locators
export const HomePage = {
  HomeTitle: '//*[@title="ParaBank"]',
  HomePageCaption: '//p[@class="caption"]',
  AdminLogo: '//img[@class="admin"]',
  lblSolutions: '//li[@class="Solutions"]',

  // Navigation Buttons
  btnAboutUs: '(//a[text()="About Us"])[1]',
  btnService: '(//a[text()="Services"])[1]',
  btnProducts: '(//a[text()="Products"])[1]',
  btnLocations: '(//a[text()="Locations"])[1]',
  btnAdminPage: '(//a[text()="Admin Page"])[1]',

  // Login Section
  lblCustomerLogin: '//h2[text()="Customer Login"]',
  lblUserName: '//b[text()="Username"]',
  txtBox_UserName: '//input[@class="input" and @name="username"]',
  lblPassword: '//b[text()="Password"]',
  txtBox_Password: '//input[@class="input" and @name="password"]',
  btn_Login: '//input[@class="button" and @value="Log In"]',
  lnk_ForgotLoginInfo: '//a[text()="Forgot login info?"]',
  Register: '//a[text()="Register"]',

  // Header Links
  btn_Home: '(//a[text()="home"])[1]',
  btn_About: '(//a[text()="about"])[1]',
  btn_Contact: '(//a[text()="contact"])[1]',

  // Services Section
  lbl_AtmServices: '//li[@class="captionone" and text()="ATM Services"]',
  lnk_WithdrawFunds: '//ul[@class="services"]//a[text()="Withdraw Funds"]',
  lnk_TransferFunds: '//ul[@class="services"]//a[text()="Transfer Funds"]',
  lnk_CheckBalance: '//ul[@class="services"]//a[text()="Check Balances"]',
  lnk_MakeDeposit: '//ul[@class="services"]//a[text()="Make Deposits"]',

  lbl_OnlineServices: '//li[@class="captiontwo" and text()="Online Services"]',
  lnk_BillPay: '//ul[@class="servicestwo"]//a[text()="Bill Pay"]',
  lnk_AccountHistory: '//ul[@class="servicestwo"]//a[text()="Account History"]',
  lnk_Online_TransferFund: '//ul[@class="servicestwo"]//a[text()="Transfer Funds"]',
  lnk_Service_ReadMore: '(//a[text()="Read More"])[1]',

  // News Section
  lbl_LatestNews: '//h4[text()="Latest News"]',
  lnk_News_link1: '//a[text()="ParaBank Is Now Re-Opened"]',
  lnk_News_link2: '//a[text()="New! Online Bill Pay"]',
  lnk_News_link3: '//a[text()="New! Online Account Transfers"]',
  lnk_News_ReadMore: '(//a[text()="Read More"])[2]',

  // Footer Links
  lnk_Footer_Home: '//div[@id="footerPanel"]//a[text()="Home"]',
  lnk_Footer_AboutUs: '//div[@id="footerPanel"]//a[text()="About Us"]',
  lnk_Footer_Services: '//div[@id="footerPanel"]//a[text()="Services"]',
  lnk_Footer_Products: '//div[@id="footerPanel"]//a[text()="Services"]',
  lnk_Footer_Locations: '//div[@id="footerPanel"]//a[text()="Locations"]',
  lnk_Footer_Forum: '//div[@id="footerPanel"]//a[text()="Forum"]',
  lnk_Footer_SiteMap: '//div[@id="footerPanel"]//a[text()="Site Map"]',
  lnk_Footer_ContactUs: '//div[@id="footerPanel"]//a[text()="Contact Us"]',
  lnk_Footer_CopyRights: '//p[@class="copyright"]',
  lbl_Footer_VisitUs: '//ul[@class="visit"]//li[text()="Visit us at:"]',
  lnk_Footer_VisitUs: '//ul[@class="visit"]//a[text()="www.parasoft.com"]',
};
