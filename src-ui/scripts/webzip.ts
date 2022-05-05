/** @format */
/* libraries */
const fs = require('fs')
const JSZip = require('jszip')
const path = require('path')
/* package.json file */
const packageJson = require('../../package.json')
/**
 * gets all subdirectorie paths within a given directory
 * @param directoryPath the root directory to be searched
 * @returns a string[] of all subdirectories within the root directory
 */
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
/**
 * zips the build directory to a given directory
 * @param outputDirectory the directory to zip
 * @returns void and writes a zip file to the output directory
 */
const getZipOfFolder = (outputDirectory: string): void => {
  const allPaths: string[] = getFilePathsRecursively(outputDirectory)
  let zip = new JSZip()
  for (let filePath of allPaths) {
    if (fs.lstatSync(filePath).isSymbolicLink()) {
      zip.file(path.relative(path.join(outputDirectory, `..`), filePath), fs.readlinkSync(filePath), {
        unixPermissions: parseInt(`120755`, 8),
        dir: fs.lstatSync(filePath).isDirectory()
      })
    } else {
      zip.file(path.relative(path.join(outputDirectory, `..`), filePath), fs.readFileSync(filePath), {
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
    .then(function (content: any) {
      fs.writeFileSync(`./output/${packageJson.productName}-${packageJson.version}-web.zip`, content)
    })
}
getZipOfFolder(`build`)
