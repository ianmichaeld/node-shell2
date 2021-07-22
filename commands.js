module.exports = {
    pwd: () => process.stdout.write(process.cwd()),
    date: () => {
        const date = new Date()
        process.stdout.write(date.toLocaleDateString())

    }
}