module.exports = {
  types: [
    {
      value: ':construction: WIP',
      name: '💪  WIP:      Work in progress'
    },
    {
      value: ':sparkles: feat',
      name: '✨  feat:     新增一个功能'
    },
    {
      value: ':bug: fix',
      name: '🐛  fix:      修复一个Bug'
    },
    {
      value: ':hammer: refactor',
      name: '🔨  refactor: 代码重构'
    },
    {
      value: ':pencil: docs',
      name: '📝  docs:     文档变更'
    },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: '🔀  merge:    合并分支'
    },
    {
      value: ':white_check_mark: test',
      name: '✅  test:     添加缺失的测试或纠正现有的测试'
    },
    {
      value: ':chart_with_upwards_trend: perf',
      name: '📈  perf:     性能优化'
    },
    {
      value: ':thought_balloon: chore',
      name: '🗯  chore:    变更构建流程或辅助工具'
    },
    {
      value: ':lipstick: ui',
      name: '💄  Updating  更新UI和样式文件'
    },
    {
      value: ':art: style',
      name: '🎨  Changes   不影响代码含义的代码(空格、格式设置、缺少分号等)'
    },
    {
      value: 'revert',
      name: '⏪  revert:   代码回滚'
    },
    {
      value: ':wrench: CI',
      name: '🔧  更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等'
    },
    {
      value: ':truck: mv',
      name: '🚚 Moving or renaming files.'
    },
    {
      value: ':rocket: release',
      name: '🚀 Releasing / Version tags.'
    }
  ],

  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: '其他模块' }],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '此次更改范围:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明? yes/no'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix: 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
