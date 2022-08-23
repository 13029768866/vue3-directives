import focus  from './focus.js'

const directives = {
  focus
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key,directives[key]);
    })
  }
}