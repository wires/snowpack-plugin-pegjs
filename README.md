# usage

With this plugin you can load [PEG.js](https://pegjs.org/) parsers directly from the source PEG file.

```js
import {parse, SyntaxError} from './parser.pegjs'
```

```
npm install -D snowpack-plugin-pegjs
```

in `snowpack.config.js`

```js
    plugins: [
        'snowpack-plugin-pegjs'
    ]
```