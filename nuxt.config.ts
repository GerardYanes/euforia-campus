// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Eufòria Campus',
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			script: [
				// <script src="https://myawesome-lib.js"></script>
				// {
				//   type: 'text/javascript',
				//   src: "gsap-3.3.1.min.js",
				//   body: true,
				//   async: true,
				// },
			],
			link: [
				{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous'
				},
				{
					href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
					rel: 'stylesheet'
				}
			]
		}
	},


	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/content'
	]
})
