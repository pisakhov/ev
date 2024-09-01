import { MathfieldElement } from "mathlive";
const mfe = new MathfieldElement();

// Use var for nerdamer as mentioned in your comment
var nerdamer = require("nerdamer");
require("nerdamer/Algebra");
require("nerdamer/Calculus");
require("nerdamer/Solve");
require("nerdamer/Extra");

// Export the objects you want to use in your HTML
export { mfe, nerdamer };
