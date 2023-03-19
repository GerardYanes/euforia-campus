<script setup>
const { data } = await useAsyncData('intro', () => queryContent('/intro').findOne())
</script>


<template>
<section id="intro">
	<p>{{ data.p1 }}</p>

	<ul>
		<li v-for="li in data.list" :key="li.id">
			{{ li.content }}
		</li>
	</ul>
</section>
</template>


<style scoped>
#intro{
	@apply font-medium leading-tight py-8 lg:px-20;
}

ul{
	@apply mt-6;
}

li + li{
	@apply mt-5;
}
</style>