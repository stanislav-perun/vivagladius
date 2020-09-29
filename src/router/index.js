import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Events from '@/views/Events.vue'
import Eshop from '@/views/Eshop.vue'
import Obrazky from '@/views/Obrazky.vue'
import Partneri from '@/views/Partneri.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: Home
		},

		{
			path: '/onas',
			name: 'about',
			component: About
		},
		{
			path: '/akce',
			name: 'events',
			component: Events
		},

		{
			path: '/eshop',
			name: 'eshop',
			component: Eshop
		},

		{
			path: '/galerie',
			name: 'obrazky',
			component: Obrazky
		},

		{
			path: '/partneri',
			name: 'partneri',
			component: Partneri
		}
	]
})
