//import libraries
const pkg = require('./package.json')
const program = require('commander');

//Get CLI arguments
program

    //description
    .name(pkg.name)
    .description(pkg.description)
    .version(pkg.version)

    //commands
    .requiredOption('-t, --time <number>', 'Decide how many minutes to meditate for');
    program.showHelpAfterError('use -t or --time to decide how much to meditate for.')

program.parse(process.argv)

let meditationTime = program.opts().time

const updateTimer = () => {
    if(meditationTime === 'number' || meditationTime > 0){
    meditationTime--
    process.stdout.write(`\rYou will be meditating for ${meditationTime} minutes`)
    if(meditationTime === 0) {
        console.clear()
        clearInterval(updateTimer)
        console.log("\nYou have finished meditating.")
    }
} 
else {
    console.log(`Thought I wouldn't implement error handling huh? Time is a number I'm afraid`)
    process.exit(1)
}
    
};

updateTimer()
const timer = setInterval(updateTimer, 60000)

 