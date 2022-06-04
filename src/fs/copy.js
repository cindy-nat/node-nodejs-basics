import {
    copyFile,
    constants,
    mkdir,
    readdir
} from 'fs'
import * as path from "path";

export const copy = async () => {
    const oldPath = 'src/fs/files'
    const newPath = 'src/fs/files_copy'
    const errText = 'FS operation failed'
    await mkdir(newPath, (err) => {
        if (err) throw new Error(errText);
    })
    await readdir(oldPath, (err, files) => {
        if (err) {
            throw new Error(errText);
        } else {
            files.forEach(async (file) => {
                await copyFile(path.join(oldPath, file), path.join(newPath, file), constants.COPYFILE_EXCL,
                    (err) => {
                        if (err) throw new Error(errText)
                    });
            })
        }
    })
};

await copy()