/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		baseURL: 'https://dev.rayna.io/api/v1'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rayna-app-development-public-media.s3.amazonaws.com',
				pathname: '/media/**'
			}
		]
	},
	experimental: {
		appDir: true
	}
}

// experimental: {
// 	fontLoaders: [
// 		{
// 			loader: '@next/font/google',
// 			options: {
// 				fallback: ['DM Sans', 'Roboto'],
// 			},
// 		},
// 	],
// },

module.exports = nextConfig

// const withPWA = require('next-pwa')({
// 	dest: 'public'
// })
//
// module.exports = withPWA()
