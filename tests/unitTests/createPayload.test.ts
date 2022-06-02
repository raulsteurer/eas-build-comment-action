import createPayload from '../../src/createPayload'
import {inputArrayMock} from '../mocks/inputArrayMock'
import platformsMock from '../mocks/platformsMock'

describe('The createPayload() function', () => {
  it('creates the messages from a buildoutput', async () => {
    const input = await createPayload(inputArrayMock)
    expect(input).toStrictEqual(platformsMock)
  })
})
