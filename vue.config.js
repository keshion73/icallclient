const fs = require('fs')

// 프로세스 다운 방지
process.on('uncaughtException', function (err) {
  console.log(err.stack);
  console.log('Caught exception: ' + err);
});

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
    // dev
    //proxy: 'https://localhost:7300',
    // prod
    // proxy: 'https://v1.icall.co.kr:7300',
    overlay: true,
    disableHostCheck: true,
    port: process.env.VUE_APP_PORT || 7420,
    https: true,
    // dev
    // host: "localhost:7360",
    // prod
    // host: "icall.co.kr",
    // public: "0.0.0.0:8080",
    // PROD
    //public: "172.31.8.34:7350",
    // DEV
    // public: "0.0.0.0:7360",
    https: {
      key: fs.readFileSync('./src/cert/private.key'),
      cert: fs.readFileSync('./src/cert/certificate.crt'),
      ca: fs.readFileSync('./src/cert/ca_bundle.crt'),
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
}
