import path from 'path'
import fs from 'fs'
import { insertHeader } from './insertHeader'

type UserScriptHeader = {
  name: string,
  namespace: string,
  version: string
  description: string
  authoer: string,
  match: string,
  grant: string
}

console.log(process.cwd())
const configPath = path.join(process.cwd(), 'package.json')
console.log(configPath)
const configJson: UserScriptHeader = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
const userScriptHeader = "// ==UserScript==\n// @name         " + configJson.name + "\n// @namespace    " + configJson.namespace + "\n// @version      "
  + configJson.version + "\n// @description  " + configJson.description + "\n// @author       " + configJson.authoer + "\n// @match        "
  + configJson.match + "\n// @grant        " + configJson.grant + "\n// ==/UserScript==\n\n"

console.log(`config json: \n${userScriptHeader}`)
const files = process.argv.slice(2);
files.map((f) => insertHeader(f, userScriptHeader))