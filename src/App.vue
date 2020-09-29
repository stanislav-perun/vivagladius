<template>
	<div id="app" class="main">
		<v-app>
			<v-app-bar app color="#DE9F45" class="appbar">
				<v-toolbar-title
					>Viva Gladius</v-toolbar-title
				>
				<v-spacer></v-spacer>
				<v-btn color="#FA694E" to="/">Domů</v-btn>
				<v-btn color="#FA694E" to="/onas"
					>O nás</v-btn
				>
				<v-btn color="#FA694E" to="/akce"
					>Akce</v-btn
				>
				<v-btn color="#FA694E" to="/eshop"
					>E-shop</v-btn
				>
				<v-btn color="#FA694E" to="/galerie"
					>Galerie</v-btn
				>
				<v-btn color="#FA694E" to="/partneri"
					>Partneři</v-btn
				>
			</v-app-bar>

			<v-main class="main">
				<transition name="fade" mode="out-in">
					<router-view />
				</transition>
			</v-main>

			<v-footer dark padless color="yellow">
				<v-card
					flat
					tile
					class="white--text text-center"
					color="#DE9F45"
					width="100%"
				>
					<v-card-text>
						<v-btn
							v-for="icon in icons"
							:key="icon"
							class="mx-4 white--text"
							icon
						>
							<v-icon size="24px">{{
								icon
							}}</v-icon>
						</v-btn>
					</v-card-text>
				</v-card>
			</v-footer>
		</v-app>
	</div>
</template>

<script>
export default {
	name: 'App',
	data: function() {
		return {
			icons: [
				'mdi-facebook',
				'mdi-instagram',
				'mdi-youtube'
			]
		}
	}
}
</script>

<style>
.main {
	background-color: black;
}
h3 {
	font-size: 0.75rem;
}
* {
	color: white;
	list-style: none;

	font-family: copperplate, serif;
}

.appbar {
	background-color: #808000;
}

.teal {
	background-color: #de9f45;
}

.fade-enter {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease-out;
}

.fade-leave-to {
	opacity: 0;
}
</style>
