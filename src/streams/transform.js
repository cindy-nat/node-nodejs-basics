import {Transform} from "stream";

export const transform = async () => {

    const reversed = new Transform({
        transform(chunk, encoding, done) {
            const result = chunk.split('').reverse().join('');
            done(null, result);
        }
    });

    process.stdin.on('data', async (data) => {
        await reversed._transform(data.toString(),'utf-8', (error, result) => {
            if (error) throw new Error('Reverse error')
            process.stdout.write(result+ '\n')
        })
        process.exit();
    })

};

transform()