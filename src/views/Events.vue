<template>
	<v-container>
		<h2>Kde nás potkáte</h2>
		<v-row>
			<v-col
				v-for="eventF in eventsFuture"
				:key="eventF.id"
				cols="12"
				md="4"
				class="event"
			>
				<h2>{{ eventF.description }}</h2>
				<img
					:src="eventF.pic"
					alt=""
					class="eventimg"
				/>
			</v-col>
		</v-row>

		<h2>A kde jsme už byli</h2>
		<v-row>
			<v-col
				v-for="eventP in eventsPast"
				:key="eventP.id"
				cols="12"
				md="4"
				class="event"
			>
				<h3>{{ eventP.description }}</h3>
				<img
					:src="eventP.pic"
					alt=""
					class="eventimg"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import lazne from '@/assets/lazne.png'
import klaniveku from '@/assets/klaniveku.jpg'
import labut from '@/assets/labut.png'
import kavarna from '@/assets/kavarna.png'
import ozivla from '@/assets/ozivla.jpg'

export default {
	data() {
		return {
			eventsFuture: [
				{
					id: 1,
					description:
						'Gladiátoři v Antických lázních Plzeň',
					pic: lazne
				},

				{
					id: 4,
					description:
						'Gladiatori u Cerne labute',
					pic: labut
				}
			],
			eventsPast: [
				{
					id: 2,
					description:
						'Charitativní akce v Plzni',
					pic: klaniveku
				},
				{
					id: 3,
					description:
						'Den s gladiatory v kavaŕně Andelka',
					pic: kavarna
				},
				{
					id: 4,
					description: 'Den oživlé historie',
					pic: ozivla
				}
			]
		}
	}
}
</script>

<style scoped>
* {
	color: white;
}
.event {
	width: 25vw;
}

.eventimg {
	max-width: 100%;
}
</style>
