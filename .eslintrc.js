module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  rules: {
    indent: 'off',
    'no-trailing-spaces': 'off',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'linebreak-style': 'off',
    'no-proto': 'off',

    'svelte/first-attribute-linebreak': [
      'error',
      {
        multiline: 'below',
        singleline: 'beside',
      },
    ],
    'svelte/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'svelte/html-quotes': [
      'error',
      {
        prefer: 'double',
        dynamic: {
          quoted: false,
          avoidInvalidUnquotedInHTML: false,
        },
      },
    ],
    'svelte/html-self-closing': [
      'error',
      'all',
    ],
    'svelte/indent': [
      'error',
      {
        indent: 2,
        ignoredNodes: [],
        switchCase: 1,
        alignAttributesVertically: false,
      },
    ],
    'svelte/max-attributes-per-line': [
      'error',
      {
        multiline: 1,
        singleline: 1,
      },
    ],
    'svelte/mustache-spacing': [
      'error',
      {
        textExpressions: 'never',
        attributesAndProps: 'never',
        directiveExpressions: 'never',
        tags: {
          openingBrace: 'never',
          closingBrace: 'never',
        },
      },
    ],
    'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
    'svelte/prefer-class-directive': 'error',
    'svelte/prefer-style-directive': 'error',
    'svelte/shorthand-attribute': [
      'error',
      {
        prefer: 'always',
      },
    ],
    'svelte/shorthand-directive': [
      'error',
      {
        prefer: 'always',
      },
    ],
    'svelte/sort-attributes': [
      'error',
      {
        order: [
          // `this` property.
          'this',
          // `bind:this` directive.
          'bind:this',
          // `id` attribute.
          'id',
          // `name` attribute.
          'name',
          // `slot` attribute.
          'slot',
          // `--style-props` (Alphabetical order within the same group.)
          { match: '/^--/u', sort: 'alphabetical' },
          // `style` attribute, and `style:` directives.
          ['style', '/^style:/u'],
          // `class` attribute.
          'class',
          // `class:` directives. (Alphabetical order within the same group.)
          { match: '/^class:/u', sort: 'alphabetical' },
          // other attributes. (Alphabetical order within the same group.)
          {
            match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
            sort: 'alphabetical',
          },
          // `bind:` directives (other then `bind:this`), and `on:` directives.
          ['/^bind:/u', '!bind:this', '/^on:/u'],
          // `use:` directives. (Alphabetical order within the same group.)
          { match: '/^use:/u', sort: 'alphabetical' },
          // `transition:` directive.
          { match: '/^transition:/u', sort: 'alphabetical' },
          // `in:` directive.
          { match: '/^in:/u', sort: 'alphabetical' },
          // `out:` directive.
          { match: '/^out:/u', sort: 'alphabetical' },
          // `animate:` directive.
          { match: '/^animate:/u', sort: 'alphabetical' },
          // `let:` directives. (Alphabetical order within the same group.)
          { match: '/^let:/u', sort: 'alphabetical' },
        ],
      },
    ],
    'svelte/spaced-html-comment': [
      'error',
      'always',
    ],
    'svelte/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'svelte/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
  },
  settings: {
    'svelte3/typescript': true,
  },
};
