module.exports = {
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'issue', section: 'Issues' },
    { type: 'fix', hidden: true },
    { type: 'refactor', hidden: true },
    { type: 'perf', hidden: true },
    { type: 'revert', hidden: true },
    { type: 'style', hidden: true },
    { type: 'test', hidden: true },
    { type: 'format', hidden: true },
    { type: 'docs', hidden: true },
    { type: 'chore', hidden: true }
  ],
  commitUrlFormat: '',
  compareUrlFormat: '',
  issueUrlFormat: `https://github.com/xxx/issues/{{id}}`,
  issuePrefixes: ['I-', 'i-']
};
