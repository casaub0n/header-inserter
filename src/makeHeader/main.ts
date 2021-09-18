import { getVersion } from "./gerVersion";
import { ReadTemplate } from "./readTemplate";
import { validateJson } from "./validateJson";

export const makeHeader = (): string | undefined => {
  const data = new ReadTemplate()
  console.log(data.configJson)
  const header = validateJson(data.configJson)
  if (header) {
    const configJsonVersion = getVersion()
    if (header.sameversion && configJsonVersion) {
      header.version = configJsonVersion
    }
    const userScriptHeader = '// ==UserScript==\n// @name         ' +
    header.name +
    '\n// @namespace    ' +
    header.namespace +
    '\n// @version      ' +
    header.version +
    '\n// @description  ' +
    header.description +
    '\n// @author       ' +
    header.author +
    '\n// @match        ' +
    header.match +
    '\n// @grant        ' +
    header.grant +
    '\n// ==/UserScript==\n\n'
    return userScriptHeader
  }
  console.log('invalidate configure.')
  return undefined
}
