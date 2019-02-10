let minify = require('html-minifier').minify
/**
 * @architect/proxy-plugin-html-min
 *
 * @param Key - the requested S3 Key
 * @param File - the file contents {headers, body}
 * @returns File - the processed file contents {header, body}
 */
module.exports = function css(Key, {headers, body}, config) {
  let defaults = {
    collapseWhitespace:true,
    removeComments:true,
    removeTagWhitespace:true,
    useShortDoctype:true,
    collapseInlineTagWhitespace:true,
  }
  let options = config? config.html || defaults : defaults
  return {
    headers,
    body: minify(body, options)
  }
}

