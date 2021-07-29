const commands = require('./commands')

// Output a prompt
process.stdout.write('prompt > ')

// stdin 'data' event fires after a user types in a line
process.stdin.on('data', async function (data) {
    const input = data.toString().trim()
    const cmd = input.split(' ')[0]
    const args = input.slice(cmd.length + 1)
    if (commands.hasOwnProperty(cmd)) {
        let output = await commands[cmd](args)
        process.stdout.write(output)
        process.stdout.write('\nprompt > ')
    }
    else {
        process.stdout.write('You typed: \'' + input +'\'. Command not found.')
        process.stdout.write('\nprompt > ')
    }
})