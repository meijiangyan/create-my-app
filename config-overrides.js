// const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');

// module.exports = function override(config, env) {
//     config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
//     config = injectBabelPlugin(['wrapper', {}], config);
//     config = rewireLess.withLoaderOptions({
//         modifyVars: { "@primary-color": "#1DA57A" },
//     })(config, env);
//     return config;
// };
const {
    override,
    fixBabelImports,
    addLessLoader,
  } = require("customize-cra");
  
  
  module.exports = override(
    fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "red" }
    })
  );