import {rename as renameFs, stat} from 'fs'
import {fileURLToPath} from "url";
import path from "path";

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const error = 'FS operation failed'

    await stat(path.join(__dirname,'/files/properFilename.md'), async (err, stats) => {
        if (!stats) {
            await renameFs(path.join(__dirname,'/files/wrongFilename.txt'),
                path.join(__dirname,'/files/properFilename.md'),
                (err) => {
                if (err) throw new Error(error);
            });
        } else {
            throw new Error(error)
        }
    })
};

await rename()