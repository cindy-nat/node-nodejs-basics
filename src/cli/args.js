export const parseArgs = () => {
    const processArguments = process.argv
    processArguments.forEach(data => {
        if(data.startsWith('--')) {
            console.log(`${data.slice(2)} is ${processArguments[processArguments.indexOf(data)+1]}`)
        }
    })
};

parseArgs()