import {rm} from 'fs'
import {fileURLToPath} from "url";
import path from "path";

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    await rm(path.join(__dirname, 'files/fileToRemove.txt'),
        (err) => {if (err) throw new Error('FS operation failed')})
};

await remove()