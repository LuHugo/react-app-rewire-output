# react-app-rewire-output
Use react-app-rewired to modify the default output options

## How to use
### Install 
```bash
yarn add --dev LuHugo/react-app-rewire-output
```
OR
```bash
npm install --dev LuHugo/react-app-rewire-output
```

### Use in `config-overrides.js` file

```javascript
  const rewireOutput = require('react-app-rewire-output');
  module.exports = function override(config, env) {
    config = rewireOutput({path: './dist'})(config, env);
    return config;
  }
```