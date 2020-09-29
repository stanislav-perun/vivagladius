<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<article>
					Jsme Plzeňská skupina historického
					šermu, která se zabývá obdobím
					starověkého Říma, konkrétně bojovým
					uměním a životem gladiátorů.
				</article>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<div id="diana" v-on:click="change">
					<h1>Diana Lukrecia</h1>
					<h4>Majitelka ludu</h4>
					<img
						src="@/assets/ST5.png"
						alt="Diana"
						v-show="state2"
					/>
					<article v-show="state1">
						Diana je majitelkou ludu, školy
						gladiátorů. V Římě se o ní povídá,
						že pochází z rodiny kočovných herců
						a ke svému jmění, že se dostala přes
						dědictví. Její titáni jsou vždy ve
						vynikající kondici a jsou připraveni
						kdykoli předvést dokonalou show.
					</article>
				</div>
			</v-col>
		</v-row>

		<v-row>
			<v-col
				v-for="gladiator in gladiators"
				:key="gladiator.id"
				cols="12"
				md="4"
				id="container"
			>
				<gladiator
					:gladiator="gladiator"
					class="gladiator"
				>
				</gladiator>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import gsap from 'gsap'

import steni from '@/assets/ST1.png'
import bohy from '@/assets/ST2.png'

import katka from '@/assets/ST4.png'

import Gladiator from '@/components/Gladiator.vue'
export default {
	components: {
		Gladiator
	},
	//  id: , name: , description: , img:
	data() {
		return {
			gladiators: [
				{
					id: 2,
					name: 'Scipion',
					shortDescription: 'Provocator',
					description:
						'Scipion je jediný přeživší voják z IX.legie, která byla zničena na severu Britanie Piktskými kmeny. Po jeho návratu jej římští aristokraté prohlásili za zbabělce a vrhli do otroctví. Již je tomu několik roků co z něj udělali gladiátora, díky jeho bojovým dovednostem a zkušenostem se rychle stal šampionem arény, kterému diváci s úctou provolávají slávu. Získal si zpět svobodu, ale dále zůstal svobodným gladiátorem. Scipion je s životem gladiátora spokojen, říká, že je to stejné, jako život legionáře, jen nemusí denně pochodovat, má čerstvé jídlo, a dokonce po osvobození pojal za ženu samotnou Dianu Lukrecii. Od té doby také pěkně ztloustnul, což je pro gladiátora dobře! Scipion může bojovat jako bregesus, arbelas či provocator.',
					pic: bohy
				},
				{
					id: 3,
					name: 'Ferrei',
					shortDescription: 'Retiarius',
					description:
						'Ferrei je jedním ze Sarmatských válečníků zajatých v bitvě. Pro svou odvahu, sílu a houževnatost byl na trhu s otroky v Efezu odkoupen lannistou, a začal trénovat jako retiarius. Měsíc po měsíci, rok po roce vítězil Ferrei v Efezské aréně, až do doby, kdy se ocitl na hraně 30 let. Tehdy se na slavný ,,Běs z Efezu" přijela podívat samotná Diana Lukrecia. Byla nadšena Ferreiovým stylem boje a rozhodla se, že tento bijec bezesporu patří do velkého Collosea v Římě. Vyjednávání o prodeji bylo dlouhé a cena vysoká, přesto vše můžete nyní vidět Ferreie, mocného Běsa z Efezu, v jejím ludu. Ferrei je schopný bojovat jako retiarius nebo hoplomachus',
					pic: steni
				},
				{
					id: 4,
					name: 'Lura',
					shortDescription: 'štítonoška',
					description:
						'Lura je nejmladší z gladiátorů v ludu Diany Likrecie. Je rozená Římanka, avšak z nejnuznější vrstvy. Když ve 14 letech osiřela, začala se živit krádežemi na tržišti. Netrvalo dlouho a byla chycena a odsouzena k popravě ad gladium. Sice nedokázala gladiátora, který ji měl popravit zabít, avšak bránila se tak urputně, že ji byla darována milost a trest zmírněn na otroctví. Diana Lukrecia ji odkoupila a tak se stala součástí ludu.',
					pic: katka
				}
			],
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
	},

	mounted() {
		gsap.from('.gladiator', {
			duration: 0.5,
			opacity: 0,
			scale: 0,
			y: 200,
			ease: 'power1',
			stagger: 0.1
		})
	}
}
</script>

<style scoped>
#diana {
	width: 33%;
	margin: 0 auto;

	cursor: pointer;
	min-height: 25rem;
}

#diana img {
	margin-top: -3rem;
}

article,
h1 {
	color: white;
}
h3 {
	margin: 0 auto;
	text-align: center;
}
.gladiator {
	margin: 0 auto;

	height: 23rem;
	cursor: pointer;
	overflow: hidden;
}
</style>
