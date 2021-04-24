module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/variables.scss";`
      }
    }
  },
  pwa: {
    themeColor: '#41b883',
    msTileColor: '#41b883',
  }
}
