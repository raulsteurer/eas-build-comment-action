import comment from './comment'
import core from '@actions/core'
import createMessage from './createMessage'
import parse from './parse'
import createPayload from './createPayload'

async function run(): Promise<void> {
  try {
    const raw: string = core.getInput('json', {required: true})
    const data = parse(raw)

    const platforms = await createPayload(data)

    const message = await createMessage(platforms)
    await comment(message)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
