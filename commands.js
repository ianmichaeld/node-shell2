const fs = require('fs')

module.exports = {
    pwd: () => process.stdout.write(process.cwd()),
    date: () => {
        const date = new Date()
        process.stdout.write(date.toLocaleDateString())
    },
    ls: () => {
        fs.readdir('.', (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                process.stdout.write(file.toString() + '\n')
            })
        })
    }
}