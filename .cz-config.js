// 参考：https://github.com/leoforfree/cz-customizable#options
module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨【feat】:新的特性',
    },
    {
      value: 'fix',
      name: '🐛【fix】:修复Bug',
    },
    {
      value: 'ui',
      name: '💎【ui】:更新UI',
    },
    {
      value: 'docs',
      name: '📝【docs】:更新注释、文档',
    },
    {
      value: 'refactor',
      name: '📦【refactor】:代码重构',
    },
    {
      value: 'perf',
      name: '🚀【perf】:提升性能',
    },
    {
      value: 'test',
      name: '🚨【test】:增删测试',
    },
    {
      value: 'chore',
      name: '🔨【chore】:构建或变更外部依赖',
    },
    {
      value: 'ci',
      name: '🔧【ci】:更改集成配置',
    },
    {
      value: 'revert',
      name: '⏪【revert】:代码回退',
    },
  ],
  typePrefix: '[',
  typeSuffix: ']',
  scopes: [{ name: '模块1' }, { name: '模块2' }, { name: '其他模块' }],
  messages: {
    type: '选择更改类型:\n',
    scope: '此次更改范围:\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关闭的issues列表. E.g.: #31, #34(可选)::\n',
    confirmCommit: '确认提交？yes/no',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // skipQuestions: ['scope', 'body', 'breaking', 'footer'],
  skipQuestions: [],
  subjectLimit: 100,
  breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix: 'ISSUES CLOSED:',
  // askForBreakingChangeFirst : true // default is false
};
