const withOffline = require("next-offline")
const withPlugins = require("next-compose-plugins")

module.exports = withPlugins([
  [
    withOffline,
    {
      target: "serverless",
      transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
      workboxOpts: {
        swDest: "service-worker.js",
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "https-calls",
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    },
  ],
  {
    trailingSlash: true,
    env: {
      APP_ENV: process.env.APP_ENV,
      APP_NAME: process.env.APP_NAME,
      BASE_LAYOUT_WIDTH: process.env.BASE_LAYOUT_WIDTH,
      APP_PREFIX: process.env.APP_PREFIX,
    },
    assetPrefix: process.env.APP_PREFIX,
  },
])
