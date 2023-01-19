/** @type {import('next').NextConfig} */
const WithPWA = require("next-pwa");
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
// withOffline(nextConfig);
const withOffline = require("next-offline");
module.exports = WithPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
