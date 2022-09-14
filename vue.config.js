const { defineConfig } = require('@vue/cli-service')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/scss/styles.scss";
          `
        }
      }
    }
}
)