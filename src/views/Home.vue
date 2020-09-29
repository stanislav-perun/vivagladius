<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				><div class="header">
					<h5>skupina historického šermu</h5>
					<h1>Viva Gladius</h1>
					<h3>gladiátoři a starověký svět</h3>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	components: {}
}
</script>

<style scoped>
.header {
	background: url('~@/assets/uvodni.png') center center
		no-repeat;
	background-size: cover;

	width: 90vw;
	height: 70vh;

	text-align: center;
	font-size: 3rem;

	color: white;
	margin: 0 auto;
	padding: 0;
	position: relative;
}
h5,
h1,
h3 {
	color: antiquewhite;
}
h1 {
	font-size: 6rem;
	padding-top: 0;
	margin-top: 1%;
	position: relative;
	top: -9%;
}
h3 {
	font-size: 3rem;
	margin-top: 5rem;

	position: relative;
	top: 48%;

	margin: 0 auto;
}
h5 {
	font-size: 1.5rem;
	padding: 0;
	margin: 0;
	position: relative;
	color: antiquewhite;
}
</style>
