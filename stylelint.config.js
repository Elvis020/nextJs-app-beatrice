module.exports = {
  extends: ['stylelint-config-standard'], 
  rules: {
    'import-notation': null,
    'rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'layer', 'theme']
      }
    ]
  }
};
