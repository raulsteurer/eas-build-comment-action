import createMessage from '../../src/createMessage'
import platformsMock from '../mocks/platformsMock'
import messageMock from '../mocks/messageMock'

describe('The createMessage() function', () => {
  it('creates the messages from a buildoutput', async () => {
    const input = await createMessage(platformsMock)
    expect(input).toEqual(messageMock)
  })
})
