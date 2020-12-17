## Usage

With this plugin you can load [PEG.js](https://pegjs.org/) parsers directly from the source PEG file.

```js
import {parse, SyntaxError} from './parser.pegjs'
```

## Installation

```
npm install -D snowpack-plugin-pegjs
```

```json
// snowpack.config.json
{
    "plugins": [
        "snowpack-plugin-pegjs",
        /* ... rest of your plugins */
    ]
}
```