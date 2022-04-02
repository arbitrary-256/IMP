/** @format */
import fs from 'fs'
import JSZip from 'jszip'
import path from 'path'
import * as packageJson from '../../../package.json'
const getFilePathsRecursively = (directoryPath: string): string[] => {
  let filePaths: string[] = []
  let directoryContents: string[] = fs.readdirSync(directoryPath)
  let pendingFiles: number = directoryContents.length
  if (!pendingFiles) return filePaths
  for (let eachFile of directoryContents) {
    eachFile = path.resolve(directoryPath, eachFile)
    let stat = fs.lstatSync(eachFile)
    if (stat && stat.isDirectory()) {
      filePaths = filePaths.concat(getFilePathsRecursively(eachFile))
    } else {
      filePaths.push(eachFile)
    }
    if (!--pendingFiles) return filePaths
  }
  return filePaths
}
const getZipOfFolder = (directory: string): JSZip => {
  const allPaths: string[] = getFilePathsRecursively(directory)
  let zip = new JSZip()
  for (let filePath of allPaths) {
    if (fs.lstatSync(filePath).isSymbolicLink()) {
      zip.file(path.relative(path.join(directory, `..`), filePath), fs.readlinkSync(filePath), {
        unixPermissions: parseInt(`120755`, 8),
        dir: fs.lstatSync(filePath).isDirectory()
      })
    } else {
      zip.file(path.relative(path.join(directory, `..`), filePath), fs.readFileSync(filePath), {
        unixPermissions: fs.lstatSync(filePath).mode,
        dir: fs.lstatSync(filePath).isDirectory()
      })
    }
  }
  zip
    .generateAsync({
      compression: `DEFLATE`,
      compressionOptions: { level: 9 },
      platform: `UNIX`,
      type: `nodebuffer`
    })
    .then(function (content) {
      fs.writeFileSync(`./output/${packageJson.productName}-${packageJson.version}-web.zip`, content)
    })
  return zip
}
getZipOfFolder(`build`)
