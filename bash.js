// Output a prompt
process.stdout.write('prompt > ')

// stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    const cmd = data.toString().trim() // remove newline
    if ( cmd == 'pwd') process.stdout.write(process.cwd())
    else if ( cmd == 'date' ) {
        const date = new Date()
        process.stdout.write(date.toLocaleDateString())
    }
    else process.stdout.write('You typed: ' + cmd)
    
    process.stdout.write('\nprompt > ')
})