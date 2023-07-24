/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
}

module.exports = nextConfig