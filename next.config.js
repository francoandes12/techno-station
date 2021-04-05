module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['ege.electronicgroove.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
