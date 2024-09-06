// ev/src/main.js

// Import MathfieldElement from mathlive
import { MathfieldElement } from "mathlive";
const mfe = new MathfieldElement();

// Import nerdamer and its extensions
var nerdamer = require("nerdamer");
require("nerdamer/Algebra");
require("nerdamer/Calculus");
require("nerdamer/Solve");
require("nerdamer/Extra");

// Import Alpine.js
import Alpine from "alpinejs";

// Make Alpine available on the window object
window.Alpine = Alpine;

// Initialize Alpine
Alpine.start();

// Export the objects you want to use in your HTML
export { mfe, nerdamer };
