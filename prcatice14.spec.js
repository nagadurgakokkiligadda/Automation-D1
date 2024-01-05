const { test } = require("@playwright/test");
test("RedBus", async ({ page }) => {
  await page.goto("https://www.redbus.in/");
  await page.locator("#src").fill("Hyd");
  await page.waitForTimeout(3000);
  const fromLocation = await page.$$("//ul[contains(@class,'sc-dnqmqq')]/li/div/text[1]");
  for (const fromLoc of fromLocation) {
    const from = await fromLoc.textContent();
    if ((await from) == "SR Nagar") {
      await fromLoc.click();
      break;
    }
  }
  //To Location
  await page.locator("#dest").fill("Vinu");
  await page.waitForTimeout(3000);
  const destLocation = await page.$$("//div[@class='sc-ckVGcZ ikHMPa']/div[3]/div/ul[contains(@class,'sc-dnqmqq')]/li/div/text[1]");
  for (const destLoc of destLocation) {
    const dest = await destLoc.textContent();
    if ((await dest) == "Vinukonda") {
      await destLoc.click();
      break;
    }
  }  
  while (true) {
    const monthText = await page.locator('//div[contains(@class,"DayNavigator__CalendarHeader-qj8jdz-1")]/div[2]').textContent();
    console.log(await monthText);
    if (await monthText.startsWith("Jan 2024")) {
      break;
    }
    await page.locator('//div[contains(@class,"DayNavigator__CalendarHeader-qj8jdz-1")]/div[3]').click();
  }
  await page.waitForTimeout(5000);
  const day = await page.$$('//div[contains(@class,"DatePicker__MainBlock")]/div[3]/div/span/div/span');
  const dayval = "22";
  for (const dayText of day) {
    const dayT = await dayText.textContent();
    console.log(dayT);
    if (dayT == dayval) {
      await dayText.click();
      break;
    }
  }
  await page.locator("#search_button").click();
  await page.waitForTimeout(10000);
});
 