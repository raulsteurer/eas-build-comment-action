import BuildOutput from '../../src/models/BuildOutput'

export const inputObjectMock: BuildOutput = {
  id: '625f2383-1873-421d-bd15-781e2b1ce355',
  status: 'FINISHED',
  platform: 'ANDROID',
  artifacts: {
    buildUrl: 'https://expo.dev/artifacts/eas/d9xFxLQWWL9yseXHB6yXcK.apk'
  },
  initiatingActor: {
    id: 'a964317f-116c-475a-bb0c-89f64bce91c8',
    displayName: 'raulsteurer'
  },
  project: {
    id: 'f54d5b3c-ae8b-4488-9961-c8ea286c42e1',
    name: 'nadi-app',
    slug: 'nadi-app',
    ownerAccount: {
      id: 'fcd590a4-9097-441c-8ccb-5fd916fe59ac',
      name: 'steurerio'
    }
  },
  distribution: 'INTERNAL',
  buildProfile: 'preview',
  sdkVersion: '44.0.0',
  appVersion: '1.0.0',
  appBuildVersion: '1',
  gitCommitHash: 'a23f62b202d6a1ec6ea431b10de74797df04b2fa',
  priority: 'HIGH',
  createdAt: '2022-06-02T16:19:17.758Z',
  updatedAt: '2022-06-02T16:29:30.004Z'
}

export const inputObjectMockString = JSON.stringify(inputObjectMock)
