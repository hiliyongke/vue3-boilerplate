// 根据 swagger.json 生成 api
const { generateApi } = require('swagger-typescript-api');
const path = require('path');

generateApi({
  // name: 'MySuperbApi.ts',
  output: path.resolve(process.cwd(), './src/api/modules'), // 输出目录
  // url: url, // swagger 地址
  input: path.resolve(process.cwd(), './src/utils/api-gen/swagger.json'), // swagger.json 文件地址
  modular: true,
  templates: path.resolve(process.cwd(), './src/utils/api-gen/templates'),
  httpClientType: 'axios', // or "fetch"
  defaultResponseAsSuccess: false,
  unwrapResponseData: true,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  moduleNameIndex: 1,
  prettier: {
    printWidth: 80,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript'
  },
  defaultResponseType: 'void',
  singleHttpClient: true,
  cleanOutput: false,
  enumNamesAsValues: true,
  moduleNameFirstTag: true,
  generateUnionEnums: false,
  generateClient: true
});
