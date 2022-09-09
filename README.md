# eslint-config-inveniem

This package provides Inveniem's ESLint configuration as an extensible shared
configuration.

## Usage

1. Run `yarn --dev eslint-config-inveniem`
2. Run `npx install-peerdeps --dev eslint-config-inveniem`
3. Create an _.eslintrc.js_ file with the following contents:

```javascript
module.exports = {
  extends: "inveniem",
};
```
