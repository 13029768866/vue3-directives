import focus  from './focus.js'
import color from './color.js'
import draggable from './draggable.js'

const directives = {
  focus,
  color,
  draggable
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key,directives[key]);
    })
  }
}