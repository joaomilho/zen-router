const router = require('./index')
const test = require('tape')
const spy = require('sinon').spy

window = {
  location: {
    hash: '#initial'
  }
}
const render = spy()

test('router', (assert) => {
  router(render)
  assert.ok(render.calledWith('initial'), 'initially calls renderer with current hash')

  window.location.hash = '#after'
  window.onhashchange()
  assert.ok(render.calledWith('after'), 'calls renderer on hash change')

  window.onhashchange()
  assert.equal(render.callCount, 2, 'does not call renderer if hash did not change')

  window.location.hash = '#finally'
  window.onhashchange()
  assert.ok(render.calledWith('finally'), 'calls renderer whan hash changes again')
  assert.equal(render.callCount, 3, 'calls renderer the right amount of times')

  assert.end()
})
