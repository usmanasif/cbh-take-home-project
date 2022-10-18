const { deterministicPartitionKey, createHash } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () =>
    expect(deterministicPartitionKey()).toBe('0'))

  it("Returns the literal '1' when given partitionKey 1", () =>
    expect(deterministicPartitionKey({ partitionKey: 1 })).toBe('1'))

  it("Returns the literal '0' when given partitionKey '1'", () =>
    expect(deterministicPartitionKey({ partitionKey: '1' })).toBe('0'))

  it("Returns the literal '0' when given partitionKey any string", () =>
    expect(deterministicPartitionKey({ partitionKey: '123' })).toBe('0'))
})

describe('createHash', () => {
  it('Returns the hash when given some data', () => expect(createHash('123')).toBeTruthy())
})
