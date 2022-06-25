export const parseEnv = () => {
    const values = process.env
    const valueKeys = Object.entries(values)
    const rssValues = valueKeys.filter(value => value[0].startsWith('RSS_'))

    rssValues.forEach(rssValue => console.log(`${rssValue[0]}=${rssValue[1]};`))
};

parseEnv()