# Typescript source maps

This project was part of an initiative to show how typescript development targeting node in AWS lambda can be done while maintaining readable stack traces in the event of an error.

By enabling `sourceMap` in `tsconfig.json`, `tsc` will produce a set of source maps readily available for consumption by node when `--enable-source-maps` is set.

### Usage

```shell
npm i
npm run build
node --enable-source-maps index.js
```
