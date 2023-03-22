<script setup>
import consolaGlobalInstance from 'consola';

const redirection = ref(false)
const main_content = ref(null)

const setRedirection = () => {
	redirection.value = true
	setTimeout(() => main_content.value.remove(), 600)
}
</script>


<template>
  <main id="mainWrapper">
		<div ref="main_content">
			<div class="container max-w-4xl mx-auto">
				<section id="header">
					<div class="brand">
						<h1>Eufòria Campus</h1>
						<h2>Aquest estiu, viu la teva passió</h2>
					</div>
				</section>

				<Intro/>
				<Cta @redirect="setRedirection" />
				<Main/>
			</div>

			<Footer @redirect="setRedirection" />
		</div>
		<Transition>
			<Redirection v-if="redirection"/>
		</Transition>
  </main>
</template>


<style lang="scss">
body{
	font-family: 'Montserrat', sans-serif;
	font-size: 17px;
	@apply bg-indigo-900 text-white font-medium;
}

#mainWrapper{
	background: 
		url('assets/img/background.webp') no-repeat center top / auto 100%, 
		linear-gradient(50deg, rgba(219,6,134,1) 15%, rgba(0,19,61,1) 84%) no-repeat;
	background-color: rgb(219,6,134);
}

#header{ @apply py-8; }

.brand{
	background-image: url('assets/img/brand.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: auto 100%;
	font-size: 0;
	width: 350px;
	height: 220px;

	@apply text-transparent mx-auto;
}


@media (min-width: 768px) {
	body{
		font-size: 20px;
	}

	#mainWrapper{
		background-size: auto 100%, cover;
	}

	.brand{
		width: 600px;
		height: 360px;
	}
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>