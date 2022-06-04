import {createGzip} from 'zlib'
import {createReadStream, createWriteStream} from "fs";
import {fileURLToPath} from "url";
import path from "path";

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const griz = await createGzip();

    const readStream = await createReadStream(path.join(__dirname, '/files/fileToCompress.txt'));
    const writeStream = await createWriteStream(path.join(__dirname, '/files/archive.gz'));
    readStream.pipe(griz).pipe(writeStream);
};

compress()