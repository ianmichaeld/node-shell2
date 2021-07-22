const commands = require('./commands')

// Output a prompt
process.stdout.write('prompt > ')

// stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    const cmd = data.toString().trim() // remove newline
    if (commands.hasOwnProperty(cmd)) commands[cmd]()
    else process.stdout.write('You typed: \'' + cmd +'\'. Command not found.')
    
    process.stdout.write('\nprompt > ')
})