const fs = require('fs')
const peg = require('pegjs')

function hackyMakeESM(code) {
    /* works for
    module.exports = {
        SyntaxError: peg$SyntaxError,
        parse:       peg$parse
      };
    */
    return code.replace(/module\.exports =/, 'export default ')
}

module.exports = function (snowpackConfig, pluginOptions) {
    return {
        name: 'pegjs',
        resolve: {
            input: [".pegjs"],
            output: [".js"]
        },
        load({ filePath }) {
            let contents = fs.readFileSync(filePath, { encoding: 'utf-8' })
            let parserCJS = peg.generate(contents, { output: 'source', format: 'commonjs' })
            let esm = hackyMakeESM(parserCJS)
            return { ".js": esm }
        }
    };
};
