import * as Handlebars from 'handlebars'
import Platform from './models/Platform'
import commentTemplate from './views/commentTemplate'

const createMessage = async (platforms: Platform[]): Promise<string> => {
  const template = Handlebars.compile(commentTemplate)
  return template({platforms})
}

export default createMessage
