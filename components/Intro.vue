<script setup>
import bullet from '~/assets/img/bullet.svg'
const { data } = await useAsyncData('intro', () => queryContent('/intro').findOne())
</script>


<template>
<section id="intro">
	<p>{{ data.p1 }}</p>

	<ul>
		<li v-for="li in data.list" :key="li.id">
			<img :src="bullet" class="bullet" />
			<span>{{ li.content }}</span>
		</li>
	</ul>
</section>
</template>


<style scoped>
#intro{
	@apply font-medium leading-tight px-10 pt-6 pb-10 lg:px-20;
}

ul{
	@apply mt-6;
}

li{
	@apply flex items-start gap-x-3;
}

.bullet{
	@apply w-4 top-1.5 relative select-none pointer-events-none;
}

li + li{
	@apply mt-5;
}
</style>