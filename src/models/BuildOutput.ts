interface BuildOutput {
  id: string
  status: string
  platform: string
  artifacts: {
    buildUrl: string
    xcodeBuildLogsUrl?: string
  }
  initiatingActor: {
    id: string
    displayName: string
  }
  project: {
    id: string
    name: string
    slug: string
    ownerAccount: {
      id: string
      name: string
    }
  }
  distribution: string
  buildProfile: string
  sdkVersion: string
  appVersion: string
  appBuildVersion: string
  gitCommitHash: string
  priority: string
  createdAt: string
  updatedAt: string
}

export default BuildOutput
