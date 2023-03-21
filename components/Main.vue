<script setup>
import img1 from '../assets/img/elcollell.webp'
import img2 from '../assets/img/euforia.webp'
import img3 from '../assets/img/euforia-mic.webp'

import bullet from '~/assets/img/bullet.svg'

const { data } = await useAsyncData('main', () => queryContent('/main').findOne())
</script>


<template>
<section id="main">
	
	<div class="grid gap-10 md:grid-cols-12 lg:gap-20">
		
		<div class="grid gap-y-10 sm:order-2 md:col-span-6">
			<div 
				v-for="section in data.sections"
				:key="section.id"
				class="">

				<div class="">
					<h3 v-if="section.title">{{ section.title }}</h3>
					
					<div 
						v-if="section.content"
						class="content">{{ section.content }}</div>

					<ul v-if="section.list">
						<li v-for="li in section.list" :key="li.id">
							<img :src="bullet" class="bullet" />
							<span>{{ li.content }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>



		<div class="hidden gap-x-3 gap-y-12 sm:flex md:order-2 md:grid md:col-span-6">
			<div>
				<img :src="img1" alt="El Collell">
			</div>

			<div>
				<img :src="img2" alt="Eufòria">
			</div>

			<div>
				<img :src="img3" alt="Micrófono Euforia">
			</div>
		</div>
	</div>

</section>
</template>


<style scoped>
#main{
	@apply px-10 pt-12 pb-14 lg:px-0;
}

h3{
	@apply text-2xl font-bold leading-none md:text-3xl;
}

.content{
	@apply text-sm mt-4;
}

ul{
	@apply mt-3;
}

li{
	@apply text-sm flex items-start gap-x-2;
}

li + li{
	@apply mt-3;
}

.bullet{
	@apply w-3 select-none pointer-events-none;
}
</style>