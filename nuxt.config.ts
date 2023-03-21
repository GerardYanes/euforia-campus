// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Eufòria Campus',
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
				},

				// Favicon
				{
					href: '/apple-touch-icon.png',
					rel: 'apple-touch-icon',
					sizes: '180x180'
				},
				{
					href: '/favicon-32x32.png',
					sizes: '32x32',
					type: 'image/png',
					rel: 'icon'
				},
				{
					href: '/favicon-16x16.png',
					sizes: '16x16',
					type: 'image/png',
					rel: 'icon'
				},
				{
					href: '/site.webmanifest',
					rel: 'manifest'
				}

			]
		}
	},


	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/content'
	]
})
