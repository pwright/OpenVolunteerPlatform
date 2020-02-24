import fs from 'fs'
import path from 'path'

export class Config {
  public port: string | number
  public db: { database: string; user?: string; password?: string; host: string }
  public keycloakConfigPath: string
  public keycloakConfig: any
  public pushConfigPath: string
  public pushConfig: any
  public playgroundConfig: { tabs: { endpoint: string; variables: {}; query: string }[] }

  constructor() {
    this.port = process.env.PORT || 4000
    
    this.db = {
      database: process.env.MONGO_COLLECTION || 'showcase',
      host: process.env.MONGO_HOST || '127.0.0.1',
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
    }

    this.keycloakConfigPath = process.env.KEYCLOAK_CONFIG || path.resolve(__dirname, './keycloak.json')
    this.keycloakConfig = readConfig(this.keycloakConfigPath)

    this.pushConfigPath = process.env.PUSH_CONFIG || path.resolve(__dirname, './push-config.json')
    this.pushConfig = readConfig(this.pushConfigPath)

    this.playgroundConfig = {
      tabs: [
        {
          endpoint: `/graphql`,
          variables: {},
          query: fs.readFileSync(path.resolve(__dirname, './playground.gql'), 'utf8')
        }
      ]
    }
  }
}

function readConfig(path) {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  } catch (e) {
    console.error(`Warning: couldn't find config at ${path}`)
  }
}

export const config = new Config()