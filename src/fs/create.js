import { writeFile } from "fs";
import {fileURLToPath} from "url";
import path from "path";

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    await writeFile(path.join(__dirname, '/files/fresh.txt'), "I am fresh and young",
        { flag: "wx" }, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await create()