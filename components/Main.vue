<script setup>
import bullet from '~/assets/img/bullet.svg'
const { data } = await useAsyncData('main', () => queryContent('/main').findOne())
</script>


<template>
<section id="main">
	
	<div class="grid gap-20 grid-cols-12">
		
		<div class="grid gap-y-10 lg:col-span-6">
			<div 
				v-for="section in data.sections"
				:key="section.id"
				class="">

				<div class="order-2 md:col-span-7">
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



		<div class="col-span-6 grid gap-y-12">
			<div 
				v-for="img in data.images" 
				:key="img.id">

				<img 
					:src="`/_nuxt/assets/img/${img.src}`" 
					:alt="img.alt">

			</div>

		</div>
	</div>

</section>
</template>


<style scoped>
#main{
	@apply pt-12 pb-14;
}

h3{
	@apply text-3xl font-bold leading-none;
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
	@apply w-3;
}
</style>