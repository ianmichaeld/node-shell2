const fs = require('fs')

module.exports = {
    pwd: () => process.cwd(),
    date: () => new Date().toLocaleDateString(),
    ls: () => {
        let output = fs.readdirSync('.')
        // fs.readdir('.', (err, files) => {
        //     if (err) throw err;
        //     files.forEach((file) => {
        //         output += (file.toString() + '\n')
        //         console.log(output)
        //     })
        // })
        let regex = /,/gi
        return output.toString().replace(regex, '\n')
    },
    echo: (args) => {
        if ( args[0] === '$' ) {
            let envVar = args.slice(1)
            return (process.env[envVar]).toString()
        }
        else return args
    }
}