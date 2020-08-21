# What is this?

A simple NPM package to allow you to check the status of ImperialPlugins services.

# Installation

`npm i ImperialPluginsStatus --save`

# Integrating into HTML

https://zoridam.com/IPStatus/index.js

# Using

```js
const IP = require("imperialpluginstatus"); 

IP.checkStatus(true || false, amount of time between checks in seconds);
```
