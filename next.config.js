/** @type {import('next').NextConfig} */

const apiauth = require('./src/apipath/apiauth');
const apimovie = require('./src/apipath/apimovie');

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return apiauth;
  },

  async rewrites() {
    return apimovie;
  },
};

module.exports = nextConfig;
