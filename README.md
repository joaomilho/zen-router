# zen-router

> The simplest router possible

### Usage

##### es5

```js
var router = require('zen-router')

function yourRenderFunction (currentRoute) {
  switch(currentRoute) {
    case 'home':
      ...
    case 'faq':
      ...
    default:
      ...
  }
}

router(yourRenderFunction)
```

##### es6

```js
import router from 'zen-router'

const yourRenderFunction = (currentRoute) => {
  switch(currentRoute) {
    case 'home':
      ...
    case 'faq':
      ...
    default:
      ...
  }
}

router(yourRenderFunction)
```