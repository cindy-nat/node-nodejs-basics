import { fileURLToPath } from "url";
import path from "path";
import { createWriteStream } from "fs";

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const writeStream = await createWriteStream(path.join(__dirname, '/files/fileToWrite.txt'),
        {encoding: 'utf8', flags: 'a'})

    process.stdin.on('data', async (data) => {
        writeStream.write(data)
        process.exit();
    })

};

write()