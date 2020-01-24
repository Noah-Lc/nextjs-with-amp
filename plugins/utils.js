const consola = require('consola')
const chalk = require('chalk')

const logger = consola.withScope('@nuxtjs/amp')

module.exports = async (html, url) => {
  const amphtmlValidator = require('amphtml-validator')
  const validator = await amphtmlValidator.getInstance()

  const result = validator.validateString(html)
    const isValid = result.status === 'PASS'
    logger.log({
      type: result.status,
      message: (isValid ? chalk.green(result.status) : chalk.red(result.status)) + ' ' + url,
      icon: isValid ? chalk.green('✓') : chalk.red('✕')
    })
    for (const error of result.errors) {
      let msg = 'line ' + error.line + ', col ' + error.col + ': ' + error.message
      if (error.specUrl !== null) {
        msg += ' (see ' + error.specUrl + ')'
      }
      logger.log({
        type: error.severity,
        message: msg,
        icon: (error.severity === 'ERROR') ? chalk.bgRed.black(error.severity) : chalk.bgYellow.black(error.severity)
      })
    }
}