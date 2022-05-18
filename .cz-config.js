module.exports = {
  types: [
    {
      value: ':construction: WIP',
      name: '💪  WIP:      Work in progress'
    },
    {
      value: ':sparkles: feat',
      name: '✨  feat:     A new feature'
    },
    {
      value: ':bug: fix',
      name: '🐛  fix:      A bug fix'
    },
    {
      value: ':hammer: refactor',
      name: '🔨  refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: ':pencil: docs',
      name: '📝  docs:     Documentation only changes'
    },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: '🔀  merge:     Merge a branch code'
    },
    {
      value: ':white_check_mark: test',
      name: '✅  test:     Add missing tests or correcting existing tests'
    },
    {
      value: ':chart_with_upwards_trend: perf',
      name: '📈 perf:     A code change that improves performance'
    },
    {
      value: ':thought_balloon: chore',
      name: "🗯  chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager"
    },
    {
      value: ':lipstick: ui',
      name: '💄 Updating the UI and style files.'
    },
    {
      value: ':art: style',
      name: '🎨 Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'revert',
      name: '⏪  revert:   Revert to a commit'
    },
    {
      value: ':package: dep_up',
      name: '📦 Updating compiled files or packages.'
    },
    {
      value: ':wrench: CI',
      name: '🔧  Project structure change（CI, Buiding, Tool...）'
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

  scopes: [],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明? yes/no'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
};
