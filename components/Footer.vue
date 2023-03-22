<script setup>
import brand from '~/assets/img/footer-brand.svg'
let btn_pdf = ref(null)
let btn_subscribe = ref(null)

const { data } = await useAsyncData('footer', () => queryContent('/footer').findOne())

await useAsyncData('', () => queryContent('/global').find())
.then(resp => {
	btn_pdf.value = resp.data.value[0].btn_pdf
	btn_subscribe = resp.data.value[0].btn_subscribe
})

const emit = defineEmits(['redirect'])
const setRedirection = () => emit('redirect', true)
</script>


<template>
<section id="mainFooter">
	<div class="border-t border-white container max-w-4xl px-10 pt-5 pb-8 mx-auto lg:px-0">
		<h3>{{ data.title }}</h3>

		<div class="grid justify-center	gap-x-6 gap-y-4 mt-7 sm:flex">
			<div>
				<Button 
					:text="btn_pdf.content" 
					el="link" 
					:href="btn_pdf.link" 
					:target_blank="true" />
			</div>

			<div>
				<span @click="setRedirection">
					<Button :text="btn_subscribe.content" />
				</span>
			</div>
		</div>
	</div>


	<section class="bg-opacity-20 px-10 py-5 relative lg:px-0">
		<div class="container max-w-4xl mx-auto relative z-10">
			<div class="grid gap-y-2 justify-center">
				<div class="flex justify-center">
					<img 
						:src="brand" 
						alt="Eufòria campus" 
						class="w-32 select-none pointer-events-none" />
				</div>

				<div 
					class="mt-3 grid gap-y-1 
									sm:flex sm:items-end sm:gap-x-3 sm:mt-2">
					<FooterCopy />
				</div>
			</div>
		</div>

		<div class="bg-[#160F38] mix-blend-luminosity left-0 right-0 top-0 bottom-0 absolute"></div>
	</section>
	


	<section class="copy">
		<div class="container max-w-4xl mx-auto">
			<div class="grid gap-y-1.5 text-sm text-center sm:flex sm:justify-center">
				<span class="">&copy; El Collell</span> 
				<span class="">
					<span class="hidden px-2 sm:inline-block">&middot;</span> 
					<span>T. 972 57 40 60</span>
				</span> 
				<span class="">
					<span class="hidden px-2 sm:inline-block">&middot;</span> 
					<span class="">
						<a href="mailto:info@euforiacampus.cat">info@euforiacampus.cat</a>
					</span>
				</span>
			</div>

			<div class="text-xs text-center mt-2">
				L’empresa responsable i organitzadora 
				d’Eufòria Campus és RESANGI, S.L. amb 
				domicili social a Sant Ferriol, Ctra. 
				de St. Miquel de Campmajor al Torn, s/n, 
				amb NIF B17756347
			</div>
		</div>
	</section>

</section>
</template>


<style scoped>
#mainFooter{

}

h3{
	@apply text-xl leading-none font-bold text-center sm:text-2xl md:text-3xl;
}

.copy{
	@apply bg-[#D41366] px-10 py-4 lg:px-0;
}
</style>

<style>
#mainFooter .btn{
	@apply w-full;
}
</style>