# bgt

[![NPM version](https://badge.fury.io/js/bgt.png)](http://badge.fury.io/js/bgt)
[![NGN Dependencies](https://david-dm.org/divanvisagie/bgt.png)](https://david-dm.org/divanvisagie/bgt)

bgt generates a node.js wrapper around a specified command so that it can be run in the background using forever.

For instance to run a ping on example.com as a background process run

	bgt myScriptName.js ping www.example.com ; forever start myScriptName.js

bgt just generates the node.js wrapper which can then be started in the background using forever.

## Getting Started
Install the module with: `npm install -g bgt`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Divan Visagie  
Licensed under the MIT license.
