# @inveniem/eslint-config

This package provides Inveniem's ESLint configuration as an extensible shared
configuration.

## Setup

1. Install this package
    * If using Yarn, run `yarn add --dev @inveniem/eslint-config`
    * If using npm, run `npm install --save-dev @inveniem/eslint-config`
2. Run `npx install-peerdeps --dev @inveniem/eslint-config`
3. Create an _.eslintrc.js_ file with the following contents:

```javascript
module.exports = {
  extends: '@inveniem/eslint-config',
};
```

## Usage

To run ESLint with this configuration, consider adding a `lint:js:eslint` script
to the `scripts` section of _package.json_ with the following value:

```
eslint --no-error-on-unmatched-pattern --report-unused-disable-directives --max-warnings=0 --ext .js --ext .ts --ext .jsx --ext .tsx .
```

Then, run `yarn lint:js:eslint` (if using Yarn) or `npm run lint:js:eslint` (if
using npm) to run it.
