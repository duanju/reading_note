# High Level Of Webpack

## Concepts

webpack is a static module bundler for modern JavaScript applications

## Entry

An entry point indicates which module webpack should use to begin building out its internal dependency graph.

```
module.exports = {
  entry: './path/to/my/entry/file.js'   // by default, the value should be ./src/index.js
};
```

## Output

```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js' // by default, the output is './dist/main.js'
  }
};
```

## Loaders

1. `test` property identifies which file or files should be transformed.
2. `use` property indicates which loader should be used to do the transforming.

## Plugins

 Plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

 ## Mode

 By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

 ## Browser Compatibility
