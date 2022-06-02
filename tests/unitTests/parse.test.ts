import parse from '../../src/parse'
import {inputObjectMock, inputObjectMockString} from '../mocks/inputObjectMock'
import {inputArrayMock, inputArrayMockString} from '../mocks/inputArrayMock'

describe('The parse() function', () => {
  it('parses a single object', () => {
    const input = parse(inputObjectMockString)
    expect(input).toStrictEqual([inputObjectMock])
  })

  it('parses an array of objects', () => {
    const input = parse(inputArrayMockString)
    expect(input).toStrictEqual(inputArrayMock)
  })
})
