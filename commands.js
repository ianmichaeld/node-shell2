const fs = require('fs')

module.exports = {
    pwd: () => process.cwd(),
    date: () => new Date().toLocaleDateString(),
    ls: () => {
        let output = fs.readdirSync('.')
        let regex = /,/gi
        return output.toString().replace(regex, '\n')
    },

    echo: (args) => {
        if ( args[0] === '$' ) {
            let envVar = args.slice(1)
            return (process.env[envVar]).toString()
        }
        else return args
    }, 
    cat: (fileName) => {
       let output = fs.readFileSync(fileName)
       return output 
    }
}