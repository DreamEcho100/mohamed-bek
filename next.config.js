/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.node/,
			use: 'raw-loader'
		});

		return config;
	},
	images: {
		domains: ['api.dicebear.com']
	}
};

module.exports = nextConfig;
