import * as path from "path";
import { createReadStream } from 'fs'
import { fileURLToPath } from "url";

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
        let data = ''
        const readerStream = await createReadStream(path.join(__dirname, '/files/fileToRead.txt'),
            {encoding: 'utf8'})

        readerStream.on('data', (chunk) =>  {
            data += chunk;
        });

        readerStream.on('end', () => {
            process.stdout.write(data+ '\n')
        })
    }
    catch (err) {
        throw new Error('FS operation failed')
    }
};

read()