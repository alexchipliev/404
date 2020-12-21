require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Заметки 404`,
    // Used for the title template on pages other than the index site
    siteTitle: `Заметки 404`,
    // Twitter Handle
    author: `@alexchipliev`,
    siteImage: `/JAM.jpg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Блог`,
            slug: `/blog`,
          },
          {
            title: `О сайте`,
            slug: `/about`,
          },
          {
            title: `Контакты`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://facebook.com/alex.chipliev`,
          },
          {
            name: `Telegram`,
            url: `https://t.me/cgalex`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Привет! Это мой блог. Здесь я пишу на разные темы, в том числе о разработке сайтов, веб-технологиях, программировании и о многом другом! Блог работает в офлайне, так что ты можешь читать статьи даже если у тебя отключится Интернет :)`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
      shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
