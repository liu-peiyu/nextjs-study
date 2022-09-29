/** @type {import('next').NextConfig} */

const withLess = require('next-with-less')
// const withPlugins = require("next-compose-plugins")
// const withTM = require('next-transpile-modules')
// const withTM = require('next-transpile-modules')(["antd", "@ant-design/icons"])
// const withSourceMaps = require("@zeit/next-source-maps")

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
}

module.exports = withLess({}) 
// withPlugins(
// [
  
//     // withLess,
//   //   {
//   //     //配置less变量
//   //     lessLoaderOptions: {
//   //       lessOptions: {
//   //         modifyVars: {
//   //           "@primary-color": "orange",
//   //           "@menu-dark-item-active-bg": "rgb(247, 0, 161)"
//   //         }        
//   //       },
//   //     },
//   //     javascriptEnabled: true,
//   //     // math: "always",
//   //   },
  
//   // [withTM]
// ], 
// nextConfig)
