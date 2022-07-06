// 参考：https://github.com/leoforfree/cz-customizable#options
module.exports = {
  // 可选类型
  types: [
    {
      value: 'feat',
      name: '✨【feat】:新的特性'
    },
    {
      value: 'fix',
      name: '🐛【fix】:修复Bug'
    },
    {
      value: 'ui',
      name: '💎【ui】:更新UI'
    },
    {
      value: 'docs',
      name: '📝【docs】:更新注释、文档'
    },
    {
      value: 'refactor',
      name: '📦【refactor】:代码重构'
    },
    {
      value: 'perf',
      name: '🚀【perf】:提升性能'
    },
    {
      value: 'test',
      name: '🚨【test】:增删测试'
    },
    {
      value: 'chore',
      name: '🔨【chore】:构建或变更外部依赖'
    },
    {
      value: 'ci',
      name: '🔧【ci】:更改集成配置'
    },
    {
      value: 'revert',
      name: '⏪【revert】:代码回退'
    }
  ],
  // typePrefix: '[',
  // typeSuffix: ']',
  scopes: [{ name: '模块1' }, { name: '模块2' }, { name: '其他模块' }],
  // 消息步骤
  messages: {
    type: '选择更改类型:\n',
    scope: '此次更改范围:\n',
    subject: '简要描述 (必填):\n',
    body: '详细描述. 使用"|"换行 (可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关闭的issues列表. E.g.: #31, #34 (可选):\n',
    confirmCommit: '确认提交？yes/no'
  },
  // skipQuestions: ['scope', 'body', 'breaking', 'footer'], // 跳过问题
  subjectLimit: 100, // subject文字长度限制
  breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix: 'ISSUES CLOSED:'
};
