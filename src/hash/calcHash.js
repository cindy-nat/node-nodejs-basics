import {readFile} from "fs/promises";
import * as path from "path";
import {fileURLToPath} from "url";

export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const { createHash } = await import('node:crypto');

    const hash = createHash('sha256');
    try {
        const data = await readFile(path.join(__dirname, 'files/fileToCalculateHashFor.txt'), 'utf-8')
        hash.update(data);
        const hex = hash.digest('hex')
        console.log(hex)
    }
    catch (err) {
        throw new Error('FS operation failed')
    }

};

calculateHash()