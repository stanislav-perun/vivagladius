<template>
	<li v-on:click="change">
		<h1>{{ gladiator.name }}</h1>
		<h3 v-show="state2">
			{{ gladiator.shortDescription }}
		</h3>
		<h3 v-show="state1">{{ gladiator.description }}</h3>
		<img
			v-show="state2"
			:src="gladiator.pic"
			:alt="gladiator.name"
		/>
	</li>
</template>

<script>
export default {
	props: ['gladiator'],
	data() {
		return {
			state1: false,
			state2: true
		}
	},
	methods: {
		change() {
			if (this.state1 == false) {
				this.state1 = true
			} else {
				this.state1 = false
			}

			if (this.state2 == true) {
				this.state2 = false
			} else {
				this.state2 = true
			}
		}
	}
}
</script>

<style scoped>
* {
	color: white;
}
li {
	list-style: none;
}
h3 {
	text-align: left;
}
img {
	margin-left: 2.5rem;
	margin-top: -4rem;
}
</style>
