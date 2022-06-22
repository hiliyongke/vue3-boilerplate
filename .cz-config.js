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
      name: '📚【docs】:更新注释、文档',
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
      value: 'build',
      name: '🛠 【build】:构建或变更外部依赖',
    },
    {
      value: 'ci',
      name: ' ⚙️【ci】:更改集成配置',
    },
    {
      value: 'revert',
      name: '🗑 【revert】:代码回退',
    },
  ],
  typePrefix: '[',
  typeSuffix: ']',
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的范围:\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交？',
  },
  skipQuestions: ['scope', 'body', 'breaking', 'footer'],
};
