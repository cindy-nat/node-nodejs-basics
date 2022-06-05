import {readFile} from 'fs'
import {fileURLToPath} from "url";
import path from "path";

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    await readFile(path.join(__dirname, 'files/fileToRead.txt'),'utf8',(err, data) => {
        if (err) throw new Error('FS operation failed')
        console.log(data)
    })
};

read()