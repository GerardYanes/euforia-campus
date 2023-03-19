<script setup>

</script>


<template>
  <main id="mainWrapper">
		<div class="container max-w-4xl mx-auto">
			<section id="header">
				<div class="brand">
					<h1>Eufòria Campus</h1>
					<h2>Aquest estiu, viu la teva passió</h2>
				</div>
			</section>

			<Intro/>
			<Cta/>
			<Main/>
		</div>

		<Footer/>
  </main>
</template>


<style>
html{
	
}

body{
	font-family: 'Montserrat', sans-serif;
	font-size: 20px;
	@apply bg-indigo-900 text-white font-medium;
}

#mainWrapper{
	background-image: url('assets/img/background.webp');
	background-size: 1100px auto;
	background-position: center top;
	background-repeat: repeat-x;
}

#header{ @apply py-8; }

.brand{
	background-image: url('assets/img/brand.webp');
	background-repeat: no-repeat;
	background-position: center;
	background-size: auto 100%;
	font-size: 0;
	width: 600px;
	height: 380px;

	@apply text-transparent mx-auto;
}
</style>