// Output a prompt
process.stdout.write('prompt > ')

// stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    const cmd = data.toString().trim() // remove newline

    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt > ')
})