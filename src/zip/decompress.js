import {createUnzip} from 'zlib'
import {createReadStream, createWriteStream} from "fs";
import {fileURLToPath} from "url";
import path from "path";

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const griz = await createUnzip();

    const readStream = await createReadStream(path.join(__dirname, '/files/archive.gz'));
    const writeStream = await createWriteStream(path.join(__dirname, '/files/fileToCompress.txt'));
    readStream.pipe(griz).pipe(writeStream);
};

decompress()