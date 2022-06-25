import {
    copyFile,
    constants,
    mkdir,
    readdir
} from 'fs'
import * as path from "path";
import {fileURLToPath} from "url";

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldPath = '/files'
    const newPath = '/files_copy'
    const errText = 'FS operation failed'
    await mkdir(path.join(__dirname, newPath), (err) => {
        if (err) throw new Error(errText);
    })
    await readdir(path.join(__dirname, oldPath), (err, files) => {
        if (err) {
            throw new Error(errText);
        } else {
            files.forEach(async (file) => {
                await copyFile(path.join(__dirname, oldPath, file), path.join(__dirname, newPath, file), constants.COPYFILE_EXCL,
                    (err) => {
                        if (err) throw new Error(errText)
                    });
            })
        }
    })
};

await copy()