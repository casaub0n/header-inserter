import path from 'path'
import fs from 'fs'

/**
 *
 */
export class ReadTemplate {
  private configPath: string

  constructor() {
    console.log(process.cwd())
    try {
      this.configPath = path.join(process.cwd(), 'userscript.json')
      console.log(this.configPath)
    } catch (err) {
      console.error(err.message)
      if (err instanceof Error) {
        console.log(err.message)
      }
    }

  }

  get configJson(): any {
    return JSON.parse(
      fs.readFileSync(this.configPath, 'utf-8')
    )
  }
}

