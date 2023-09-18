const { spawn } = require('child_process')

const package = 'Renegade Utility'

const commands = [
  `bun test`,
  `bun run build`,
  // `npm publish --access public`,
]

console.log(`Publishing ${package} package`)
const runCommands = spawn(commands.join(' && '), { shell: true })

runCommands.stdout.on('data', data => {
  console.log(data.toString())
})

runCommands.stderr.on('data', data => {
  console.error(data.toString())
})
