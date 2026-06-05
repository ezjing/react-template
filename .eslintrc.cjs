/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'prettier',           // eslint-config-prettier: Prettier와 충돌하는 규칙 비활성화
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx'],
      },
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    // ─── FSD 레이어 간 import 방향 규칙 ───────────────────────────────────
    // shared → pages/features/widgets/entities 역방향 금지
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // shared 는 shared 만 참조 가능
          {
            target: './src/shared',
            from: './src/app',
            message: 'shared → app import 금지 (FSD 규칙)',
          },
          {
            target: './src/shared',
            from: './src/pages',
            message: 'shared → pages import 금지 (FSD 규칙)',
          },
          {
            target: './src/shared',
            from: './src/widgets',
            message: 'shared → widgets import 금지 (FSD 규칙)',
          },
          {
            target: './src/shared',
            from: './src/features',
            message: 'shared → features import 금지 (FSD 규칙)',
          },
          {
            target: './src/shared',
            from: './src/entities',
            message: 'shared → entities import 금지 (FSD 규칙)',
          },
          // entities → app/pages/widgets/features 금지
          {
            target: './src/entities',
            from: './src/app',
            message: 'entities → app import 금지 (FSD 규칙)',
          },
          {
            target: './src/entities',
            from: './src/pages',
            message: 'entities → pages import 금지 (FSD 규칙)',
          },
          {
            target: './src/entities',
            from: './src/widgets',
            message: 'entities → widgets import 금지 (FSD 규칙)',
          },
          {
            target: './src/entities',
            from: './src/features',
            message: 'entities → features import 금지 (FSD 규칙)',
          },
          // features → app/pages/widgets 금지
          {
            target: './src/features',
            from: './src/app',
            message: 'features → app import 금지 (FSD 규칙)',
          },
          {
            target: './src/features',
            from: './src/pages',
            message: 'features → pages import 금지 (FSD 규칙)',
          },
          {
            target: './src/features',
            from: './src/widgets',
            message: 'features → widgets import 금지 (FSD 규칙)',
          },
          // widgets → app/pages 금지
          {
            target: './src/widgets',
            from: './src/app',
            message: 'widgets → app import 금지 (FSD 규칙)',
          },
          {
            target: './src/widgets',
            from: './src/pages',
            message: 'widgets → pages import 금지 (FSD 규칙)',
          },
          // pages → app 금지
          {
            target: './src/pages',
            from: './src/app',
            message: 'pages → app import 금지 (FSD 규칙)',
          },
        ],
      },
    ],

    // ─── 일반 규칙 ────────────────────────────────────────────────────────
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [
          { pattern: '@/**', group: 'internal', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
