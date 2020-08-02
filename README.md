<h2 align="center">Header Inserter</h2>

[![Node CI](https://github.com/casaub0n/header-inserter/workflows/Node%20CI/badge.svg)](https://github.com/casaub0n/header-inserter/actions?query=workflow%3A%22Node+CI%22)

Inserting header in your bundle JavaScript file.

# How to use
Prepare userscript.json for user script header
```json
{
  "name": "name",
  "namespace": "https://example.com",
  "version": "0.1",
  "description": "description",
  "author": "username",
  "match": "*",
  "grant": "none"
}
```

```console
node node_module/.bin/header-inserter ./dist/index.js
```
