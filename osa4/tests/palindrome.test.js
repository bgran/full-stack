const { check_palin } = require('../utils/for_testing.js')

const f = check_palin

console.log("check_palin:", f)
test('palindrome of a', () => {
  const result = f('a')

  expect(result).toBe('a')
})

test('palindrome of react', () => {
  const result = f('react')

  expect(result).toBe('tcaer')
})

test('palindrome of saippuakauppias', () => {
  const result = f('saippuakauppias')

  expect(result).toBe('saippuakauppias')
})
