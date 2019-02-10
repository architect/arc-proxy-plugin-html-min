let test = require('tape')
let plugin = require('./index') // note package.json "main" points to dist

test('env', t=> {
  t.plan(1)
  t.ok(plugin, 'exists')
})

test('returns {body, headers}', t=> {
  t.plan(2)
  let src = `
  <i>wow</i>

 <b>hi</b> 
  `
  process.env.NODE_ENV = 'production'
  let result = plugin('index.html', {
    headers: {'content-type':'text/html;charset=utf8'},
    body: src
  })
  t.ok(result.headers, 'has headers')
  t.ok(result.body, 'has body')
  console.log(result)
})
