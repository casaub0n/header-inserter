import path from 'path'
import fs from 'fs'
import { insertHeader } from './insertHeader'
import { makeHeader } from './makeHeader/main'

const header = makeHeader()
if (header) {
  console.log(`config json: \n${header}`)
  const files = process.argv.slice(2)
  files.map((f) => insertHeader(f, header))
}

