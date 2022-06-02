import BuildOutput from './models/BuildOutput'

const parser = (raw: string): BuildOutput[] => {
  const parsed: BuildOutput | BuildOutput[] = JSON.parse(raw)
  if (Array.isArray(parsed)) return parsed
  return [parsed]
}

export default parser
