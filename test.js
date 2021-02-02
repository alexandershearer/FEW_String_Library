const str = require('./index')

test('Check Capitalize', () => {
    expect(str.capitalize("hello")).toBe("Hello")
})

test('Check Capitalize Words', () => {
    expect(str.capitalizeWords("hello")).toBe("HELLO")
})

test('Check Capitalize Headline', () => {
    expect(str.capitalizeHeadline("hello world")).toBe("Hello World")
})

test('Check kabobCase', () => {
    expect(str.kabobCase('this is a test kabob')).toBe("this-is-a-test-kabob")
})

test('Check snakeCase', () => {
    expect(str.snakeCase('this is a test snake')).toBe("this_is_a_test_snake")
})