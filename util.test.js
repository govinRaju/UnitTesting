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