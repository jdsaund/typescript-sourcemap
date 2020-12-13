const assert = require('assert')
const tsModule = require('./dist/index.js')

assert(typeof tsModule === 'object',
  'build missing, run `npm run build`')

try {
  tsModule.throwError()
} catch (e) {
  /*
    The stack trace here should refer to code in the
    transpiled build AND the typescript source file
  */
  console.log(e)
}
