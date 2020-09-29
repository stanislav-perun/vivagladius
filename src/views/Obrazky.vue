<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h3>
					Viva Gladius na Dni oživlé historie v
					Jivjanech
				</h3>
			</v-col>
		</v-row>
		<v-row>
			<v-col
				v-for="obr in denOzivleHistorie"
				:key="obr.id"
				md="4"
				cols="12"
			>
				<img :src="obr.pic" :alt="obr.id" />
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<h3>
					Viva Gladius na charitativní akci Klání
					věků
				</h3>
			</v-col>
		</v-row>
		<v-row>
			<v-col
				v-for="obr in klaniVeku"
				:key="obr.id"
				md="4"
				cols="12"
			>
				<img :src="obr.pic" :alt="obr.id" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import prvni from '@/assets/IMG-2432.jpg'
import druhy from '@/assets/IMG-2436.jpg'
import treti from '@/assets/IMG-2442.jpg'
import ctvrty from '@/assets/IMG-2448.jpg'
import paty from '@/assets/IMG-2450.jpg'
import sesty from '@/assets/IMG-2452.jpg'

import kv from '@/assets/klaniveku.jpg'
import kv2 from '@/assets/klaniveku1.jpg'
import kv3 from '@/assets/klaniveku2.jpg'
import kv4 from '@/assets/klaniveku3.jpg'
import kv5 from '@/assets/klaniveku4.jpg'
import kv6 from '@/assets/klaniveku5.jpg'

export default {
	data() {
		return {
			denOzivleHistorie: [
				{ id: 1, pic: prvni },
				{ id: 2, pic: druhy },
				{ id: 3, pic: treti },
				{ id: 4, pic: ctvrty },
				{ id: 5, pic: paty },
				{ id: 6, pic: sesty }
			],
			klaniVeku: [
				{ id: 1, pic: kv },
				{ id: 2, pic: kv2 },
				{ id: 3, pic: kv3 },
				{ id: 4, pic: kv4 },
				{ id: 5, pic: kv5 },
				{ id: 6, pic: kv6 }
			]
		}
	}
}
</script>

<style scoped>
img {
	max-width: 300px;
	margin-left: 1rem;
}

h3 {
	font-size: 2rem;
	padding: 1rem;
}
</style>
