import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
//import '../node_modules/dist/css/materialize.min.css'
import anime from 'animejs'


Vue.use(Vuetify)

/*var cssSelector = anime({
  targets: '#cssSelector .el',
  translateX: 250
});
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
