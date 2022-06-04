import {rename as renameFs, stat} from 'fs'

export const rename = async () => {
    const error = 'FS operation failed'

    await stat('src/fs/files/properFilename.md', async (err, stats) => {
        if (!stats) {
            await renameFs('src/fs/files/wrongFilename.txt',
                'src/fs/files/properFilename.md',
                (err) => {
                if (err) throw new Error(error);
            });
        } else {
            throw new Error(error)
        }
    })
};

await rename()