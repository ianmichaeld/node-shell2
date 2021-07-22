const fs = require('fs')

module.exports = {
    pwd: () => process.cwd(),
    date: () => new Date().toLocaleDateString(),
    ls: () => {
        fs.readdir('.', (err, files) => {
            if (err) throw err;
            let output = ''
            files.forEach((file) => {
                output += file.toString() + '\n'
            })
            return output
        })
        return output
    }
}