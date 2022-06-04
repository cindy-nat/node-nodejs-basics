export const parseArgs = () => {
    const propName = '--propName';
    const prop2Name = '--prop2Name'
    const processArguments = process.argv
    const foundIndexPropName = processArguments.indexOf(propName)
    const foundIndexProp2Name = processArguments.indexOf(prop2Name)

    console.log(`propName is ${processArguments[foundIndexPropName+1]}, prop2Name is ${processArguments[foundIndexProp2Name+1]}`)
};

parseArgs()

// node src/cli/args.js --propName value --prop2Name value2