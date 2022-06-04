import {rm} from 'fs'

export const remove = async () => {
    await rm('src/fs/files/fileToRemove.txt',
        (err) => {if (err) throw new Error('FS operation failed')})
};

await remove()