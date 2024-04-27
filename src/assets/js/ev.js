//global functions:
function getRandomInt(min, max) { //returns a random integer between min and max
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColorShades(color) {
	var colors = {
		'blue': 240,
		'red': 0,
		'green': 120,
		'purple': 300,
		'orange': 30,
		'yellow': 60,
		'pink': 330
	};

	if (color === 'random') {
		var randomColor = Object.keys(colors)[getRandomInt(0, Object.keys(colors).length - 1)];
		return generateHSLColor(colors[randomColor]);
	} else if (colors.hasOwnProperty(color)) {
		return generateHSLColor(colors[color]);
	} else {
		return color;
	}
}

function generateHSLColor(hue) {
	var saturation = 100; // Full saturation
	var lightness = getRandomInt(20, 80); // Random lightness between 20% and 80%
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
function hasKey(obj, key) { //check if object has key
	if (typeof obj !== 'object' || obj === null) {
		return false;
	}
	if (obj.hasOwnProperty(key)) {
		return true;
	}
	for (const prop in obj) {
		if (typeof obj[prop] === 'object' && hasKey(obj[prop], key)) {
			return true;
		}
	}
	return false;
}


function isValueAnObject(obj, key) { //check if the value of the key is an object
	if (typeof obj !== 'object' || obj === null) {
		return false;
	}

	if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] !== null) {
		return true;
	} else {
		return false;
	}
}

function arrayToObject(arr) { //recives array and return object
	return arr.reduce((acc, cur) => ({
		...acc,
		...cur
	}), {});
}

function addSubScriptRHS(rhs, subScript) {
	if (typeof rhs !== 'string') {
		rhs = String(rhs);
	}
	if (rhs.match(/_\{.*?\}/)) {
		return rhs;
	}
	return rhs.replace(/([A-Za-z]+)(\[.*?\])?/g, `$1_{${subScript}}$2`);
}


function getClassValues(className) { // receives class name and returns all the values of this class as array
	var values = [];
	var elements = document.querySelectorAll(className);
	elements.forEach(function(element) {
		values.push(element.value);
	});
	return values;
}

function uniqueChars(str1, str2) { //recieves two strings and return the unshared charachters in both strings "TCDynamic", "TCDynamic2" => "2"
	const set1 = new Set();
	const set2 = new Set();
	for (const char of str1) {
		set1.add(char);
	}
	for (const char of str2) {
		set2.add(char);
	}
	const result = new Set();
	for (const char of set1) {
		if (!set2.has(char)) {
			result.add(char);
		}
	}
	for (const char of set2) {
		if (!set1.has(char)) {
			result.add(char);
		}
	}
	let uniqueChars = "";
	for (const char of result) {
		uniqueChars += char;
	}
	return uniqueChars;
}

function addStringBeforeParens(str, num) { //recieves str and num and return subscript eq. G(Q) => G_{1}(Q)
	const indexOfParens = str.indexOf("(");
	if (indexOfParens === -1) {
		return str;
	}
	const strToAdd = "_{" + num + "}";
	const partBeforeParens = str.substr(0, indexOfParens);
	const partAfterParens = str.substr(indexOfParens);
	const modifiedStr = partBeforeParens + strToAdd + partAfterParens;
	return modifiedStr;
}


function getSubstringBeforeEquals(str) { //recieves a string and returns the strings before "=" if exists
	if (str.indexOf("=") === -1) return null;
	return str.substring(0, str.indexOf("="));
}

function getSubstringAfterEquals(str) { //recieves a string and returns the strings after "=" if exists
	if (str === null) {
        return null;
    }

	if (str.indexOf("=") === -1) return null;
	return str.substring(str.indexOf("=") + 1);
}

function getValuesInParens(str) { //recieves a string, returns array of values, seperated by comma
	const regex = /\(([^)]+)\)/;
	const matches = str.match(regex);
	if (!matches) return [];
	const value = matches[1];
	return value.split(",");
}

function getExpressionById(calculator, id) {
	const expressions = calculator.getExpressions();
	for (let i = 0; i < expressions.length; i++) {
		if (expressions[i].id === id) {
			return expressions[i].latex;
		}
	}
	return null;
}

function getRandomChar(arr, obj) { //recieves an array and generate a random charachter that is not included in the array
	const alphabet = "bjkmpuvwxyzABCDFGHIJKLMNOPRSTUVWXYZ";
	let char;
	do {
		char = alphabet[Math.floor(Math.random() * alphabet.length)];
	} while (arr.includes(char) || Object.values(obj).includes(char) || Object.keys(obj).includes(char));
	return char;
}

function removeLast(arr) { //recieves array and remove the last value
	arr.pop();
	return arr;
}

function getKeyPath(obj, key) { //recieves object and string, returns array of the path to the key.
	let path = [];

	function search(obj, key) {
		for (const [k, v] of Object.entries(obj)) {
			if (k === key) {
				path.push(k);
				return true;
			}
			if (v && typeof v === 'object') {
				path.push(k);
				if (search(v, key)) {
					return true;
				}
				path.pop();
			}
		}
		return false;
	}
	search(obj, key);
	return path;
}

function getValueFromKeyPath(obj, keyPath) { //recieves object and array and return the value of the path
	let value = obj;
	for (const key of keyPath) {
		value = value[key];
	}
	return value;
}

function removePlaceholder(str) { //remove subscript of the function G_{1}(Q) => G(Q)
	// Use a regular expression to match the pattern "_{}" followed by a value or number between "{}"
	const regex = /_{.*?}/;
	// Use the .replace method to remove the matched pattern from the string
	const result = str.replace(regex, '');
	// Return the modified string
	return result;
}

function capitalizeLn(str) { //replace ln to LN
	return str.replace(/ln/g, 'LN');
}

function replaceLn(str) { //replace log to ln  
	return str.replace(/ln/gi, "log");
}

function replaceLog(str){
	return str.replace(/log/gi, "ln");
}

function replaceMathrm(str) {
	// Replace "\\log_{n}" with "\\log"
	str = str.replace(/\\log_{\d+}/g, "\\log");
	// Replace "\\mathrm{LN}" with "\\ln"
	str = str.replace(/\\mathrm\{(.+?)\}/gi, function(match, p1) {
		return "\\" + p1.toLowerCase();
	});
	return str;
}

function wrapWithParentheses(expression) {
	// Split the expression into terms
	const terms = expression.split('*');

	// Wrap each term in parentheses
	const wrappedTerms = terms.map(term => `(${term})`);

	// Join the terms back together with '*'
	const wrappedExpression = wrappedTerms.join('*');

	return wrappedExpression;
}

function inMath(str) {
	return nerdamer.convertFromLaTeX(replaceLn(str));
}

function outMath(str) {
	return replaceLog(replaceMathrm(nerdamer.convertToLaTeX(nerdamer(str).toString())));
}

function isNumber(string) { //check if the string is float or int
	return !isNaN(parseFloat(string)) && isFinite(string);
}

function replaceKeysWithValues(obj, str) { // Replace all occurrences of the key in the string with its corresponding value
	const keys = Object.keys(obj);
	keys.sort((a, b) => b.length - a.length);
	for (const key of keys) {
		const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		str = str.replace(new RegExp(escapedKey, 'g'), obj[key]);
	}
	return str;
}

function replacePlaceholderWithLatex(inputStr, startIndex = 0) {
	const regex = /{\\placeholder\[(.*?)\]{/g;
	regex.lastIndex = startIndex;
	const match = regex.exec(inputStr);
	if (match === null) return inputStr;
	const openIndex = regex.lastIndex;
	let balance = 1;
	let closeIndex = openIndex;
	while (balance > 0 && closeIndex < inputStr.length) {
		if (inputStr[closeIndex] === '{') {
			balance++;
		} else if (inputStr[closeIndex] === '}') {
			balance--;
		}
		closeIndex++;
	}
	closeIndex--;
	const fullMatch = inputStr.substring(match.index, closeIndex + 1);
	let replacement = inputStr.substring(openIndex, closeIndex);
	if (replacement.includes('{\\placeholder')) {
		replacement = replacePlaceholderWithLatex(replacement);
	}
	inputStr = inputStr.substring(0, match.index) + replacement + inputStr.substring(closeIndex + 2);
	return replacePlaceholderWithLatex(inputStr, match.index + replacement.length);
}

function replaceValuesWithKeys(obj, str) {
	for (const key in obj) {
		// Replace all occurrences of the value in the string with its corresponding key
		str = str.replace(new RegExp(obj[key], 'g'), key);
	}
	return str;
}

function replaceValuesInParentheses(str, arr) { //recieves a string and array, and replaces between parens eg. f(val1,val2) ['x','y'] => f(x,y)
	var substring = str.match(/\((.*?)\)/);
	if (substring === null) {
		return str;
	}
	var oldValues = substring[1].split(",");
	if (oldValues.length !== arr.length) {
		alert("Error: number of values in parentheses doesn't match length of array");
		return str;
	}
	var newValues = arr.join(",");
	var newStr = str.replace(substring[0], "(" + newValues + ")");
	return newStr;
}
///end global functions
class RunCalc {
	constructor(selectedExpressions, listOfGraphs) {
		this.selectedExpressions = selectedExpressions;
		this.listOfGraphs = listOfGraphs;
		nerdamer.set('USE_LN', false);
	}
	simpleDraw(parms) {
		let expression = parms['expression'];
		let subScript = parms['subScript'];
		let lhs = parms['lhs'];
		let rhs = parms['rhs'];
		var returnValue = ((lhs !== undefined) ? (replaceValuesInParentheses(addStringBeforeParens(getSubstringBeforeEquals(expression), subScript), lhs) + "=") : "") + addSubScriptRHS(rhs, subScript);
		return returnValue;
	}
	simpleDrawLabel(parms) {
		let subScript = parms['subScript'];
		let rhs = parms['rhs'];
		labelSubScript = subScript;
		var returnValue = addSubScriptRHS(rhs, subScript);
		return returnValue;
	}
	simpleCompute(parms) {
		let compute = parms['compute'];
		let NewfunEqu = parms['NewfunEqu'];
		let selectedExp = this.selectedExpressions;
		const tempList = {};
		let obj = {};
		let words = compute.match(/[^\s()+\-^/*]+/g);
		for (let i = 0; i < words.length; i++) {
			if (selectedExp.hasOwnProperty(words[i]) && selectedExp[words[i]] !== undefined) {
				if (getSubstringBeforeEquals(selectedExp[words[i]]) != null) {
					let tempArr = getValuesInParens(getSubstringBeforeEquals(selectedExp[words[i]]));
					getValuesInParens(getSubstringBeforeEquals(selectedExp[words[i]])).forEach((j, l) => {
						let hasCommonKey = false;
						for (const key in tempList) {
							if (tempArr.includes(key)) {
								hasCommonKey = true;
								break;
							}
						}
						if (!hasCommonKey) {
							let index = tempArr.indexOf(j);
							if (index !== -1) {
								tempArr.splice(index, 1);
							}
							tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[words[i]])), tempList);
						}
					});
					obj[words[i]] = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[words[i]])));
				} else {
					obj[words[i]] = selectedExp[words[i]];
				}
			} else {
				let saveI = i;
				obj[words[saveI]] = selectedExp[words[saveI]];
			}
		}

		function replaceWordsWithValues(str, obj) {
			// Use regular expression to match all words and operators in the string
			var words = str.match(/(\[[^[\]]*\])|[()+\-^/*]|[^\s()+\-^/*\[\]]+/g);
			// Loop through words and replace with object values or values inside square brackets if they exist
			for (var i = 0; i < words.length; i++) {
				// Check if current word is a value inside square brackets
				if (words[i].startsWith("[") && words[i].endsWith("]")) {
					// Remove square brackets
					words[i] = words[i].slice(1, -1);
				}
				// Check if current word is an operator
				else if (/^[()+\-^/*]$/.test(words[i])) {
					// Replace operator with itself surrounded by spaces
					words[i] = ' ' + words[i] + ' ';
				}
				// Check if current word is a variable in the object
				else if (obj.hasOwnProperty(words[i])) {
					// Replace variable with object value
					words[i] = '(' + obj[words[i]] + ')';
				}
			}
			// Join the modified words array back into a string
			return words.join('');
		}
		return NewfunEqu + "=" + replaceValuesWithKeys(tempList, outMath(replaceWordsWithValues(compute, obj)));
	}
	simpleComputeDynamic(parms) {
		let selectedExp = parms['selectedExp'];
		let compute = parms['compute'];
		let NewfunEqu = parms['NewfunEqu'];
		let subScript = parms['subScript'];

		const tempList = {};
		let obj = {};
		let words = compute.match(/[^\s()+\-^/*]+/g);
		for (let i = 0; i < words.length; i++) {
			if (hasKey(selectedExp, words[i])) {
				if (removeLast(getKeyPath(selectedExp, words[i])).length > 1) {
					const rootMainKey = getKeyPath(selectedExp, words[i])[0];
					Object.entries(selectedExp[rootMainKey][subScript]).forEach(([k, j]) => {
						var expIdDivSub = getValueFromKeyPath(selectedExp[rootMainKey][subScript], (getKeyPath(selectedExp[rootMainKey][subScript], words[i])));
						var expression = removePlaceholder(expIdDivSub.value);
						var derivedValue = runIt(expression, k);
					});
				} else if (removeLast(getKeyPath(selectedExp, words[i])).length === 0 && !isValueAnObject(selectedExp, words[i])) {
					var derivedValue = runIt(selectedExp[words[i]], subScript);
				} else {
					var expIdDiv = getValueFromKeyPath(selectedExp, getKeyPath(selectedExp, words[i]));
					Object.entries(selectedExp[words[i]]).forEach(([k, i]) => {
						var expression = removePlaceholder(expIdDiv[subScript].value);
						var derivedValue = runIt(expression, subScript);
					});
				}

				function runIt(exp, k) {
					if (getSubstringBeforeEquals(exp) != null) {
						let tempArr = getValuesInParens(getSubstringBeforeEquals(exp));
						tempArr.forEach((j, l) => {
							let hasCommonKey = false;
							for (const key in tempList) {
								if (tempArr.includes(key)) {
									hasCommonKey = true;
									break;
								}
							}
							if (!hasCommonKey) {
								let index = tempArr.indexOf(j);
								if (index !== -1) {
									tempArr.splice(index, 1);
								}
								tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(exp)), tempList);
							}
						});
						obj[words[i]] = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(exp)));
					} else {
						obj[words[i]] = exp;
					}
				}
			} else {
				let saveI = i;
				obj[words[saveI]] = selectedExp[words[saveI]];
			}
		}

		function replaceWordsWithValues(str, obj) {
			var words = str.match(/(\[[^[\]]*\])|[()+\-^/*]|[^\s()+\-^/*\[\]]+/g);
			for (let i = 0; i < words.length; i++) {
				if (words[i].startsWith("[") && words[i].endsWith("]")) {
					words[i] = words[i].slice(1, -1);
				} else if (/^[()+\-^/*]$/.test(words[i])) {
					words[i] = ' ' + words[i] + ' ';
				} else if (obj.hasOwnProperty(words[i])) {
					words[i] = '(' + obj[words[i]] + ')';
				}
			}
			return words.join('');
		}

		return addStringBeforeParens(NewfunEqu, subScript) + "=" + replaceValuesWithKeys(tempList, outMath(replaceWordsWithValues(compute, obj)));
	}
	simpleInverseDynamic(parms) {
		let subScript = parms['subScript'];
		let expression = parms['expression'];
		let NewfunEqu = parms['NewfunEqu'];
		getValuesInParens(getSubstringBeforeEquals(expression))[0]
		var x = nerdamer.convertFromLaTeX(getSubstringAfterEquals(expression));
		nerdamer.setFunction('f', getValuesInParens(getSubstringBeforeEquals(expression))[0], x);
		var inverseValue = nerdamer(getValuesInParens(NewfunEqu)[0] + '=' + nerdamer('f(' + getValuesInParens(getSubstringBeforeEquals(expression))[0] + ')')).solveFor(getValuesInParens(getSubstringBeforeEquals(expression))[0]).toString();
		var inverseValueLatex = nerdamer.convertToLaTeX(inverseValue);
		if (inverseValueLatex === "") {
			inverseValueLatex = (subScript === "" ? NewfunEqu + "=" + getSubstringAfterEquals(expression) : addStringBeforeParens(NewfunEqu, subScript) + "=" + getSubstringAfterEquals(expression));
		} else {
			inverseValueLatex = (subScript === "" ? NewfunEqu + "=" + inverseValueLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + inverseValueLatex);
		}
		return inverseValueLatex;
	}
	simpleSum(parms) {
		let subScript = parms['subScript'];
		let parentIdDiv = parms['parentIdDiv'];
		let selectedExp = parms['selectedExp'];
		let NewfunEqu = parms['NewfunEqu'];
		let lastSum = [];
		let aggregatedSum;

		if (removeLast(getKeyPath(selectedExp, parentIdDiv)).length > 1) { //sub
			const rootMainKey = getKeyPath(selectedExp, parentIdDiv)[0];
			Object.keys(selectedExp[rootMainKey]).forEach(function(k) {
				var expIdDivSub = getValueFromKeyPath(selectedExp[rootMainKey][k], (getKeyPath(selectedExp[rootMainKey][k], parentIdDiv)));
				var expression = removePlaceholder(expIdDivSub.value); //main
				lastSum.push(getSubstringAfterEquals(expression));
				aggregatedSum = lastSum.reduce((total, num) => {
					let newTotal = nerdamer(inMath(total)).add(inMath(num)).toString();
					return newTotal;
				}, '0');			
			});
		} else { //main
			var expIdDiv = getValueFromKeyPath(selectedExp, getKeyPath(selectedExp, parentIdDiv));
			Object.keys(selectedExp[parentIdDiv]).forEach(function(k) {
				var expression = removePlaceholder(expIdDiv[k].value); //main
				lastSum.push(getSubstringAfterEquals(expression));
				aggregatedSum = lastSum.reduce((total, num) => {
					let newTotal = nerdamer(inMath(total)).add(inMath(num)).toString();
					return newTotal;
				}, '0');
			});
		}
		return addStringBeforeParens(NewfunEqu, subScript) + "=" + outMath(aggregatedSum);
	}
	simpleMarshalianDynamic(parms) {
		let selectedExp = parms['selectedExp'];
		let objective = parms['objective'];
		let constraint = parms['constraint'];
		let NewfunEqu = parms['NewfunEqu'];
		let subScript = parms['subScript'];

		let words = {
			objective: objective,
			constraint: constraint
		};
		let exportWords = {
			objective: '',
			constraint: ''
		};

		Object.entries(words).forEach(([i, m]) => {
			if (hasKey(selectedExp, words[i])) {
				if (removeLast(getKeyPath(selectedExp, words[i])).length > 1) {
					const rootMainKey = getKeyPath(selectedExp, words[i])[0];
					Object.entries(selectedExp[rootMainKey][subScript]).forEach(([k, j]) => {
						var expIdDivSub = getValueFromKeyPath(selectedExp[rootMainKey][subScript], getKeyPath(selectedExp[rootMainKey][subScript], words[i]));
						var expression = removePlaceholder(expIdDivSub.value);
						exportWords[i] = expression;
					});
				} else if (removeLast(getKeyPath(selectedExp, words[i])).length === 0) {
					exportWords[i] = selectedExp[words[i]];
				} else {
					var expIdDiv = getValueFromKeyPath(selectedExp, getKeyPath(selectedExp, words[i]));
					Object.entries(selectedExp[words[i]]).forEach(([k, i]) => {
						var expression = removePlaceholder(expIdDiv[subScript].value);
						exportWords[i] = expression;
					});
				}
			} else {
				alert("Please enter correct IdDiv");
			}
		});

		// const mainFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(exportWords.objective))).toString();
		// const constraintFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(exportWords.constraint))).toString();

		const mainFunc = inMath(replaceLn(getSubstringAfterEquals(exportWords.objective))).toString();
		const constraintFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(exportWords.constraint))).toString();


		let returnValue = [];
		let sol ={};

		if (mainFunc.includes('min(')) {
			const startIdx = mainFunc.indexOf('(') + 1;
			const endIdx = mainFunc.lastIndexOf(')');
			if (startIdx !== -1 && endIdx !== -1) {
				const innerFuncs = mainFunc.substring(startIdx, endIdx).split(',');
				if (innerFuncs.length === 2) {
					const funcX = innerFuncs[0];
					const funcY = innerFuncs[1];
					const kinkPointEquation = `${funcX}=${funcY}`;
					nerdamer.set('SOLUTIONS_AS_OBJECT', true);
					sol = nerdamer.solveEquations([kinkPointEquation, constraintFunc], ['x', 'y']);
				}
			}
		} else if (mainFunc.includes('max(')) {
			alert('Use a different utility function');
			return;
		} else {
			// Handle general cases

			nerdamer.setFunction('U', ['x', 'y'], mainFunc);
			nerdamer.setFunction('B', ['x', 'y'], constraintFunc);

			const MUx = nerdamer.diff('U(x, y)', 'x').text('decimals',20);
			const MUy = nerdamer.diff('U(x, y)', 'y').text('decimals');
			const dBdx = nerdamer.diff('B(x, y)', 'x').text('decimals');
			const dBdy = nerdamer.diff('B(x, y)', 'y').text('decimals');

			const priceRatio = nerdamer(`${dBdx}/(${dBdy})`).text('decimals');
			const MRS = nerdamer(`${MUx}/(${MUy})`).text('decimals');

			const equation = `${MRS}=${priceRatio}`;
			nerdamer.set('SOLUTIONS_AS_OBJECT', true);

			if (equation.includes('x') && equation.includes('y')) {
				sol = nerdamer.solveEquations([equation, 'B(x,y)'], ['x', 'y']);
			} else if (equation.includes('x')) {
				const subEq = nerdamer(`${MRS}-${priceRatio}=0`);
				sol.x = Number(subEq.solveFor('x')[0]);
				sol.y = Number(nerdamer('B(x,y)').evaluate({x:sol.x}).solveFor('y')[0]);
			} else if (equation.includes('y')) {
				const subEq = nerdamer(`${MRS}-${priceRatio}=0`);
				sol.y = Number(subEq.solveFor('y')[0]);
				sol.x = Number(nerdamer('B(x,y)').evaluate({y:sol.y}).solveFor('x')[0]);
			}

		}

		Object.entries(sol).forEach(([key, value]) => {
			returnValue.push(value);
		});

		return `${NewfunEqu}_${subScript}=[${returnValue.join(', ')}]`;
	}

	simpleDerive(parms) {
		let parentIdDiv = parms['parentIdDiv'];
		let NewfunEqu = parms['NewfunEqu'];
		let solveFor = parms['solveFor'];
		let selectedExp = this.selectedExpressions;
		const tempList = {}
		getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])).forEach(function(i) {
			tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
		});
		var x = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv]))).toString();
		nerdamer.setFunction('f', tempList[getValuesInParens(NewfunEqu)[solveFor]], x);
		var FOC = nerdamer.diff(nerdamer('f(' + tempList[getValuesInParens(NewfunEqu)[solveFor]] + ')'), tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString();
		var FOCLatex = outMath(FOC);
		FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
		FOCLatex = NewfunEqu + "=" + FOCLatex;
		return FOCLatex;
	}

	simpleInverse(parms) {
		let parentIdDiv = parms['parentIdDiv'];
		let NewfunEqu = parms['NewfunEqu'];
		let solveFor = parms['solveFor'];
		let selectedExp = this.selectedExpressions;
		const tempList = {};

		// Replacing $.each with a native JavaScript forEach loop.
		getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])).forEach(function(i) {
			tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
		});

		tempList[getValuesInParens(NewfunEqu)[0]] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);

		var x = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv])));
		nerdamer.setFunction('f', tempList[getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[solveFor]], x);

		var inverseValue = nerdamer(tempList[getValuesInParens(NewfunEqu)[0]] + '=' + nerdamer('f(' + tempList[getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[solveFor]] + ')')).solveFor(tempList[getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[solveFor]]).toString();

		var inverseValueLatex = outMath(inverseValue);
		inverseValueLatex = replaceValuesWithKeys(tempList, inverseValueLatex);

		if (inverseValueLatex === "") {
			inverseValueLatex = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[parentIdDiv]);
		} else {
			inverseValueLatex = NewfunEqu + "=" + inverseValueLatex;
		}

		return inverseValueLatex;
	}

	simpleFOC(parms) {
		let parentIdDiv = parms['parentIdDiv'];
		let NewfunEqu = parms['NewfunEqu'];
		let solveFor = parms['solveFor'];
		let FOCmax = parms['FOCmax'];
		let selectedExp = this.selectedExpressions;
		const tempList = {};

		// Replacing $.each with native JavaScript forEach loop
		getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])).forEach(function(i) {
			tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
		});

		var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv])));
		nerdamer.setFunction('f', tempList[getValuesInParens(NewfunEqu)[solveFor]], x);
		var FOC = nerdamer.diff(nerdamer('f(' + tempList[getValuesInParens(NewfunEqu)[solveFor]] + ')'), tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString();
		var equateToZero = nerdamer(FOC).solveFor(tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString();
		let FOCLatex = "";

		// Replacing $.each with native JavaScript split and forEach loop
		equateToZero.split(",").forEach(function(i) {
			nerdamer.setFunction('g', tempList[getValuesInParens(NewfunEqu)[solveFor]], FOC);
			var secondFOC = nerdamer.diff(nerdamer('g(' + tempList[getValuesInParens(NewfunEqu)[solveFor]] + ')'), tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString(); //second order
			nerdamer.setFunction('g', tempList[getValuesInParens(NewfunEqu)[solveFor]], secondFOC);
			if (nerdamer('g(' + i + ')').lt('0') && FOCmax) { //max point
				FOCLatex = nerdamer.convertToLaTeX(i);
				FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
				FOCLatex = NewfunEqu + "=" + FOCLatex;
			} else if (nerdamer('g(' + i + ')').gt('0') && !FOCmax) { //min point
				FOCLatex = nerdamer.convertToLaTeX(i);
				FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
				FOCLatex = NewfunEqu + "=" + FOCLatex;
			}
		});

		if (FOCLatex === "") {
			alert("Couldn't get max/min desired");
		}

		return FOCLatex;
	}

	advanceSubstitute(parms) {
		let parentIdDiv = parms['parentIdDiv'];
		let NewfunEqu = parms['NewfunEqu'];
		let subWith = parms['subWith'];

		let selectedExp = this.selectedExpressions;
		let FOCLatex = "";
		const expressionInto = selectedExp[parentIdDiv[0]];
		const expressionFrom = selectedExp[parentIdDiv[1]];
		const tempList = {};

		// Replacing $.each with a native JavaScript forEach loop for expressionInto.
		getValuesInParens(getSubstringBeforeEquals(expressionInto)).forEach(function(i) {
			tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(expressionInto)), tempList);
		});

		// Replacing $.each with a native JavaScript forEach loop for expressionFrom.
		getValuesInParens(getSubstringBeforeEquals(expressionFrom)).forEach(function(i) {
			tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(expressionFrom)), tempList);
		});

		var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(expressionInto)));
		var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(expressionFrom)));
		var z = nerdamer(x).sub(tempList[getValuesInParens(getSubstringBeforeEquals(expressionInto))[subWith]], y).toString();

		FOCLatex = nerdamer.convertToLaTeX(z);
		FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
		FOCLatex = NewfunEqu + "=" + FOCLatex;

		return FOCLatex;
	}

	simpleLag(parms) {
		let idDiv = parms['idDiv'];
		let parentIdDiv = parms['parentIdDiv'];
		let constraint = parms['constraint'];
		let FOCmax = parms['FOCmax'];
		let NewfunEqu = parms['NewfunEqu'];
		let listGraphs = parms['listGraphs'];

		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		var data = {};
		var sol = {};
		var mainFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(selectedExp[parentIdDiv]))).toString();
		var constraintFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(selectedExp[constraint]))).toString();
		if (FOCmax) {
			mainFunc = "(" + mainFunc + ") + lambda * (" + constraintFunc + ")"
		} else {
			mainFunc = "(" + mainFunc + ") - lambda * (" + constraintFunc + ")"
		}
		let valuesInParens = getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]));
		valuesInParens.forEach((i, k) => {
			nerdamer.setFunction('f', valuesInParens[k], mainFunc);
			data[i] = nerdamer.diff(nerdamer(`f(${valuesInParens[k]})`), valuesInParens[k]).toString();
		});
		nerdamer.setFunction('f', ['lambda'], mainFunc);
		data['lambda'] = nerdamer.diff(nerdamer('f( lambda )'), 'lambda').toString();
		var arrayLag = [];
		Object.entries(data).forEach(([key, value]) => {
			arrayLag.push(value + "=0");
		});
		try {
			nerdamer.set('SOLUTIONS_AS_OBJECT', true);
			sol = nerdamer.solveEquations(arrayLag);
		} catch (error) {
			fetch('https://pisakhov.com/ev-ai/api/solve_operations/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					operation: 'solveEquations',
					data: {
						equations: arrayLag
					}
				}),
			}).then(response => response.json()).then(data => {
				sol = data;
			}).catch((apiError) => {
				console.log("API Error:", apiError);
			});
		}
		Object.entries(sol).forEach(([key, value]) => {
			var subId = (idDiv + "_" + key);
			var subNewfunEqu = NewfunEqu + "_{" + key + "}";
			selectedExp[subId] = subNewfunEqu + "=" + nerdamer(value).evaluate().toString();
			listGraphs.forEach((i, k) => {
				listOfGraphs[i].setExpression({
					"id": subId,
					"type": "expression",
					"latex": subNewfunEqu + "=" + nerdamer(value).evaluate().toString()
				});
			});
		});
		var returnValue = [];
		Object.entries(sol).forEach(([key, value]) => {
			returnValue.push(value);
		});
		return NewfunEqu + "=[" + returnValue + "]";
	}
	simpleSubstitute(parms) {
		let parentIdDiv = parms['parentIdDiv'];
		let NewfunEqu = parms['NewfunEqu'];

		let selectedExp = this.selectedExpressions;
		const parList = [];
		const valList = [];
		const valuesBeforeEquals = getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]));
		for (let k = 0; k < valuesBeforeEquals.length; k++) {
			parList.push(valuesBeforeEquals[k]);
		}
		nerdamer.setFunction('f', parList, nerdamer.convertFromLaTeX(inMath(getSubstringAfterEquals(selectedExp[parentIdDiv]))));
		const newFunEquValues = getValuesInParens(NewfunEqu);
		for (let k = 0; k < newFunEquValues.length; k++) {
			valList.push(getSubstringAfterEquals(selectedExp[newFunEquValues[k]]));
		}
		return replaceValuesInParentheses(NewfunEqu, parList) + "=" + nerdamer('simplify(' + nerdamer('f(' + valList + ')').evaluate().toString() + ')').text('decimals', 3);
	}
	simpleMarshalian(parms) {
		let idDiv = parms['idDiv'];
		let parentIdDiv = parms['parentIdDiv'];
		let constraint = parms['constraint'];
		let NewfunEqu = parms['NewfunEqu'];
		let listGraphs = parms['listGraphs'];

		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		const mainFunc = inMath(replaceLn(getSubstringAfterEquals(selectedExp[parentIdDiv]))).toString();
		const constraintFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(selectedExp[constraint]))).toString();
		let returnValue = [];
		let sol = {};
		if (mainFunc.includes('min(')) {
			const startIdx = mainFunc.indexOf('(') + 1;
			const endIdx = mainFunc.lastIndexOf(')');
			if (startIdx !== -1 && endIdx !== -1) {
				const innerFuncs = mainFunc.substring(startIdx, endIdx).split(',');
				if (innerFuncs.length === 2) {
					const funcX = innerFuncs[0];
					const funcY = innerFuncs[1];
					const kinkPointEquation = `${funcX}=${funcY}`;
					try {
						nerdamer.set('SOLUTIONS_AS_OBJECT', true);
						sol = nerdamer.solveEquations([kinkPointEquation, constraintFunc], ['x', 'y']);
					} catch (e) {
						console.error('Error while solving equations:', e);
					}
				}
			}
		} else if (mainFunc.includes('max(')) {
			alert('Use a different utility function');
			return;
		} else {
    // Handle general cases

    nerdamer.setFunction('U', ['x', 'y'], mainFunc);
    nerdamer.setFunction('B', ['x', 'y'], constraintFunc);

    const MUx = nerdamer.diff('U(x, y)', 'x').text('decimals',20);
    const MUy = nerdamer.diff('U(x, y)', 'y').text('decimals');
    const dBdx = nerdamer.diff('B(x, y)', 'x').text('decimals');
    const dBdy = nerdamer.diff('B(x, y)', 'y').text('decimals');

    const priceRatio = nerdamer(`${dBdx}/(${dBdy})`).text('decimals');
    const MRS = nerdamer(`${MUx}/(${MUy})`).text('decimals');


    const equation = `${MRS}=${priceRatio}`;

    nerdamer.set('SOLUTIONS_AS_OBJECT', true);

    if (equation.includes('x') && equation.includes('y')) {
        sol = nerdamer.solveEquations([equation, 'B(x,y)'], ['x', 'y']);
    } else if (equation.includes('x')) {
        const subEq = nerdamer(`${MRS}-${priceRatio}=0`);
        sol.x = Number(subEq.solveFor('x')[0]);
        sol.y = Number(nerdamer('B(x,y)').evaluate({x:sol.x}).solveFor('y')[0]);
    } else if (equation.includes('y')) {
        const subEq = nerdamer(`${MRS}-${priceRatio}=0`);
        sol.y = Number(subEq.solveFor('y')[0]);
        sol.x = Number(nerdamer('B(x,y)').evaluate({y:sol.y}).solveFor('x')[0]);
    }

}
		Object.entries(sol).forEach(([key, value]) => {
			const subId = `${idDiv}_${key}`;
			const subNewfunEqu = `${NewfunEqu}_${key}`;
			selectedExp[subId] = `${subNewfunEqu}=${nerdamer(value).evaluate().toString()}`;
			Object.keys(listGraphs).forEach(k => {
				const i = listGraphs[k];
				listOfGraphs[i].setExpression({
					"id": subId,
					"type": "expression",
					"latex": `${subNewfunEqu}=${nerdamer(value).evaluate().toString()}`
				});
			});
			returnValue.push(value);
		});
		return `${NewfunEqu}=[${returnValue.join(', ')}]`;
	}
}

class SliderComponent {
	constructor(config) {
		this.config = config;

		// Basic validation and setup
		this.validateConfig();
		this.setupDefaults();
		this.container = document.getElementById(config.id || 'slider-container');
	}

	validateConfig() {
		if (typeof this.config.min !== "string" && typeof this.config.max !== "string" && this.config.min >= this.config.max) {
			console.error("Min value should be less than Max value. Received min:", this.config.min, "max:", this.config.max);
			throw new Error("Invalid configuration");
		}

		if (this.config.step <= 0 || this.config.step > (this.config.max || Infinity)) {
			console.error("Invalid Step value. Received step:", this.config.step, "max:", this.config.max);
			throw new Error("Invalid configuration");
		}
	}
	setupDefaults() {
		this.DEFAULT_MIN = this.config.min || 0;
		this.DEFAULT_MAX = this.config.max || 655000;
		this.DEFAULT_STEP = this.config.step || 1;
		this.DEFAULT_MULTI_VISIBILITY = this.config.multiVisibility || false;
		//if the range of min and max is less than 100, then DEFAULT_MULTI_VISIBILITY is false
		if (this.DEFAULT_MAX - this.DEFAULT_MIN <= 100) {
			this.DEFAULT_MULTI_VISIBILITY = false;
		}
		this.DEFAULT_VALUE = this.config.defaultValue || 0;
		this.TITLE = this.config.title || 'Title Here:';
		this.latex = this.config.latex;
		this.listGraphs = this.config.listGraphs;
		this.listOfGraphs = this.config.listOfGraphs;
		this.config.selectedExp[this.config.id] = `${this.latex}=${this.config.defaultValue}`;
	}

	async init() {
		const boundsUpdated = await this.evaluateAndUpdateBounds();
		if (!boundsUpdated) return;

		this.render(); // Render should only handle DOM operations.
		this.setupSliderElements();
		this.addEventListeners(); // Ensure this is called after elements are set up.
		this.updateDesmosWithSliderValue();
		this.observeDesmosChanges();
		this.observeExpressionChanges();
	}
	observeExpressionChanges() {
		this.listOfGraphs.forEach(graph => {
			const helperExpression = graph.HelperExpression({
				latex: this.latex
			});
			helperExpression.observe('numericValue', () => {
				const currentValue = helperExpression.numericValue;
				if (currentValue !== undefined) {
					this.config.selectedExp[this.config.id] = `${this.latex}=${currentValue}`;
				}
			});
		});
	}

	async evaluateAndUpdateBounds() {
		const evaluatedMin = typeof this.config.min === "string" ?
			await this.evaluateExpression(this.config.min) :
			parseFloat(this.config.min || this.DEFAULT_MIN);
		const evaluatedMax = typeof this.config.max === "string" ?
			await this.evaluateExpression(this.config.max) :
			parseFloat(this.config.max || this.DEFAULT_MAX);

		if (evaluatedMin >= evaluatedMax) {
			console.error("Evaluated Min value should be less than Evaluated Max value.");
			return false;
		}

		this.DEFAULT_MIN = evaluatedMin;
		this.DEFAULT_MAX = evaluatedMax;
		return true;

	}

	render() {
		if (!this.container) {
			console.error("Container not found");
			return;
		}
		let htmlContent = "";

		if (this.config.simpleMode) {
			// Generate HTML for legend text using Tailwind CSS grid classes
			let legendHtml = "";
			if (Array.isArray(this.config.legendText)) {
				legendHtml = `<div class="grid grid-cols-${this.config.legendText.length} gap-4">` +
					this.config.legendText.map(text => `<div class="text-center text-xs">${text}</div>`).join('') +
					`</div>`;
			} else {
				// Fallback for single legend text
				legendHtml = `<p class="text-center">${this.config.legendText}</p>`;
			}

			// Simple mode HTML setup with Tailwind CSS
			htmlContent = `<div class="">
							   <p class="text-md mb-4">${this.TITLE}:</p>
							   ${legendHtml}
							   <input type="range" class="w-[95%] ml-2 range-config appearance-none bg-violet-50 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 cursor-pointer rounded-lg hover:bg-violet-300 dark:hover:bg-gray-600 active:outline-none active:ring-2 active:ring-violet-600"/>
						   </div>`;
		} else {
			    // Check if the multiplier buttons should be visible
				const displayMultiplier = this.DEFAULT_MULTI_VISIBILITY ? 'block' : 'none';

			// Full mode HTML setup
			htmlContent = `
			<div class="p-1 text-md">${this.TITLE}:</div>
			<div class="h-auto relative flex flex-col w-full items-stretch justify-between rounded-md border-0 border-violet-500 bg-transparent p-2">
			  <input type="range" class="range-config appearance-none mb-2 bg-violet-50 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 cursor-pointer rounded-lg hover:bg-violet-300 dark:hover:bg-gray-600 active:outline-none active:ring-2 active:ring-violet-600" />
			  <div class="relative flex items-center justify-around">
				<div class="relative flex flex-row mx-4 w-full text-[6pt]">
					<div class="relative w-14 flex flex-col items-center justify-center" style="display: ${displayMultiplier};">
					<button class="disabled:scale-100 disabled:bg-slate-500 h-1/2 translate-x-6 after:content-['_'] after:absolute after:size-4 after:top-0 after:right-0 after:rounded-tl-full after:bg-transparent w-full increaseMultiplier transform rounded-t-lg bg-green-500 px-1 py-0 text-white hover:bg-green-600 active:bg-green-700 active:translate-x-6 active:scale-95 text-left"></button>
					<button class="disabled:scale-100 disabled:bg-slate-500 h-1/2 translate-x-6 after:content-['_'] after:absolute after:size-4 after:top-0 after:right-0 after:rounded-bl-full after:bg-transparent w-full decreaseMultiplier transform rounded-b-lg bg-red-500 px-1 py-0 text-white hover:bg-red-600 active:bg-red-700 active:translate-x-6 active:scale-95 text-left"></button>
					</div>
				  <div class="relative flex-grow flex items-center justify-between">
					<input type="number" class="number-config bg-violet-50 w-full rounded-xl border border-violet-400 px-4 py-1.5 text-center text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 hover:border-violet-500" />
					<span class="multiplierIndicator absolute p-1 inset-y-0 left-1 text-xs z-10 pointer-events-none"></span>
				  </div>
				</div>
			  </div>
			</div>
			`;
		  }
		this.container.innerHTML = htmlContent;
		this.setupSliderElements();
	}
	setupSliderElements() {
		this.rangeInput = this.container.querySelector('.range-config');

		// Always set up the range input
		if (this.rangeInput) {
			this.rangeInput.value = this.DEFAULT_VALUE;
			this.setAttributes(this.rangeInput);
		}

		// Conditionally set up the number input and multiplier indicator if they exist
		this.numberInput = this.container.querySelector('.number-config');
		if (this.numberInput) {
			this.numberInput.value = this.DEFAULT_VALUE;
			this.setAttributes(this.numberInput);
		}

		this.multiplierIndicator = this.container.querySelector('.multiplierIndicator');
		if (this.multiplierIndicator) {
			this.multiplierIndicator.textContent = 'x' + this.DEFAULT_STEP;
			const decreaseMultiplierButton = this.container.querySelector('.decreaseMultiplier');
			const increaseMultiplierButton = this.container.querySelector('.increaseMultiplier');
		
			increaseMultiplierButton.textContent = 'x' + (this.DEFAULT_STEP * 10);
			decreaseMultiplierButton.textContent = 'Min';
			decreaseMultiplierButton.disabled = true;	
		}
	}
	updateAllGraphs() {
		this.listOfGraphs.forEach((graph, index) => {
			if (index !== this.currentGraphIndex) { // Avoid updating the graph that triggered the change
				graph.setExpression({
					id: this.config.id,
					latex: this.latex + '=' + this.getValue(),
					sliderBounds: {
						min: this.config.min,
						max: this.config.max,
						step: this.DEFAULT_STEP
					}
				});
			}
		});
	}

	observeDesmosChanges() {
		this.listOfGraphs.forEach((graph, index) => {
			// Observing changes for the main slider value
			const helperExpressionValue = graph.HelperExpression({
				latex: this.latex
			});
			helperExpressionValue.observe('numericValue', () => {
				const currentValue = helperExpressionValue.numericValue;
				if (currentValue !== undefined && currentValue !== this.getValue()) {
					this.updateValue(currentValue);
					this.currentGraphIndex = index; // Keep track of the graph that triggered the change
					this.updateAllGraphs(); // Update all graphs
				}
			});

			// Observe min and max if they are expressions
			this.observeBoundChanges(graph, this.config.min, this.updateMin.bind(this));
			this.observeBoundChanges(graph, this.config.max, this.updateMax.bind(this));
		});
	}

	observeBoundChanges(graph, bound, updateFunction) {
		if (typeof bound === 'string') {
			const helperExpressionBound = graph.HelperExpression({
				latex: bound
			});
			helperExpressionBound.observe('numericValue', () => {
				const newValue = helperExpressionBound.numericValue;
				if (!isNaN(newValue)) {
					updateFunction(newValue);
				}
			});
		}
	}


	updateDesmosWithSliderValue() {
		this.listGraphs.forEach(graphIndex => {
			const graph = this.listOfGraphs[graphIndex];
			if (graph) {
				graph.setExpression({
					id: this.config.id,
					latex: this.latex + '=' + this.getValue(),
					sliderBounds: {
						min: this.config.min,
						max: this.config.max,
						step: this.DEFAULT_STEP
					}
				});
			}
		});
	}

	async evaluateBounds(min, max) {
		const evaluatedMin = typeof min === "string" ? await this.evaluateExpression(min) : parseFloat(min);
		const evaluatedMax = typeof max === "string" ? await this.evaluateExpression(max) : parseFloat(max);
		return {
			evaluatedMin,
			evaluatedMax
		};
	}
	evaluateExpression(expression) {
		return new Promise((resolve, reject) => {
			// Check if this.listOfGraphs is provided and valid
			if (!this.listOfGraphs || !Array.isArray(this.listOfGraphs) || this.listOfGraphs.length === 0) {
				reject(new Error("No graphs provided for expression evaluation."));
				return;
			}

			// Use the first graph in the list for evaluation
			const graph = this.listOfGraphs[0];

			// Check if graph is defined
			if (!graph) {
				reject(new Error("Graph is undefined."));
				return;
			}

			// Create a helper expression in Desmos for evaluation
			const helperExp = graph.HelperExpression({
				latex: expression
			});

			// Function to handle value change
			const valueChangeHandler = () => {
				// Remove observer once the value is obtained
				helperExp.unobserve('numericValue');
				resolve(helperExp.numericValue);
			};

			// Observe changes in the numeric value of the expression
			helperExp.observe('numericValue', valueChangeHandler);
		});
	}

	setAttributes(element) {
		element.setAttribute('min', this.DEFAULT_MIN);
		element.setAttribute('max', this.DEFAULT_MAX);
		element.setAttribute('step', this.DEFAULT_STEP);
		element.setAttribute('value', this.DEFAULT_VALUE);
	}

	addEventListeners() {
    // Conditionally add event listeners for decrease/increase value buttons
    const decreaseValueButton = this.container.querySelector('.decreaseValue');
    const increaseValueButton = this.container.querySelector('.increaseValue');
    const handleContinuousAdjustment = (adjustment) => {
        return setInterval(() => {
            this.adjustValue(adjustment);
            this.rangeInput.dispatchEvent(new Event('input'));
        }, 100); // Adjust this interval as needed
    };

// Modify event listeners for decrease/increase value buttons
if (decreaseValueButton && increaseValueButton) {
    const adjustValue = (event) => {
        event.preventDefault();
        if (event.target === decreaseValueButton) {
			this.adjustValue(-1);
            this.rangeInput.dispatchEvent(new Event('input'));
        } else if (event.target === increaseValueButton) {
			this.adjustValue(1);
            this.rangeInput.dispatchEvent(new Event('input'));
		
		}
    };

    // Add event listeners to adjust the value
    decreaseValueButton.addEventListener('click', adjustValue);
    increaseValueButton.addEventListener('click', adjustValue);
}
	
		// Conditionally add event listeners for decrease/increase multiplier buttons
		const decreaseMultiplierButton = this.container.querySelector('.decreaseMultiplier');
		const increaseMultiplierButton = this.container.querySelector('.increaseMultiplier');
		if (decreaseMultiplierButton && increaseMultiplierButton) {
			decreaseMultiplierButton.addEventListener('click', () => this.adjustMultiplier(-1));
			increaseMultiplierButton.addEventListener('click', () => this.adjustMultiplier(1));
		}

		// Always attach event listener to range input
		this.rangeInput.addEventListener('input', () => {
			this.syncValues('slider');
			this.updateDesmosWithSliderValue();
		});
		this.rangeInput.addEventListener('mouseup', () => {
			this.adjustDynamicStep();
			this.rangeInput.dispatchEvent(new Event('change'));
		});
		this.rangeInput.addEventListener('mousedown', () => this.tempAdjustStep());

		// Conditionally attach event listeners to number input
		if (this.numberInput) {
			this.numberInput.addEventListener('change', () => {
				this.syncValues('number');
				this.rangeInput.dispatchEvent(new Event('input'));
			});
			this.numberInput.addEventListener('focus', () => this.hideMultiplier());
			this.numberInput.addEventListener('blur', () => this.showMultiplier());
		}
	}

	adjustValue(direction) {
		const step = parseFloat(this.rangeInput.step);
		const currentValue = parseFloat(this.rangeInput.value);
		const newValue = direction === 1 ? Math.min(this.DEFAULT_MAX, currentValue + step) : Math.max(this.DEFAULT_MIN, currentValue - step);
		this.rangeInput.value = newValue;
		this.syncValues('slider');
		this.rangeInput.dispatchEvent(new Event('change'));
	}
	adjustMultiplier(direction) {
		const decreaseMultiplierButton = this.container.querySelector('.decreaseMultiplier');
		const increaseMultiplierButton = this.container.querySelector('.increaseMultiplier');

		let currentStep = parseFloat(this.rangeInput.step);
	  
		const maxMultiplier = Math.pow(10, Math.floor(Math.log10(this.DEFAULT_MAX) - 1));
		const minMultiplier = this.DEFAULT_STEP;
		if (direction === 1) {
			currentStep = Math.min(maxMultiplier, currentStep * 10);
			if (currentStep === maxMultiplier) {
				increaseMultiplierButton.disabled = true;
				increaseMultiplierButton.textContent = 'Max';
			  }
			  else{
				increaseMultiplierButton.textContent = 'x' + (currentStep * 10);
			  }
			  decreaseMultiplierButton.textContent = 'x' + (currentStep / 10);
			decreaseMultiplierButton.disabled = false;

		} else if (direction === -1) {
			currentStep = Math.max(minMultiplier, currentStep / 10);
			if (currentStep === minMultiplier) {
				decreaseMultiplierButton.disabled = true;
				decreaseMultiplierButton.textContent = 'Min';
			  }
			  else{
				decreaseMultiplierButton.textContent = 'x' + (currentStep / 10);
			  }
			  increaseMultiplierButton.textContent = 'x' + (currentStep * 10);
			  increaseMultiplierButton.disabled = false;
		}
		this.rangeInput.step = currentStep.toString();
		this.numberInput.step = currentStep.toString();
		this.multiplierIndicator.textContent = 'x' + currentStep;
	}
	syncValues(source) {
		let value = 0;
		if (source === 'slider') {
			value = parseFloat(this.rangeInput.value);
			// Update numberInput only if it exists
			if (this.numberInput) {
				this.numberInput.value = value;
			}
		} else if (source === 'number' && this.numberInput) {
			value = parseFloat(this.numberInput.value);
			value = Math.min(value, this.DEFAULT_MAX);
			this.rangeInput.value = value;
		}
	}
	adjustDynamicStep() {
		let value = parseFloat(this.rangeInput.value);
		let currentStep = this.DEFAULT_STEP;
		let zeroCount = 0;
		let tempValue = value;
		while (tempValue % 10 === 0 && tempValue !== 0) {
			zeroCount++;
			tempValue /= 10;
		}
		currentStep = Math.pow(10, zeroCount);
		currentStep = Math.max(this.DEFAULT_STEP, Math.min(this.DEFAULT_MAX, currentStep));
		this.rangeInput.step = currentStep.toString();
		// Update numberInput step only if it exists
		if (this.numberInput) {
			this.numberInput.step = currentStep.toString();
		}
		// Update multiplierIndicator only if it exists
		if (this.multiplierIndicator) {
			this.multiplierIndicator.textContent = 'x' + currentStep;
		}
	}
	hideMultiplier() {
		this.multiplierIndicator.style.display = 'none';
	}
	showMultiplier() {
		this.multiplierIndicator.style.display = 'block';
	}
	tempAdjustStep() {
		this.rangeInput.step = this.DEFAULT_STEP;
	}
	getValue() {
		if (this.numberInput) {
			return parseFloat(this.numberInput.value);
		} else {
			return parseFloat(this.rangeInput.value);
		}
	}
	updateValue(newValue) {
		this.DEFAULT_VALUE = newValue;
		if (this.rangeInput) {
			this.rangeInput.value = this.DEFAULT_VALUE;
		}
		if (this.numberInput) {
			this.numberInput.value = this.DEFAULT_VALUE;
		}
	}
	updateMin(newMin) {
		this.DEFAULT_MIN = newMin;
		if (this.rangeInput) {
			this.rangeInput.setAttribute('min', this.DEFAULT_MIN);
		}
		if (this.numberInput) {
			this.numberInput.setAttribute('min', this.DEFAULT_MIN);
		}
	}
	updateMax(newMax) {
		this.DEFAULT_MAX = newMax;
		if (this.rangeInput) {
			this.rangeInput.setAttribute('max', this.DEFAULT_MAX);
		}
		if (this.numberInput) {
			this.numberInput.setAttribute('max', this.DEFAULT_MAX);
		}
	}
	getCurrentConfig() {
		return {
			min: this.DEFAULT_MIN,
			max: this.DEFAULT_MAX,
			step: this.rangeInput.step,
			defaultValue: this.numberInput.value,
			id: this.container.id,
			title: this.TITLE
		};
	}
	updateConfig(newConfig) {
		if (newConfig.min >= newConfig.max) {
			console.error("Min value should be less than Max value.");
			return;
		}
		if (newConfig.step <= 0 || newConfig.step > newConfig.max) {
			console.error("Invalid Step value.");
			return;
		}
		this.DEFAULT_MIN = newConfig.min || this.DEFAULT_MIN;
		this.DEFAULT_MAX = newConfig.max || this.DEFAULT_MAX;
		this.DEFAULT_STEP = newConfig.step || this.DEFAULT_STEP;
		this.DEFAULT_VALUE = newConfig.defaultValue || this.DEFAULT_VALUE;
		this.TITLE = newConfig.title || this.TITLE;
		if (newConfig.id) {
			this.container = document.getElementById(newConfig.id);
		}
		this.render();
	}
}
class Inputs {
	constructor(listOfGraphs) {
		this.selectedExpressions = {};
		this.runcalc = new RunCalc(this.selectedExpressions, listOfGraphs);
		this.loadingBarId = 'loadingIndicator'; // ID for the loading bar element
	}
	showLoadingIndicator() {
		let loadingBar = document.getElementById(this.loadingBarId);
		if (!loadingBar) {
			loadingBar = document.createElement('div');
			loadingBar.className = 'w-full absolute h-2 p-2 bg-gradient-to-r from-violet-700 via-blue-500 to-purple-500 to-violet-100 animate-pulse';
			loadingBar.id = this.loadingBarId;
			const sideInputsContent = document.getElementById('mainContainer');
			if (sideInputsContent) {
				sideInputsContent.prepend(loadingBar); // Append the loading bar
			}
		}
	}

	hideLoadingIndicator() {
		const loadingBar = document.getElementById(this.loadingBarId);
		if (loadingBar) {
			loadingBar.remove();
		}
	}
	createComponent(titleMsg, name) {
		return `<div id="developers-credits" class="mb-8 flex flex-row sm:flex-row items-center backdrop-blur-md bg-violet-100 text-xs sm:text-sm border-2 border-violet-500 rounded-lg py-2 px-6 m-2 text-violet-800">
      <span class="mr-4 order-last sm:order-first text-sm sm:text-xs md:text-sm hidden lg:block">Created by:</span>
      <span class="inline-block align-middle relative group order-first sm:order-last">
        <a href="/creators/${name}" class="flex items-center group-hover:underline">
        <img src="https://econ.vision/assets/img/${name}.jpg" alt="${name}" class="rounded-full md:w-8 md:h-8 w-6 h-6 object-contain border-2 border-transparent group-hover:border-violet-500 transition-all duration-300">
        </a>
        <div class="absolute hidden group-hover:block backdrop-blur-sm bg-black/50 text-white whitespace-nowrap md:py-2 md:px-6 px-4 py-1 md:-left-28 -left-12 rounded-md shadow-xl z-10 truncate text-xs md:text-sm">
        <span class="">${titleMsg}</span>
        </div>
      </span>
      </div>`;
	}
	createSubComponent(titleMsg, name) {
		return `<span class="inline-block align-middle relative group order-first sm:order-last">
      <a href="/creators/${name}" class="flex items-center group-hover:underline">
        <img src="https://econ.vision/assets/img/${name}.jpg" alt="${name}" class="rounded-full md:w-8 md:h-8 w-6 h-6 object-contain border-2 border-transparent group-hover:border-violet-500 transition-all duration-300">
      </a>
      <div class="absolute hidden group-hover:block backdrop-blur-sm bg-black/50 text-white whitespace-nowrap md:py-2 md:px-6 px-4 py-1 md:-left-28 -left-12 rounded-md shadow-xl z-10 truncate text-xs md:text-sm">
        <span class="">${titleMsg}</span>
      </div>
      </span>`;
	}
}
class Graphs {
	constructor() {
		this.listOfGraphs = [];
	}
}
class Instructions {
	constructor(selectedExpressions) {
		this.stepNumber = 1;
		this.totalPages = 0;
		this.isLoading = false;
		this.selectedExpressions = selectedExpressions;
		this.originalContents = {}; // Store original contents for each card
		this.startUpdatingContent(); // Start updating content when the object is created
		this.init();
	}
	init() {
		this.hideAllCards();
		window.addEventListener("hashchange", this.handleHashChange.bind(this));
		// Initialize loading spinner (if any)
	}
	finalizeInit() {
		const currentPage = parseInt(window.location.hash.substr(1)) || 1;
		this.navigateToPage(currentPage, false);
		this.initPageClicks();
		this.setActiveStyle(currentPage);
		// Hide loading spinner (if any)
	}
	addInstructionPage(title, content) {
		const processedContent = this.processContent(content);
		this.isLoading = true;
		this.addCard(title, processedContent);
		this.stepNumber++;
		this.addPagination();
		this.initPageClicks();
		this.finalizeInit();
		this.isLoading = false;
		this.originalContents[`card-${this.totalPages}`] = processedContent;
	}
	addCard(title, content) {
		// If isLoading is false, display a brief transition effect
		const mainID = document.getElementById('sideInstructionsContent');
		this.totalPages++;
		const cardId = `card-${this.totalPages}`;
		mainID.insertAdjacentHTML('beforeend', `
      <div id="${cardId}" class="hidden card bg-white shadow-xl rounded-2xl p-2 mb-8">
        <div class="card-header font-semibold text-lg text-white text-center bg-gradient-to-b from-violet-800 to-violet-500 rounded-xl p-2 pl-4 mb-4 shadow-md border-violet-700 border-b-2">
          ${title}
        </div>
        <div class="card-body flex flex-col justify-center items-center p-4">
          <div class="card-content text-violet-900 text-left text-lg md:text-xl">
            ${content}
          </div>
        </div>
      </div>
    `);
		this.addPagination();
	}
	startUpdatingContent() {
		this.updateInterval = setInterval(() => {
			this.updateAllCards();
		}, 1000); // Update every second
	}
	stopUpdatingContent() {
		clearInterval(this.updateInterval);
	}
	processContent(content) {
		// Process \\exp{}
		content = content.replace(/\\exp\{(.*?)\}/g, (match, p1) => {
			return `<math-field read-only class='inline-block card-content relative -mb-2' id='${p1}'></math-field>`;
		});
		// Process %%<latex>%%
		content = content.replace(/%%(.*?)%%/g, (match, p1) => {
			return `<math-field read-only class='inline-block bg-transparent text-black relative -mb-2' static=true id='${p1}'>${p1}</math-field>`;
		});
		// Process \\tip{}
		content = content.replace(/\\tip{"(.*?)"}/g, (match, p1) => {
			return `<div class="bg-violet-600 text-white p-2 md:p-3 lg:p-4 m-2 md:m-3 lg:m-4 rounded-lg flex items-center">
          <span class="text-xl md:text-2xl lg:text-3xl mr-2 md:mr-3 lg:mr-4">
            <i class="fas fa-info-circle"></i>
          </span>
          <div>
            <h3 class="font-medium">Tip</h3>
            <p class="text-sm">${p1}</p>
          </div>
        </div>`;
		});
		// Process \\theory{}
		content = content.replace(/\\theory{"(.*?)","(.*?)"}/g, (match, p1, p2) => {
			const randomSubId = Math.random().toString(36).substring(2); // Generate a random ID
			this.addDelayedEventListener(randomSubId); // Add event listener here
			return `<div class="rounded-lg shadow-lg m-2 md:m-3 lg:m-4 bg-white">
          <div class="flex flex-row justify-between p-2 md:p-3 lg:p-4">
            <h3 class="text-sm md:text-md lg:text-lg font-medium flex items-center">
              <i class="fas fa-lightbulb text-violet-600 mr-2"></i>
              A Note on Theory: ${p1}
            </h3>
            <button id="toggle-${randomSubId}" data-target="body-${randomSubId}" class="toggle-button bg-transparent text-gray-700 hover:text-gray-800 font-medium h-10 aspect-square rounded-full hover:-rotate-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 d-flex align-items-center justify-content-center">
            <i class="fas fa-chevron-left text-sm"></i>
          </button>          
          </div>
          <div id="body-${randomSubId}" data-display="none" class="hidden p-2 md:p-6 bg-violet-600 text-white [&_math-field]:text-white rounded-lg text-sm">
            ${p2}
          </div>
        </div>`;
		});
		return content;
	}
	addDelayedEventListener(randomSubId) {
		setTimeout(function() {
			const toggleElement = document.querySelector("#sideInstructionsContent #toggle-" + randomSubId);
			const bodyElement = document.querySelector("#sideInstructionsContent #body-" + randomSubId);
			toggleElement.addEventListener('click', function() {
				toggleElement.classList.toggle("-rotate-90");
				if (bodyElement.style.display === "none" || bodyElement.style.display === "") {
					bodyElement.style.display = "block";
				} else {
					bodyElement.style.display = "none";
				}
			});
		}, 1000);
	}
	updateAllCards() {
		Object.keys(this.originalContents).forEach(cardId => {
			const cardContent = document.querySelector(`#${cardId} .card-content`);
			if (!cardContent) {
				return;
			}

			cardContent.querySelectorAll('math-field').forEach(field => {
				if (!field.hasAttribute('static')) {
					const id = field.getAttribute('id');
					const expression = this.selectedExpressions[id];
					if (expression) {
						field.value = expression;
					}
				}
			});
		});
	}

	addPagination() {
		const paginationDiv = this.createPaginationDiv();
		this.populatePageNumbers(paginationDiv);
		this.initNavigationButtons();
		this.initPageClicks();
	}
	createPaginationDiv() {
		const sideContent = document.getElementById('sideInstructionsContent');
		const paginationExists = document.querySelector("#pagination");
		if (!paginationExists) {
			const markup = `
        <div class="flex items-center justify-center py-4 lg:px-0 sm:px-6 px-4">
          <div class="w-full flex items-center justify-center space-x-10 border-t border-gray-200">
            <div class="space-x-2 flex items-center pt-2 text-gray-600 hover:text-violet-700 cursor-pointer" id="previousButton">
              <i class="fas fa-arrow-left"></i>
              <p class="text-sm font-medium leading-none ">Previous</p>
            </div>
            <div class="sm:flex hidden" id="pagination"></div>
            <div class="space-x-2 flex items-center pt-2 text-gray-600 hover:text-violet-700 cursor-pointer" id="nextButton">
              <p class="text-sm font-medium leading-none">Next</p>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>`;
			sideContent.insertAdjacentHTML('afterend', markup);
		}
		return document.querySelector("#pagination");
	}
	populatePageNumbers(paginationDiv) {
		let pageNumbers = '';
		for (let i = 1; i <= this.totalPages; i++) {
			pageNumbers += `<p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-violet-700 border-t border-transparent hover:border-violet-400 pt-3 mr-4 px-2" data-page="${i}">${i}</p>`;
		}
		paginationDiv.innerHTML = pageNumbers;
	}
	initNavigationButtons() {
		const previousButton = document.getElementById('previousButton');
		const nextButton = document.getElementById('nextButton');
		previousButton.removeEventListener('click', this.prevClickListener);
		nextButton.removeEventListener('click', this.nextClickListener);
		this.prevClickListener = () => this.navigate(-1);
		this.nextClickListener = () => this.navigate(1);
		previousButton.addEventListener('click', this.prevClickListener);
		nextButton.addEventListener('click', this.nextClickListener);
	}
	initPageClicks() {
		document.querySelectorAll('#pagination p').forEach(element => {
			element.addEventListener('click', () => {
				const selectedPage = parseInt(element.getAttribute('data-page'));
				this.navigateToPage(selectedPage);
			});
		});
	}
	handleHashChange() {
		let currentPage = parseInt(window.location.hash.substr(1)) || 1;
		this.navigateToPage(currentPage, false);
	}
	navigate(step) {
		let currentPage = parseInt(window.location.hash.substr(1)) || 1;
		let targetPage = currentPage + step;
		if (targetPage < 1) targetPage = 1;
		if (targetPage > this.totalPages) targetPage = this.totalPages;
		this.navigateToPage(targetPage);
	}
	navigateToPage(pageNumber, updateHash = true) {
		if (updateHash) {
			this.updateHash(pageNumber);
		}
		this.hideAllCards();
		this.setActiveStyle(pageNumber);
		this.displayCard(pageNumber);
	}
	updateHash(newHash) {
		window.location.hash = newHash;
	}
	hideAllCards() {
		document.querySelectorAll('.card').forEach(card => {
			card.style.display = 'none';
		});
	}
	setActiveStyle(pageNumber) {
		this.clearActiveStyles();
		const activeElement = document.querySelector(`#pagination p[data-page="${pageNumber}"]`);
		if (activeElement) {
			activeElement.classList.add('border-violet-400', 'text-violet-700');
		}
	}
	clearActiveStyles() {
		document.querySelectorAll('#pagination p').forEach(element => {
			element.classList.remove('border-violet-400', 'text-violet-700');
		});
	}
	displayCard(pageNumber) {
		const cardToShow = document.getElementById(`card-${pageNumber}`);
		if (cardToShow) {
			cardToShow.style.display = 'block';
		}
	}
}
class Developer {
	constructor(selectedExpressions) {
		this.selectedExpressions = selectedExpressions;
		this.createDeveloperElement();
		this.monacoEditor;
	}
	updateDeveloperElement(selectedExpressions) {
		let str = JSON.stringify(selectedExpressions, undefined, 4);
		let model = this.monacoEditor.getModel();
		let oldFullRange = model.getFullModelRange();
		let edits = [{
			range: oldFullRange,
			text: str
		}];
		model.pushEditOperations([], edits, () => null);
	}
	createDeveloperElement() {
		const editorElement = document.createElement('div');
		editorElement.id = 'monaco-editor';
		editorElement.style.height = '400px';
		document.body.appendChild(editorElement);
		require.config({
			paths: {
				'vs': '/static/monaco-editor/min/vs'
			}
		});
		require(['vs/editor/editor.main'], () => {
			this.monacoEditor = monaco.editor.create(editorElement, {
				value: JSON.stringify(this.selectedExpressions, undefined, 4),
				language: 'json',
				readOnly: true,
				theme: 'vs-dark'
			});
		});
	}
}
class View {
	constructor(appID) {
		this.appID = appID;
		this.addStyles();
		this.createHTMLElements();
		this.graphs = new Graphs();
		this.inputs = new Inputs(this.graphs.listOfGraphs);
		this.instructions = new Instructions(this.inputs.selectedExpressions);
		this.toggleInstructions();
		this.toggleFullScreen();
		this.toggleButtonTextOnScroll();
		this.toggleScreens();
	}
	addStyles() {
		const style = document.createElement('style');
		style.textContent = `
		#sideInputsContent, #sideInstructionsContent {
			--scrollbar-color-track: transparent;
			--scrollbar-color-thumb: #8b5cf6;
			scrollbar-color: var(--scrollbar-color-thumb) var(--scrollbar-color-track);
			scrollbar-width: thin;

			/* For Safari */
			*::-webkit-scrollbar {
				width: 8px;
			}

			*::-webkit-scrollbar-track {
				background: var(--scrollbar-color-track);
			}

			*::-webkit-scrollbar-thumb {
				background-color: var(--scrollbar-color-thumb);
				border-radius: 20px;
				border: 3px solid var(--scrollbar-color-track);
			}
			/* Styling the scrollbar in Chrome and Safari */

			*::-webkit-scrollbar {
				width: 0; /* for Chrome, Safari, and Opera */
			}

			*::-webkit-scrollbar-thumb {
			background-color: #8b5cf6; /* Set thumb color for Chrome and Safari */
			}

			*::-webkit-scrollbar-track {
			background-color: transparent; /* Set track color for Chrome and Safari */
			}

		}
    

        `;
		document.head.appendChild(style);
	}
	createHTMLElements() {
		// Combine existing HTML and footer HTML
		const combinedHtmlString = `
          <div class="wrapper relative font-sans min-h-screen">
            <div id="mainContainer" class="relative min-h-screen w-full">
              <div class="grid grid-cols-12 gap-3 p-4">
                <div class="md:col-span-4 lg:col-span-3 col-span-12 rounded-md overflow-y-auto pb-8" id="sideInputsContent">
                  <div id="creatorsContent" class="sticky top-0 col-span-12 md:col-span-3 z-40"></div>
                </div>
                <div class="md:col-span-8 lg:col-span-9 col-span-12 text-left d-inline shadow-2xl rounded-md">
					<div class="flex" id="graphsContent"></div>
				</div>
                <div style="display:none;" class="md:fixed relative top-0 right-0 z-40 backdrop-blur-lg bg-violet-100/50 md:h-full md:w-full cursor-pointer" id="dark-screen"></div>
                <dialog style="display:none;" class="col-span-12 rounded-lg md:absolute md:overflow-y-auto relative md:inset-0 w-full md:w-3/4 lg:w-1/2 md:h-fit shadow-[0_0px_16px_-6px_rgba(0,0,0,0.9)] px-10 py-2 md:backdrop-blur-md md:bg-white/50 z-50 flex flex-col items-center justify-around" id="offcanvasPanel">
				<button id="integrate-mode" class="group md:block hidden absolute right-0 bottom-0 transform px-4 py-2 bg-violet-600 hover:bg-violet-900 text-white text-center rounded-ee-lg rounded-ss-lg">
				<i class="fas fa-hand-point-down group-hover:animate-bounce"></i>				
				</button>
				<div class="md:m-auto w-full"> <!-- This div centers the content vertically on medium screens -->
                  <button class="float-right absolute top-0 right-0 m-4 hidden md:block" id="exit-button-offcanvas"><i class="fa fa-times text-black"></i></button>
                  <div id="sideInstructionsContent" class="mt-0 overflow-y-auto flex flex-row [&_div]:w-full"></div>
                </div>
                <button id="openReportModal" class="self-start bg-red-500 text-white font-bold text-xs py-1 px-2 rounded group inline-flex items-center">
                <i class="fas fa-shield-alt text-xs mr-1 transition-transform duration-200 group-hover:translate-x-1"></i>
                <span class="transition-transform duration-200 group-hover:translate-x-1">Report</span>
              </button>
              </dialog>
              </div>
            </div>
          </div>
      <footer class="fixed bg-white bottom-0 z-50 w-full h-24 transform translate-y-full">
          <div id="fullscreenControl" class="-translate-y-28 flex items-center absolute w-64 text-center gap-2 m-2 cursor-pointer text-sm md:text-md z-20">
            <button id="fullscreenButton" style="padding:10px;width:50%;" class="shadow-lg rounded-md bg-violet-900 hover:bg-violet-500 text-white active:bg-violet-300 shadow-lg flex items-center justify-center"><i class="fas fa-expand"></i><p class="pl-2">Full Screen</p></button>
            <button id="helpButton" style="padding:10px;;width:50%;" class="shadow-lg md:flex hidden rounded-md bg-violet-900 hover:bg-violet-500 text-white active:bg-violet-300 shadow-lg items-center justify-center"><i class="fas fa-question-circle"></i><p class="pl-2">Help</p></button>
          </div>
          <div id="mobileControls" class="-translate-y-24 w-full bottom-0 m-0 z-10 absolute block md:hidden">
            <div class="relative flex items-end text-center gap-2 cursor-pointer gap-1 bg-white/80 rounded-lg">
              <button id="inputButtonMobile" class="p-4 rounded-t-md w-1/3 backdrop-blur-sm bg-violet-400 active:bg-violet-500 hover:bg-violet-400 active:text-white shadow-[1px_5px_20px_-6px_rgba(0,0,0,0.9)] flex items-center justify-center transition duration-500 ease-in-out transform"><i class="fas fa-square-root-alt pr-2"></i><p>Input</p></button>
              <button id="graphButtonMobile" class="p-4 rounded-t-md w-1/3 backdrop-blur-sm active:bg-violet-500 hover:bg-violet-400 active:text-white shadow-[1px_5px_20px_-6px_rgba(0,0,0,0.9)] flex items-center justify-center transition duration-500 ease-in-out transform"><i class="fas fa-chart-line pr-2"></i><p>Graph</p></button>
              <button id="helpButtonMobile" class="p-4 rounded-t-md w-1/3 backdrop-blur-sm active:bg-violet-500 hover:bg-violet-400 active:text-white shadow-[1px_5px_20px_-6px_rgba(0,0,0,0.9)] flex items-center justify-center transition duration-500 ease-in-out transform"><i class="fas fa-question-circle pr-2"></i><p>Help</p></button>
            </div>
          </div>
        </footer>
        `;


		let appIDElement = document.getElementById(this.appID);
		appIDElement.innerHTML += combinedHtmlString;
		const openModalButton = document.getElementById('openReportModal');
		const sideInstructionsContent = document.getElementById('sideInstructionsContent');
		openModalButton.addEventListener('click', () => {
			// Create a new div element for the iframe
			let newDiv = document.createElement("div");
			newDiv.innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdA_UK6abG40jqzrj3_uc_GBXhC5gBLFWL4mq0kdUJnsBBgJw/viewform?embedded=true" class="w-full h-full" style="height:500px;" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
			// Toggle the visibility of the original content and the button text/icon
			if (sideInstructionsContent.style.display === "none") {
				sideInstructionsContent.style.display = "block";
				if (sideInstructionsContent.nextSibling) {
					sideInstructionsContent.nextSibling.remove(); // Remove the iframe
				}
				openModalButton.innerHTML = '<i class="fas fa-shield-alt text-xs mr-1 transition-transform duration-200 group-hover:translate-x-1"></i><span class="transition-transform duration-200 group-hover:translate-x-1">Report</span>'; // Change the button text/icon back to "Report"
			} else {
				sideInstructionsContent.style.display = "none";
				sideInstructionsContent.parentNode.insertBefore(newDiv, sideInstructionsContent.nextSibling); // Insert the iframe after sideInstructionsContent
				openModalButton.innerHTML = '<i class="fas fa-times text-xs mr-1 transition-transform duration-200 group-hover:translate-x-1"></i><span class="transition-transform duration-200 group-hover:translate-x-1">Exit</span>'; // Change the button text/icon to "Exit"
			}
		});

		document.getElementById('integrate-mode').addEventListener('click', function() {
			var offcanvasPanel = document.getElementById('offcanvasPanel');
			var darkscreen = document.getElementById('dark-screen');

			offcanvasPanel.classList.toggle('md:absolute');
			offcanvasPanel.classList.toggle('md:w-3/4');
			offcanvasPanel.classList.toggle('lg:w-1/2');
			darkscreen.classList.toggle('md:fixed');

			var icon = this.querySelector('i');
			if (icon.classList.contains('fa-hand-point-down')) {
				icon.classList.remove('fa-hand-point-down');
				icon.classList.add('fa-hand-point-up');
				window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});				
			} else {
				icon.classList.remove('fa-hand-point-up');
				icon.classList.add('fa-hand-point-down');
				window.scrollTo({top: 0, behavior: 'smooth'});
			}
		});
	}
	toggleInstructions() {
		const helpButton = document.getElementById('helpButton');
		const instructions = document.getElementById('offcanvasPanel');
		const darkscreen = document.getElementById('dark-screen');
		const exitbuttonoffcanvas = document.getElementById('exit-button-offcanvas');
		helpButton.addEventListener('click', () => {
			instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
			darkscreen.style.display = darkscreen.style.display === 'none' ? 'block' : 'none';
		});
		darkscreen.addEventListener('click', () => {
			instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
			darkscreen.style.display = darkscreen.style.display === 'none' ? 'block' : 'none';
		});
		exitbuttonoffcanvas.addEventListener('click', () => {
			instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
			darkscreen.style.display = darkscreen.style.display === 'none' ? 'block' : 'none';
		});
	}
	toggleFullScreen() {
		const fullscreenButton = document.getElementById('fullscreenButton');
		const updateButtonContent = () => {
			if (document.fullscreenElement) {
				fullscreenButton.innerHTML = '<i class="fas fa-compress pr-4"></i><p>Exit</p>';
			} else {
				fullscreenButton.innerHTML = '<i class="fas fa-expand pr-4"></i><p>Full Screen</p>';
			}
		};
		fullscreenButton.addEventListener('click', () => {
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
			updateButtonContent();
		});
		document.addEventListener('fullscreenchange', updateButtonContent);
	}
	toggleButtonTextOnScroll() {
		let lastScrollTop = 0;
		window.addEventListener('scroll', () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const fullscreenButton = document.getElementById('fullscreenButton');
			const helpButton = document.getElementById('helpButton');
			const fullscreenButtonText = document.querySelector('#fullscreenButton p');
			const helpButtonText = document.querySelector('#helpButton p');
			if (scrollTop > lastScrollTop + 10) {
				// Downscroll, hide text and reduce button width
				fullscreenButtonText.style.transform = 'translateX(-100%)';
				helpButtonText.style.transform = 'translateX(-100%)';
				fullscreenButtonText.style.display = 'none';
				helpButtonText.style.display = 'none';
				fullscreenButton.style.width = '36px'; // Adjust as needed
				helpButton.style.width = '36px'; // Adjust as needed
				fullscreenButton.style.height = '36px'; // Adjust as needed
				helpButton.style.height = '36px'; // Adjust as needed
			} else if (scrollTop < lastScrollTop - 5) {
				// Upscroll, show text and increase button width
				fullscreenButton.style.width = '50%'; // Adjust as needed
				helpButton.style.width = '50%'; // Adjust as needed
				fullscreenButtonText.style.display = 'block';
				helpButtonText.style.display = 'block';
				fullscreenButtonText.style.transform = 'translateX(0)';
				helpButtonText.style.transform = 'translateX(0)';
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
			// Add transition effect with cubic-bezier timing function for smoothness
			fullscreenButton.style.transition = 'width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
			helpButton.style.transition = 'width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
			fullscreenButtonText.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
			helpButtonText.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
		}, false);
	}
	toggleScreens() {
		const inputButtonMobile = document.getElementById('inputButtonMobile');
		const graphButtonMobile = document.getElementById('graphButtonMobile');
		const helpButtonMobile = document.getElementById('helpButtonMobile');
		const sideInputsContent = document.getElementById('sideInputsContent');
		const graphsContent = document.getElementById('graphsContent');
		const offcanvasPanel = document.getElementById('offcanvasPanel');
		const darkscreen = document.getElementById('dark-screen');
		// Function to remove active class from all buttons
		const removeActiveClass = () => {
			inputButtonMobile.classList.remove('bg-violet-400');
			graphButtonMobile.classList.remove('bg-violet-400');
			helpButtonMobile.classList.remove('bg-violet-400');
		};
		inputButtonMobile.addEventListener('click', () => {
			sideInputsContent.style.display = 'block';
			graphsContent.style.display = 'none';
			offcanvasPanel.style.display = 'none';
			removeActiveClass();
			inputButtonMobile.classList.add('bg-violet-400'); // Add active class to clicked button
		});
		graphButtonMobile.addEventListener('click', () => {
			sideInputsContent.style.display = 'none';
			graphsContent.style.display = 'block';
			offcanvasPanel.style.display = 'none';
			removeActiveClass();
			graphButtonMobile.classList.add('bg-violet-400'); // Add active class to clicked button
		});
		helpButtonMobile.addEventListener('click', () => {
			sideInputsContent.style.display = 'none';
			graphsContent.style.display = 'none';
			offcanvasPanel.style.display = 'block';
			removeActiveClass();
			helpButtonMobile.classList.add('bg-violet-400'); // Add active class to clicked button
		});
		// Window resize event listener
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) { // Adjust as needed for your "medium" breakpoint
				sideInputsContent.style.display = 'block';
				graphsContent.style.display = 'block';
				if (offcanvasPanel.style.display === 'block') {
					darkscreen.style.display = 'block';
				}
				removeActiveClass();
			}
		});
	}
}
class EconVision {
	constructor(isDeveloper = false, appID = "myCalculator") {
		this.view = new View(appID);
		this.runcalc = this.view.inputs.runcalc; //load all runcalc
		this.creatorNumber = 0;
		this.debounceTimers = {}; // Object to hold debounce timers for each idDiv
		this.queue = {};
		this.selectInputCount = {};
		this.addSelectInputData = {};
		this.inThrottle = false;
		this.inputToExpressionsMap = [];
		this.totalFunctions = 0;
		if (isDeveloper) {
			this.developer = new Developer(this.view.inputs.selectedExpressions);
			setInterval(() => {
				this.developer.updateDeveloperElement(this.view.inputs.selectedExpressions);
			}, 1000);
		}
	}
	setGraphs(listSettings) {
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let engine = listSettings.hasOwnProperty("engine") ? listSettings["engine"] : "desmos";
		let copy = listSettings.hasOwnProperty("copy") ? listSettings["copy"] : false;
		let idDiv = listSettings.idDiv;
		let height = listSettings.hasOwnProperty("height") ? listSettings["height"] : "650px";
		let width = listSettings.hasOwnProperty("width") ? listSettings["width"] : "100";
		width = Math.ceil(parseInt(width) * 12 / 100);
		let graphsContent = document.getElementById("graphsContent");

		// Set graphsContent to be a flex container
		graphsContent.style.display = "flex";

		let newDiv = document.createElement("div");
		newDiv.id = idDiv;

		// Set the flex property based on the width
		newDiv.style.flex = width == 12 ? "1" : "0 0 50%";

		graphsContent.appendChild(newDiv);
		let divElement = document.getElementById(idDiv);
		divElement.style.height = height;
		let sideInputsContent = document.getElementById("sideInputsContent");
		sideInputsContent.style.height = height;
		if (engine == "desmos") { //desmos
			let elt = document.getElementById(idDiv);
			let calculator = Desmos.GraphingCalculator(elt);
			listOfGraphs.push(calculator);
			calculator.setMathBounds({
				left: parseInt(listSettings["left"]),
				right: parseInt(listSettings["right"]),
				bottom: parseInt(listSettings["bottom"]),
				top: parseInt(listSettings["top"])
			});
			calculator.updateSettings({
				showGrid: listSettings["showGrid"] || false,
				expressions: listSettings["expressions"] || false,
				keypad: listSettings["keypad"] || false,
				zoomFit: listSettings["zoomFit"] || false,
				settingsMenu: listSettings["settingsMenu"] || false,
				showXAxis: listSettings["showXAxis"] || false,
				showYAxis: listSettings["showYAxis"] || false,
				xAxisLabel: listSettings["xAxisLabel"] || "x",
				yAxisLabel: listSettings["yAxisLabel"] || "y"
			});
			if (copy) {
				let screenshotFeature = document.createElement('div');
				screenshotFeature.className = `${idDiv} screenshot-feature absolute -mt-[87px] ml-[5px] z-[40] flex h-[80px] w-[36px] flex-col items-center`;
				let btnDownload = document.createElement('button');
				btnDownload.title = "Download PNG";
				btnDownload.className = "w-full h-[40px] rounded-md border border-gray-200 bg-[#ededed] shadow-lg py-2 px-2 text-center font-semibold text-gray-700";
				btnDownload.innerHTML = '<i class="fas fa-file-image"></i>';
				screenshotFeature.appendChild(btnDownload);
				let btnCopy = document.createElement('button');
				btnCopy.title = "Copy to clipboard";
				btnCopy.className = "w-full h-[40px] rounded-b-md border border-gray-200 bg-[#ededed] shadow-lg py-2 px-2 text-center font-semibold text-gray-700";
				btnCopy.innerHTML = '<i class="fas fa-copy"></i>';
				screenshotFeature.appendChild(btnCopy);
				elt.appendChild(screenshotFeature);
				btnDownload.addEventListener('click', function() {
					downloadImage(screenshotFeature.parentElement.offsetWidth);
				});
				btnCopy.addEventListener('click', function() {
					copyImage(screenshotFeature.parentElement.offsetWidth);
				});

				function downloadImage(w) {
					function takeScreenshot(opts) {
						calculator.asyncScreenshot(opts, function(data) {
							let link = document.createElement("a");
							link.setAttribute("download", idDiv + ".png");
							link.setAttribute("href", data);
							link.click();
						});
					}
					let opts = {
						mode: 'stretch',
						width: w,
						height: Number(height.replace(/[^0-9.-]+/g, '')),
						showLabels: true,
						targetPixelRatio: 2
					};
					takeScreenshot(opts);
				}
				async function copyImage(w) {
					function takeScreenshot(opts) {
						calculator.asyncScreenshot(opts, async function(data) {
							let imgEl = document.createElement("img");
							imgEl.src = data;
							const dataSrc = await fetch(imgEl.src);
							const blob = await dataSrc.blob();
							try {
								await navigator.clipboard.write([
									new ClipboardItem({
										[blob.type]: blob
									})
								]);
								let copiedPopup = document.createElement("div");
								copiedPopup.className = "fixed inset-0 flex items-center justify-center";
								let copiedMessage = document.createElement("div");
								copiedMessage.className = "bg-green-500 text-white p-2 rounded-lg text-center shadow-lg p-[2rem]";
								copiedMessage.innerText = "Copied!";
								let copiedIcon = document.createElement("i");
								copiedIcon.className = "fas fa-check-circle ml-2";
								copiedMessage.appendChild(copiedIcon);
								copiedPopup.appendChild(copiedMessage);
								document.body.appendChild(copiedPopup);
								setTimeout(function() {
									copiedPopup.style.display = "none";
								}, 1000);
							} catch (e) {
								let copiedPopup = document.createElement("div");
								copiedPopup.className = "fixed inset-0 flex items-center justify-center";
								let copiedMessage = document.createElement("div");
								copiedMessage.className = "bg-red-500 text-white p-2 rounded-lg text-center shadow-lg p-[2rem]";
								copiedMessage.innerText = "Failed!";
								let copiedIcon = document.createElement("i");
								copiedIcon.className = "fas fa-times-circle ml-2";
								copiedMessage.appendChild(copiedIcon);
								copiedPopup.appendChild(copiedMessage);
								document.body.appendChild(copiedPopup);
								setTimeout(function() {
									copiedPopup.style.display = "none";
								}, 1000);
							}
						});
					}
					let opts = {
						mode: 'stretch',
						width: w,
						height: Number(height.replace(/[^0-9.-]+/g, '')),
						showLabels: true,
						targetPixelRatio: 2
					};
					takeScreenshot(opts);
				}
			}
		}
	}
	setBounds(options) {
		let tolerance = (("tolerance" in options) ? options["tolerance"] : 1.1);
		let mtolerance = (("mtolerance" in options) ? options["mtolerance"] : 1.2);
		let top = (("top" in options) ? options["top"] : "0");
		let bottom = (("bottom" in options) ? options["bottom"] : "0");
		let left = (("left" in options) ? options["left"] : "0");
		let right = (("right" in options) ? options["right"] : "0");
		let listGraphs = options["listGraphs"];
		let listOfGraphs = this.view.graphs.listOfGraphs;

		function getQuadrant(top, bottom, left, right) {
			if (bottom === "0" && left === "0") {
				return 2;
			} else if (bottom === "0" && right === "0") {
				return 1;
			} else if (top === "0" && left === "0") {
				return 4;
			} else if (top === "0" && right === "0") {
				return 3;
			} else {
				return -1;
			}
		}
		listGraphs.forEach(function(i) {
			var t = listOfGraphs[i].HelperExpression({
				latex: top
			});
			var b = listOfGraphs[i].HelperExpression({
				latex: bottom
			});
			var l = listOfGraphs[i].HelperExpression({
				latex: left
			});
			var r = listOfGraphs[i].HelperExpression({
				latex: right
			});
			var quadrant = getQuadrant(top, bottom, left, right);
			if (quadrant === 2 || quadrant === 4) {
				t.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': parseInt(r.numericValue) * (1 - mtolerance) / 2,
						'right': parseInt(r.numericValue) * tolerance,
						'bottom': parseInt(t.numericValue) * (1 - mtolerance) / 2,
						'top': parseInt(t.numericValue) * tolerance
					});
				});
				r.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': parseInt(r.numericValue) * (1 - mtolerance) / 2,
						'right': parseInt(r.numericValue) * tolerance,
						'bottom': parseInt(t.numericValue) * (1 - mtolerance) / 2,
						'top': parseInt(t.numericValue) * tolerance
					});
				});
			}
			if (quadrant === 1 || quadrant === 3) {
				t.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': -parseInt(l.numericValue) * tolerance,
						'right': parseInt(l.numericValue) * (1 - mtolerance) / 2,
						'bottom': parseInt(t.numericValue) * (1 - mtolerance) / 2,
						'top': parseInt(t.numericValue) * tolerance
					});
				});
				l.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': -parseInt(l.numericValue) * tolerance,
						'right': parseInt(l.numericValue) * (1 - mtolerance) / 2,
						'bottom': -parseInt(b.numericValue) * tolerance,
						'top': parseInt(b.numericValue) * (1 - mtolerance) / 2
					});
				});
			}
		});
	}
	addSliderInput(options) {
		// Extract options parameters
		const {
			idDiv,
			title,
			latex,
			min,
			max,
			step,
			multiVisibility,
			defaultValue,
			listGraphs,
			simpleMode = false,
			legendText
		} = options;
		const listOfGraphs = this.view.graphs.listOfGraphs;

		// Create a new div in the sideInputsContent element
		const sideInputsContent = document.getElementById("sideInputsContent");
		if (!sideInputsContent) {
			return;
		}

		const newDiv = document.createElement("div");
		newDiv.id = idDiv;
		sideInputsContent.appendChild(newDiv);

		// Create a new SliderComponent with the provided options
		const sliderConfig = {
			min,
			max,
			step,
			multiVisibility,
			defaultValue,
			id: idDiv,
			title,
			latex,
			listGraphs,
			listOfGraphs,
			selectedExp: this.view.inputs.selectedExpressions,
			simpleMode,
			legendText
		};

		const sliderComponent = new SliderComponent(sliderConfig);

		sliderComponent.init().then(() => {
			// Log success or perform other actions if needed
		}).catch(error => {
			console.error("Error initializing SliderComponent:", error);
		});
	}

	setValue(options) {
		let idDiv = options.idDiv;
		let latex = options.latex;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		let decimal = (("decimal" in options) ? options.decimal : 0);
		listGraphs.forEach(function(i) {
			var x = listOfGraphs[i].HelperExpression({
				latex: latex
			});
			x.observe('numericValue', function() {
				selectedExp[idDiv] = x.numericValue.toFixed(decimal);
			});
		});
	}

	debounce(idDiv, func) {
		// If the queue for this idDiv doesn't exist, create it
		this.queue[idDiv] = this.queue[idDiv] || [];

		// Push the function into the queue only if it's empty
		if (this.queue[idDiv].length === 0) {
			this.queue[idDiv].push(func.bind(this));
		}

		// If the debounce timer for this idDiv doesn't exist, create it
		this.debounceTimers[idDiv] = this.debounceTimers[idDiv] || {
			timer: null,
			status: false,
			timeout: 1000  // Add a new property to store the current timeout value
		};

		// Clear the existing timer
		clearTimeout(this.debounceTimers[idDiv].timer);

		// Set a new timer
		this.debounceTimers[idDiv].timer = setTimeout(() => {
			// Execute the first function in the queue
			if (this.queue[idDiv].length > 0) {
				// Update the status property to true
				this.debounceTimers[idDiv].status = true;
				let func = this.queue[idDiv].shift();
				func();
			}

			// After the function is executed, update the timeout value
			this.debounceTimers[idDiv].timeout = 100;
		}, this.debounceTimers[idDiv].timeout);  // Use the current timeout value
	}


	addExpression(options) {
		let idDiv = options.idDiv;
		let calc = options.calc;
		let latex = options.latex;
		let parentIdDiv = options.parentIdDiv;
		let compute = options.compute;
		let NewfunEqu = options.NewfunEqu;
		let constraint = options.constraint;
		let solveFor = (("solveFor" in options) ? options["solveFor"] : 0);
		let subWith = (("subWith" in options) ? options["subWith"] : 0);
		let FOCmax = (("FOCmax" in options) ? options["FOCmax"] : false);
		let color = (("color" in options) ? options["color"] : "black");
		let style = (("style" in options) ? options["style"] : "normal");
		let hidden = (("hidden" in options) ? options["hidden"] : false);
		let min = (("min" in options) ? options["min"] : "0");
		let max = (("max" in options) ? options["max"] : "100");
		let step = (("step" in options) ? options["step"] : "1");
		let lineStyle = (("lineStyle" in options) ? options["lineStyle"] : Desmos.Styles.SOLID);
		let lineWidth = (("lineWidth" in options) ? options["lineWidth"] : "2.5");
		let lineOpacity = (("lineOpacity" in options) ? options["lineOpacity"] : "0.9");
		let listGraphs = options.listGraphs;
		let lastSum = options.lastSum;
		lastSum = "";
		let lastSub = options.lastSub;
		lastSub = "";
		let derivedValue = "";
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		let self = this;
		let parms = {};

		function runDesmos() {
			listGraphs.forEach(function(i) {
				listOfGraphs[i].setExpression({
					"id": idDiv,
					"type": "expression",
					"latex": latex,
					"hidden": hidden,
					"color": generateColorShades(color),
					"lineStyle": lineStyle,
					"lineWidth": lineWidth,
					"lineOpacity": lineOpacity,
					"sliderBounds": {
						min: min,
						max: max,
						step: step
					}
				});
			});
		}

		function addExpressionAfterLoad() {
			if (calc === undefined) {
				selectedExp[idDiv] = latex;
				runDesmos();
			} else {
				this.debounce(idDiv, () => {
					try {
						switch (calc) {
							case 'simpleCompute':
								parms['compute'] = compute;
								parms['NewfunEqu'] = NewfunEqu;
								latex = this.runcalc.simpleCompute(parms);
								break;
							case 'simpleDerive':
								parms['parentIdDiv'] = parentIdDiv;
								parms['NewfunEqu'] = NewfunEqu;
								parms['solveFor'] = solveFor;
								latex = this.runcalc.simpleDerive(parms);
								break;
							case 'simpleInverse':
								parms['parentIdDiv'] = parentIdDiv;
								parms['NewfunEqu'] = NewfunEqu;
								parms['solveFor'] = solveFor;
								latex = this.runcalc.simpleInverse(parms);
								break;
							case 'simpleFOC':
								parms['parentIdDiv'] = parentIdDiv;
								parms['NewfunEqu'] = NewfunEqu;
								parms['solveFor'] = solveFor;
								parms['FOCmax'] = FOCmax;
								latex = this.runcalc.simpleFOC(parms);
								break;
							case 'simpleLag':
								parms['idDiv'] = idDiv;
								parms['parentIdDiv'] = parentIdDiv;
								parms['constraint'] = constraint;
								parms['FOCmax'] = FOCmax;
								parms['NewfunEqu'] = NewfunEqu;
								parms['listGraphs'] = listGraphs;
								latex = this.runcalc.simpleLag(parms);
								break;
							case 'simpleSubstitute':
								parms['parentIdDiv'] = parentIdDiv;
								parms['NewfunEqu'] = NewfunEqu;
								latex = this.runcalc.simpleSubstitute(parms);
								break;
							case 'simpleMarshalian':
								parms['idDiv'] = idDiv;
								parms['parentIdDiv'] = parentIdDiv;
								parms['constraint'] = constraint;
								parms['NewfunEqu'] = NewfunEqu;
								parms['listGraphs'] = listGraphs;
								latex = this.runcalc.simpleMarshalian(parms);
								break;
							case 'advanceSubstitute':
								parms['parentIdDiv'] = parentIdDiv;
								parms['NewfunEqu'] = NewfunEqu;
								parms['subWith'] = subWith;
								latex = this.runcalc.advanceSubstitute(parms);
								break;
							default:
								throw new Error(`Invalid calculation type: ${calc}`);
						}
					} catch (error) {
						// console.error(error);
						this.addExpression.apply(this, [options]);
					} finally {
						selectedExp[idDiv] = latex;
						runDesmos();

						let sideInputsContent = document.getElementById('sideInputsContent');
						let mathFields = sideInputsContent.querySelectorAll('math-field');
						let rangeInputs = sideInputsContent.querySelectorAll('input[type=range]');

				let addInputEventListenerFunc = (element) => {
					let eventListenerFunc = () => {
						this.addExpression.apply(this, [options]);
					};
					element.removeEventListener('input', eventListenerFunc);
					element.addEventListener('input', eventListenerFunc);
				};

				let addChangeAndInputEventListenerFunc = (element) => {
					let eventListenerFunc = () => {
						this.addExpression.apply(this, [options]);
					};
					// Remove previous event listeners
					element.removeEventListener('change', eventListenerFunc);
					element.removeEventListener('input', eventListenerFunc);
					// Add new event listeners
					element.addEventListener('change', eventListenerFunc);
					element.addEventListener('input', eventListenerFunc);
				};


				mathFields.forEach(addInputEventListenerFunc);
				rangeInputs.forEach(addChangeAndInputEventListenerFunc);




						this.debounceTimers[idDiv].status = false;


					}
				});
			}
		}
		if (document.readyState === 'loading') {  // If document is still loading
			document.addEventListener('DOMContentLoaded', addExpressionAfterLoad.bind(this));  // Bind this to the function
		} else {  // Document is already loaded
			addExpressionAfterLoad.call(this);  // Call the function with this bound to it
		}
	}
	addDynamicExp(options) {
		let idDiv = options.idDiv;
		let calc = options.calc;
		let parentIdDiv = options.parentIdDiv;
		let compute = options.compute;
		let NewfunEqu = options.NewfunEqu;
		let constraint = options.constraint;
		let label = options.label;
		let labelSubScript = this.labelSubScript;
		let pointSize = (("pointSize" in options) ? options["pointSize"] : "10");
		let pointStyle = (("pointStyle" in options) ? options["pointStyle"] : Desmos.Styles.POINT);
		let lines = (("lines" in options) ? options["lines"] : true);
		let showLabel = (("showLabel" in options) ? options["showLabel"] : true);
		let dragMode = (("dragMode" in options) ? options["dragMode"] : Desmos.DragModes.NONE);
		let labelOrientation = (("labelOrientation" in options) ? options["labelOrientation"] : Desmos.LabelOrientations.DEFAULT);
		let sticky = (("sticky" in options) ? options["sticky"] : false);
		let objective = options.objective;
		let lhs = options.lhs;
		let rhs = options.rhs;
		let FOCmax = (("FOCmax" in options) ? options["FOCmax"] : false);
		let color = (("color" in options) ? options["color"] : "black");
		let style = (("style" in options) ? options["style"] : "normal");
		let hidden = (("hidden" in options) ? options["hidden"] : false);
		let min = (("min" in options) ? options["min"] : "0");
		let max = (("max" in options) ? options["max"] : "100");
		let step = (("step" in options) ? options["step"] : "1");
		let lineStyle = (("lineStyle" in options) ? options["lineStyle"] : Desmos.Styles.SOLID);
		let lineWidth = (("lineWidth" in options) ? options["lineWidth"] : "2.5");
		let listGraphs = options.listGraphs;

		let lastSub = options.lastSub;
		lastSub = "";
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		let self = this;
		let parms = {};

		function addGraphToDesmos(recievedLatex, indexNum = "") {
			listGraphs.forEach(function(i) {
				listOfGraphs[i].setExpression({
					"id": idDiv + indexNum,
					"type": "expression",
					"latex": recievedLatex,
					"hidden": hidden,
					"color": generateColorShades(color),
					"lineWidth": lineWidth,
					"showLabel": showLabel,
					"label": ((labelSubScript !== "") ? addSubScriptRHS(label, labelSubScript) : label),
					"dragMode": dragMode,
					"labelOrientation": labelOrientation,
					"pointSize": pointSize,
					"pointStyle": pointStyle,
					"lineStyle": lineStyle,
					"lines": lines,
					"sliderBounds": {
						min: min,
						max: max,
						step: step
					}
				});
			});
		}

		function runDynamicEvent(caclIt, parms) {
			if (!hasKey(selectedExp, parentIdDiv)) {
				alert("parentIdDiv does not exist, choose a different one");
				return;
			}
			if (removeLast(getKeyPath(selectedExp, parentIdDiv)).length > 1) { //sub
				const rootMainKey = getKeyPath(selectedExp, parentIdDiv)[0];
				Object.keys(selectedExp[rootMainKey]).forEach(function(k) {
					var expIdDivSub = getValueFromKeyPath(selectedExp[rootMainKey][k], (getKeyPath(selectedExp[rootMainKey][k], parentIdDiv)));
					var expression = removePlaceholder(expIdDivSub.value); //main
					parms['subScript'] = k;
					parms['expression'] = expression;
					parms['selectedExp'] = selectedExp;
					var derivedValue = caclIt(parms);
					expIdDivSub[idDiv] = {
						value: derivedValue
					};
					if (sticky) {
						selectedExp[idDiv] = removePlaceholder(derivedValue);
						addGraphToDesmos(removePlaceholder(derivedValue), "");
					}
					addGraphToDesmos(derivedValue, k);
				});
			} else { //main
				var expIdDiv = getValueFromKeyPath(selectedExp, getKeyPath(selectedExp, parentIdDiv));
				Object.keys(selectedExp[parentIdDiv]).forEach(function(k) {
					var expression = removePlaceholder(expIdDiv[k].value); //main
					parms['subScript'] = k;
					parms['expression'] = expression;
					parms['selectedExp'] = selectedExp;
					var derivedValue = caclIt(parms);
					expIdDiv[k][idDiv] = {
						value: derivedValue
					};
					if (sticky) {
						selectedExp[idDiv] = removePlaceholder(derivedValue);
						addGraphToDesmos(removePlaceholder(derivedValue), "");
					}
					addGraphToDesmos(derivedValue, k);
				});
			}
		}


		if (calc) {
			this.debounce(idDiv, () => {
				try {
					switch (calc) {
						case 'simpleDraw':
							parms['lhs'] = lhs;
							parms['rhs'] = rhs;
							runDynamicEvent(this.runcalc.simpleDraw, parms);
							break;
						case 'simpleDrawLabel':
							parms['lhs'] = lhs;
							parms['rhs'] = rhs;
							parms['label'] = label;
							parms['color'] = color;
							runDynamicEvent(this.runcalc.simpleDraw, parms);
							break;
						case 'simpleCompute':
							parms['parentIdDiv'] = parentIdDiv;
							parms['compute'] = compute;
							parms['NewfunEqu'] = NewfunEqu;
							runDynamicEvent(this.runcalc.simpleComputeDynamic, parms);
							break;
						case 'simpleInverse':
							parms['parentIdDiv'] = parentIdDiv;
							parms['NewfunEqu'] = NewfunEqu;
							runDynamicEvent(this.runcalc.simpleInverseDynamic, parms);
							break;
						case 'simpleSum':
							parms['parentIdDiv'] = parentIdDiv;
							parms['NewfunEqu'] = NewfunEqu;
							runDynamicEvent(this.runcalc.simpleSum, parms);
							break;
						case 'simpleMarshalian':
							parms['parentIdDiv'] = parentIdDiv;
							parms['objective'] = objective;
							parms['constraint'] = constraint;
							parms['NewfunEqu'] = NewfunEqu;
							runDynamicEvent(this.runcalc.simpleMarshalianDynamic, parms);
							break;

						default:
							throw new Error(`Invalid calculation type: ${calc}`);
					}
				} catch (error) {
					console.error(error);
					this.addDynamicExp.apply(this, [options]);
				} finally {

					let sideInputsContent = document.getElementById('sideInputsContent');
					let mathFields = sideInputsContent.querySelectorAll('math-field');
					let rangeInputs = sideInputsContent.querySelectorAll('input[type=range]');
					let buttons = sideInputsContent.querySelectorAll('button');

					let addEventListenerFunc = (element) => {
						let eventListenerFunc = () => {
							this.addDynamicExp.apply(this, [options]);
						};
						element.removeEventListener('input', eventListenerFunc);
						element.addEventListener('input', eventListenerFunc);
					};

					let addEventListenerFuncBtn = (element) => {
						let eventListenerFunc = () => {
							this.addDynamicExp.apply(this, [options]);
						};
						element.removeEventListener('click', eventListenerFunc);
						element.addEventListener('click', eventListenerFunc);
					};

					mathFields.forEach(addEventListenerFunc);
					rangeInputs.forEach(addEventListenerFunc);
					buttons.forEach(addEventListenerFuncBtn);


					this.debounceTimers[idDiv].status = false;
				}
			});
		} else {
			console.log("no calc");
		}
	}

	addLabel(options) {
		let idDiv = options.idDiv;
		let latex = options.latex;
		let label = options.label;
		let color = ("color" in options) ? options.color : "black";
		let pointSize = ("pointSize" in options) ? options.pointSize : "10";
		let pointStyle = ("pointStyle" in options) ? options.pointStyle : Desmos.Styles.POINT;
		let lineStyle = ("lineStyle" in options) ? options.lineStyle : Desmos.Styles.SOLID;
		let lines = ("lines" in options) ? options.lines : true;
		let showLabel = ("showLabel" in options) ? options.showLabel : true;
		let dragMode = ("dragMode" in options) ? options.dragMode : Desmos.DragModes.NONE;
		let labelOrientation = ("labelOrientation" in options) ? options.labelOrientation : Desmos.LabelOrientations.DEFAULT;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		selectedExp[idDiv] = latex;
		listGraphs.forEach(function(i) {
			listOfGraphs[i].setExpression({
				"id": idDiv,
				"type": "expression",
				"latex": latex,
				"color": generateColorShades(color),
				"showLabel": showLabel,
				"label": label,
				"dragMode": dragMode,
				"labelOrientation": labelOrientation,
				"pointSize": pointSize,
				"pointStyle": pointStyle,
				"lineStyle": lineStyle,
				"lines": lines
			});
			selectedExp[idDiv] = latex;
			//onchange
			listOfGraphs[i].observeEvent('change', function(eventName, event) {
				const expression = getExpressionById(listOfGraphs[i], idDiv);
				selectedExp[idDiv] = expression;
			});
		});
	}
	addFuncInput(options) {
		let idDiv = options.idDiv;
		let title = options.title;
		let func = options.func;
		let latex = options.latex;
		let constraint = ("constraint" in options) ? options.constraint : "";
		let color = ("color" in options) ? options.color : "black";
		let lineStyle = ("lineStyle" in options) ? options.lineStyle : Desmos.Styles.SOLID;
		let lineWidth = ("lineWidth" in options) ? options.lineWidth : "2.5";
		let lineOpacity = ("lineOpacity" in options) ? options.lineOpacity : "0.9";
		let style = ("style" in options) ? options.style : "normal";
		let hidden = ("hidden" in options) ? options.hidden : false;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		// Append the element to the #sideInputsContent
		let container = document.getElementById("sideInputsContent");
		let pElement = document.createElement("p");
		let mathField = document.createElement("math-field");
		mathField.id = idDiv;
		mathField.setAttribute("virtual-keyboard-mode", "manual");

		mathField.className = "shadow-md w-full rounded-md px-4 py-2 border-2 border-violet-500 bg-transparent form-control";
		mathField.innerHTML = latex;
		pElement.innerHTML = title + ': ';
		pElement.appendChild(mathField);
		container.appendChild(pElement);
		// Set the CSS variable
		document.body.style.setProperty("--keyboard-zindex", "3000");
		document.body.style.setProperty("--keyboard-background", "white");
		let styleMathField = document.createElement('style');
		styleMathField.type = 'text/css';
		styleMathField.innerHTML = `
		math-field::part(virtual-keyboard-toggle) {
			display: none;
		  }
		  math-field:focus::part(virtual-keyboard-toggle) {
			display: flex;
		  }
		  math-field::part(menu-toggle) {
			display: none;
		  }
		.MLK__backdrop{
			background: white !important;
			opacity:0.96 !important;
			backdrop-filter: blur(12px) !important;
		  }
		`;
		document.getElementsByTagName('head')[0].appendChild(styleMathField);
		// document.querySelector('math-field').
		// addEventListener('focus', () => { 
		// 	mathVirtualKeyboard.layouts = [
		// 		{
		// 			label: "Econ.Vision",
		// 			tooltip: "Only the essential",
		// 			layers: [
		// 				{
		// 					style: `
		// 					.digit { background: #8A2BE2; color: white; } /* Deep Violet for Digits */
		// 					.digit:hover {color: black;}
		// 					.func { background: #9370DB; color: white; } /* Lighter Violet for Functions */
		// 					.func:hover {color:black;}
		// 					.operator { background: #7B68EE; color: white; } /* Medium Violet for Operators */
		// 					.operator:hover {color:black;}
		// 					.control { background: #6A5ACD; color: white; } /* Slate Blue for Control Keys */
		// 					.control:hover {color:black;}
		// 					.edit { background: #483D8B; color: white; } /* Dark Slate Blue for Editing Keys */
		// 					.edit:hover {color:black;}
		// 					.special { background: #4B0082; color: white; } /* Indigo for Special Function Keys */
		// 					.special:hover {color:black;}
		// 				`,

		// 				rows: [

		// 						[
		// 							{ class: 'control', label: '[hide-keyboard]', tooltip: 'Hide Keyboard' },
		// 							{ class: 'func', label: '[left]', tooltip: 'Left' },
		// 							{ class: 'func', label: '[right]', tooltip: 'Right' },
		// 							{ class: 'func', label: '[backspace]', tooltip: 'Backspace' },
		// 						],
		// 						[
		// 							{ label: '[hr]', width: 0.5 }
		// 						],
		// 						[
		// 							{ width: 2, class: 'special', latex: '{#@}\\cdot\\ln({#?})', ariaLabel: 'natural logarithm', tooltip: 'Natural Logarithm' },
		// 							{ label: '[separator]', width: 0.5 },
		// 							{ class: 'digit', latex: '7' },
		// 							{ class: 'digit', latex: '8' },
		// 							{ class: 'digit', latex: '9' },
		// 							{ label: '[separator]', width: 0.5 },
		// 							{ class: 'func', latex: '\\sqrt{#0}', ariaLabel: 'square root', tooltip: 'Square Root' },
		// 							{ class: 'func', latex: '#@^{#?}', ariaLabel: 'power', tooltip: 'Power' },
		// 						],
		// 						[
		// 							{ width: 2, class: 'special', latex: '\\min({#?},{#?})', ariaLabel: 'minimum', tooltip: 'Minimum' },
		// 							{ label: '[separator]', width: 0.5 },

		// 							{ class: 'digit', latex: '4' },
		// 							{ class: 'digit', latex: '5' },
		// 							{ class: 'digit', latex: '6' },
		// 							{ label: '[separator]', width: 0.5 },
		// 							{ class: 'operator', latex: '+', ariaLabel: 'plus', tooltip: 'Plus' },
		// 							{ class: 'operator', latex: '-', ariaLabel: 'minus', tooltip: 'Minus' },
		// 						],
		// 						[
		// 							{ width: 2, class: 'special', latex: '\\max({#?},{#?})', ariaLabel: 'maximum', tooltip: 'Maximum', },
		// 							{ label: '[separator]', width: 0.5 },

		// 							{ class: 'digit', latex: '1' },
		// 							{ class: 'digit', latex: '2' },
		// 							{ class: 'digit', latex: '3' },
		// 							{ label: '[separator]', width: 0.5 },
		// 							{ class: 'operator', latex: '\\times', ariaLabel: 'multiply', tooltip: 'Multiply' },
		// 							{ class: 'operator', latex: '\\div', ariaLabel: 'divide', tooltip: 'Divide' },
		// 						],
		// 						[
		// 							{ label: '[separator]', width: 1 },
		// 							{ class: 'digit', latex: '0' },
		// 							{ class: 'digit', latex: '.' },
		// 							{ class: 'edit', latex: '=', ariaLabel: 'equals', tooltip: 'Equals' },
		// 							{ label: '[separator]', width: 0.5 },
		// 							{ class: 'operator', latex: '(', ariaLabel: 'open parenthesis', tooltip: 'Open Parenthesis' },
		// 							{ class: 'operator', latex: ')', ariaLabel: 'close parenthesis', tooltip: 'Close Parenthesis' },
		// 						],
		// 					],
		// 				},
		// 			],

		// 		},
		// 	];

		// });

		listGraphs.forEach(function(i) {
			listOfGraphs[i].setExpression({
				"id": idDiv,
				"type": "expression",
				"latex": func + "=" + latex + constraint,
				"hidden": hidden,
				"color": generateColorShades(color),
				"lineStyle": lineStyle,
				"lineWidth": lineWidth,
				"lineOpacity": lineOpacity
			});
			selectedExp[idDiv] = func + "=" + latex;
			document.getElementById(idDiv).addEventListener("input", function() {
				var newValue = this.value;
				listOfGraphs[i].setExpression({
					id: idDiv,
					latex: func + "=" + newValue + constraint
				});
				selectedExp[idDiv] = func + "=" + newValue;
			});
		});
	}

	addTemplateInput(options) {
		let idDiv = options.idDiv;
		let title = options.title;
		let func = options.func;
		let placeholders = options.placeholders;
		let constraint = ("constraint" in options) ? options.constraint : "";
		let color = ("color" in options) ? options.color : "black";
		let lineStyle = ("lineStyle" in options) ? options.lineStyle : Desmos.Styles.SOLID;
		let lineWidth = ("lineWidth" in options) ? options.lineWidth : "2.5";
		let lineOpacity = ("lineOpacity" in options) ? options.lineOpacity : "0.9";
		let style = ("style" in options) ? options.style : "normal";
		let hidden = ("hidden" in options) ? options.hidden : false;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		let counter = 0;
		let styleMathField = document.createElement('style');
		styleMathField.type = 'text/css';
		styleMathField.innerHTML = `
		math-field::part(virtual-keyboard-toggle) {
			display: none;
		  }
		  math-field:focus::part(virtual-keyboard-toggle) {
			display: flex;
		  }
		  math-field::part(menu-toggle) {
			display: none;
		  }
		math-field::part(prompt) {
			border-radius: 0.375rem;
			border-width: 2px;
			border-color: #7C3AED;
			background-color: white;
		}
		`;
		document.getElementsByTagName('head')[0].appendChild(styleMathField);
		let container = document.getElementById("sideInputsContent");
		let mathFieldContainer = document.createElement("div");
		mathFieldContainer.id = "mathFieldContainer";
		if (placeholders.length > 1) {
			let dropdownContainer = document.createElement("div");
			dropdownContainer.className = "relative flex items-center text-left";
			let dropdownButton = document.createElement("button");
			dropdownButton.className = "flex justify-between items-center w-full px-4 py-3 text-sm font-medium text-white bg-violet-500 rounded-md";
			dropdownButton.innerHTML = '<span>' + title + ':</span> <i class="fas fa-angle-down ml-2"></i>';
			dropdownContainer.appendChild(dropdownButton);
			let dropdownMenu = document.createElement("div");
			dropdownMenu.className = "hidden mt-2 top-9 absolute left-0 w-full rounded-b-md shadow-lg backdrop-blur-sm bg-white/70 z-40";
			dropdownContainer.appendChild(dropdownMenu);
			let dropdownContent = document.createElement("div");
			dropdownContent.className = "py-1 divide-y divide-violet-500";
			dropdownMenu.appendChild(dropdownContent);
			let activeOption;
			placeholders.forEach((placeholder, index) => {
				let dropdownOption = document.createElement('div');
				dropdownOption.className = 'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-violet-200 relative';
				if (index === 0) {
					dropdownOption.classList.add('bg-violet-300', 'text-white');
					activeOption = dropdownOption;
				}
				let clickOverlay = document.createElement('div');
				clickOverlay.className = 'absolute inset-0 z-50';
				dropdownOption.appendChild(clickOverlay);
				let mathFieldOption = document.createElement('math-field');
				mathFieldOption.className = "z-40 text-xl w-full flex items-center px-2 bg-transparent rounded-md cursor-pointer";
				mathFieldOption.setAttribute('readonly', '');
				mathFieldOption.innerHTML = replacePlaceholderWithLatex(placeholder);
				dropdownOption.appendChild(mathFieldOption);
				dropdownOption.addEventListener('click', function() {
					if (activeOption) {
						activeOption.classList.remove('bg-violet-300', 'text-white');
					}
					this.classList.add('bg-violet-300', 'text-white');
					activeOption = this;
					handleMathField(placeholder);
					this.classList.toggle('rounded-t-md');
					dropdownMenu.classList.toggle('hidden');
				});
				dropdownContent.appendChild(dropdownOption);
			});
			dropdownButton.addEventListener('click', function() {
				dropdownMenu.classList.toggle('hidden');
			});
			container.appendChild(dropdownContainer);
		} else if (placeholders.length === 1) {
			let titleContainer = document.createElement('div');
			titleContainer.className = "text-md";
			titleContainer.textContent = title + ':';
			container.appendChild(titleContainer);
		}
		container.appendChild(mathFieldContainer);

		handleMathField(placeholders[0]);

		function handleMathField(placeholder) {
			let newMathField = document.createElement("math-field");
			newMathField.id = idDiv;
			newMathField.className = "shadow-md text-xl w-full rounded-md px-4 my-2 py-2 border-2 bg-transparent border-violet-500";
			newMathField.setAttribute("read-only", "true");
			newMathField.setAttribute("smart-mode", "true");
			newMathField.value = placeholder;
			const latex = replacePlaceholderWithLatex(newMathField.value);
			mathFieldContainer.innerHTML = ''; // clear container
			mathFieldContainer.appendChild(newMathField); // insert into container
			listGraphs.forEach(function(i) {
				listOfGraphs[i].setExpression({
					"id": idDiv,
					"type": "expression",
					"latex": func + "=" + latex + constraint,
					"hidden": hidden,
					"color": generateColorShades(color),
					"lineStyle": lineStyle,
					"lineWidth": lineWidth,
					"lineOpacity": lineOpacity
				});
				selectedExp[idDiv] = func + "=" + latex;
				document.getElementById(idDiv).addEventListener("input", function() {
					var newValue = replacePlaceholderWithLatex(this.value);
					listOfGraphs[i].setExpression({
						id: idDiv,
						latex: func + "=" + newValue + constraint
					});
					selectedExp[idDiv] = func + "=" + newValue;
				});
			});
			//trigger all mathfields input event to update the graph
			let mathFields = document.querySelectorAll('input');
			mathFields.forEach((mathField) => {
					mathField.dispatchEvent(new Event('input'));
			});
		}
	}
	addDynamicLabel(options) {
		let {
			idDiv,
			title,
			func,
			latex,
			color,
			hidden = false,
			showLabel = false,
			label = '',
			labelIndicators = ['Q', 'P'],
			direction='up',
			dragMode = Desmos.DragModes.XY,
			labelOrientation = Desmos.LabelOrientations.DEFAULT,
			pointSize = '10',
			pointStyle = Desmos.Styles.POINT,
			index = 1,
			min = 0,
			max = 100,
			step = 1,
			limit,
			listGraphs,
		} = options;
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;


		initializeBaseValue();

		function addPlusButton(idDiv) {
			const buttonContainer = document.getElementById("sideInputsContent");
			const buttonHTML = `
				<div id="${idDiv}${index}add" class="flex justify-center my-1 group">
					<button id="${idDiv}${index}plus" class="disabled:bg-slate-700 bg-transparent text-violet-700 hover:bg-violet-700 hover:text-white disabled:text-white font-bold py-1 px-2 rounded">
						<i class="fas fa-plus group-hover:-rotate-90 group-active:rotate-0 group-hover:disabled:rotate-0 transition-all duration-300"></i>
					</button>
				</div>
			`;
			buttonContainer.insertAdjacentHTML('beforeend', buttonHTML);

			// Add event listener to the plus button
			const plusButton = document.getElementById(idDiv + index + 'plus');
			plusButton.addEventListener('click', function() {
				if (index < limit) {
					index = index + 1;
					addComponent(idDiv, index, convertStringToNumbers(latex)[0], convertStringToNumbers(latex)[1]);
					addMinusButton(idDiv, index);

				}
				if (index >= limit) {
					plusButton.disabled = true;
				}
			});
		}

		function addMinusButton(idDiv) {
			document.getElementById(idDiv + index + 'add').remove();

			const buttonContainer = document.getElementById(idDiv + index);
			const buttonHTML = `
				<button id="${idDiv}${index}minus" class="mb-[0.125rem] align-middle bg-red-500 hover:bg-red-700 text-white text-xs font-semibold py-1 px-2 rounded transition duration-500">
					<i class="fas fa-trash"></i>
				</button>
				<style>
					#${idDiv}${index}minus:active i {
						animation: trashOpen 0.5s forwards;
					}
					@keyframes trashOpen {
						to {
							transform: scale(1.2);
						}
					}
				</style>
			`;
			let firstDivChild = buttonContainer.querySelector('div');
			firstDivChild.insertAdjacentHTML('beforeend', buttonHTML);
			// Add event listener to the minus button
			document.getElementById(idDiv + index + 'minus').addEventListener('click', function() {
				document.getElementById(idDiv + index).remove();
				removeDesmosExpressions();
				removeEventListeners(idDiv, index);
				index = index - 1;

					// Enable the plus button when a component is removed
					const plusButton = document.getElementById(idDiv + '1plus');
					if (plusButton) {
						plusButton.disabled = false;
					}

			});
		}


		function removeDesmosExpressions() {
			listGraphs.forEach(function(i) {
				listOfGraphs[i].removeExpression({
					"id": idDiv + index + 'p'
				});
				listOfGraphs[i].removeExpression({
					"id": idDiv + index + 'y'
				});
				listOfGraphs[i].removeExpression({
					"id": idDiv + index + 'x'
				});
			});
			// Remove the selected expression
			if (selectedExp[idDiv]) {
				delete selectedExp[idDiv][index];
			}

		}


		function convertStringToNumbers(input) {
			// Match all numbers in the string and ignore the rest
			const numbers = input.match(/\d+/g);
			// Convert each string to a number
			return numbers.map(Number);
		}

		function initializeBaseValue() {


			addComponent();


		}

		function generateRandomPoint(direction='up') {
			const step = (max - min) / limit;
			let minForThisIndex, maxForThisIndex;

			if (direction==='up') {
				minForThisIndex = min + step * (index - 1);
				maxForThisIndex = minForThisIndex + step;
			} 
			else if (direction==='down') {
				maxForThisIndex = max - step * (index - 1);
				minForThisIndex = maxForThisIndex - step;
			}
			else if (direction==='random'){
				minForThisIndex = min;
				maxForThisIndex = max;
			}
			else{
				return 0;
			}

			return getRandomInt(minForThisIndex, Math.min(maxForThisIndex, max));
		}


		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}


		function addComponent() {
			const componentHTML = `
					<div id="${idDiv}${index}">
						<p class="text-[color:${color}] font-semibold">${title} ${index}:</p>
						<div class="flex space-x-1 items-end [&_input]:text-center relative">
							<div class="relative w-full">
								<input type="number" id="${idDiv}${index}x" value="${((direction==='down')?generateRandomPoint('up'):generateRandomPoint(direction))}" min="${min}" max="${max}" step="${step}" class="out-of-range:border-red-500 relative shadow-md w-full rounded-md px-0 py-0 border-2 border-violet-500 bg-transparent form-control ${idDiv}">
								<span class="absolute inset-y-0 left-1 text-xs z-10 pointer-events-none">${labelIndicators[0]}</span>
							</div>
							<h1 class="text-lg align-text-bottom align-bottom font-semibold">,</h1>
							<div class="relative w-full">
								<input type="number" id="${idDiv}${index}y" value="${generateRandomPoint(direction)}" min="${min}" max="${max}" step="${step}" class="out-of-range:border-red-500 relative shadow-md w-full rounded-md px-0 py-0 border-2 border-violet-500 bg-transparent form-control ${idDiv}">
								<span class="absolute inset-y-0 left-1 text-xs z-10 pointer-events-none">${labelIndicators[1]}</span>
							</div>
						</div>
					</div>
				`;


			document.getElementById("sideInputsContent").insertAdjacentHTML('beforeend', componentHTML);

			const inputX = document.getElementById(idDiv + index + 'x');
			const inputY = document.getElementById(idDiv + index + 'y');

			inputX.addEventListener('input', function() {
				if (this.value < min || this.value > max) {
					this.value = defaultX;
				}
			});

			inputY.addEventListener('input', function() {
				if (this.value < min || this.value > max) {
					this.value = defaultY;
				}
			});

			addDefaultPoint();
			listGraphs.forEach(function(i) {
				let calculator = listOfGraphs[i];
				addEventListeners(idDiv, index, calculator);
			});
		}

		function addEventListeners(idDiv, index, calculator) {
			const inputX = document.getElementById(idDiv + index + 'x');
			const inputY = document.getElementById(idDiv + index + 'y');

			// Define the functions you're going to bind
			function inputXHandler() {
				calculator.setExpression({
					id: idDiv + index + 'x',
					latex: func + '_{x' + index + '}=' + inputX.value
				});
			}

			function inputYHandler() {
				calculator.setExpression({
					id: idDiv + index + 'y',
					latex: func + '_{y' + index + '}=' + inputY.value
				});
			}

			// Bind the functions as event listeners
			inputX.addEventListener('input', inputXHandler);
			inputY.addEventListener('input', inputYHandler);

			// Store the functions for later removal
			inputX.inputXHandler = inputXHandler;
			inputY.inputYHandler = inputYHandler;

			//onchange from desmos
			calculator.observeEvent('change.' + idDiv + index, function(eventName, event) {
				const expressionX = getExpressionById(calculator, idDiv + index + 'x');
				inputX.value = getSubstringAfterEquals(expressionX);
				selectedExp[idDiv][index] = func + '_{p' + index + '}=(' + inputX.value + ',' + inputY.value + ')';

				const expressionY = getExpressionById(calculator, idDiv + index + 'y');
				inputY.value = getSubstringAfterEquals(expressionY);
				selectedExp[idDiv][index] = func + '_{p' + index + '}=(' + inputX.value + ',' + inputY.value + ')';

			});
			// Add plus button
			addPlusButton(idDiv, index);

		}

		function removeEventListeners(idDiv, index) {
			// Remove the event listeners
			const inputX = document.getElementById(idDiv + index + 'x');
			const inputY = document.getElementById(idDiv + index + 'y');
			if (inputX) {
				inputX.removeEventListener('input', inputX.inputXHandler);
			}
			if (inputY) {
				inputY.removeEventListener('input', inputY.inputYHandler);
			}

			    // Remove the point from the list
				if (selectedExp[idDiv]['list']) {
					const pointToRemove = func + '_{p' + index + '}';
					const indexToRemove = selectedExp[idDiv]['list'].indexOf(pointToRemove);
					if (indexToRemove > -1) {
						selectedExp[idDiv]['list'].splice(indexToRemove, 1);
					}
				}

			// Unobserve the event
			listGraphs.forEach(function(i) {
				let calculator = listOfGraphs[i];
				calculator.unobserveEvent('change.' + idDiv + index);
				listOfGraphs[i].setExpression({
					"id": idDiv,
					"type": "expression",
					"latex": func + '=[' + selectedExp[idDiv]['list'].join(',') + ']',
				});
			});
		}

		function addDefaultPoint() {
			if (!selectedExp[idDiv]) {
				selectedExp[idDiv] = {};
			}
			selectedExp[idDiv][index] = func + '_{p' + index + '}=' + latex;
			listGraphs.forEach(function(i) {
				listOfGraphs[i].setExpression({
					"id": idDiv + index + 'x',
					"type": "expression",
					"latex": func + '_{x' + index + '}=' + ((direction==='down')?generateRandomPoint('up'):generateRandomPoint(direction)),
					"sliderBounds": {
						min: min,
						max: max,
						step: step
					}
				});
				listOfGraphs[i].setExpression({
					"id": idDiv + index + 'y',
					"type": "expression",
					"latex": func + '_{y' + index + '}=' + generateRandomPoint(direction),
					"sliderBounds": {
						min: min,
						max: max,
						step: step
					}
				});
				listOfGraphs[i].setExpression({
					"id": idDiv + index + 'p',
					"type": "expression",
					"latex": func + '_{p' + index + '}=(' + func + '_{x' + index + '},' + func + '_{y' + index + '})',
					"color": generateColorShades(color),
					"showLabel": showLabel,
					"label": label,
					"dragMode": dragMode,
					"labelOrientation": labelOrientation,
					"pointSize": pointSize,
					"pointStyle": pointStyle,
					"points": true,
				});

				    // Add the new point to the list
					if (!selectedExp[idDiv]['list']) {
						selectedExp[idDiv]['list'] = [];
					}
					const newPoint = func + '_{p' + index + '}';
					if (!selectedExp[idDiv]['list'].includes(newPoint)) {
						selectedExp[idDiv]['list'].push(newPoint);
					}

				listOfGraphs[i].setExpression({
					"id": idDiv,
					"type": "expression",
					"latex": func + '=[' + selectedExp[idDiv]['list'].join(',') + ']',
					"color": generateColorShades(color),
					"showLabel": false,
					"label": '',
					"hidden":true,
					"dragMode": dragMode,
					"labelOrientation": labelOrientation,
					"pointSize": pointSize,
					"pointStyle": pointStyle,
					"points": true,
				});

			});
		}
	}	
	addDynamicInput(options) {
		let idDiv = options["idDiv"];
		let idDiv_rhs = idDiv + "_rhs";
		let title = options["title"];
		let index = (("index" in options) ? options["index"] : 1);
		let limit = (("limit" in options) ? options["limit"] : 3);
		let func = options["func"];
		let rhs = options["rhs"];
		let latex = options["latex"];
		let constraint = (("constraint" in options) ? options["constraint"] : "");
		let color = (("color" in options) ? options["color"] : "random");
		let style = (("style" in options) ? options["style"] : "normal");
		let hidden = (("hidden" in options) ? options["hidden"] : false);
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.view.graphs.listOfGraphs;
		let selectedExp = this.view.inputs.selectedExpressions;
		this.allDynamicInputs = {};
		let allDynamicInputs = this.allDynamicInputs;
		this.allDynamicInputs_rhs = {};
		let allDynamicInputs_rhs = this.allDynamicInputs_rhs;
		initializeBaseValue();
		iterateAllDynamicInputs();
		selectedExp[idDiv] = allDynamicInputs;
		selectedExp[idDiv_rhs] = allDynamicInputs_rhs;
		addClicker();

		function initializeBaseValue() {
			document.getElementById("sideInputsContent").insertAdjacentHTML('beforeend', '<p class=""><b>' + title + ' ' + index + ':</b> <math-field id="' + idDiv + index + '" virtual-keyboard-mode="manual" class="shadow-md w-full rounded-t-md px-4 py-2 border-2 border-violet-500 bg-transparent form-control ' + idDiv + '">' + latex + '</math-field></p>');
			selectedExp[idDiv] = allDynamicInputs;
			if (rhs != undefined) {
				selectedExp[idDiv_rhs] = allDynamicInputs_rhs;
			}
		}

		function iterateAllDynamicInputs() {
			try {
				const arrayOfDynamiInputs = getClassValues("." + idDiv);
				const arrayValues = [];
				const arrayValues_rhs = [];
				arrayOfDynamiInputs.forEach(function(input, i) {
					addGraphToDesmos(input, i + 1);
					arrayValues.push({
						[i + 1]: {
							"value": addStringBeforeParens(func, i + 1) + "=" + ((rhs != undefined) ? getSubstringBeforeEquals(input) : input)
						}
					});
					if (rhs != undefined) {
						let d = i + 1;
						arrayValues_rhs.push({
							[d]: {
								"value": rhs + "_{" + (d) + "}=" + getSubstringAfterEquals(input)
							}
						});
					}

				});
				allDynamicInputs = arrayToObject(arrayValues);
				if (rhs != undefined) {
					allDynamicInputs_rhs = arrayToObject(arrayValues_rhs);
				}
			} catch (err) {
				console.log(err)
			}
			document.querySelectorAll('.' + idDiv).forEach(function(element) {
				element.addEventListener("input", function() {
					iterateAllDynamicInputs();
					selectedExp[idDiv] = allDynamicInputs;
					if (rhs != undefined) {
						selectedExp[idDiv_rhs] = allDynamicInputs_rhs;
					}
					document.querySelector("#sideInputsContent math-field").click();
				});
			});
		}

		function addGraphToDesmos(recievedLatex, indexNum) {
			listGraphs.forEach(function(i) {
				listOfGraphs[i].setExpression({
					"id": idDiv + indexNum,
					"type": "expression",
					"latex": addStringBeforeParens(func, indexNum) + "=" + ((rhs != undefined) ? getSubstringBeforeEquals(recievedLatex) : recievedLatex) + constraint,
					"hidden": hidden,
					"color": generateColorShades(color)
				});
			});
			if (rhs != undefined) {
				listGraphs.forEach(function(i) {
					listOfGraphs[i].setExpression({
						"id": idDiv + "_rhs" + indexNum,
						"type": "expression",
						"latex": rhs + "_{" + (indexNum) + "}=" + getSubstringAfterEquals(recievedLatex),
						"hidden": hidden,
						"color": generateColorShades(color)
					});
				});
			}
		}

		function removeGraphFromDesmos(idDivToRemove, indexNum, indexNumEnd) {
			for (let j = indexNum; j <= indexNumEnd; j++) {
				listGraphs.forEach(function(i) {
					listOfGraphs[i].removeExpression({
						"id": idDivToRemove + j
					});
				});
			}
		}

		function addClicker() {
			document.getElementById("sideInputsContent").insertAdjacentHTML('beforeend', '<p><button type="button" id="addDynamicInput" class="flex items-center w-full px-4 py-1  text-white bg-violet-500 rounded-b-md disabled:bg-gray-700 hover:bg-violet-700 focus:outline-none focus:shadow-outline text-sm form-control"><i class="fa fa-plus px-4"></i>Add</button></p>');

			document.getElementById('addDynamicInput').addEventListener('click', function(event) {
				const arrayOfDynamiInputs = getClassValues("." + idDiv);
				const lastValue = arrayOfDynamiInputs[arrayOfDynamiInputs.length - 1];
				if (arrayOfDynamiInputs.length < limit) {
					document.getElementById("addDynamicInput").insertAdjacentHTML('beforebegin', '<p class=""><b>' + title + ' ' + (arrayOfDynamiInputs.length + 1) + ':</b> <math-field id="' + idDiv + (arrayOfDynamiInputs.length + 1) + '" virtual-keyboard-mode="manual" class="shadow-md w-full rounded-t-md px-4 py-2 border-2 border-violet-500 bg-transparent form-control ' + idDiv + '">' + lastValue + '</math-field></p>');
					iterateAllDynamicInputs();
					selectedExp[idDiv] = allDynamicInputs;
					if (rhs != undefined) {
						selectedExp[idDiv_rhs] = allDynamicInputs_rhs;
					}
					addRemover();
					if (arrayOfDynamiInputs.length + 1 === limit)
						this.disabled = true;
				}
			});

		}

		function addRemover() {
			const arrayOfDynamiInputs = getClassValues("." + idDiv);
			const lastValue = arrayOfDynamiInputs[arrayOfDynamiInputs.length - 1];
			if (arrayOfDynamiInputs.length > 1) {
				document.getElementById(idDiv + (arrayOfDynamiInputs.length)).insertAdjacentHTML('afterend', '<p><button type="button" class="flex items-center text-center w-full px-4 py-1 text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:shadow-outline text-sm form-control removeDynamicInput ' + idDiv + (arrayOfDynamiInputs.length) + '"><i class="fa fa-trash px-4"></i>Remove</button></p>');
			}
			document.querySelectorAll('button.removeDynamicInput').forEach(function(button) {
				const newButton = button.cloneNode(true);
				button.parentNode.replaceChild(newButton, button);
				newButton.addEventListener('click', function(event) {
					var getClasses = this.className;
					var Classes = getClasses.split(" ");
					var removeClassSelected = Classes[Classes.length - 1];
					removeGraphFromDesmos(idDiv, uniqueChars(removeClassSelected, idDiv), arrayOfDynamiInputs.length);
					recursionRemoveDesmos(selectedExp[idDiv][uniqueChars(removeClassSelected, idDiv)], uniqueChars(removeClassSelected, idDiv));

					function recursionRemoveDesmos(objectTree, c) {
						Object.entries(objectTree).forEach(function([k, i]) {
							if (k !== "value") {
								removeGraphFromDesmos(k, c, arrayOfDynamiInputs.length);
								recursionRemoveDesmos(objectTree[k], c);
							}
						});
					}
					if (rhs != undefined) {
						removeGraphFromDesmos(idDiv + "_rhs", uniqueChars(removeClassSelected, idDiv), arrayOfDynamiInputs.length);
						recursionRemoveDesmos(selectedExp[idDiv + "_rhs"][uniqueChars(removeClassSelected, idDiv)], uniqueChars(removeClassSelected, idDiv));

						function recursionRemoveDesmos(objectTree, c) {
							Object.entries(objectTree).forEach(function([k, i]) {
								if (k !== "value") {
									removeGraphFromDesmos(k, c, arrayOfDynamiInputs.length);
									recursionRemoveDesmos(objectTree[k], c);
								}
							});
						}
					}
					var getClasses = this.className;
					var Classes = getClasses.split(" ");
					let idDivSelected = Classes[Classes.length - 1];
					document.getElementById(idDivSelected).parentNode.remove();
					reorderDynamicInput();
					iterateAllDynamicInputs();
					if (arrayOfDynamiInputs.length - 1 < limit) {
						document.getElementById("addDynamicInput").disabled = false;
					}
					selectedExp[idDiv] = allDynamicInputs;
					if (rhs != undefined) {
						selectedExp[idDiv_rhs] = allDynamicInputs_rhs;
					}
					document.querySelector("#sideInputsContent math-field").click();
				});
			});
		}

		function reorderDynamicInput() {
			var elements = document.getElementsByClassName(idDiv);
			for (var i = 0; i < elements.length; i++) {
				elements[i].id = idDiv + (i + 1);
				var nextElement = elements[i].nextElementSibling;
				if (nextElement && nextElement.querySelector('button')) {
					var button = nextElement.querySelector('button');
					var classes = button.className.split(' ');
					var idDivSelected = classes[classes.length - 1];
					button.classList.remove(idDivSelected);
					button.classList.add(idDiv + (i + 1));
				}
				var parentElement = elements[i].parentElement;
				var bElements = parentElement.getElementsByTagName('b');
				while (bElements[0]) {
					bElements[0].parentNode.removeChild(bElements[0]);
				}
				var newElement = document.createElement('b');
				newElement.innerHTML = title + ' ' + (i + 1) + ': ';
				parentElement.insertBefore(newElement, elements[i]);
			}
		}

	}

	addSwitchInput(options) {
		const {
			idDiv,
			title,
			shouldRemoveExpression = false,
			isInitiallyChecked = false,
			idDivs,
			listGraphs
		} = options;
		const {
			listOfGraphs
		} = this.view.graphs;
		const {
			selectedExpressions: selectedExp
		} = this.view.inputs;
		let tempExp = {};
		const container = document.getElementById("sideInputsContent");
		const divElement = document.createElement('div');
		divElement.className = "relative text-md flex flex-col gap-y-2";
		divElement.id = idDiv;
		divElement.innerHTML = `
    <span class="w-full text-gray-900">${title}:</span>
    <label class="${idDiv} relative flex flex-col items-start cursor-pointer ml-2">
      <input type="checkbox" value="" class="sr-only peer" ${isInitiallyChecked ? "checked" : ""}>
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&quot;&quot;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
    </label>`;
		container.appendChild(divElement);
		// Initialize based on defaultState
		listGraphs.forEach(i => {
			idDivs.forEach(j => {
				tempExp[j] = getExpressionById(listOfGraphs[i], j);
				const expressionObj = shouldRemoveExpression ? {
					id: j,
					latex: isInitiallyChecked ? tempExp[j] : ""
				} : {
					id: j,
					hidden: !isInitiallyChecked,
					showLabel: isInitiallyChecked
				};
				listOfGraphs[i].setExpression(expressionObj);
			});
		});
		const checkBoxElement = document.querySelector(`#${idDiv} input`);
		checkBoxElement.addEventListener("change", function() {
			listGraphs.forEach(i => {
				idDivs.forEach(j => {
					const isChecked = checkBoxElement.checked;
					const expressionObj = shouldRemoveExpression ? {
						id: j,
						latex: isChecked ? tempExp[j] : ""
					} : {
						id: j,
						hidden: !isChecked,
						showLabel: isChecked
					};
					listOfGraphs[i].setExpression(expressionObj);
				});
			});
		});
	}
	addSelectInput(options) {
		const idDiv = options.idDiv;
		const title = options.title;
		const hideAllTitle = options.hideAllTitle || "Hide All";
		const item = options.item;
		const listGroup = options.listGroup;
		const listGraphs = options.listGraphs;
		const listOfGraphs = this.view.graphs.listOfGraphs;
		const selectedExp = this.view.inputs.selectedExpressions;
		const hasSize = options.hasSize || false;

		const collectSelectData = () => {
			if (!this.addSelectInputData[idDiv]) {
				this.addSelectInputData[idDiv] = {
					title: title,
					hideAllTitle: hideAllTitle,
					hasSize: hasSize,
					counter: 0,
					children: []
				};
			}

			this.addSelectInputData[idDiv].children.push({
				item: item,
				listGroup: listGroup
			});

			this.addSelectInputData[idDiv].counter += 1;
		}
		collectSelectData();

		const trackMethodCalls = async () => {
			const intervalId = setInterval(() => {
				if (selectedExp && typeof selectedExp === 'object') {
					this.addSelectInputData[idDiv].children.forEach(child => {
						const keys = Object.keys(selectedExp);
						const hasKey = keys.some(key => child.listGroup.includes(key));
						if (hasKey) {
							hideAllListGroups();
							clearInterval(intervalId);
						}
					});
				}
			}, 1); // Check every second

			// Remember to clear the interval when you no longer need it
			// clearInterval(intervalId);
		}

		if (!this.selectInputCount[idDiv]) {
			this.selectInputCount[idDiv] = 0;
		}

		const addSelectInputField = () => {
			if (document.getElementById(idDiv) === null) {
				const sideInputsContent = document.getElementById("sideInputsContent");
				const selectDiv = document.createElement('div');
				selectDiv.className = 'w-full flex flex-col';

				const titleElem = document.createElement('p');
				titleElem.textContent = title + ':';

				selectDiv.appendChild(titleElem);

				selectDiv.innerHTML += `<select class="overflow-hidden p-4 form-select bg-transparent border-2 border-violet-600 text-gray-900 text-md rounded-md focus:ring-violet-500 focus:border-violet-500 divide-y-2 divide-violet-600 [&_option]:py-3 [&_option]:px-4 checked:[&_option]:bg-violet-600 checked:[&_option]:text-slate-50" id="${idDiv}"><option selected="selected">${hideAllTitle}</option></select>`;
				sideInputsContent.appendChild(selectDiv);
			}

			const selectElem = document.getElementById(idDiv);
			const optionElem = document.createElement('option');
			optionElem.textContent = item;
			selectElem.appendChild(optionElem);

			this.selectInputCount[idDiv] += 1;

			if (this.selectInputCount[idDiv] === 1 && hasSize) {
				this.hasSize = true;
			}
			if (this.hasSize) {
				selectElem.setAttribute('size', this.selectInputCount[idDiv]+1);
				selectElem.classList.remove('p-4'); // Remove p-4 class
			}
		}

		const hideAllListGroups = () => {
			hideInputsFromList();
			hideExpressionsFromList();
		}

		const hideInputsFromList = () => {
			listGroup.forEach(value => {
				const elem = document.querySelector(`#sideInputsContent #${value}`);
				if (elem) {
					elem.style.display = 'none';
				}
			});
		}

		const hideExpressionsFromList = () => {
			listGraphs.forEach(i => {
				listGroup.forEach(j => {
					listOfGraphs[i].setExpression({
						"id": j,
						hidden: true,
						showLabel: false
					});
				});
			});
		}

		const showPickedItem = (Pitem) => {
			showInputsFromList(Pitem);
			showExpressionsFromList(Pitem);
		}

		const showInputsFromList = (Pitem) => {
			hideInputsFromList();
			if (Pitem === item) {
				listGroup.forEach(value => {
					const elem = document.querySelector(`#sideInputsContent #${value}`);
					if (elem) {
						elem.style.display = '';
					}
				});
			}
		}

		const showExpressionsFromList = (Pitem) => {
			hideExpressionsFromList();
			if (Pitem === item) {
				listGraphs.forEach(i => {
					listGroup.forEach(j => {
						listOfGraphs[i].setExpression({
							"id": j,
							hidden: false,
							showLabel: true
						});
					});
				});
			}
		}

		addSelectInputField();
		hideAllListGroups();
		trackMethodCalls();

		document.getElementById(idDiv).addEventListener('change', function() {
			const pickedItem = this.value;
			if (pickedItem === hideAllTitle) {
				hideInputsFromList();
				hideExpressionsFromList();
			} else {
				showPickedItem(pickedItem);
			}
		});
	}

	line() {
		const sideInputsContent = document.getElementById("sideInputsContent");
		const newElement = document.createElement("div");
		newElement.className = "h-[3px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-12 my-8 rounded-full";
		sideInputsContent.appendChild(newElement);
	}
	setInstructions(options) {
		const instruction = this.view.instructions;
		instruction.addInstructionPage(options.title, options.content);
	}
	setCreators(options) {
		const title = options.title;
		const name = options.name;
		const school = options.school;
		const mainID = document.getElementById("creatorsContent");
		const subID = document.getElementById("developers-credits");
		const titleMsg = `${title} ${name} ${school}`;
		this.creatorNumber += 1; // Increment by 1
		const element = document.createElement('div');
		if (this.creatorNumber === 1) {
			element.innerHTML = this.view.inputs.createComponent(titleMsg, name);
			mainID.appendChild(element.firstChild);
		} else {
			element.innerHTML = this.view.inputs.createSubComponent(titleMsg, name);
			subID.appendChild(element.firstChild);
		}
	}
}