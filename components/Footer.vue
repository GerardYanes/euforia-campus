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
</script>


<template>
<section id="mainFooter">
	<div class="border-t border-white container max-w-4xl pt-5 pb-8 mx-auto">
		<h3>{{ data.title }}</h3>

		<div class="flex justify-center	gap-x-6 mt-7">
			<div>
				<Button :text="btn_pdf.content" type="link"/>
			</div>

			<div>
				<Button :text="btn_subscribe.content" type="link"/>
			</div>
		</div>
	</div>


	<section class="bg-opacity-20 py-4 relative">
		<div class="container max-w-4xl mx-auto relative z-10">
			<div class="grid gap-y-2 justify-center">
				<div class="flex justify-center">
					<img :src="brand" alt="Eufòria campus" class="w-32" />
				</div>
				<h4 class="uppercase">{{ data.slogan }}</h4>
			</div>
		</div>

		<div class="bg-[#160F38] mix-blend-luminosity left-0 right-0 top-0 bottom-0 absolute"></div>
	</section>
	


	<section class="bg-[#D41366] py-4">
		<div class="container max-w-4xl mx-auto">
			<div class="text-sm text-center">
				&copy; El Collell &middot; T. 972 57 40 60 &middot; info@euforiacampus.cat
			</div>
		</div>
	</section>

</section>
</template>


<style scoped>
#mainFooter{

}

h3{
	@apply text-3xl leading-none font-bold text-center;
}
</style>