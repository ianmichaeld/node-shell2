const commands = require('./commands')

// Output a prompt
process.stdout.write('prompt > ')

// stdin 'data' event fires after a user types in a line
process.stdin.on('data', async function (data) {
    const cmd = data.toString().trim() // remove newline
    if (commands.hasOwnProperty(cmd)) {
        let output = await commands[cmd]()
        process.stdout.write(output)
    }
    else process.stdout.write('You typed: \'' + cmd +'\'. Command not found.')
    
    process.stdout.write('\nprompt > ')
})