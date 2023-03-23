# @inveniem/eslint-config

This package provides Inveniem's ESLint configuration as an extensible shared
configuration.

## Usage

1. Install this package
    * If you're using Yarn, run `yarn add --dev @inveniem/eslint-config`
    * If you're using npm, run `npm install --save-dev @inveniem/eslint-config`
2. Run `npx install-peerdeps --dev @inveniem/eslint-config`
3. Create an _.eslintrc.js_ file with the following contents:

```javascript
module.exports = {
  extends: '@inveniem/eslint-config',
};
```
