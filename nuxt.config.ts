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
			],

			script: [
				{
					hid: 'gtmHead',
					innerHTML: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','G-7JGQB9N1PV');`
				}
			]
		}
	},


	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/content'
	]

})
