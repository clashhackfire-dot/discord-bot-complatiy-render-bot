const mineflayer = require('mineflayer')
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Minecraft bot is running');
}).listen(process.env.PORT || 3000, () => {
  console.log('Web server started');
});
// Edit these values directly if you want (same style as before)
const CONFIG = {
  host: 'H1ckF1re-I8Xl.aternos.me',
  port: 61353,
  username: 'statusbot',
  version: '1.16.5',
  registerCommand: '/register aagop04'
}

function createBot () {
  const bot = mineflayer.createBot({
    host: CONFIG.host,
    port: CONFIG.port,
    username: CONFIG.username,
    version: CONFIG.version
  })

  bot.on('spawn', () => {
    console.log('Bot joined server')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 1000)

      setTimeout(() => {
        bot.setControlState('forward', true)
        setTimeout(() => bot.setControlState('forward', false), 500)
      }, 1000)

      setTimeout(() => {
        bot.setControlState('back', true)
        setTimeout(() => bot.setControlState('back', false), 500)
      }, 2000)

      setTimeout(() => {
        bot.setControlState('right', true)
        setTimeout(() => bot.setControlState('right', false), 2000)
      }, 500)

      setTimeout(() => {
        bot.setControlState('left', true)
        setTimeout(() => bot.setControlState('left', false), 2000)
      }, 500)
    }, 30000)
  })

  bot.on('kicked', console.log)
  bot.on('error', console.log)
  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 10 seconds...')
    setTimeout(createBot, 10000)
  })
}

createBot()
