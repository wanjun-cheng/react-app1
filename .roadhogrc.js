const path = require('path')
const { version } = require('./package.json')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, '')
]

export default {
  env: {
    development: {
      extraBabelPlugins: [
        // 'dva-hmr',
        // 'transform-runtime',
        // ['import', { 'libraryName': 'antd', 'style': true }],
        ["module-resolver", {
          root: ["./src"],
          alias: {
            components: `${__dirname}/src/components`,
            utils: `${__dirname}/src/utils`,
            configs: `${__dirname}/src/utils/configs`,
            services: `${__dirname}/src/services`,
            models: `${__dirname}/src/models`,
            routes: `${__dirname}/src/routes`,
            layouts: `${__dirname}/src/layouts`,
          }
        }]
      ],
      // define: {
      //   'newband.app.admin.ISMOCK': true,
      //   'newband.app.admin.API_HOST': 'http://ec2-54-223-130-122.cn-north-1.compute.amazonaws.com.cn:81/v2',
      //   'newband.app.admin.CLIENT_ID': '8_458xy3o1w2g4cgwkk0ksgs0kkkw8o4soc000g004csoo840og4',
      //   'newband.app.admin.CLIENT_SECRET': '2iwh0zfunzswgss8s0ks4scoo4w080sskcowgkoc0s8swg8goo',
      //   'newband.app.admin.GRANT_TYPE': 'client_credentials'
      // },
    },
    production: {
      extraBabelPlugins: [
        // 'transform-runtime',
        // ['import', { 'libraryName': 'antd', 'style': true }],
        ["module-resolver", {
          root: ["./src"],
          alias: {
            components: `${__dirname}/src/components`,
            utils: `${__dirname}/src/utils`,
            configs: `${__dirname}/src/utils/configs`,
            services: `${__dirname}/src/services`,
            models: `${__dirname}/src/models`,
            routes: `${__dirname}/src/routes`,
            layouts: `${__dirname}/src/layouts`,
            // constants: `${__dirname}/src/constants`,
            // themes: `${__dirname}/src/themes`,
          }
        }]
      ],
      // define: {
      //   'newband.app.admin.ISMOCK': true,
      //   'newband.app.admin.API_HOST': 'http://ec2-54-223-130-122.cn-north-1.compute.amazonaws.com.cn:81/v2',
      //   'newband.app.admin.CLIENT_ID': '8_458xy3o1w2g4cgwkk0ksgs0kkkw8o4soc000g004csoo840og4',
      //   'newband.app.admin.CLIENT_SECRET': '2iwh0zfunzswgss8s0ks4scoo4w080sskcowgkoc0s8swg8goo',
      //   'newband.app.admin.GRANT_TYPE': 'client_credentials'
      // },
    }
  },
}
