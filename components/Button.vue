<script setup>
defineProps({
	text: String,
	// options: link, button
	el: {
		type: String,
		default: 'button'
	},
	href: String,
	target_blank: Boolean
})
</script>


<template>
<button 
	v-if="el === 'button'" 
	class="btn">
	<span>{{ text }}</span>
</button>

<a 
	v-if="el === 'link'" 
	:href="href"
	class="btn"
	:target="target_blank ? '_blank' : '_self'">
	<span>{{ text }}</span>
</a>
</template>


<style scoped lang="scss">
.btn{
	@apply text-sm uppercase leading-none text-center font-semibold p-px inline-flex relative transition-all select-none overflow-hidden;

	&::before{
		content: '';
		@apply bg-white bg-opacity-80	w-full h-full -left-full -top-full absolute transition-all;
	}
}

.btn span{
	@apply bg-[#E226DC] w-full h-full px-10 py-4 relative z-10;
}

.btn:hover,
.btn:active,
.btn:active:focus,
.btn:focus{
	
	&::before{
		@apply left-0 top-0;
	}

}
</style>