module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
    'extends': ['eslint:recommended', 'prettier'],
    'overrides': [
    ],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
    'rules': {
      'no-unused-vars':'warn',
      'no-unused-expressions': ['error'],
      'no-unreachable-loop': ['error'],
      'no-unreachable': ['error'],
      'no-param-reassign': ['error'],
      'no-use-before-define': ['error'],
      'max-depth': [
      'error',
      {
        max: 1,
      },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false,
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'brace-style': ['error'],
      curly: ['error', 'multi-line', 'consistent'],
      'no-debugger': ['warn'],
      'no-restricted-globals': ['off'],
      'no-alert': ['warn'],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
    }
  }