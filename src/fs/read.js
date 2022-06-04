import {readFile} from 'fs'

export const read = async () => {
    await readFile('src/fs/files/fileToRead.txt','utf8',(err, data) => {
        if (err) throw new Error('FS operation failed')
        console.log(data)
    })
};

read()