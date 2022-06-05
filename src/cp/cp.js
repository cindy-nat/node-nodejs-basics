import {fileURLToPath} from "url";
import path from "path";
import {fork} from 'child_process'

export const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const child = fork(path.join(__dirname, 'files/script.js'), args);

    child.on('error', (error)=> {throw new Error(error.message)})

};

spawnChildProcess(['done'])