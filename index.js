module.exports = {
  extends: ['drupal'],
  ignorePatterns: [
    // Ignore generated files.
    'dist/',

    // Ignore TypeScript ".d.ts" files, which seem to confuse ESLint.
    '*.d.ts',

    // Use inverse matching (!) to NOT ignore the following files.
    //
    // ESLint normally ignores all hidden files, but some can and should be
    // linted anyway.
    '!.eslintrc.js',
    '!.prettierrc.js',
    '!.stylelintrc.js',
  ],
  globals: {
    once: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Allow methods to be non-static even if they do not use `this`. Making a
    // method static is a design choice as much as anything.
    'class-methods-use-this': 'off',

    // Allow an item to be exported by name even when it is the only item being
    // exported. Making an item a default export is a design choice as much as
    // anything.
    'import/prefer-default-export': 'off',

    // Some `else` statements that are not strictly necessary can nonetheless
    // improve readability.
    'no-else-return': 'off',

    // Allow more than one class per file. Not all classes are reusable and
    // creating separate files for non-reusable classes can be tedious,
    // unnecessary, and even potentially confusing.
    'max-classes-per-file': 'off',

    // The `drupal` configuration uses ESLint to check whether code follows
    // Prettier style. Turn that off. Real-time editor warnings about formatting
    // can be very annoying and we run `prettier --check`, which accomplishes
    // the same thing, as part of our front-end tests.
    'prettier/prettier': 'off',

    // Keep imports as well-organized as possible.
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true,
      },
    ],
  },
  overrides: [
    // Configure settings for TypeScript files.
    //
    // We need to manually extend the `prettier` config last, even though the
    // `drupal` config extends it, because the `airbnb-typescript/base` config
    // sets rules which conflict with Prettier.
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['airbnb-typescript/base', 'prettier'],
    },

    // Configure settings for JavaScript files that use React.
    //
    // We need to manually extend the `prettier` config last, even though the
    // `drupal` config extends it, because the `airbnb/hooks` config sets rules
    // which conflict with Prettier.
    {
      files: ['*.jsx'],
      extends: ['airbnb/hooks', 'prettier'],
    },

    // Configure settings for TypeScript files that use React.
    //
    // We need to manually extend the `prettier` config last, even though the
    // `drupal` config extends it, because the `airbnb-typescript` and
    // `airbnb/hooks` configs set rules which conflict with Prettier.
    {
      files: ['*.tsx'],
      extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
      rules: {
        // We use a version of React that supports fragments.
        'react/jsx-fragments': 'off',
      },
    },

    // Allow devDependencies to be imported in files named _vite.config.js_ and
    // _vite.config.ts_. This configuration needs to be provided after the
    // configuration for TypeScript files to override those rules.
    {
      files: ['vite.config.{js,ts}'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
