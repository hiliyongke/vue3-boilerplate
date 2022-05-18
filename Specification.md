# FE-specification-template

前端开发模版 EsLint + Prettier + Husky + Commitlint + Lint-staged + Cz-customizable + Conventional Changelog

解决冲突 eslint-config-prettier eslint-plugin-prettier

EditorConfig 将负责统一各种编辑器的配置，所有和编辑器相关的配置 (行尾、缩进样式、缩进距离...) 都交给它 Prettier 作为 代码格式化 工具其余的，也就是 代码质量 方面的语法检查，用 ESLint 来做 "eslintIntegration": true, // 解决 Eslint 默认规则冲突

parser @babel/eslint-parser @babel/core parserOptions: { sourceType: 'module', requireConfigFile: 'false', },

## husky

npm i lint-staged husky -save-dev https://github.com/typicode/husky#readme

npm set-script prepare "husky install" "scripts": { "test": "echo \"Error: no test specified\" && exit 1", "prepare": "husky install" },

Add a hook: npx husky add .husky/pre-commit "npm test"

旧版本 husky 无法在 package 中进行配置 4.2.5 "husky": { "hooks": { "commit-msg": "commitlint -E HUSKY_GIT_PARAMS", "pre-commit": "lint-staged" } },

## lint-staged

npm i lint-staged -D https://github.com/okonet/lint-staged husky 添加一个钩子 执行 list-staged npx husky add .husky/pre-commit "npx lint-staged" pre-commit 执行 npx lint-staged 指令

创建文件夹 或者是在 package 文件中添加 lint-staged 参数 .lintstagedrc // "\*.{js,vue}": ["prettier --write .", "eslint --cache --fix", "git add"]

## 校验 commit

规范 commit message 信息 https://github.com/conventional-changelog/commitlint npm i commitlint @commitlint/config-conventional -D

# Add hook

npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

安装辅助提交依赖 commitizen cz-conventional-changelog https://github.com/commitizen/cz-cli npm set-script commit "git-cz" 提交 commit 方式 npx cz or as an npm script:

... "scripts": { "commit": "cz" }

安装指令和命令行的展示信息 git-cz
全局安装
npm install -g commitizen
自定义提交规范 https://github.com/leoforfree/cz-customizable npm i -D commitlint-config-cz cz-customizable "config": { "commitizen": { "path": "node_modules/cz-customizable" } }

extends: ['@commitlint/config-conventional'], =====> extends: ['cz'],

提交规范

'💪 WIP:', // 开发中 '✨ feat:', // 新特性 '🐛 fix:', // 修补 bug '🔨 refactor:', // 重构 '📝 docs:', // 文档 '🔀 merge: ', // 合并某个分支代码 '✅ test:', // 单元测试 '📈 perf:', // 性能提升 '🗯 chore:', // 其他修改 '💄 ui:', // ui 样式修改 '🎨 style:', // 不影响代码的其他修改 （空白，格式，缺少半冒号等） '⏪ revert: ', // 版本回退 '📦 dep_up:', // 更新编译的文件或包 '🔧 CI:', // 项目结构变动 工具 ci 构建 '🚚 mv:', // 移动或重命名文件 '🚀 release:', // 发布版本或标签
