import { describe, expect, it } from 'vitest'
import { capitalize, toPascalCase, toSnakeCase } from './string'

describe('capitalize', () => {
  it('should capitalize the first letter of a word but not affect later letters', () => {
    expect(capitalize('testInG')).toBe('TestInG')
  })

  it('should capitalize all words in a sentence', () => {
    expect(capitalize('my Name is matthew.')).toBe('My Name Is Matthew.')
  })

  it('should gracefully handle empty strings and numbers', () => {
    expect(capitalize('')).toBe('')
    expect(capitalize('2')).toBe('2')
  })
})

describe('pascal case', () => {
  it('should convert whitespace segments to underscores', () => {
    expect(toPascalCase('test data')).toBe('TEST_DATA')
    expect(toPascalCase('test    \n data')).toBe('TEST_DATA')
  })

  it('should treat special characters as if whitespace', () => {
    expect(toPascalCase('test # d&ata')).toBe('TEST_D_ATA')
  })
})

describe('snake case', () => {
  it('should convert whitespace segments to underscores', () => {
    expect(toSnakeCase('test data')).toBe('test_data')
    expect(toSnakeCase('test    \n data')).toBe('test_data')
  })

  it('should treat special characters as if whitespace', () => {
    expect(toSnakeCase('test # d&ata')).toBe('test_d_ata')
  })
})
