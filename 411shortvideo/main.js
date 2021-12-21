import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
import uniPop from 'uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
Vue.component('uni-pop', uniPop) 
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
