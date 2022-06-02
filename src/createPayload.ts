import BuildOutput from './models/BuildOutput'
import Platform from './models/Platform'
import QRCode from 'qrcode'

const createPayload = async (outputs: BuildOutput[]): Promise<Platform[]> => {
  return await Promise.all(
    outputs.map(async build => ({
      name: build.platform,
      url: build.artifacts.buildUrl,
      qr: await QRCode.toString(build.artifacts.buildUrl)
    }))
  )
}

export default createPayload
