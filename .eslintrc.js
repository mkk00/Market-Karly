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
      'no-unused-vars':'warn', //사용하지 않는 변수 금지
      'no-unused-expressions': ['error'], //사용하지 않는 표현 금지
      'no-unreachable-loop': ['error'], //하나의 반복만 허용하는 본문이 있는 루프 금지
      'no-unreachable': ['error'], //return , throw , continue 및 break 문 뒤에 도달할 수 없는 코드를 허용x
      'no-param-reassign': ['error'], //function 매개변수 재할당 금지
      'no-use-before-define': ['error'], //변수가 정의되기 전에 사용 금지
      'max-depth': [ //블록이 중첩될 수 있는 최대 깊이 적용
      'error',
      {
        max: 1,
      },
      ],
      'padding-line-between-statements': [ //명령문 사이의 패딩 라인 요구 또는 허용 안 함
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'no-unneeded-ternary': [ //더 간단한 대안이 있는 경우 삼항 연산자를 허용하지 x
        'error',
        {
          defaultAssignment: false,
        },
      ],
      quotes: [ //역따옴표, 큰따옴표 또는 작은따옴표를 일관되게 사용
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      'object-curly-spacing': ['error', 'always'], //중괄호 내부에 일정한 간격 적용
      'array-bracket-spacing': ['error', 'never'], //배열 브래킷 내부에 일정한 간격을 적용
      'brace-style': ['error'], //블록에 일관된 가새 스타일 적용
      curly: ['error', 'multi-line', 'consistent'], //모든 제어문에 일관된 중괄호 스타일 적용
      'no-debugger': ['warn'], //debugger 사용 금지
      'no-restricted-globals': ['off'], //지정된 전역 변수 허용 안 함
      'no-alert': ['warn'],//alert , confirm 및 prompt 사용 금지
      'no-console': [ //console 사용 금지
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
    }
  }