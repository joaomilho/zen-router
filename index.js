var anchor

function renderWithRoute (renderer) {
  if (anchor === window.location.hash.substring(1)) {
    return
  }

  anchor = window.location.hash.substring(1)
  renderer(anchor)
}

module.exports = function (renderer) {
  window.onhashchange = renderWithRoute.bind(this, renderer)
  renderWithRoute(renderer)
}
