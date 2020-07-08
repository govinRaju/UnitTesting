const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

//unit testing
test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

// test('should output data-less text', () => {
//     const text = generateText('', null);
//     expect(text).toBe(' (null years old)');
// });


//Integration test

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

//Puppeteer
//having some issue in the node modules have to check and fix it 

test('should create an element with text and class', async () => {
    const browser = puppeteer.launch({
        headless: false,
        // slowMo: 80,
        // args: ['--window-size=1920,1080']
    });
    const page = await browser.nextPage();
    await page.goto(
        'C:/Users/ayyap/Documents/allmix/ReactApp/UnitTesting/index.html'
    );
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#name');
    await page.type('input#age', '29');
    await page.click('input#age');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)');
}, 10000);