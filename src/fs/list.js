import {readdir} from "fs";
import {fileURLToPath} from "url";
import path from "path";

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    await readdir(path.join(__dirname, 'files'), (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files)
        }
    })
};

list()