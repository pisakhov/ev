import { MathfieldElement } from 'mathlive';
const mfe = new MathfieldElement();
// Use mfe as needed in your code
// const cannot be used since nerdamer gets modified when other modules are loaded
var nerdamer = require('nerdamer');
// Load additional modules. These are not required.
require('nerdamer/Algebra');
require('nerdamer/Calculus');
require('nerdamer/Solve');
require('nerdamer/Extra');