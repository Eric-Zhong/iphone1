const path = require('path');
const ip = require('ip');
module.exports = app => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  exports.vuessr = {
    injectCss: false
  };

  exports.webpack = {
    proxyMapping: {
      html: 'text/html; charset=UTF-8'
    },
    webpackConfigList: [
      require(path.join(app.baseDir, 'build/web/client')),
      require(path.join(app.baseDir, 'build/web/server'))
    ]
  };

  const localIP = ip.address();
  const domainWhiteList = [];
  [9000, 9001, 9002, 9003, 9004].forEach(port => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });

  // exports.security = {
  //   domainWhiteList
  // };

  // KB: 配置CSRF
  // https://www.npmjs.com/package/egg-security
  exports.security = {
    csrf: {
      useSession: false,          // if useSession set to true, the secret will keep in session instead of cookie
      ignoreJSON: false,          // skip check JSON requests if ignoreJSON set to true
      cookieName: 'csrfToken',    // csrf token's cookie name
      sessionName: 'csrfToken',   // csrf token's session name
      headerName: 'x-csrf-token', // request csrf token's name in header
      bodyName: '_csrf',          // request csrf token's name in body
      queryName: '_csrf',         // request csrf token's name in query
    },
  };

  return exports;
};
