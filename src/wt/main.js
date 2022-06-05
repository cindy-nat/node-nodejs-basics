import {cpus} from 'os'
import {Worker} from "node:worker_threads";
import {fileURLToPath} from "url";
import path from "path";

export const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const coresQ = cpus().length

    let workers = []

    for (let i = 0; i < coresQ; i++) {
        workers.push(new Promise(async (resolve, reject) => {
            const worker = new Worker(path.join(__dirname, "./worker.js"), {workerData: {n: 10+i}});
            try {
                await worker.on('message', resolve);
            }
            catch (err) {
                worker.on('error', err);
            }
            worker.on('exit', reject)
        }))
    }

    await Promise.all(workers).then((result) =>
        result.forEach(data =>
            console.log({status: data ? 'resolved' : 'error', data: data})))
};

performCalculations()