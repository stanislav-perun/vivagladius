<template>
	<v-container>
		<v-row>
			<v-col>
				<h2>
					Naši partneři a sponzoři, kteří nás
					podporují. Děkujeme.
				</h2>
			</v-col>
			<v-row>
				<v-col
					v-for="partner in partneri"
					:key="partner.id"
					cols="12"
					md="4"
				>
					<img
						:src="partner.pic"
						alt="partner.id"
					/>
				</v-col>
			</v-row>
		</v-row>
	</v-container>
</template>

<script>
import andelka from '@/assets/andelka.png'
import karakula from '@/assets/karakula.png'
import taxi from '@/assets/taxi.png'
import pizza from '@/assets/pizza.png'

export default {
	data() {
		return {
			partneri: [
				{ id: 1, pic: andelka },
				{ id: 2, pic: karakula },
				{ id: 3, pic: taxi },
				{ id: 4, pic: pizza }
			]
		}
	}
}
</script>

<style scoped></style>
