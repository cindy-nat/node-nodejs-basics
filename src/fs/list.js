import {readdir} from "fs";

export const list = async () => {
    const path = 'src/fs/files'

    await readdir(path, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files)
        }
    })
};

list()