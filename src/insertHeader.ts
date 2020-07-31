import fs from 'fs'
import firstline from 'firstline'

export const insertHeader = (file: string, comment: string):void => {
  const firstLineText = firstline(file)
  firstLineText.then(v => {
    const data = fs.readFileSync(file)
    const fd = fs.openSync(file, 'w+')
    const insert = Buffer.from(comment + '\n')
    fs.writeSync(fd, insert, 0, insert.length, 0)
    fs.writeSync(fd, data, 0, data.length, insert.length)
    fs.close(fd, err => {
      if (err) throw err;
      console.log('success to insert header：' + file)
    })
  })
}