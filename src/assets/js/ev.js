function getValuesInParens(str) { //recieves a string, returns array of values, seperated by comma
	const regex = /\(([^)]+)\)/;
	const matches = str.match(regex);
	if (!matches) return [];
	const value = matches[1];
	return value.split(",");
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
  
function getSubstringBeforeEquals(str) { //recieves a string and returns the strings before "=" if exists
	if (str.indexOf("=") === -1) return null;
	return str.substring(0, str.indexOf("="));
}

function getSubstringAfterEquals(str) { //recieves a string and returns the strings after "=" if exists
	if (str.indexOf("=") === -1) return null;
	return str.substring(str.indexOf("=") + 1);
}

function getValueBetweenBraces(str) { //recieves a string and returns the string between curly braces
	if (str.indexOf("{") === -1 || str.indexOf("}") === -1) return null;
	return str.substring(str.indexOf("{") + 1, str.indexOf("}"));
}

function addCurlyBraces(str) { //function that adds curly braces
	return `{${str}}`;
}

function getUniqueChars(str) { //recieves a string and returns all unique charachter in array
	const uniqueChars = new Set();
	for (const ch of str) {
		if (ch.match(/[a-z]/i)) {
			uniqueChars.add(ch);
		}
	}
	return [...uniqueChars];
}

function replaceLn(str) { //replace log to ln  
	return str.replace(/ln/gi, "log");
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
	  
function inMath(str) {
	return nerdamer.convertFromLaTeX(capitalizeLn(str));
}
  
function outMath(str) {
	return replaceMathrm(nerdamer.convertToLaTeX(nerdamer(str).toString()));
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

function removePlaceholder(str) { //remove subscript of the function G_{1}(Q) => G(Q)
	// Use a regular expression to match the pattern "_{}" followed by a value or number between "{}"
	const regex = /_{.*?}/;
	// Use the .replace method to remove the matched pattern from the string
	const result = str.replace(regex, '');
	// Return the modified string
	return result;
}

function getClassValues(className) { //recieves class name and return all the values of this class as array
	var values = [];
	$(className).each(function() {
		values.push($(this).val());
	});
	return values;
}

function getNumberFromString(str) { //recieves string and return the number from the string
	const regex = /\d+/;
	const match = str.match(regex);
	return match ? match[0] : null;
}

function getKeysAtLevel(obj, key) { //recieves object and key, and returns all key at that level
	if (!obj.hasOwnProperty(key)) {
		return [];
	}
	const value = obj[key];
	if (typeof value === 'object' && value !== null) {
		return Object.keys(value);
	} else {
		return [];
	}
}

function removeFromArray(array, value) { //recieves array and value, and remove the value from array
	const index = array.indexOf(value);
	if (index === -1) {
		return array;
	}
	return array.slice(0, index).concat(array.slice(index + 1));
}

function replaceKeys(tempList, sol) {  //// // {a: 3, b: 5} ->>>> {x: 3, y: 5}
	let updatedSol = {};
  
	for (let solKey in sol) {
	  for (let tempListKey in tempList) {
		if (tempList[tempListKey] === sol[solKey]) {
		  updatedSol[tempListKey] = sol[solKey];
		  break;
		} else {
		  updatedSol[solKey] = sol[solKey];
		}
	  }
	}
  
	return updatedSol;
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

function removeLast(arr) { //recieves array and remove the last value
	arr.pop();
	return arr;
}

function arrayToObject(arr) { //recives array and return object
	return arr.reduce((acc, cur) => ({
		...acc,
		...cur
	}), {});
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

function getParentObject(parentObj, childObj) { //recieves parent and child object and return one parent up object
	for (const key in parentObj) {
		if (parentObj[key] === childObj) {
			return parentObj;
		}
		if (typeof parentObj[key] === 'object') {
			const result = getParentObject(parentObj[key], childObj);
			if (result) {
				return result;
			}
		}
	}
	return null;
}

function hasKey(obj, key) { //recieves object and key and return true if key exists anywhere in the object
	if (obj.hasOwnProperty(key)) {
		return true;
	}
	for (const prop in obj) {
		if (typeof obj[prop] === 'object') {
			const hasKeyInNestedObject = hasKey(obj[prop], key);
			if (hasKeyInNestedObject) {
				return true;
			}
		}
	}
	return false;
}

function getParentKey(obj, key, rootKey = null) { //recieves obj and key, and will return the main root key
	for (const prop in obj) {
		if (typeof obj[prop] === 'object') {
			if (obj[prop].hasOwnProperty(key)) {
				rootKey = prop;
			} else {
				rootKey = getParentKey(obj[prop], key, rootKey);
			}
		}
	}
	return rootKey;
}

function removeBackslashes(str) {
	return str.replace(/\\(?=\\)/g, '');
}

function capitalizeLn(str) { //replace ln to LN
	return str.replace(/ln/g, 'LN');
}

function getRandomChar(arr, obj) { //recieves an array and generate a random charachter that is not included in the array
	const alphabet = "bjkmpuvwxyzABCDFGHIJKLMNOPRSTUVWXYZ";
	let char;
	do {
		char = alphabet[Math.floor(Math.random() * alphabet.length)];
	} while (arr.includes(char) || Object.values(obj).includes(char) || Object.keys(obj).includes(char));
	return char;
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

function replaceValuesWithKeys(obj, str) {
	for (const key in obj) {
		// Replace all occurrences of the value in the string with its corresponding key
		str = str.replace(new RegExp(obj[key], 'g'), key);
	}
	return str;
}

function createCreator(str) { //replace \creator{"title","name","school"} to div element
	const match = str.match(/\creator{(.*?)}/);
	if (!match) {
		return "Invalid input";
	}
	const [, values] = match;
	const [title, name, school] = values.split(",");
	return `
	  <div>${title}</div>
	  <div>${name}</div>
	  <div>${school}</div>
	`;
}

function isNumber(string) { //check if the string is float or int
	return !isNaN(parseFloat(string)) && isFinite(string);
}
class EconVision {
	constructor(debug = false) {
		//let pattern = new RegExp("(file://|https://(econ.vision|dev.econ.vision|[\\w-]+.id.repl.co))");
        //let pattern = new RegExp("(file://|https://(econ.vision|dev.econ.vision|[\\w-]+.id.repl.co)|http://localhost:8080)");
        let pattern = new RegExp("(file://|https://(econ.vision|dev.econ.vision|[\\w-]+.id.repl.co)|http://localhost:8080|https://econvision.netlify.app)");

		let isValid = pattern.test(window.location.origin);
		if (!isValid) {
		return;
		}
		this.listOfGraphs = [];
		this.selectedExpressions = {};
		let selectedExp = this.selectedExpressions;
		this.debug = debug;
		this.stepNumber = 1;
		this.creatorNumber = 1;
		let stepNumber = this.stepNumber;
		nerdamer.set('USE_LN', true);
		if (debug) {
			$("#mainContainer").after(document.createElement('pre'));
			$("#mainContainer div:first").prepend('<div class="col-span-12 rounded-md bg-violet-200 shadow-lg shadow-violet-500/50 p-8" id="developerContent"></div>');
		}
		$("#mainContainer").prepend('<div class="fixed top-0 right-0 bg-white w-screen h-screen z-[100]">\
		<img src="https://econ.vision/img/refresh.gif" class="fixed top-1/2 right-1/2 h-12 w-12 z-[101]" alt="" id="refreshIcon" />\
	</div>');
		$("#refreshIcon").parent().fadeOut();
		$('.exit-button').click(function() {
			$('#alert-message').fadeOut();
		});
		// Toggle the offcanvas panel when the button is clicked
		$("#toggleOffcanvasMobile").click(function() {
			if ($('#sideInputsContent').hasClass('active-page-mobile')) {
				$("#sideInputsContent").removeClass("active-page-mobile");
				$("#sideInputsContent").addClass("hidden md:block");
				$("#graphsContent").parent().removeClass("hidden md:block");
				$("#graphsContent").parent().addClass("active-page-mobile");
			} else if ($('#offcanvasPanel').hasClass('active-page-mobile')) {
				$("#offcanvasPanel").removeClass("active-page-mobile");
				$("#offcanvasPanel").addClass("hidden md:block");
				$('.wrapper').removeClass("overflow-y-hidden");
				$('.dark-screen').remove();
				$("#sideInputsContent").removeClass("hidden md:block");
				$("#sideInputsContent").addClass("active-page-mobile");
			} else {
				$("#graphsContent").parent().removeClass("active-page-mobile");
				$("#graphsContent").parent().addClass("hidden md:block");
				$("#offcanvasPanel").removeClass("hidden md:block");
				$("#offcanvasPanel").addClass("active-page-mobile");
				$(".wrapper").scrollTop(0);
				$('.wrapper').addClass("overflow-y-hidden");
				var div = $("<div>", {
					class: "dark-screen fixed top-0 right-0 z-[100] opacity-50 h-full w-full hidden md:block",
				});
				// Add the div after the element
				$('.wrapper').prepend(div);
			}
		});
		let parentItems = [{
			"name": "----- GRAPH -----",
			"disabled": true
		}, {
			"name": "setGraphs",
			"children": [{
				"type": "select",
				"label": "engine",
				"id": "setGraphs-engine",
				"options": [{
					"value": "desmos",
					"text": "desmos"
				}],
				"value": ""
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "setGraphs-idDiv",
				"value": "TheFirstDivForGraph"
			}, {
				"type": "text",
				"label": "height",
				"id": "setGraphs-height",
				"value": "650px"
			}, {
				"type": "text",
				"label": "width",
				"id": "setGraphs-width",
				"value": "100"
			}, {
				"type": "number",
				"label": "left",
				"id": "setGraphs-left",
				"value": "-25"
			}, {
				"type": "number",
				"label": "right",
				"id": "setGraphs-right",
				"value": "150"
			}, {
				"type": "number",
				"label": "bottom",
				"id": "setGraphs-bottom",
				"value": "-15"
			}, {
				"type": "number",
				"label": "top",
				"id": "setGraphs-top",
				"value": "100"
			}, {
				"type": "checkbox",
				"label": "copy",
				"id": "setGraphs-copy",
				"value": true
			},
			{
				"type": "checkbox",
				"label": "showGrid",
				"id": "setGraphs-showGrid",
				"value": false
			}, {
				"type": "checkbox",
				"label": "expressions",
				"id": "setGraphs-expressions",
				"value": true
			}, {
				"type": "checkbox",
				"label": "keypad",
				"id": "setGraphs-keypad",
				"value": false
			}, {
				"type": "checkbox",
				"label": "zoomFit",
				"id": "setGraphs-zoomFit",
				"value": true
			}, {
				"type": "checkbox",
				"label": "settingsMenu",
				"id": "setGraphs-settingsMenu",
				"value": false
			}, {
				"type": "checkbox",
				"label": "showXAxis",
				"id": "setGraphs-showXAxis",
				"value": true
			}, {
				"type": "checkbox",
				"label": "showYAxis",
				"id": "setGraphs-showYAxis",
				"value": true
			}, {
				"type": "text",
				"label": "xAxisLabel",
				"id": "setGraphs-xAxisLabel",
				"value": "Q(units)       "
			}, {
				"type": "text",
				"label": "yAxisLabel",
				"id": "setGraphs-yAxisLabel",
				"value": "P($)"
			}]
		}, {
			"name": "setBounds",
			"children": [{
				"type": "latex",
				"label": "top",
				"id": "setBounds-top",
				"value": "B_{t}"
			}, {
				"type": "latex",
				"label": "bottom",
				"id": "setBounds-bottom",
				"value": ""
			}, {
				"type": "latex",
				"label": "left",
				"id": "setBounds-left",
				"value": ""
			}, {
				"type": "latex",
				"label": "right",
				"id": "setBounds-right",
				"value": "B_{r}"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "setBounds-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "----- INPUTS -----",
			"disabled": true
		}, {
			"name": "addFuncInput",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addFuncInput-idDiv",
				"value": "MCFunction"
			}, {
				"type": "text",
				"label": "title",
				"id": "addFuncInput-title",
				"value": "Marginal Cost Function for the firm"
			}, {
				"type": "latex",
				"label": "func",
				"id": "addFuncInput-func",
				"value": "f_{mc}(Q)"
			}, {
				"type": "latex",
				"label": "latex",
				"id": "addFuncInput-latex",
				"value": "\\frac{Q}{2}"
			}, {
				"type": "latex",
				"label": "constraint",
				"id": "addFuncInput-constraint",
				"value": "\\left\\{Q\\ge0\\right\\}"
			}, {
				"type": "color",
				"label": "color",
				"id": "addFuncInput-color",
				"value": ""
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "addFuncInput-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "addFuncInput-lineWidth",
				"value": ""
			}, {
				"type": "number",
				"label": "lineOpacity",
				"id": "addFuncInput-lineOpacity",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "addFuncInput-hidden",
				"value": false
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addFuncInput-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addDynamicInput",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addDynamicInput-idDiv",
				"value": "TCDynamic"
			}, {
				"type": "text",
				"label": "title",
				"id": "addDynamicInput-title",
				"value": "Total Cost Firm "
			}, {
				"type": "latex",
				"label": "func",
				"id": "addDynamicInput-func",
				"value": "f_{mc}(Q)"
			}, {
				"type": "latex",
				"label": "latex",
				"id": "addDynamicInput-latex",
				"value": "\\frac{Q}{2}"
			}, {
				"type": "latex",
				"label": "constraint",
				"id": "addDynamicInput-constraint",
				"value": "\\left\\{Q\\ge0\\right\\}"
			}, {
				"type": "color",
				"label": "color",
				"id": "addDynamicInput-color",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "addDynamicInput-hidden",
				"value": false
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addDynamicInput-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addSliderInput",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addSliderInput-idDiv",
				"value": "SubTaxPerUnitSlider"
			}, {
				"type": "text",
				"label": "title",
				"id": "addSliderInput-title",
				"value": "Subsidy or Tax"
			}, {
				"type": "latex",
				"label": "latex",
				"id": "addSliderInput-latex",
				"value": "P_{sub}"
			}, {
				"type": "latex",
				"label": "min",
				"id": "addSliderInput-min",
				"value": "-P_{opt}"
			}, {
				"type": "latex",
				"label": "max",
				"id": "addSliderInput-max",
				"value": "P_{opt}"
			}, {
				"type": "number",
				"label": "step",
				"id": "addSliderInput-step",
				"value": "0.01"
			}, {
				"type": "number",
				"label": "defaultValue",
				"id": "addSliderInput-defaultValue",
				"value": "0"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addSliderInput-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addSwitchInput",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addSwitchInput-idDiv",
				"value": "SubTaxPerUnitSlider"
			}, {
				"type": "text",
				"label": "title",
				"id": "addSwitchInput-title",
				"value": "Display Average Cost"
			}, {
				"type": "checkbox",
				"label": "hideToggle",
				"id": "addSwitchInput-hideToggle",
				"value": false
			}, {
				"type": "text",
				"label": "idDivs",
				"id": "addSwitchInput-idDivs",
				"value": '["AC"]'
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addSwitchInput-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addSelectInput",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addSelectInput-idDiv",
				"value": "SurplusSelectInput"
			}, {
				"type": "text",
				"label": "item",
				"id": "addSelectInput-item",
				"value": "Quota"
			}, {
				"type": "text",
				"label": "listGroup",
				"id": "addSelectInput-listGroup",
				"value": '["ShadedPSPlusQuota"]'
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addSelectInput-listGraphs",
				"value": "[0]"
			}]
		},
		{
			"name": "line",
			"displayName": "addLine"
		}, {
			"name": "----- EXPRESSIONS -----",
			"disabled": true
		}, {
			"name": "addExpression",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addExpression-idDiv",
				"value": "MCFunction"
			}, {
				"type": "latex",
				"label": "latex",
				"id": "addExpression-latex",
				"value": "\\frac{Q}{2}"
			}, {
				"type": "color",
				"label": "color",
				"id": "addExpression-color",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "addExpression-hidden",
				"value": false
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "addExpression-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "addExpression-lineWidth",
				"value": ""
			}, {
				"type": "number",
				"label": "min",
				"id": "addExpression-min",
				"value": ""
			}, {
				"type": "number",
				"label": "max",
				"id": "addExpression-max",
				"value": ""
			}, {
				"type": "number",
				"label": "step",
				"id": "addExpression-step",
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addExpression-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addExpression",
			"displayName": "addExpression > simpleDerive",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleDerive-calc",
				"value": "simpleDerive"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleDerive-idDiv",
				"value": "MCDynamicc"
			}, {
				"type": "text",
				"label": "parentIdDiv",
				"id": "simpleDerive-parentIdDiv",
				"value": "MCFunction"
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleDerive-NewfunEqu",
				"value": "\\mu(Q)"
			}, {
				"type": "color",
				"label": "color",
				"id": "simpleDerive-color",
				"value": ""
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "simpleDerive-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "simpleDerive-lineWidth",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "simpleDerive-hidden",
				"value": false
			}, {
				"type": "number",
				"label": "min",
				"id": "simpleDerive-min",
				"value": ""
			}, {
				"type": "number",
				"label": "max",
				"id": "simpleDerive-max",
				"value": ""
			}, {
				"type": "number",
				"label": "step",
				"id": "simpleDerive-step",
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleDerive-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addExpression",
			"displayName": "addExpression > simpleInverse",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleInverse-calc",
				"value": "simpleInverse"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleInverse-idDiv",
				"value": "MCDynamicc"
			}, {
				"type": "text",
				"label": "parentIdDiv",
				"id": "simpleInverse-parentIdDiv",
				"value": "MCFunction"
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleInverse-NewfunEqu",
				"value": "\\mu(P)"
			}, {
				"type": "color",
				"label": "color",
				"id": "simpleInverse-color",
				"value": ""
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "simpleInverse-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "simpleInverse-lineWidth",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "simpleInverse-hidden",
				"value": false
			}, {
				"type": "number",
				"label": "min",
				"id": "simpleInverse-min",
				"value": ""
			}, {
				"type": "number",
				"label": "max",
				"id": "simpleInverse-max",
				"value": ""
			}, {
				"type": "number",
				"label": "step",
				"id": "simpleInverse-step",
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleInverse-listGraphs",
				"value": "[0]"
			}]
		},
		{
			"name": "addExpression",
			"displayName": "addExpression > simpleCompute",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleCompute-calc",
				"value": "simpleCompute"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleCompute-idDiv",
				"value": "solvecompute"
			},
			 {
				"type": "text",
				"label": "compute",
				"id": "simpleCompute-compute",
				"value": 'demandCurve+supplyCurve-(supplyCurve+demandCurve)^[2]'
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleCompute-NewfunEqu",
				"value": "\\mu(P)"
			}, {
				"type": "color",
				"label": "color",
				"id": "simpleCompute-color",
				"value": ""
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "simpleCompute-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "simpleCompute-lineWidth",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "simpleCompute-hidden",
				"value": false
			}, {
				"type": "number",
				"label": "min",
				"id": "simpleCompute-min",
				"value": ""
			}, {
				"type": "number",
				"label": "max",
				"id": "simpleCompute-max",
				"value": ""
			}, {
				"type": "number",
				"label": "step",
				"id": "simpleCompute-step",
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleCompute-listGraphs",
				"value": "[0]"
			}]
		},{
			"name": "addExpression",
			"displayName": "addExpression > simpleSubstitute",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleSubstitute-calc",
				"value": "simpleSubstitute"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleSubstitute-idDiv",
				"value": "UBarTax"
			},
			 {
				"type": "text",
				"label": "parentIdDiv",
				"id": "simpleSubstitute-parentIdDiv",
				"value": 'UtilityFunction'
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleSubstitute-NewfunEqu",
				"value": "g(m_x,m_y)"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleSubstitute-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addExpression",
			"displayName": "addExpression > simpleIntersect",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleIntersect-calc",
				"value": "simpleIntersect"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleIntersect-idDiv",
				"value": "intersection"
			}, {
				"type": "text",
				"label": "compute",
				"id": "simpleIntersect-compute",
				"value": 'supply~demand'
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleIntersect-NewfunEqu",
				"value": "\\mu"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleIntersect-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addExpression",
			"displayName": "addExpression > simpleFOC",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleFOC-calc",
				"value": "simpleFOC"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleFOC-idDiv",
				"value": "minimizeFOC"
			}, {
				"type": "text",
				"label": "parentIdDiv",
				"id": "simpleFOC-parentIdDiv",
				"value": "MCFunction"
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleFOC-NewfunEqu",
				"value": "\\mu(Q)"
			}, {
				"type": "checkbox",
				"label": "FOCmax",
				"id": "simpleFOC-FOCmax",
				"value": true
			}, {
				"type": "number",
				"label": "solveFor",
				"id": "simpleFOC-solveFor",
				"value": "0"
			}, {
				"type": "color",
				"label": "color",
				"id": "simpleFOC-color",
				"value": ""
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "simpleFOC-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "simpleFOC-lineWidth",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "simpleFOC-hidden",
				"value": false
			}, {
				"type": "number",
				"label": "min",
				"id": "simpleFOC-min",
				"value": ""
			}, {
				"type": "number",
				"label": "max",
				"id": "simpleFOC-max",
				"value": ""
			}, {
				"type": "number",
				"label": "step",
				"id": "simpleFOC-step",
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleFOC-listGraphs",
				"value": "[0]"
			}]
		},
		{
			"name": "addExpression",
			"displayName": "addExpression > simpleLag (return List[x,y])",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "simpleLag-calc",
				"value": "simpleLag"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "simpleLag-idDiv",
				"value": "NewID"
			}, {
				"type": "text",
				"label": "parentIdDiv",
				"id": "simpleLag-parentIdDiv",
				"value": 'UtilityFunction'
			},
			{
				"type": "text",
				"label": "constraint",
				"id": "simpleLag-constraint",
				"value": 'totalBudgetLine'
			},
			{
				"type": "checkbox",
				"label": "FOCmax",
				"id": "simpleLag-max",
				"value": true
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "simpleLag-NewfunEqu",
				"value": "\\mu"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "simpleLag-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "addExpression",
			"displayName": "addExpression > advanceSubstitute",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "advanceSubstitute-calc",
				"value": "advanceSubstitute"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "advanceSubstitute-idDiv",
				"value": "NewID"
			}, {
				"type": "text",
				"label": "parentIdDiv",
				"id": "advanceSubstitute-parentIdDiv",
				"value": '["SubInto", "SubFrom"]'
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "advanceSubstitute-NewfunEqu",
				"value": "\\nu(Q_{1},Q_{2})"
			}, {
				"type": "checkbox",
				"label": "FOCmax",
				"id": "advanceSubstitute-FOCmax",
				"value": true
			}, {
				"type": "number",
				"label": "subWith",
				"id": "advanceSubstitute-subWith",
				"value": "1"
			}, {
				"type": "color",
				"label": "color",
				"id": "advanceSubstitute-color",
				"value": ""
			}, {
				"type": "select",
				"label": "lineStyle",
				"id": "advanceSubstitute-lineStyle",
				"options": [{
					"value": "",
					"text": "SOLID"
				}, {
					"value": "Desmos.Styles.DASHED",
					"text": "Desmos.Styles.DASHED"
				}, {
					"value": "Desmos.Styles.DOTTED",
					"text": "Desmos.Styles.DOTTED"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "lineWidth",
				"id": "advanceSubstitute-lineWidth",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "hidden",
				"id": "advanceSubstitute-hidden",
				"value": false
			}, {
				"type": "number",
				"label": "min",
				"id": "advanceSubstitute-min",
				"value": ""
			}, {
				"type": "number",
				"label": "max",
				"id": "advanceSubstitute-max",
				"value": ""
			}, {
				"type": "number",
				"label": "step",
				"id": "advanceSubstitute-step",
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "advanceSubstitute-listGraphs",
				"value": "[0]"
			}]
		},
		{
			"name": "addExpression",
			"displayName": "addExpression > advanceFindIntersection (return List[x,y])",
			"children": [{
				"type": "disabled",
				"label": "calc",
				"id": "advanceFindIntersection-calc",
				"value": "advanceFindIntersection"
			}, {
				"type": "text",
				"label": "idDiv",
				"id": "advanceFindIntersection-idDiv",
				"value": "NewID"
			}, {
				"type": "text",
				"label": "parentIdDiv",
				"id": "advanceFindIntersection-parentIdDiv",
				"value": '["demandForPoor", "supplyForPoor"]'
			}, {
				"type": "latex",
				"label": "NewfunEqu",
				"id": "advanceFindIntersection-NewfunEqu",
				"value": "L"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "advanceFindIntersection-listGraphs",
				"value": "[0]"
			}]
		},
		 {
			"name": "addLabel",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "addLabel-idDiv",
				"value": "BruceLabel"
			}, {
				"type": "latex",
				"label": "latex",
				"id": "addLabel-latex",
				"value": "F_{b}(t,k)"
			}, {
				"type": "text",
				"label": "label",
				"id": "addLabel-label",
				"value": "Bruce"
			}, {
				"type": "color",
				"label": "color",
				"id": "addLabel-color",
				"value": ""
			}, {
				"type": "select",
				"label": "pointStyle",
				"id": "addLabel-pointStyle",
				"options": [{
					"value": "",
					"text": "Desmos.Styles.POINT"
				}, {
					"value": "Desmos.Styles.OPEN",
					"text": "Desmos.Styles.OPEN"
				}, {
					"value": "Desmos.Styles.CROSS",
					"text": "Desmos.Styles.CROSS"
				}],
				"value": ""
			}, {
				"type": "number",
				"label": "pointSize",
				"id": "addLabel-pointSize",
				"value": ""
			}, {
				"type": "checkbox",
				"label": "showLabel",
				"id": "addLabel-showLabel",
				"value": true
			}, {
				"type": "select",
				"label": "dragMode",
				"id": "addLabel-dragMode",
				"options": [{
					"value": "",
					"text": "Desmos.DragModes.NONE"
				}, {
					"value": "Desmos.DragModes.X",
					"text": "Desmos.DragModes.X"
				}, {
					"value": "Desmos.DragModes.Y",
					"text": "Desmos.DragModes.Y"
				}, {
					"value": "Desmos.DragModes.XY",
					"text": "Desmos.DragModes.XY"
				}],
				"value": ""
			}, {
				"type": "select",
				"label": "labelOrientation",
				"id": "addLabel-labelOrientation",
				"options": [{
					"value": "",
					"text": "Desmos.LabelOrientations.DEFAULT"
				}, {
					"value": "Desmos.LabelOrientations.ABOVE",
					"text": "Desmos.LabelOrientations.ABOVE"
				}, {
					"value": "Desmos.LabelOrientations.BELOW",
					"text": "Desmos.LabelOrientations.BELOW"
				}, {
					"value": "Desmos.LabelOrientations.LEFT",
					"text": "Desmos.LabelOrientations.LEFT"
				}, {
					"value": "Desmos.LabelOrientations.RIGHT",
					"text": "Desmos.LabelOrientations.RIGHT"
				}],
				"value": ""
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "addLabel-listGraphs",
				"value": "[0]"
			}]
		}, {
			"name": "----- INSTRUCTIONS -----",
			"disabled": true
		}, {
			"name": "setValue",
			"children": [{
				"type": "text",
				"label": "idDiv",
				"id": "setValue-idDiv",
				"value": "endownmentYValueDisplay"
			}, {
				"type": "latex",
				"label": "latex",
				"id": "setValue-latex",
				"value": "w_{y}"
			}, {
				"type": "number",
				"label": "decimal",
				"id": "setValue-decimal",
				"value": "2"
			}, {
				"type": "text",
				"label": "listGraphs",
				"id": "setValue-listGraphs",
				"value": "[0]"
			}]
		},{
			"name": "setInstructions",
			"children": [{
				"type": "text",
				"label": "title",
				"id": "setInstructions-title",
				"value": "Cost Function"
			}, {
				"type": "HTML",
				"label": "content",
				"id": "setInstructions-latex",
				"value": "Here comes the text..."
			}]
		}, {
			"name": "setCreators",
			"children": [{
				"type": "text",
				"label": "title",
				"id": "setCreators-title",
				"value": "Developer"
			}, {
				"type": "text",
				"label": "name",
				"id": "setCreators-name",
				"value": "Kyla"
			}, {
				"type": "text",
				"label": "school",
				"id": "setCreators-school",
				"value": "CC24’"
			}]
		}, {
			"name": "setScriptPackage",
			"children": [{
				"type": "checkbox",
				"label": "replaceExp",
				"id": "setScriptPackage-replaceExp",
				"value": true
			}, {
				"type": "checkbox",
				"label": "replaceLatex",
				"id": "setScriptPackage-replaceLatex",
				"value": true
			}, {
				"type": "checkbox",
				"label": "replaceTip",
				"id": "setScriptPackage-replaceTip",
				"value": true
			},			{
				"type": "checkbox",
				"label": "replaceTheory",
				"id": "setScriptPackage-replaceTheory",
				"value": true
			}, {
				"type": "checkbox",
				"label": "refresh",
				"id": "setScriptPackage-refresh",
				"value": true
			}]
		}];

		function createElements(targetContainerId) {
			var selectWrapper = $("<div>", {
				class: "w-full m-2 p-8 text-lg font-medium",
				text: "Pick Function"
			});
			var selectElement = $("<select>", {
				id: "parent-select",
				class: "w-full bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 p-2.5",
				size: 15
			});
			// var defaultOption = $("<option>", {
			//     value: "",
			//     text: "Select a parent"
			// });
			// selectElement.append(defaultOption);
			$.each(parentItems, function(index, value) {
				if (value.disabled === true) {
					var optionElement = $("<option>", {
						value: index,
						text: (value.displayName ? value.displayName : value.name),
						disabled: value.disabled
					});
				} else {
					var optionElement = $("<option>", {
						value: index,
						text: (value.displayName ? value.displayName : value.name)
					});
				}
				selectElement.append(optionElement);
			});
			selectWrapper.append(selectElement);
			var targetContainer = $("#" + targetContainerId);
			targetContainer.append(selectWrapper);
			var formContainer = $("<div>", {
				id: "form-container",
				text: "Setting",
				class: "font-light text-md"
			});
			targetContainer.append(formContainer);
		}

		function createForm(selectedParent) {
			var formHTML = "";
			$.each(selectedParent.children, function(index, value) {
				formHTML += "<div class='m-2'>";
				formHTML += "<label>" + value.label + ":</label>";
				switch (value.type) {
					case "text":
						formHTML += "<input type='text' id='" + value.id + "' class='w-full bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5' value='" + value.value + "'>";
						break;
					case "disabled":
						formHTML += "<input type='text' id='" + value.id + "' class='w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5' value='" + value.value + "' disabled>";
						break;
					case "latex":
						formHTML += "<math-field id='" + value.id + "' virtual-keyboard-mode='manual' class='shadow-md rounded-md px-4 m-2 py-2 border-2 border-violet-500'>" + value.value + "</math-field>";
						break;
					case "number":
						formHTML += "<input type='number' id='" + value.id + "' class='w-full bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5' value='" + value.value + "'>";
						break;
					case "checkbox":
						formHTML += "<input type='checkbox' id='" + value.id + "' " + (value.value ? "checked" : "") + ">";
						break;
					case "select":
						formHTML += "<select id='" + value.id + "' class='w-full bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5'>";
						$.each(value.options, function(index, option) {
							formHTML += "<option value='" + option.value + "' " + (option.value == value.value ? "selected" : "") + ">" + option.text + "</option>";
						});
						formHTML += "</select>";
						break;
					case "color":
						formHTML += "<input type='color' id='" + value.id + "' value='" + value.value + "'>";
						break;
					case "array":
						formHTML += "<input type='text' id='" + value.id + "' class='w-full bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5' value='" + value.value + "'>";
						break;
					case "HTML":
						formHTML += "<textarea id='" + value.id + "' class='hidden'></textarea><div id='" + value.id + "2'>" + value.value + "</div>";
						break;
				}
				formHTML += "</div>";
			});
			$("#form-container").html(formHTML);
		}
		createElements("developerContent");
		$("#parent-select").change(function() {
			var selectedParentIndex = $(this).val();
			var selectedParent = parentItems[selectedParentIndex];
			createForm(selectedParent);
			createCopyField(selectedParent);
		});
		$("#form-container").on("change", "input, select, textarea", function() {
			var selectedParentIndex = $("#parent-select").val();
			var selectedParent = parentItems[selectedParentIndex];
			createCopyField(selectedParent);
		});
		$("#form-container").on("input", "input[type='text'], textarea", function() {
			var selectedParentIndex = $("#parent-select").val();
			var selectedParent = parentItems[selectedParentIndex];
			createCopyField(selectedParent);
		});
		$("#form-container").on("input", "math-field", function() {
			var selectedParentIndex = $("#parent-select").val();
			var selectedParent = parentItems[selectedParentIndex];
			createCopyField(selectedParent);
		});

		function createCopyField(parentName) {
			var children = {};
			$("#form-container").find("input, select, math-field, textarea").each(function() {
				var input = $(this);
				var label = input.prev("label").text().replace(":", "");
				var type = input.attr("type");
				var value;
				if (type === "checkbox") {
					value = input.prop("checked");
				} else {
					if (input.val() != '#000000') value = input.val();
				}
				if (value) {
					children[label] = value;
				}
			});
			var template = "myCalculator." + parentName.name + "(" + stringify(children) + ");";
			var resultContainer = $("<div>", {
				id: "result-container",
				class: "m-8 text-lg font-medium",
				text: "Results"
			});
			var resultTextarea = $("<textarea>", {
				id: "result-textarea",
				text: template,
				class: "w-full bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5",
				readonly: true
			});
			resultContainer.append(resultTextarea);
			$("#result-container").remove();
			$("#form-container").before(resultContainer);
			$("#result-container").on("click", "#result-textarea", function() {
				copyToClipboard();
			});
		}

		function stringify(obj) {
			var str = "{";
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var value = obj[key];
					str += "'" + key + "':";
					if (Array.isArray(value)) {
						str += JSON.stringify(value) + ",";
					} else if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
						str += value.replace(/'/g, '') + ",";
					} else if (typeof value === "string" && value.includes("\\")) {
						str += "\"" + value.replace(/\\/g, "\\\\") + "\",";
					} else if (typeof value === "string") {
						str += "'" + value + "',";
					} else {
						str += value + ",";
					}
				}
			}
			str = str.slice(0, -1) + "}";
			return str;
		}

		function copyToClipboard() {
			$("#result-textarea").select();
			document.execCommand("copy");
			var copiedPopup = $("<div>", {
				class: "fixed inset-0 flex items-center justify-center",
			});
			var copiedMessage = $("<div>", {
				class: "bg-green-500 text-white p-2 rounded-lg text-center shadow-lg p-[2rem]",
				text: "Copied!"
			});
			var copiedIcon = $("<i>", {
				class: "fas fa-check-circle ml-2",
			});
			copiedMessage.append(copiedIcon);
			copiedPopup.append(copiedMessage);
			$("body").append(copiedPopup);
			setTimeout(function() {
				copiedPopup.fadeOut();
			}, 1000);
		}
	}
	get selectedExp() {
		return this.selectedExpressions;
	}
	async setScriptPackage(options = {}) {
		var replaceExpDisplay = (("replaceExp" in options) ? options["replaceExp"] : false);
		var replaceLatexDisplay = (("replaceLatex" in options) ? options["replaceLatex"] : false);
		var replaceTipDisplay = (("replaceTip" in options) ? options["replaceTip"] : false);
		var replaceTheoryDisplay = (("replaceTheory" in options) ? options["replaceTheory"] : false);
		var replaceTableDisplay = (("replaceTable" in options) ? options["replaceTable"] : false);
		var refresh = (("refresh" in options) ? options["refresh"] : false);
		let selectedExp = this.selectedExpressions;
		if (refresh) {
			if (replaceExpDisplay) {
				delay(1000).then(() => replaceExp("sideInstructionsContent"));
				$("#sideInputsContent").on("click", function() {
					updateExp("sideInstructionsContent");
				  });
				  
			}
			if (replaceTipDisplay) replaceTip("sideInstructionsContent");
			
			if (replaceTheoryDisplay) replaceTheory("sideInstructionsContent");
			if (replaceLatexDisplay) replaceLatex("sideInstructionsContent");
			
		} else {
			selectedExp = this.selectedExpressions;
			if (replaceExpDisplay) delay(1000).then(() => replaceExp("sideInstructionsContent"));
			if (replaceTipDisplay) replaceTip("sideInstructionsContent");
			
			if (replaceTheoryDisplay) replaceTheory("sideInstructionsContent");
			if (replaceLatexDisplay) replaceLatex("sideInstructionsContent");
			
		}
				
		function delay(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		}

		function replaceExp(elementId) {
			const element = document.getElementById(elementId);
			if (!element) {
				return;
			}
			element.innerHTML = element.innerHTML.replace(/\\exp{([^}]+)}/g, (match, p1) => {
				const expression = "<math-field read-only class='inline-block relative -mb-2' id='" + p1 + "'>" + selectedExp[p1] + "</math-field>";
				return `${expression}`;
			});
		}

		function updateExp(elementId) {
			const element = document.getElementById(elementId);
			if (!element) {
			  return;
			}
			const mathFields = element.querySelectorAll("math-field[read-only]");
			mathFields.forEach((mathField) => {
			  const id = mathField.id;
			  mathField.innerHTML = selectedExp[id];
			});
		  }
		  


		  async function replaceLatex(elementId) {
			const element = document.getElementById(elementId);
			if (!element) {
			  return;
			}
		  
			// Replace LaTeX in each text node
			const nodes = element.querySelectorAll("*:not(script)");
			for (const node of nodes) {
			  for (const childNode of Array.from(node.childNodes)) {
				if (childNode.nodeType === Node.TEXT_NODE) {
				  const text = childNode.nodeValue;
				  const matches = text.match(/%%([^%]+)%%/g);
				  if (matches) {
					const newNode = document.createElement("span");
					let lastIndex = 0;
					for (const match of matches) {
					  const index = text.indexOf(match, lastIndex);
					  const beforeMatch = text.slice(lastIndex, index);
					  if (beforeMatch) {
						newNode.appendChild(document.createTextNode(beforeMatch));
					  }
					  const latexContent = match.slice(2, -2);
					  const mathField = document.createElement("math-field");
					  mathField.classList.add("read-only", "inline-block", "relative", "-mb-2");
					  mathField.setAttribute("role", "math");
					  mathField.setAttribute("dir", "ltr");
					  mathField.setAttribute("aria-label", "math input field");
					  mathField.setAttribute("contenteditable", "false");
					  mathField.setAttribute("aria-multiline", "false");
					  mathField.setAttribute("tabindex", "0");
					  mathField.textContent = latexContent;
					  newNode.appendChild(mathField);
					  lastIndex = index + match.length;
					}
					const afterMatches = text.slice(lastIndex);
					if (afterMatches) {
					  newNode.appendChild(document.createTextNode(afterMatches));
					}
					node.replaceChild(newNode, childNode);
				  }
				}
			  }
			}
		  
			// Render the LaTeX using MathJax
			await MathJax.typesetPromise(element);
		  }
		  
		  
		  

		function replaceTip(elementId) {
			const element = document.getElementById(elementId);
			if (!element) {
				return;
			}
			element.innerHTML = element.innerHTML.replace(/\\tip{"([^"]+)"}/g, (match, p1) => {
				return `<div class="bg-violet-600 text-white p-2 md:p-3 lg:p-4 m-2 md:m-3 lg:m-4 rounded-lg flex items-center">
				<span class="text-xl md:text-2xl lg:text-3xl mr-2 md:mr-3 lg:mr-4">
				  <i class="fas fa-info-circle"></i>
				</span>
				<div>
				  <h3 class="font-medium">Tip</h3>
				  <p class="text-sm">` + p1 + `</p>
				</div>
			  </div>`;
			});
		}
		function generateRandomString() {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		  
			for (var i = 0; i < 6; i++) {
			  text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
		  
			return text;
		}
		  
		
		async function replaceTheory(elementId) {
			const element = $("#" + elementId);
			let randomSubId = "";
			if (element.length === 0) {
			  return;
			}
			
			
			// Replace theory content
			await element.html(element.html().replace(/\\theory{"([^"]+)","((?:[^"]+|\\"(?![,}]))*)?"}/g, (match, p1, p2) => {
			  randomSubId = generateRandomString();
			  // Add delayed event listener to toggle button
			  addDelayedEventListener(randomSubId);
			  function addDelayedEventListener(randomSubId) {
				setTimeout(function() {
				  $("#sideInstructionsContent #toggle-" + randomSubId).on('click',function() {
					$("#sideInstructionsContent #toggle-" + randomSubId).toggleClass("-rotate-90");
					$("#sideInstructionsContent #body-" + randomSubId).slideToggle();
				  });
				}, 1000);
			}
			
			

			  return `<div class="rounded-lg shadow-lg m-2 md:m-3 lg:m-4 bg-white">
			  <div class="flex flex-row justify-between p-2 md:p-3 lg:p-4">
				<h3 class="text-sm md:text-md lg:text-lg font-medium flex items-center">
				  <i class="fas fa-lightbulb text-violet-600 mr-2"></i>
				  A Note on Theory: ` + p1 + `
				</h3>
				<button id="toggle-` + randomSubId + `" class="bg-transparent text-gray-700 hover:text-gray-800 font-medium py-2 px-2 md:px-4 md:py-2 rounded-full hover:-rotate-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
				  <i class="fas fa-chevron-left text-sm"></i>
				</button>
			  </div>
			  <div id="body-` + randomSubId + `" class="hidden p-2 md:p-6 bg-violet-600 text-white rounded-lg text-sm">
			  ` + p2 + `
			  </div>
			</div>
			`;
			}));
		  }
		  
		  
		  
		  

		function generateRandomString() {
			var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
			var result = '';
			for (var i = 0; i < 12; i++) {
				result += characters.charAt(Math.floor(Math.random() * characters.length));
			}
			return result;
		}
	}
	setGraphs(listSettings) {
		let listOfGraphs = this.listOfGraphs;
		let engine = (("engine" in listSettings) ? listSettings["engine"] : "desmos");
		let copy = (("copy" in listSettings) ? listSettings["copy"] : false);
		let idDiv = listSettings.idDiv;
		let height = (("height" in listSettings) ? listSettings["height"] : "650px");
		let width = (("width" in listSettings) ? listSettings["width"] : "100");
		width = Math.ceil(parseInt(width) * 12 / 100);
		$("#graphsContent").append('<div id="' + idDiv + '" class="col-span-' + width + '"></div>');
		$("#" + idDiv).css({
			"height": height
		});
		$("#sideInputsContent").css({
			"height": height
		});
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
			// Set initial axis labels in the calculator
			calculator.updateSettings({
				showGrid: (("showGrid" in listSettings) ? listSettings["showGrid"] : false),
				expressions: (("expressions" in listSettings) ? listSettings["expressions"] : false),
				keypad: (("keypad" in listSettings) ? listSettings["keypad"] : false),
				zoomFit: (("zoomFit" in listSettings) ? listSettings["zoomFit"] : false),
				settingsMenu: (("settingsMenu" in listSettings) ? listSettings["settingsMenu"] : false),
				showXAxis: (("showXAxis" in listSettings) ? listSettings["showXAxis"] : false),
				showYAxis: (("showYAxis" in listSettings) ? listSettings["showYAxis"] : false),
				xAxisLabel: (("xAxisLabel" in listSettings) ? listSettings["xAxisLabel"] : "x"),
				yAxisLabel: (("yAxisLabel" in listSettings) ? listSettings["yAxisLabel"] : "y")
			});

			if (copy) {
				$("#" + idDiv).append('<div class="'+idDiv+' screenshot-feature absolute -mt-[87px] ml-[5px] z-[40] flex h-[80px] w-[36px] flex-col items-center">\
				<button title="Download PNG" class="w-full h-[40px] rounded-md border border-gray-200 bg-[#ededed] shadow-lg py-2 px-2 text-center font-semibold text-gray-700 transition duration-150 ease-in-out hover:border-transparent hover:bg-gray-500 hover:text-white hover:after:backdrop-blur-sm hover:after:bg-black/50 hover:after:text-white hover:after:content-[attr(title)] hover:after:whitespace-nowrap hover:after:absolute hover:after:top-0 hover:after:right hover:after:px-4 hover:after:py-2 hover:after:-mt-8 hover:after:rounded-md hover:after:shadow-xl hover:after:text-[10px]"><i class="fas fa-file-image"></i></button>\
				<button title="Copy to clipboard" class="w-full h-[40px] rounded-b-md border border-gray-200 bg-[#ededed] shadow-lg py-2 px-2 text-center font-semibold text-gray-700 transition duration-150 ease-in-out hover:border-transparent hover:bg-gray-500 hover:text-white hover:after:backdrop-blur-sm hover:after:bg-black/50 hover:after:text-white hover:after:content-[attr(title)] hover:after:whitespace-nowrap hover:after:absolute hover:after:top-0 hover:after:right hover:after:px-4 hover:after:py-2 hover:after:-mt-8 hover:after:rounded-md hover:after:shadow-xl hover:after:text-[10px]"><i class="fas fa-copy"></i></button>\
			  	</div>');
				  $("#" + idDiv + " .screenshot-feature button:first").click(function() {
					downloadImage($(this).parent().parent().width());
				});
				$("#" + idDiv + " .screenshot-feature button:last").click(function() {
					copyImage($(this).parent().parent().width());
				});

				function downloadImage(w) {
					function takeScreenshot(opts) {
						calculator.asyncScreenshot(opts, function(data) {
							let link = document.createElement("a");
							link.download = idDiv+".png";
							link.href = data;
							link.click();
						});
					};
					var opts = {
						mode: 'stretch',
						width: w,
						height: Number(height.replace(/[^0-9.-]+/g, '')),
						showLabels: true,
						targetPixelRatio: 2
					};
					takeScreenshot(opts);
				}

				function copyImage(w) {
					function takeScreenshot(opts) {
						calculator.asyncScreenshot(opts, async function(data) {
							let imgEl = document.createElement("img");
							imgEl.src = data;
							const dataSrc = await fetch(imgEl.src);
							const blob = await dataSrc.blob();

							try{
								await navigator.clipboard.write([
									new ClipboardItem({
										[blob.type]: blob,
									})
								])
								var copiedPopup = $("<div>", {
									class: "fixed inset-0 flex items-center justify-center",
								});
								var copiedMessage = $("<div>", {
									class: "bg-green-500 text-white p-2 rounded-lg text-center shadow-lg p-[2rem]",
									text: "Copied!"
								});
								var copiedIcon = $("<i>", {
									class: "fas fa-check-circle ml-2",
								});
								copiedMessage.append(copiedIcon);
								copiedPopup.append(copiedMessage);
								$("body").append(copiedPopup);
								setTimeout(function() {
									copiedPopup.fadeOut();
								}, 1000);
							} catch(e){
								var copiedPopup = $("<div>", {
									class: "fixed inset-0 flex items-center justify-center",
								});
								var copiedMessage = $("<div>", {
									class: "bg-red-500 text-white p-2 rounded-lg text-center shadow-lg p-[2rem]",
									text: "Failed!"
								});
								var copiedIcon = $("<i>", {
									class: "fas fa-times-circle ml-2",
								});
								copiedMessage.append(copiedIcon);
								copiedPopup.append(copiedMessage);
								$("body").append(copiedPopup);
								setTimeout(function() {
									copiedPopup.fadeOut();
								}, 1000);
							}
						});
					};
					var opts = {
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
		let top = (("top" in options) ? options["top"] : "0");
		let bottom = (("bottom" in options) ? options["bottom"] : "0");
		let left = (("left" in options) ? options["left"] : "0");
		let right = (("right" in options) ? options["right"] : "0");
		let listGraphs = options["listGraphs"];
		let listOfGraphs = this.listOfGraphs;
	
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
		$.each(listGraphs, function(k, i) {
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
			if (getQuadrant(top, bottom, left, right) === 2) {
				t.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': parseInt(r.numericValue)*(1-tolerance)/2,
						'right': parseInt(r.numericValue)*tolerance,
						'bottom': parseInt(t.numericValue)*(1-tolerance)/2,
						'top': parseInt(t.numericValue)*tolerance
					});
				});
				r.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': parseInt(r.numericValue)*(1-tolerance)/2,
						'right': parseInt(r.numericValue)*tolerance,
						'bottom': parseInt(t.numericValue)*(1-tolerance)/2,
						'top': parseInt(t.numericValue)*tolerance
					});
				});
			} else if (getQuadrant(top, bottom, left, right) === 1) {
				t.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': -parseInt(l.numericValue),
						'right': parseInt(right),
						'bottom': parseInt(bottom),
						'top': parseInt(t.numericValue)
					});
				});
				l.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': -parseInt(l.numericValue),
						'right': parseInt(right),
						'bottom': parseInt(bottom),
						'top': parseInt(t.numericValue)
					});
				});

			} else if (getQuadrant(top, bottom, left, right) === 3) {
				b.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': -parseInt(l.numericValue),
						'right': parseInt(right),
						'bottom': -parseInt(b.numericValue),
						'top': parseInt(top)
					});
				});
				l.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': -parseInt(l.numericValue),
						'right': parseInt(right),
						'bottom': -parseInt(b.numericValue),
						'top': parseInt(top)
					});
				});
			} else if (getQuadrant(top, bottom, left, right) === 4) {
				b.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': parseInt(left),
						'right': parseInt(r.numericValue),
						'bottom': -parseInt(b.numericValue),
						'top': parseInt(top)
					});
				});
				r.observe('numericValue', function() {
					listOfGraphs[i].setMathBounds({
						'left': parseInt(left),
						'right': parseInt(r.numericValue),
						'bottom': -parseInt(b.numericValue),
						'top': parseInt(top)
					});
				});
			}
		});
	}
	
	setVotingTable(listSettings) {
		let listOfGraphs = this.listOfGraphs;
		var engine = (("engine" in listSettings) ? listSettings["engine"] : "voting");
		let idDiv = listSettings["idDiv"];
		let setPreferenceID = listSettings["setPreferenceID"];
		var height = (("height" in listSettings) ? listSettings["height"] : "450px");
		var width = (("width" in listSettings) ? listSettings["width"] : "100");
		width = Math.ceil(parseInt(width) * 12 / 100);
		$("#graphsContent").append('<div id="' + idDiv + '" class="col-span-' + width + '"></div>');
		$("#" + idDiv).css({
			"height": height
		});
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		ThisObject.setDebug();
		if (engine == "voting") { //table
			var table_var = `
			<div class="row">
				<div class="col-sm-4">
					<ol class='limited_drop_targets1 vertical'>
						<ul>Voter 1 (1)</ul>
						<li>10</li>
						<li>20</li>
						<li>30</li>
					</ol>
				</div>
				<div class="col-sm-4">
					<ol class='limited_drop_targets1 vertical'>
						<ul>Voter 2 (1)</ul>
						<li>10</li>
						<li>20</li>
						<li>30</li>
					</ol>
				</div>
				<div class="col-sm-4">
					<ol class='limited_drop_targets1 vertical'>
						<ul>Voter 3 (1)</ul>
						<li>10</li>
						<li>20</li>
						<li>30</li>
					</ol>
				</div>
			</div>

			<div id="serialize_output" class="d-none"></div>
		  	`;
			$("#" + idDiv).html(table_var);
			// Sortable rows
			var group = $("ol.limited_drop_targets1").sortable({
				group: 'limited_drop_targets1',
				isValidTarget: function($item, container) {
					if ($item.is(".highlight")) return true;
					else return $item.parent("ol")[0] == container.el[0];
				},
				onDrop: function($item, container, _super) {
					$('#serialize_output').text(group.sortable("serialize").get().join(";"));
					_super($item, container);
					selectedExp[setPreferenceID] = group.sortable("serialize").get().join(";");
					if (debug) ThisObject.setDebug();
				},
				serialize: function(parent, children, isContainer) {
					return isContainer ? children.join() : parent.text();
				},
				tolerance: 6,
				distance: 10
			});
			selectedExp[setPreferenceID] = group.sortable("serialize").get().join(";");
			if (debug) ThisObject.setDebug();
			listOfGraphs.push(group);
		}
	}
	addPreferences(options) {
		let idDiv = options["idDiv"];
		let listIDs = options["listIDs"];
		let listGraphs = options["listGraphs"];
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		ThisObject.setDebug();
		selectedExp[idDiv] = listIDs;
		let serialize_output = "";
		$.each(listGraphs, function(k, i) {
			if (typeof listOfGraphs[i].sortable !== "undefined") { //makesure you use the voting engine
				serialize_output = listOfGraphs[i].sortable("serialize").get().join(";");
			}
			if (typeof listOfGraphs[i].setExpression !== "undefined") {
				$(".limited_drop_targets1 > li").mouseover(function() {
					$.each(listIDs, function(t, l) {
						listOfGraphs[i].setExpression({
							id: listIDs[t],
							latex: selectedExp[listIDs[t]].split('=')[0] + "=[" + serialize_output.split(';')[0] + "]"
						});
						serialize_output = serialize_output.substring(serialize_output.indexOf(";") + 1);
						//alert(serialize_output);
					});
					serialize_output = selectedExp[idDiv];
				}).mouseleave(function() { //on move li
					$.each(listIDs, function(t, l) {
						listOfGraphs[i].setExpression({
							id: listIDs[t],
							latex: selectedExp[listIDs[t]].split('=')[0] + "=[" + serialize_output.split(';')[0] + "]"
						});
						serialize_output = serialize_output.substring(serialize_output.indexOf(";") + 1);
						//alert(serialize_output);
					});
					serialize_output = selectedExp[idDiv];
				});
			}
		});
		selectedExp[idDiv] = serialize_output;
		if (debug) ThisObject.setDebug();
		let dicOfPref = [];
		$.each(listIDs, function(k, i) {
			var expression = selectedExp[i].split('=')[1];
			expression = (expression.replace(/[\[\]']+/g, '')); //remove square bracket
			expression = expression.split(",");
			dicOfPref.push(expression);
		});
	}
	setDebug() {
		function output(inp) {
			$("pre").html(inp);
		}

		function syntaxHighlight(json) {
			json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
				var cls = 'number';
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = 'key';
					} else {
						cls = 'string';
					}
				} else if (/true|false/.test(match)) {
					cls = 'boolean';
				} else if (/null/.test(match)) {
					cls = 'null';
				}
				return '<span class="' + cls + '">' + match + '</span>';
			});
		}
		let obj = this.selectedExpressions;
		let str = JSON.stringify(obj, undefined, 4);
		document.createTextNode(output(syntaxHighlight(str)));
		$("pre").css({
			"outline": "1px solid #ccc",
			"padding": "5px 5px 500px",
			"margin": "5px"
		});
		$(".string").css({
			"color": "green"
		});
		$(".number").css({
			"color": "darkorange"
		});
		$(".boolean").css({
			"color": "blue"
		});
		$(".null").css({
			"color": "magenta"
		});
		$(".key").css({
			"color": "red"
		});
		$('.key').click(function(event) {
			var l = $(this);
			if (l.css("background-color") == "rgba(0, 0, 0, 0)") {
				l.css({
					"background-color": "yellow"
				});
			} else {
				l.css({
					"background-color": ""
				});
			}
		});
	}
	addSelectInput(options) {
		function addSelectInputField() {
			if ($("#" + idDiv).length == 0) {
				$("#sideInputsContent").append('<div class="w-full flex flex-col"><select class="form-select bg-transparent border-2 border-violet-500 text-gray-900 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 mx-2 p-2.5" id="' + idDiv + '"><option selected="selected">Hide All</option></select></div>');
			}
			$("#" + idDiv).append('<option>' + item + '</option>');
		}

		function hideAllListGroups() {
			$(document).ready(function() {
				setTimeout(() => {
					hideInputsFromList();
					hideExpressionsFromList();
				}, 1000);
			});
		}

		function hideInputsFromList() {
			$.each(listGroup, function(index, value) {
				if ($('#sideInputsContent .' + value).length) {
					$('#sideInputsContent .' + value).parent().hide();
				}
			});
		}

		function hideExpressionsFromList() {
			$.each(listGraphs, function(k, i) {
				$(listGroup).each(function(j) {
					listOfGraphs[i].setExpression({
						"id": listGroup[j],
						hidden: true,
						showLabel: false
					});
				});
			});
		}

		function onChangeFunction() {
			$("#" + idDiv).change(function() {
				//$("#refreshIcon").parent().show();
				var pickedItem = $(this).val()
				if (pickedItem == "Hide All") {
					hideInputsFromList();
					hideExpressionsFromList();
				} else {
					showPickedItem(pickedItem);
				}
			});
		}

		function showPickedItem(Pitem) {
			showInputsFromList(Pitem);
			showExpressionsFromList(Pitem);
		}

		function showInputsFromList(Pitem) {
			hideInputsFromList();
			if (Pitem == item) {
				$.each(listGroup, function(index, value) {
					if ($('#sideInputsContent .' + value).length) {
						$('#sideInputsContent .' + value).parent().show();
					}
				});
			}
		}

		function showExpressionsFromList(Pitem) {
			hideExpressionsFromList();
			if (Pitem == item) {
				$.each(listGraphs, function(k, i) {
					$(listGroup).each(function(j) {
						listOfGraphs[i].setExpression({
							"id": listGroup[j],
							hidden: false,
							showLabel: true
						});
					});
				});
			}
		}
		let idDiv = options.idDiv;
		let item = options.item;
		let listGroup = options.listGroup;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		addSelectInputField(); //add input field function
		hideAllListGroups(); //hide all inputs and expressions
		onChangeFunction();
	}
	addSliderInput(options) {
		let idDiv = options["idDiv"];
		let title = options["title"];
		let latex = options["latex"];
		let min = options["min"];
		let max = options["max"];
		let step = options["step"];
		let defaultValue = options["defaultValue"];
		let listGraphs = options["listGraphs"];
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		ThisObject.setDebug();
		$("#sideInputsContent").append('<div class="relative text-md flex flex-col gap-y-2">' + title + ': <input type="number" class="' + idDiv + ' bg-transparent shadow-md mx-2 rounded-md px-4 py-2 border-2 border-violet-500" min="' + min + '" max="' + max + '" step="' + step + '" value="' + defaultValue + '" /> <input type="range" class="slider mx-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" min="' + min + '" max="' + max + '" step="' + step + '" value="' + defaultValue + '" id="' + idDiv + '" /></div>');
		convertMaxMin();
		displaySliderInDesmos();
		onChangeFromDesmos();
		onChangeFronInput();

		function displaySliderInDesmos() {
			$.each(listGraphs, function(k, i) {
				listOfGraphs[i].setExpression({
					id: idDiv,
					latex: latex + '=' + defaultValue,
					sliderBounds: {
						min: min,
						max: max,
						step: step
					}
				});
				selectedExp[idDiv] = latex + '=' + defaultValue;
				if (debug) ThisObject.setDebug();
			});
		}

		function onChangeFromDesmos() {
			$.each(listGraphs, function(k, i) {
				var x = listOfGraphs[i].HelperExpression({
					latex: latex
				});
				x.observe('numericValue', function() {
					defaultValue = x.numericValue;
					selectedExp[idDiv] = defaultValue;
					$("#" + idDiv).val(defaultValue);
					$("." + idDiv).val(defaultValue);
					displaySliderInDesmos();
					$("#" + idDiv).trigger("change");
				});
			});
		}

		function onChangeFronInput() {
			//slider
			$("#" + idDiv).change(function() {
				var newValue = $("#" + idDiv).val()
				$("#" + idDiv).prev($("input[type='number']")).val(newValue);
				defaultValue = newValue;
				displaySliderInDesmos();
			});
			//input
			$("." + idDiv).on("input", function() {
				var newValue = $(this).val()
				defaultValue = newValue;
				displaySliderInDesmos();
			});
		}

		function convertMaxMin() {
			$.each(listGraphs, function(k, i) {
				if (jQuery.type(max) == "string" && !isNumber(max)) {
					var x = listOfGraphs[i].HelperExpression({
						latex: max
					});
					x.observe('numericValue', function() {
						$("#" + idDiv).attr("max", x.numericValue);
						$("." + idDiv).attr("max", x.numericValue);
					});
				}
				if (jQuery.type(min) == "string" && !isNumber(min)) {
					var y = listOfGraphs[i].HelperExpression({
						latex: min
					});
					y.observe('numericValue', function() {
						$("#" + idDiv).attr("min", y.numericValue);
						$("." + idDiv).attr("min", y.numericValue);
					});
				}
			});
		}
	}
	line(){
		$("#sideInputsContent").append('<div class="bg-transperent shadow-sm shadow-violet-900/40 h-[1px] mx-12 my-4"></div>');
	}
	addFuncInput(options) {
		let idDiv = options["idDiv"];
		let title = options["title"];
		let func = options["func"];
		let latex = options["latex"];
		let constraint = (("constraint" in options) ? options["constraint"] : "");
		let color = (("color" in options) ? options["color"] : "black");
		let lineStyle = (("lineStyle" in options) ? options["lineStyle"] : Desmos.Styles.SOLID);
		let lineWidth = (("lineWidth" in options) ? options["lineWidth"] : "2.5");
		let lineOpacity = (("lineOpacity" in options) ? options["lineOpacity"] : "0.9");
		let style = (("style" in options) ? options["style"] : "normal");
		let hidden = (("hidden" in options) ? options["hidden"] : false);
		let listGraphs = options["listGraphs"];
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		ThisObject.setDebug();
		$("#sideInputsContent").append('<p class="">' + title + ': <math-field id="' + idDiv + '" virtual-keyboard-mode="manual" class="shadow-md rounded-md px-4 m-2 py-2 border-2 border-violet-500 form-control">' + latex + '</math-field></p>');
		document.body.style.setProperty("--keycap-background", "red");
		$.each(listGraphs, function(k, i) {
			listOfGraphs[i].setExpression({
				"id": idDiv,
				"type": "expression",
				"latex": func + "=" + latex + constraint,
				"hidden": hidden,
				"color": (color == "random") ? "#" + Math.floor(Math.random() * 16777215).toString(16) : color,
				"lineStyle": lineStyle,
				"lineWidth": lineWidth,
				"lineOpacity": lineOpacity
			});
			selectedExp[idDiv] = func + "=" + latex;
			
			$("#" + idDiv).on("input", function() {
				var newValue = $(this).val()
				listOfGraphs[i].setExpression({
					id: idDiv,
					latex: func + "=" + newValue + constraint
				});
				selectedExp[idDiv] = func + "=" + newValue;
				if (debug) ThisObject.setDebug();
			});
		});
	}
	addDynamicInput(options) {
		let idDiv = options["idDiv"];
		let title = options["title"];
		let index = (("index" in options) ? options["index"] : 1);
		let limit = (("limit" in options) ? options["limit"] : 3);
		let func = options["func"];
		let latex = options["latex"];
		let constraint = (("constraint" in options) ? options["constraint"] : "");
		let color = (("color" in options) ? options["color"] : "random");
		let style = (("style" in options) ? options["style"] : "normal");
		let hidden = (("hidden" in options) ? options["hidden"] : false);
		let listGraphs = options["listGraphs"];
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		this.allDynamicInputs = {};
		let allDynamicInputs = this.allDynamicInputs;
		initializeBaseValue();
		iterateAllDynamicInputs();
		selectedExp[idDiv] = allDynamicInputs;
		if (debug) ThisObject.setDebug();
		addClicker();

		function initializeBaseValue() {
			$("#sideInputsContent").append('<p class=""><b>' + title + ' ' + index + ':</b> <math-field id="' + idDiv + index + '" virtual-keyboard-mode="manual" class="shadow-md m-2 border-2 border-violet-500 rounded-md px-4 py-2 form-control ' + idDiv + '">' + latex + '</math-field></p>');
			//allDynamicInputs.index=index-1;
			//allDynamicInputs.value=func+"="+latex;
			selectedExp[idDiv] = allDynamicInputs;
			if (debug) ThisObject.setDebug();
		}

		function iterateAllDynamicInputs() {
			try {
				//get array of all Inputs from all dynamic inputs
				const arrayOfDynamiInputs = getClassValues("." + idDiv);
				const arrayValues = [];
				$(arrayOfDynamiInputs).each(function(i) {
					// Add the value of each element to the array
					addGraphToDesmos(arrayOfDynamiInputs[i], i + 1);
					arrayValues.push({
						[i + 1]: {
							"value": addStringBeforeParens(func, i + 1) + "=" + arrayOfDynamiInputs[i]
						}
					});
					if (debug) ThisObject.setDebug();
				});
				allDynamicInputs = arrayToObject(arrayValues);
			} catch (err) {
				console.log(err)
			}
			$('.' + idDiv).bind("change", function() {
				iterateAllDynamicInputs();
				selectedExp[idDiv] = allDynamicInputs;
				$("#sideInputsContent math-field").trigger("click"); //it will trigger as if i clicked on input
				if (debug) ThisObject.setDebug();
			});
		}

		function addGraphToDesmos(recievedLatex, indexNum) {
			$.each(listGraphs, function(k, i) {
				listOfGraphs[i].setExpression({
					"id": idDiv + indexNum,
					"type": "expression",
					"latex": addStringBeforeParens(func, indexNum) + "=" + recievedLatex + constraint,
					"hidden": hidden,
					"color": (color == "random") ? "#" + Math.floor(Math.random() * 16777215).toString(16) : color
				});
			});
		}

		function removeGraphFromDesmos(idDivToRemove, indexNum, indexNumEnd) {
			for (let j = indexNum; j <= indexNumEnd; j++) {
				$.each(listGraphs, function(k, i) {
					listOfGraphs[i].removeExpression({
						"id": idDivToRemove + j
					});
				});
			}
		}

		function addClicker() {
			$("#sideInputsContent").append('<p><button type="button" id="addDynamicInput" class="flex items-center w-full px-4 py-2  text-white bg-violet-500 rounded-full disabled:bg-gray-700 hover:bg-violet-700 focus:outline-none focus:shadow-outline text-sm form-control"><i class="fa fa-plus px-4"></i>Add</button></p>');
			$('#addDynamicInput').click(function(event) {
				const arrayOfDynamiInputs = getClassValues("." + idDiv);
				const lastValue = arrayOfDynamiInputs[arrayOfDynamiInputs.length - 1];
				if (arrayOfDynamiInputs.length < limit) {
					$("#addDynamicInput").before('<p class=""><b>' + title + ' ' + (arrayOfDynamiInputs.length + 1) + ':</b> <math-field id="' + idDiv + (arrayOfDynamiInputs.length + 1) + '" virtual-keyboard-mode="manual" class="shadow-md m-2 border-2 border-violet-500 rounded-md px-4 py-2 form-control ' + idDiv + '">' + lastValue + '</math-field></p>');
					iterateAllDynamicInputs();
					selectedExp[idDiv] = allDynamicInputs;
					if (debug) ThisObject.setDebug();
					addRemover();
					if (arrayOfDynamiInputs.length + 1 === limit) //remove add button
						$(this).prop("disabled", true);
				}
			});
		}

		function addRemover() {
			const arrayOfDynamiInputs = getClassValues("." + idDiv);
			const lastValue = arrayOfDynamiInputs[arrayOfDynamiInputs.length - 1];
			if (arrayOfDynamiInputs.length > 1) { //more than 1 dynamic input. then show remove buttn
				$("#" + idDiv + (arrayOfDynamiInputs.length)).after('<p><button type="button" class="flex items-center text-center w-full px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline text-sm form-control removeDynamicInput ' + idDiv + (arrayOfDynamiInputs.length) + '"><i class="fa fa-trash px-4"></i>Remove</button></p>');
			}
			$('button.removeDynamicInput').unbind().click(function(event) {
				var getClasses = $(this).attr("class");
				var Classes = getClasses.split(" ");
				var removeClassSelected = Classes[Classes.length - 1];
				removeGraphFromDesmos(idDiv, uniqueChars(removeClassSelected, idDiv), arrayOfDynamiInputs.length); //main
				recursionRemoveDesmos(selectedExp[idDiv][uniqueChars(removeClassSelected, idDiv)], uniqueChars(removeClassSelected, idDiv)); //sub
				function recursionRemoveDesmos(objectTree, c) {
					$.each(objectTree, function(k, i) {
						if (k !== "value") {
							removeGraphFromDesmos(k, c, arrayOfDynamiInputs.length);
							recursionRemoveDesmos(objectTree[k], c);
						}
					});
				}
				var getClasses = this.className;
				var Classes = getClasses.split(" ");
				let idDivSelected = Classes[Classes.length - 1];
				$("#" + idDivSelected).parent().remove();
				//delete selectedExp[idDiv][getNumberFromString(idDivSelected)-1];
				//reorder all dynamicinputs
				reorderDynamicInput();
				iterateAllDynamicInputs();
				if (arrayOfDynamiInputs.length - 1 < limit) {
					$("#addDynamicInput").prop("disabled", false);
				}
				selectedExp[idDiv] = allDynamicInputs;
				$("#sideInputsContent math-field").trigger("click"); //it will trigger as if i clicked on input
				if (debug) ThisObject.setDebug();
			});
		}

		function reorderDynamicInput() {
			$("." + idDiv).each(function(i) {
				$(this).attr("id", idDiv + (i + 1));
				if ($(this).next().children("button").length) {
					var getClasses = $(this).next().children("button").attr("class");
					var Classes = getClasses.split(" ");
					let idDivSelected = Classes[Classes.length - 1];
					$(this).next().children("button").removeClass(idDivSelected).addClass(idDiv + (i + 1));
				}
				$(this).parent().children("b").remove();
				$(this).before('<b>' + title + ' ' + (i + 1) + ': </b>');
			});
		}
	}
	addSwitchInput(options) {
		let idDiv = options.idDiv;
		let title = options.title;
		let hideToggle = (("hideToggle" in options) ? options["hideToggle"] : false);
		let idDivs = options.idDivs;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		$("#sideInputsContent").append('<div class="relative text-md flex flex-col gap-y-2"><span class="w-full text-sm text-gray-900">' + title + ':</span>\
		<label class="' + idDiv + ' relative flex flex-col items-start cursor-pointer ml-2">\
		  <input type="checkbox" value="" id="' + idDiv + '" data-function="triggerCheck" class="sr-only peer" checked>\
		  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&quot;&quot;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>\
		</label></div>');
		triggerCheck();

		function triggerCheck() {
			if (hideToggle) {
				$("#" + idDiv).change(function() {
					var checkBoxes = $(this);
					if (checkBoxes.is(':checked')) {
						$.each(listGraphs, function(k, i) {
							$(idDivs).each(function(j) {
								listOfGraphs[i].setExpression({
									"id": idDivs[j],
									"hidden": false,
									"showLabel": true
								});
							});
						});
					} else {
						$.each(listGraphs, function(k, i) {
							$(idDivs).each(function(j) {
								listOfGraphs[i].setExpression({
									"id": idDivs[j],
									"hidden": true,
									"showLabel": false
								});
							});
						});
					}
				});
			} else {
				//clear all by default
				$.each(listGraphs, function(k, i) {
					$.each(idDivs, function(l, j) {
						listOfGraphs[i].setExpression({
							"id": j,
							"latex": ""
						});
					});
				});
				$("#" + idDiv).change(function() {
					var checkBoxes = $(this);
					if (checkBoxes.is(':checked')) {
						$.each(listGraphs, function(k, i) {
							$.each(idDivs, function(l, j) {
								listOfGraphs[i].setExpression({
									"id": j,
									"latex": selectedExp[j]
								});
								if (debug) ThisObject.setDebug();
							});
						});
					} else {
						$.each(listGraphs, function(k, i) {
							$.each(idDivs, function(l, j) {
								listOfGraphs[i].setExpression({
									"id": j,
									"latex": ""
								});
								if (debug) ThisObject.setDebug();
							});
						});
					}
				});
			}
		}
	}
	setValue(options) {
		let idDiv = options.idDiv;
		let latex = options.latex;
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let decimal = (("decimal" in options) ? options.decimal : 0);
		let debug = this.debug;
		let ThisObject = this;
		ThisObject.setDebug();
		$.each(listGraphs, function(k, i) {
			var x = listOfGraphs[i].HelperExpression({
				latex: latex
			});
			x.observe('numericValue', function() {
				selectedExp[idDiv] = x.numericValue.toFixed(decimal);
				if (debug) ThisObject.setDebug();
				// $("#sideInputsContent").find('math-field').trigger('input');
			});
		});
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
		let selectedExp = this.selectedExpressions;
		let listOfGraphs = this.listOfGraphs;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		if (calc === "simpleDerive") {
			addRefreshButton();
			runCalcEvent(simpleDerive);
			updateOnEvent(simpleDerive);
		}
		else if (calc === "simpleSubstitute") {
			addRefreshButton();
			runCalcEvent(simpleSubstitute);
			updateOnEvent(simpleSubstitute);
		} else if (calc === "simpleInverse") {
			addRefreshButton();
			runCalcEvent(simpleInverse);
			updateOnEvent(simpleInverse);
		} else if (calc === "simpleCompute") {
			addRefreshButton();
			runCalcEvent(simpleCompute);
			updateOnEvent(simpleCompute);
		} else if (calc === "simpleIntersect") {
			addRefreshButton();
			runCalcEvent(simpleIntersect);
			updateOnEvent(simpleIntersect);
		} else if (calc === "simpleAdd") {
			addRefreshButton();
			runCalcEvent(simpleAdd);
			updateOnEvent(simpleAdd);
		} else if (calc === "simpleSub") {
			addRefreshButton();
			runCalcEvent(simpleSub);
			updateOnEvent(simpleSub);
		} else if (calc === "simpleMultiply") {
			addRefreshButton();
			runCalcEvent(simpleMultiply);
			updateOnEvent(simpleMultiply);
		} else if (calc === "simpleDivide") {
			addRefreshButton();
			runCalcEvent(simpleDivide);
			updateOnEvent(simpleDivide);
		} else if (calc === "simplePow") {
			addRefreshButton();
			runCalcEvent(simplePow);
			updateOnEvent(simplePow);
		} else if (calc === "simpleFOC") {
			addRefreshButton();
			runCalcEvent(simpleFOC);
			updateOnEvent(simpleFOC);
		} else if (calc === "advanceSubstitute") {
			addRefreshButton();
			runCalcEvent(advanceSubstitute);
			updateOnEvent(advanceSubstitute);
		} else if (calc === "simpleLag") {
			addRefreshButton();
			runCalcEvent(simpleLag);
			updateOnEvent(simpleLag);
		} else if (calc === "advanceFindIntersection") {
			addRefreshButton();
			runCalcEvent(advanceFindIntersection);
			updateOnEvent(advanceFindIntersection);
		} else {
			if (latex === "") {
				alert("latex variable is empty");
				return;
			}
			runCalcEvent(simpleReturn);
			updateOnEvent(simpleReturn);
		}
		function delay(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		}
		function addRefreshButton() {
			if ($('#sideInputsContent #refreshButton').length == 0) {
			  $("#creatorsContent").after('<div id="refreshButton" class="sticky top-10 m-2 z-[39]"><button type="button" class="active:bg-green-900 flex items-center text-center w-full px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline text-sm group "><i class="group-hover:-rotate-90 group-active:-rotate-180 fa fa-sync-alt px-4"></i>Refresh</button></div>');			
			}
		}
		  

		function runCalcEvent(caclIt) {
			let maxRetries = 3;
			let success = false;
		
			for (let i = 0; i < maxRetries; i++) {
				try {
					selectedExp[idDiv] = caclIt();
					if (debug) ThisObject.setDebug();
					addGraphToDesmos(selectedExp[idDiv], "");
					success = true;
					break; // Exit the loop if the function was successful
				} catch (e) {
					console.warn(`Attempt ${i + 1} failed: ${e.message}`);
					if (i === maxRetries - 1) {
						alert(`All ${maxRetries} attempts failed. Error: ${e}`);
					}
				}
			}
		
			if (!success) {
				// Handle the case when all retries failed, if necessary
			}
		}
		
		function runCalcEvent2(caclIt) {
			if (!hasKey(selectedExp, parentIdDiv) && parentIdDiv && typeof myVariable === 'string') {
				alert("parentIdDiv does not exists, choose a different one");
				return;
			}
			var expParentValue = selectedExp[parentIdDiv];
			derivedValue = caclIt(expParentValue, "");
			selectedExp[idDiv] = derivedValue;
			if (debug) ThisObject.setDebug();
			addGraphToDesmos(derivedValue, "");
		}
		////////////////////
		///////////////////
		///Functions
		////////////////////
		///////////////////
		function simpleReturn() {
			return latex;
		}

		function simpleDerive(expression = "", subScript = "") {
			const tempList = {}
			$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), function(k, i) {
				tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
			});
			var x = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv])));
			nerdamer.setFunction('f', tempList[getValuesInParens(NewfunEqu)[solveFor]], x);
			var FOC = nerdamer.diff(nerdamer('f(' + tempList[getValuesInParens(NewfunEqu)[solveFor]] + ')'), tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString();
			var FOCLatex = outMath(FOC);
			FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
			FOCLatex = (subScript === "" ? NewfunEqu + "=" + FOCLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + FOCLatex);
			return FOCLatex;
		}

		function simpleSubstitute(expression = "", subScript = "") {
			const parList = []
			const valList = []
			$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), function(k, i) {
				parList.push(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[k]);
			});
			nerdamer.setFunction('f', parList, nerdamer.convertFromLaTeX(inMath(getSubstringAfterEquals(selectedExp[parentIdDiv]))));

			$.each(getValuesInParens(NewfunEqu), function(k, i) {
				valList.push(getSubstringAfterEquals(selectedExp[getValuesInParens(NewfunEqu)[k]]));

			});
			return replaceValuesInParentheses(NewfunEqu, parList) +"="+ nerdamer('simplify('+nerdamer('f('+valList+')').evaluate().toString()+')').text('decimals', 3);
		}

		function simpleInverse(expression = "", subScript = "") {
			const tempList = {}
			$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), function(k, i) {
				tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
			});
			tempList[getValuesInParens(NewfunEqu)[0]] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
			var x = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv])));
			nerdamer.setFunction('f', tempList[getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[solveFor]], x);
			var inverseValue = nerdamer(tempList[getValuesInParens(NewfunEqu)[0]] + '=' + nerdamer('f(' + tempList[getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[solveFor]] + ')')).solveFor(tempList[getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[solveFor]]).toString();
			var inverseValueLatex = outMath(inverseValue);
			inverseValueLatex = replaceValuesWithKeys(tempList, inverseValueLatex);
			if (inverseValueLatex === "") {
				inverseValueLatex = (subScript === "" ? NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[parentIdDiv]) : addStringBeforeParens(NewfunEqu, subScript) + "=" + getSubstringAfterEquals(selectedExp[parentIdDiv]));
			} else {
				inverseValueLatex = (subScript === "" ? NewfunEqu + "=" + inverseValueLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + inverseValueLatex);
			}
			return inverseValueLatex;
		}

		function simpleCompute(expression = "", subScript = "") {
			const tempList = {}


			let obj = {};
			let words = compute.match(/[^\s()+\-^/*]+/g);
			for (var i = 0; i < words.length; i++) {
				if (selectedExp.hasOwnProperty(words[i]) && selectedExp[words[i]] !== undefined) {
					if (getSubstringBeforeEquals(selectedExp[words[i]]) != null) {
						let tempArr = getValuesInParens(getSubstringBeforeEquals(selectedExp[words[i]]));
							$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[words[i]])), function(l, j) {
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

		function simpleIntersect(expression = "", subScript = "") {
			const tempList = {}
			function parseComputeString(compute) {
				// Check if the string contains the '~' character
				if (!compute.includes('~')) {
				  console.error("The 'compute' string must contain the '~' character.");
				  return;
				}
				// Split the string by '~'
				let words = compute.split('~');
				// Create an empty object
				let result = {};
				// Iterate through the words and add them as keys to the object
				words.forEach(word => {
					let tempArr = getValuesInParens(getSubstringBeforeEquals(selectedExp[word]));
					$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[word])), function(l, j) {
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
							tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[word])), tempList);
						}
					});
					result[word] = inMath(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[word])));;
				});

				
		  
				return result;
			  }

			  function solveEquationsFromObject(obj) {
				// Get the object's keys
				let keys = Object.keys(obj);
			  
				// Check if the object has at least 2 keys
				if (keys.length < 2) {
				  console.error("The object must have at least 2 keys.");
				  return;
				}
			  
				// Get the values of the first two keys
				let firstValue = obj[keys[0]];
				let secondValue = obj[keys[1]];
			  
				// Create two equations with a common variable 'a'
				let equation1 = firstValue + '=y';
				let equation2 = secondValue + '=y';
			  
				// Create an array of the equations
				let equations = [equation1, equation2];
			  
				// Solve the equations using nerdamer
				nerdamer.set('SOLUTIONS_AS_OBJECT', true)
				let sol = nerdamer.solveEquations(equations);
				let updatedSol = {};

				for (let key in sol) {
				if (key !== 'y') {
					updatedSol['x'] = sol[key];
				} else {
					updatedSol[key] = sol[key];
				}
				}
		  
				return updatedSol;
			  }
			  
			  let object = parseComputeString(compute);
			  let solution = solveEquationsFromObject(object);
			  $.each(solution, function(key, value) {
				var subId = (idDiv + "_" + key);
				var subNewfunEqu = NewfunEqu + "_{" + key + "}";
				selectedExp[subId] = subNewfunEqu + "=" + nerdamer(value).evaluate().toString();
				if (debug) ThisObject.setDebug();
				$.each(listGraphs, function(k, i) {
					listOfGraphs[i].setExpression({
						"id": subId,
						"type": "expression",
						"latex": subNewfunEqu + "=" + nerdamer(value).evaluate().toString()
					});
				});
			});
			var returnValue = [];
			$.each(solution, function(key, value) {
				returnValue.push(value);
			});
			return NewfunEqu + "=[" + returnValue + "]";
			
			
		}


		function simpleAdd(expression = "", subScript = "") {
			const tempList = {}
			$.each(parentIdDiv, function(k, i) {
				$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), function(l, j) {
					tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), tempList);
				});
			});
			$.each(parentIdDiv, function(k, i) {
				if (lastSum === "") {
					lastSum = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[i]);
				} else {
					var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(lastSum))));
					var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(selectedExp[i]))));
					x = nerdamer(x).add(y);
					var Latex = replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
					Latex = replaceValuesWithKeys(tempList, Latex);
					lastSum = NewfunEqu + "=" + Latex;
				}
			});
			return lastSum;
		}

		
		function simpleSub(expression = "", subScript = "") {	//new function audit it after
			$.each(parentIdDiv, function(k, i) {
				if(selectedExp[i] !== undefined){
					
					if (lastSub === "") {
						lastSub = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[i]);
					} else {
						var x = nerdamer.convertFromLaTeX(getSubstringAfterEquals(replaceLn(lastSub)));
						var y = getSubstringAfterEquals(replaceLn(selectedExp[i]));
						if (y === null) {
						y = replaceLn(selectedExp[i]);
						}
						var y = nerdamer.convertFromLaTeX(y);
					
						x = nerdamer(x).subtract(y);
						var Latex = replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
						lastSub = NewfunEqu + "=" + Latex;
					}
				}
				

			});
			return lastSub;
		}


		function simpleSub2(expression = "", subScript = "") {
			const tempList = {}
			$.each(parentIdDiv, function(k, i) {
					$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), function(l, j) {
						tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), tempList);
					});
			});

			
			$.each(parentIdDiv, function(k, i) {
				if (lastSub === "") {
					lastSub = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[i]);
				} else {
					var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(lastSub))));
					var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(selectedExp[i]))));
					alert(y)
					x = nerdamer(x).subtract(y);
					var Latex = replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
					Latex = replaceValuesWithKeys(tempList, Latex);
					lastSub = NewfunEqu + "=" + Latex;
				}
			});
			return lastSub;
		}

		function simpleMultiply(expression = "", subScript = "") {
			const tempList = {}
			$.each(parentIdDiv, function(k, i) {
				if(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]]) != null){
					$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), function(l, j) {
						tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), tempList);
					});
				}
			});
			$.each(parentIdDiv, function(k, i) {
				if (lastSum === "") {
					lastSum = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[i]);
				} else {
					var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(lastSum))));
					var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(selectedExp[i]))));
					x = nerdamer(x).multiply(y);
					var Latex = replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
					Latex = replaceValuesWithKeys(tempList, Latex);
					lastSum = NewfunEqu + "=" + Latex;
				}
			});
			return lastSum;
		}

		function simpleDivide(expression = "", subScript = "") {
			const tempList = {}
			$.each(parentIdDiv, function(k, i) {
				if(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]]) != null){
					$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), function(l, j) {
						tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), tempList);
					});
				}
			});
			$.each(parentIdDiv, function(k, i) {
				if (lastSum === "") {
					lastSum = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[i]);
				} else {
					var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(lastSum))));
					var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(selectedExp[i]))));
					x = nerdamer(x).divide(y).expand();
					var Latex = replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
					Latex = replaceValuesWithKeys(tempList, Latex);
					lastSum = NewfunEqu + "=" + Latex;
				}
			});
			return lastSum;
		}

		function simplePow(expression = "", subScript = "") {
			const tempList = {}
			$.each(parentIdDiv, function(k, i) {
				$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), function(l, j) {
					tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), tempList);
				});
			});
			
			$.each(parentIdDiv, function(k, i) {
				if (lastSum === "") {
					lastSum = NewfunEqu + "=" + getSubstringAfterEquals(selectedExp[i]);
				} else {
					var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(lastSum))));
					var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(replaceLn(selectedExp[i]))));
					x = nerdamer(x).pow(y);
					var Latex = replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
					Latex = replaceValuesWithKeys(tempList, Latex);
					lastSum = NewfunEqu + "=" + Latex;
				}
			});
			return lastSum;
		}


		function simpleFOC(expression = "", subScript = "") {
			const tempList = {}
			$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), function(k, i) {
				tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), tempList);
			});
			var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv])));
			nerdamer.setFunction('f', tempList[getValuesInParens(NewfunEqu)[solveFor]], x);
			var FOC = nerdamer.diff(nerdamer('f(' + tempList[getValuesInParens(NewfunEqu)[solveFor]] + ')'), tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString();
			var equateToZero = nerdamer(FOC).solveFor(tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString();
			let FOCLatex = "";
			$.each(equateToZero.split(","), function(k, i) {
				nerdamer.setFunction('g', tempList[getValuesInParens(NewfunEqu)[solveFor]], FOC);
				var secondFOC = nerdamer.diff(nerdamer('g(' + tempList[getValuesInParens(NewfunEqu)[solveFor]] + ')'), tempList[getValuesInParens(NewfunEqu)[solveFor]]).toString(); //second order
				nerdamer.setFunction('g', tempList[getValuesInParens(NewfunEqu)[solveFor]], secondFOC);
				if (nerdamer('g(' + i + ')').lt('0') && FOCmax) { //max point
					FOCLatex = nerdamer.convertToLaTeX(i);
					FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
					FOCLatex = (subScript === "" ? NewfunEqu + "=" + FOCLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + FOCLatex);
				} else if (nerdamer('g(' + i + ')').gt('0') && !FOCmax) { //min point
					FOCLatex = nerdamer.convertToLaTeX(i);
					FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
					FOCLatex = (subScript === "" ? NewfunEqu + "=" + FOCLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + FOCLatex);
				}
			});
			if (FOCLatex === "") {
				alert("Couldn't get max/min desired");
			}
			return FOCLatex;
		}

		function advanceSubstitute(expression = "", subScript = "") {
			let FOCLatex = "";
			const expressionInto = selectedExp[parentIdDiv[0]];
			const expressionFrom = selectedExp[parentIdDiv[1]];
			const tempList = {}
			$.each(getValuesInParens(getSubstringBeforeEquals(expressionInto)), function(k, i) {
				tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(expressionInto)), tempList);
			});
			$.each(getValuesInParens(getSubstringBeforeEquals(expressionFrom)), function(k, i) {
				tempList[i] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(expressionFrom)), tempList);
			});
			var x = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(expressionInto)))
			var y = nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(expressionFrom)))
			var z = nerdamer(x).sub(tempList[getValuesInParens(getSubstringBeforeEquals(expressionInto))[subWith]], y).toString();
			FOCLatex = nerdamer.convertToLaTeX(z);
			FOCLatex = replaceValuesWithKeys(tempList, FOCLatex);
			FOCLatex = (subScript === "" ? NewfunEqu + "=" + FOCLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + FOCLatex);
			return FOCLatex;
		}

		//
		//f(x,y)=lnx+lny
		//g(x,y)=I-2x-3y
		//
		//max/min?
		//x
		//y

		//
		function simpleLag(expression = "", subScript = "") {
			var data = {};
			var mainFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(selectedExp[parentIdDiv]))).toString();
			var constraintFunc = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(selectedExp[constraint]))).toString();
			
			if (FOCmax) {
				mainFunc = "(" + mainFunc + ") + lambda * (" + constraintFunc + ")"
			} else {
				mainFunc = "(" + mainFunc + ") - lambda * (" + constraintFunc + ")"
			}
			$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv])), function(k, i) {
				nerdamer.setFunction('f', getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[k], mainFunc);
				data[i] = nerdamer.diff(nerdamer('f(' + getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[k] + ')'), getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv]))[k]).toString();
			});
			nerdamer.setFunction('f', ['lambda'], mainFunc);
			data['lambda'] = nerdamer.diff(nerdamer('f( lambda )'), 'lambda').toString();
			var arrayLag = [];
			$.each(data, function(key, value) {
				arrayLag.push(value + "=0");
			});
			
			nerdamer.set('SOLUTIONS_AS_OBJECT', true)
			var sol = nerdamer.solveEquations(arrayLag);
			$.each(sol, function(key, value) {
				var subId = (idDiv + "_" + key);
				var subNewfunEqu = NewfunEqu + "_{" + key + "}";
				selectedExp[subId] = subNewfunEqu + "=" + nerdamer(value).evaluate().toString();
				if (debug) ThisObject.setDebug();
				$.each(listGraphs, function(k, i) {
					listOfGraphs[i].setExpression({
						"id": subId,
						"type": "expression",
						"latex": subNewfunEqu + "=" + nerdamer(value).evaluate().toString()
					});
				});
			});
			var returnValue = [];
			$.each(sol, function(key, value) {
				returnValue.push(value);
			});
			return NewfunEqu + "=[" + returnValue + "]";
		}

		function advanceFindIntersection(expression = "", subScript = "") {
			const tempList = {}
			const data = [];
			$.each(parentIdDiv, function(k, i) {
				if(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]]) != null){
					$.each(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), function(l, j) {
						tempList[j] = getRandomChar(getValuesInParens(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]])), tempList);
					});
				}
			});
			$.each(parentIdDiv, function(k, i) {
				if(getSubstringBeforeEquals(selectedExp[parentIdDiv[k]]) != null){
				data.push(nerdamer.convertFromLaTeX(replaceKeysWithValues(tempList, getSubstringAfterEquals(selectedExp[parentIdDiv[k]]))).toString()+"=x");
				}
				else{
					data.push(nerdamer.convertFromLaTeX(selectedExp[parentIdDiv[k]]).toString()+"=x");
				}
			});	
			nerdamer.set('SOLUTIONS_AS_OBJECT', true)
			let sol = nerdamer.solveEquations(data);
			//replace what is not x
			$.each(sol, function(key, value) {
				if (key !== 'x') {
					sol['y'] = value;
				  delete sol[key];
				}
			});
			return NewfunEqu + "=["+sol["x"]+","+sol["y"]+"]";
		}
		/////////////////////
		////////////////////
		////////////////////
		function addGraphToDesmos(recievedLatex, indexNum = "") {
			$.each(listGraphs, function(k, i) {
				listOfGraphs[i].setExpression({
					"id": idDiv + indexNum,
					"type": "expression",
					"latex": recievedLatex,
					"hidden": hidden,
					"color": (color == "random") ? "#" + Math.floor(Math.random() * 16777215).toString(16) : color,
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

		function updateOnEvent(caclIt) {
			if ($('#sideInputsContent #refreshButton').length == 0) {
				$("#sideInputsContent math-field").on("input", function() {
					complyCheckbox();
					if ($("#sideInputsContent select").length > 0) {
						// this.addSelectInput({});
						return;
					}
					lastSum = "";
					lastSub = "";
					runCalcEvent(caclIt);
				});
			}else{
				$("#sideInputsContent #refreshButton").on("click", function() {
					complyCheckbox();
					if ($("#sideInputsContent select").length > 0) {
						// this.addSelectInput({});
						return;
					}
					lastSum = "";
					lastSub = "";
					runCalcEvent(caclIt);
				});
			}


		}

		function complyCheckbox() {
			$('#sideInputsContent input[type="checkbox"]').each(function() {
				if (!$(this).is(':checked')) {
					var checkbox = $(this);
					var associatedFunction = checkbox.data('function');
					associatedFunction();
				}
			});
		}
	}
	addLabel(options) {
		let idDiv = options.idDiv;
		let latex = options.latex;
		let label = options.label;
		let color = (("color" in options) ? options["color"] : "black");
		let pointSize = (("pointSize" in options) ? options["pointSize"] : "10");
		let pointStyle = (("pointStyle" in options) ? options["pointStyle"] : Desmos.Styles.POINT);
		let lineStyle = (("lineStyle" in options) ? options["lineStyle"] : Desmos.Styles.SOLID);
		let lines = (("lines" in options) ? options["lines"] : true);
		let showLabel = (("showLabel" in options) ? options["showLabel"] : true);
		let dragMode = (("dragMode" in options) ? options["dragMode"] : Desmos.DragModes.NONE);
		let labelOrientation = (("labelOrientation" in options) ? options["labelOrientation"] : Desmos.LabelOrientations.DEFAULT);
		let listGraphs = options.listGraphs;
		let listOfGraphs = this.listOfGraphs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		$.each(listGraphs, function(k, i) {
			listOfGraphs[i].setExpression({
				"id": idDiv,
				"type": "expression",
				"latex": latex,
				"color": (color == "random") ? "#" + Math.floor(Math.random() * 16777215).toString(16) : color,
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
			if (debug) ThisObject.setDebug();
		});
	}
	calcInverse(options) {
		function inverseIt(str) {
			var funcPart = str.split("=")[0]; //\\mu(Q_{1})
			var parm = funcPart.substring(funcPart.indexOf("(") + 1, funcPart.indexOf(")")); // Q_{1}
			var index = parm.match(/\d+/); //1
			if (index != null) { //if parm has subscript so replecate
				var letterParm = parm.split("_")[0]; // Q
				var letterFinalParm = NewfunEqu.substring(NewfunEqu.indexOf("(") + 1, NewfunEqu.indexOf(")")); //P
				letterFinalParm = parm.replace(letterParm, letterFinalParm); //P_{1}
				str = str.replaceAll(parm, letterFinalParm);
			} else { //if doesnt have subscript just change
				var letterFinalParm = NewfunEqu.substring(NewfunEqu.indexOf("(") + 1, NewfunEqu.indexOf(")")); //P
				str = str.replaceAll(parm, letterFinalParm);
			}
			var fullExpression = str.replaceAll(letterFinalParm, 'x'); //\mu(x)=\left(\frac{1}{5}\right) \cdot x
			var funcExpInitial = fullExpression.split("(")[0]; //\\mu
			var funcExpFinal = NewfunEqu.split("(")[0]; //\\theta
			var Repexpression = fullExpression.split("=")[1]; //\left(\frac{1}{5}\right) \cdot P_{1}
			var x = nerdamer.convertFromLaTeX(Repexpression); //(1/5)*x
			nerdamer.setFunction('f', 'x', x);
			if (letterFinalParm.match(/\d+/) != null) {
				var finTerm = letterFinalParm.split("_")[0];
			} else {
				var finTerm = letterFinalParm.split("_")[0];
			}
			if (nerdamer('f(x)').toString().includes("x")) {
				var inverseValue = nerdamer(finTerm + '=' + nerdamer('f(x)')).solveFor('x').toString();
			} else {
				var inverseValue = nerdamer(finTerm + '=' + nerdamer('f(x)')).toString();
			}
			var inverseValueLatex = nerdamer.convertToLaTeX(inverseValue);
			inverseValueLatex = inverseValueLatex.replaceAll(finTerm, letterFinalParm);
			inverseValueLatex = fullExpression.replace(Repexpression, inverseValueLatex);
			inverseValueLatex = inverseValueLatex.replaceAll('x', letterFinalParm);
			inverseValueLatex = inverseValueLatex.replaceAll(funcExpInitial, funcExpFinal);
			return inverseValueLatex;
		}
		let idDiv = options.idDiv;
		let NewfunEqu = options.NewfunEqu;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		//mathAlgo
		if (typeof selectedExp[idDiv] == "object") {
			var expressionsArray = [];
			var expression = "";
			$.each(selectedExp[idDiv], function(k, i) {
				expression = selectedExp[idDiv][k];
				expression = inverseIt(expression);
				expressionsArray.push(expression);
			});
			options.returnValueLatex = expressionsArray;
			//endMathAlgo
			return options;
		} else {
			var str = selectedExp[idDiv];
			options.returnValueLatex = inverseIt(str);
			//endMathAlgo
			return options;
		}
	}
	calcDerive(options) {
		function deriveIt(str) {
			var expression = str.split('=')[1];
			var orgTerm = str.substring(str.indexOf("(") + 1, str.indexOf(")"));
			var Repexpression = expression.replaceAll(orgTerm, 'x');
			var x = nerdamer.convertFromLaTeX(Repexpression);
			nerdamer.setFunction('f', 'x', x);
			var FOC = nerdamer.diff(nerdamer('f(x)'), 'x').toString();
			var FOCLatex = nerdamer.convertToLaTeX(FOC);
			FOCLatex = NewfunEqu + "(x)=" + FOCLatex;
			var endResult = FOCLatex.replace(/x/g, orgTerm);
			return endResult;
		}
		let idDiv = options.idDiv;
		let NewfunEqu = options.NewfunEqu;
		let selectedExp = this.selectedExpressions;
		let expressionsArray = [];
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		//mathAlgo
		if (typeof selectedExp[idDiv] == "object") {
			$.each(selectedExp[idDiv], function(k, i) {
				var expression = selectedExp[idDiv][k];
				expression = deriveIt(expression);
				expressionsArray.push(expression);
			});
			options.returnValueLatex = expressionsArray;
			//endMathAlgo
			return options;
		} else {
			var str = selectedExp[idDiv];
			options.returnValueLatex = deriveIt(str);
			//endMathAlgo
			return options;
		}
	}
	addDynamicExp(options) {
		let idDiv = options.idDiv;
		let calc = options.calc;
		let sticky = (("sticky" in options) ? options["sticky"] : false);
		let parentIdDiv = options.parentIdDiv;
		let NewfunEqu = options.NewfunEqu;
		let color = (("color" in options) ? options["color"] : "black");
		let style = (("style" in options) ? options["style"] : "normal");
		let hidden = (("hidden" in options) ? options["hidden"] : false);
		let min = (("min" in options) ? options["min"] : "0");
		let max = (("max" in options) ? options["max"] : "100");
		let step = (("step" in options) ? options["step"] : "1");
		let lineStyle = (("lineStyle" in options) ? options["lineStyle"] : Desmos.Styles.SOLID);
		let lineWidth = (("lineWidth" in options) ? options["lineWidth"] : "2.5");
		let listGraphs = options.listGraphs;
		let lastSum = options.lastSum;
		lastSum = "";
		let lastSub = options.lastSub;
		lastSub = "";
		let selectedExp = this.selectedExpressions;
		let listOfGraphs = this.listOfGraphs;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		if (calc === "simpleDerive") {
			addRefreshButton();
			runDynamicEvent(simpleDerive);
			updateOnEvent(simpleDerive);
		} else if (calc === "simpleInverse") {
			addRefreshButton();
			runDynamicEvent(simpleInverse);
			updateOnEvent(simpleInverse);
		} else if (calc === "simpleSum") {
			addRefreshButton();
			runDynamicEvent(simpleSum);
			updateOnEvent(simpleSum);
		} else if (calc === "simpleSub") {
			addRefreshButton();
			runDynamicEvent(simpleSub);
			updateOnEvent(simpleSub);
		} else {
			alert("You have to add calc expression");
			return;
		}
		function addRefreshButton() {
			if ($('#sideInputsContent #refreshButton').length == 0) {
			  $("#creatorsContent").after('<div id="refreshButton" class="sticky top-10 m-2 z-[39]"><button type="button" class="active:bg-green-900 flex items-center text-center w-full px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline text-sm group "><i class="group-hover:-rotate-90 group-active:-rotate-180 fa fa-sync-alt px-4"></i>Refresh</button></div>');			
			}
		}
		function runDynamicEvent(caclIt) {
			if (!hasKey(selectedExp, parentIdDiv)) {
				alert("parentIdDiv does not exists, choose a different one");
				return;
			}
			if (removeLast(getKeyPath(selectedExp, parentIdDiv)).length > 1) { //sub
				const rootMainKey = getKeyPath(selectedExp, parentIdDiv)[0];
				$.each(selectedExp[rootMainKey], function(k, i) {
					var expIdDivSub = getValueFromKeyPath(selectedExp[rootMainKey][k], (getKeyPath(selectedExp[rootMainKey][k], parentIdDiv)));
					var expression = removePlaceholder(expIdDivSub.value); //main
					var derivedValue = caclIt(expression, k);
					expIdDivSub[idDiv] = {
						value: derivedValue
					};
					if (sticky) {
						selectedExp[idDiv] = removePlaceholder(derivedValue);
						addGraphToDesmos(removePlaceholder(derivedValue), "");
					}
					if (debug) ThisObject.setDebug();
					addGraphToDesmos(derivedValue, k);
				});
			} else { //main
				var expIdDiv = getValueFromKeyPath(selectedExp, getKeyPath(selectedExp, parentIdDiv));
				$.each(selectedExp[parentIdDiv], function(k, i) {
					var expression = removePlaceholder(expIdDiv[k].value); //main
					var derivedValue = caclIt(expression, k);
					expIdDiv[k][idDiv] = {
						value: derivedValue
					};
					if (sticky) {
						selectedExp[idDiv] = removePlaceholder(derivedValue);
						addGraphToDesmos(removePlaceholder(derivedValue), "");
					}
					if (debug) ThisObject.setDebug();
					addGraphToDesmos(derivedValue, k);
				});
			}
		}
		////////////////////
		///////////////////
		///Functions
		////////////////////
		///////////////////
		function simpleDerive(expression, subScript = "") {
			var x = nerdamer.convertFromLaTeX(getSubstringAfterEquals(expression));
			nerdamer.setFunction('f', getValuesInParens(NewfunEqu)[0], x);
			var FOC = nerdamer.diff(nerdamer('f(' + getValuesInParens(NewfunEqu)[0] + ')'), getValuesInParens(NewfunEqu)[0]).toString();
			var FOCLatex = nerdamer.convertToLaTeX(FOC);
			FOCLatex = (subScript === "" ? NewfunEqu + "=" + FOCLatex : addStringBeforeParens(NewfunEqu, subScript) + "=" + FOCLatex);
			return FOCLatex;
		}

		function simpleInverse(expression, subScript = "") {
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

		function simpleSum(expression, subScript = "") {
			if (lastSum === "") {
				lastSum = (subScript === "" ? NewfunEqu + "=" + getSubstringAfterEquals(expression) : addStringBeforeParens(NewfunEqu, subScript) + "=" + getSubstringAfterEquals(expression));
				return lastSum;
			} else {
				var x = inMath(getSubstringAfterEquals(lastSum));
				var y = inMath(getSubstringAfterEquals(expression));
				x = nerdamer(x).add(y);
				lastSum = (subScript === "" ? NewfunEqu + "=" + outMath(x.toString()) : addStringBeforeParens(NewfunEqu, subScript) + "=" + outMath(x.toString()));
				return lastSum;
			}
		}

		function simpleSub(expression, subScript = "") {
			if (lastSub === "") {
				lastSub = (subScript === "" ? NewfunEqu + "=" + getSubstringAfterEquals(expression) : addStringBeforeParens(NewfunEqu, subScript) + "=" + getSubstringAfterEquals(expression));
				return lastSub;
			} else {
				var x = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(lastSub)));
				var y = nerdamer.convertFromLaTeX(getSubstringAfterEquals(replaceLn(expression)));
				x = nerdamer(x).subtract(y);
				lastSub = (subScript === "" ? NewfunEqu + "=" + replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString()))) : addStringBeforeParens(NewfunEqu, subScript) + "=" + replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString()))));
				return lastSub;
			}
		}
		/////////////////////
		////////////////////
		////////////////////
		function addGraphToDesmos(recievedLatex, indexNum = "") {
			$.each(listGraphs, function(k, i) {
				listOfGraphs[i].setExpression({
					"id": idDiv + indexNum,
					"type": "expression",
					"latex": recievedLatex,
					"hidden": hidden,
					"color": (color == "random") ? "#" + Math.floor(Math.random() * 16777215).toString(16) : color,
					"lineStyle": lineStyle,
					"lineWidth": lineWidth,
					"sliderBounds": {
						min: min,
						max: max,
						step: step
					}
				});
			});
		}

		function updateOnEvent(caclIt) {
			$("#sideInputsContent #refreshButton").on("click", function() {
				complyCheckbox();
				lastSum = "";
				lastSub = "";
				runDynamicEvent(caclIt);
			});
		}

		function complyCheckbox() {
			$('#sideInputsContent input[type="checkbox"]').each(function() {
				if (!$(this).is(':checked')) {
					var checkbox = $(this);
					var associatedFunction = checkbox.data('function');
					associatedFunction();
				}
			});
		}
	}
	setInstructions(options) {
		function addPagination(numPage) {
			var headul = '<div class="flex justify-center item-center mt-2 gap-x-2"><ul class="pagination flex justify-start">';
			var footul = '</ul></div>';
			var lis = '';
			if (numPage === 1) {
				lis += '<li class="page-item">\
							<button class="rounded-l-md bg-violet-900 shadow-lg p-1 h-9 w-9 hover:bg-violet-600 transition-all duration-300 ease-in-out text-white  text-xl" href="#' + numPage + '">' + numPage + '</button>\
						</li>';
				mainID.after(headul + lis + footul);
				mainID.children().hide();
			} else {
				$("ul.pagination li:last.page-item button").removeClass("rounded-r-md");
				lis += '<li class="page-item">\
							<button class="rounded-r-md bg-violet-900 shadow-lg p-1 h-9 w-9 hover:bg-violet-600 transition-all duration-300 ease-in-out text-white  text-xl" href="#' + numPage + '">' + numPage + '</button>\
						</li>';
				$(".pagination").append(lis);
				mainID.children().hide();
			}

			function removeAllActiveBg() {
				$("ul.pagination li.page-item button").removeClass("bg-violet-600").addClass("bg-violet-900");
			}

			function addHashtag(t) {
				var n = window.location.href,
					e = n.indexOf("#") != -1 ? n.substring(0, n.indexOf("#")) + t : n + t;
				window.location.href = e;
			}
			$('ul.pagination li.page-item button').click(function(event) {
				$(".card").hide();
				var l = $(this).attr('href');
				addHashtag(l);
				removeAllActiveBg();
				$(this).removeClass("bg-violet-900").addClass("bg-violet-600");
				$(".card:nth-child(" + l.substr(1) + ")").show();

			});
			var hash = window.location.hash.substr(1);
			if (hash == "") {
				removeAllActiveBg();
				$("ul.pagination li:first.page-item button").removeClass("bg-violet-900").addClass("bg-violet-600");
				$(".card:first").show();
			} else {
				removeAllActiveBg();
				$("ul.pagination li:nth-child(" + hash + ").page-item button").removeClass("bg-violet-900").addClass("bg-violet-600");
				$(".card:nth-child(" + hash + ")").show();
				$('#toggleOffcanvas').trigger('click');
			}
		}

		function addHelpButton(numPage) {
			let mainContainer = $("#mainContainer");
			if (numPage === 1) {
				mainContainer.prepend('<div id="toggleOffcanvas2" class="fixed z-[25] right-0 transform translate-x-2 hover:translate-x-1 top-1/2 w-20 h-16 py-4 bg-violet-900 shadow-md hover:bg-violet-700 rounded-md shadow-xl text-white transition-all duration-300 ease-in-out cursor-pointer text-lg hidden md:block">\
					  <i class="fas fa-chevron-left text-xl pr-1 pl-2 align-middle"></i>Help\
				  </div>');
				// Toggle the offcanvas panel when the button is clicked
				$("#toggleOffcanvas").click(function() {
					$("#offcanvasPanel").removeClass("hidden md:block");
					$(".wrapper").scrollTop(0);
					$('.wrapper').addClass("overflow-y-hidden");
					var div = $("<div>", {
						class: "dark-screen fixed top-0 right-0 z-30 opacity-50 h-full w-full hidden md:block",
					});
					// Add the div after the element
					$('.wrapper').prepend(div);
					$("#offcanvasPanel").addClass("active-page-mobile");
				});
				$('.exit-offcanvas').click(function() {
					$('#offcanvasPanel').addClass("hidden");
					$('.wrapper').removeClass("overflow-y-hidden");
					$('.dark-screen').remove();
					$("#offcanvasPanel").removeClass("active-page-mobile");
					$("#sideInputsContent").addClass("active-page-mobile");
					$("#sideInputsContent").removeClass("hidden md:block");
				});
			}
		}
		let title = options.title;
		let content = options.content;
		let mainID = $("#sideInstructionsContent");
		mainID.children('div').hide();
		let stepNumber = this.stepNumber;
		mainID.append('<div class="card relative z-[39] bg-gray-200 border border-gray-300 rounded-md py-4 md:px-6 px-2 mb-8 text-gray-700">\
		<div class="card-header absolute top-0 left-0 p-2 shadow-[inset_10px_10px_10px_-7px_rgba(76,29,149,1),1px_1px_3px_1px_rgba(0,0,0,0.4)] -mt-[2px] -ml-[2px] rounded-tl-md bg-violet-500 text-white font-normal text-md md:text-lg">Step ' + stepNumber + '</div>\
		<div class="flex flex-col pt-8">\
			<h2 class="text-md md:text-lg text-center text-violet-900 ">' + title + '</h2>\
			<span class="">' + content + '</span>\
		</div>\
		</div>');
		addPagination(stepNumber);
		//addHelpButton(stepNumber);
		this.stepNumber += 1;
	}
	setCreators(options) {
		let title = options.title;
		let name = options.name;
		let school = options.school;
		let mainID = $("#creatorsContent");
		let subID = $("#developers-credits");
		let creatorNumber = this.creatorNumber;
		let titleMsg = title + ' ' + name + ' ' + school;
		createCreator('\\creator{"' + title + '","name","school"}')
		if (creatorNumber === 1) {
			mainID.append('<div id="developers-credits" class="mb-8 flex flex-row sm:flex-row items-center backdrop-blur-md bg-violet-100 text-xs sm:text-sm border-2 border-violet-500 rounded-lg py-2 px-6 m-2 text-violet-800">\
			<span class="mr-4 order-last sm:order-first text-sm sm:text-xs md:text-sm hidden lg:block">Created by:</span>\
			<span class="inline-block align-middle relative group order-first sm:order-last">\
			  <a href="?page=creators&creator=' + name + '" class="flex items-center group-hover:underline">\
				<img src="https://econ.vision/img/developers/' + name + '.jpg" alt="' + name + '" class="rounded-full md:w-8 md:h-8 w-6 h-6 object-contain border-2 border-transparent group-hover:border-violet-500 transition-all duration-300">\
			  </a>\
			  <div class="absolute hidden group-hover:block backdrop-blur-sm bg-black/50 text-white whitespace-nowrap md:py-2 md:px-6 px-4 py-1 md:-left-28 -left-12 rounded-md shadow-xl z-10 truncate text-xs md:text-sm">\
				<span class="">' + titleMsg + '</span>\
			  </div>\
			</span>\
		  </div>');
		} else {
			subID.append('<span class="inline-block align-middle relative group order-first sm:order-last">\
			<a href="?page=creators&creator=' + name + '" class="flex items-center group-hover:underline">\
			  <img src="https://econ.vision/img/developers/' + name + '.jpg" alt="' + name + '" class="rounded-full md:w-8 md:h-8 w-6 h-6 object-contain border-2 border-transparent group-hover:border-violet-500 transition-all duration-300">\
			</a>\
			<div class="absolute hidden group-hover:block backdrop-blur-sm bg-black/50 text-white whitespace-nowrap md:py-2 md:px-6 px-4 py-1 md:-left-28 -left-12 rounded-md shadow-xl z-10 truncate text-xs md:text-sm">\
			  <span class="">' + titleMsg + '</span>\
			</div>\
		  </span>');
		}
		this.creatorNumber += 1;
	}
	/////////////////////
	//////OLD code down below//////
	////////////////////
	calcAdd(options) {
		function stripSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				while (finTerm.charAt(pos_ + 1) == "{") {
					finTerm = finTerm.slice(0, pos_ + 1) + finTerm.slice(pos_ + 2);
					finTerm = finTerm.slice(0, pos_ + 2) + finTerm.slice(pos_ + 3);
					pos_ = finTerm.indexOf("_", pos_ + 1);
				}
			}
			return finTerm;
		} //Main variables
		function iniToFinal(finalSum, ini, final) {
			if (finalSum.includes(ini)) {
				finalSum = finalSum.replaceAll(ini, final);
			}
			return finalSum;
		}

		function addIt(str) {
			var finalSum = ""; //return value
			var funTerm = str.split("=")[0]; //\theta(P_{1})
			let initialTerm = funTerm.substring(funTerm.indexOf("(") + 1, funTerm.indexOf(")")); //C_1,G
			if (finTerm.includes(",")) { //if function is more than 1 variable
				var expTerm = str.split("=")[1]; //5 \cdot P_{1}
				finalSum = expTerm;
			} else {
				var expTerm = str.split("=")[1]; //5 \cdot P_{1}
				finalSum = expTerm.replaceAll(initialTerm, finTerm);
			}
			finalSum = iniToFinal(finalSum, "ln", "log"); //replace ln with log
			if (options.returnValueLatex != "") {
				var previousSum = options.returnValueLatex;
				previousSum = iniToFinal(previousSum, "ln", "log"); //replace ln with log
				previousSum = stripSubLatex(previousSum);
				finalSum = stripSubLatex(finalSum);
				var x = nerdamer.convertFromLaTeX(previousSum);
				var y = nerdamer.convertFromLaTeX(finalSum);
				x = nerdamer(x).add(y);
				finalSum = nerdamer.convertToLaTeX(x.toString());
				finalSum = iniToFinal(finalSum, "mathrm{log}", "log"); //replace mathrm with log
				finalSum = iniToFinal(finalSum, "log", "ln"); //replace mathrm with log
				return finalSum;
			} else {
				finalSum = iniToFinal(finalSum, "log", "ln"); //replace mathrm with log
				return finalSum;
			}
		}
		let NewfunEqu = options.NewfunEqu;
		let finTerm = NewfunEqu.substring(NewfunEqu.indexOf("(") + 1, NewfunEqu.lastIndexOf(")"));
		let arrIdDivs = options.arrIdDivs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		//mathAlgo
		options.returnValueLatex = ''; //emptysum
		$.each(arrIdDivs, function(k, i) {
			var idDiv = arrIdDivs[k];
			if (typeof selectedExp[idDiv] == "object") {
				options.returnValueLatex = ''; //emptysum
				$.each(selectedExp[idDiv], function(k, i) {
					var expression = selectedExp[idDiv][k];
					options.returnValueLatex = addIt(expression);
				});
				//endMathAlgo
			} else {
				var str = selectedExp[idDiv];
				options.returnValueLatex = addIt(str);
				//endMathAlgo
			}
		});
		options.returnValueLatex = NewfunEqu + "=" + options.returnValueLatex;
		return options;
	}
	calcAdd2(options) {
		let NewfunEqu = options.NewfunEqu;
		let arrIdDivs = options.arrIdDivs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		options.returnValueLatex = ''; //emptysum
		$.each(arrIdDivs, function(k, i) {
			var idDiv = arrIdDivs[k];
			if (typeof selectedExp[idDiv] == "object") { //Dynamic structure
				options.returnValueLatex = ''; //emptysum
				$.each(selectedExp[idDiv], function(l, j) {
					var expression = selectedExp[idDiv][l];
					options.returnValueLatex = addIt(expression);
				});
			} else {
				var str = selectedExp[idDiv];
				options.returnValueLatex = addIt(str);
			}
		});

		function addIt(str) {
			const lastSum = options.returnValueLatex;
			if (lastSum === "") {
				return NewfunEqu + "=" + getSubstringAfterEquals(str);
			} else {
				var x = nerdamer.convertFromLaTeX(replaceLn(getSubstringAfterEquals(lastSum)));
				var y = nerdamer.convertFromLaTeX(getSubstringAfterEquals(replaceLn(str)));
				x = nerdamer(x).add(y);
				return NewfunEqu + "=" + replaceLog(replaceMathrm(nerdamer.convertToLaTeX(x.toString())));
			}
		}
	}
	calcSub(options) {
		function stripSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				while (finTerm.charAt(pos_ + 1) == "{") {
					finTerm = finTerm.slice(0, pos_ + 1) + finTerm.slice(pos_ + 2);
					finTerm = finTerm.slice(0, pos_ + 2) + finTerm.slice(pos_ + 3);
					pos_ = finTerm.indexOf("_", pos_ + 1);
				}
			}
			return finTerm;
		} //Main variables
		function iniToFinal(finalSum, ini, final) {
			if (finalSum.includes(ini)) {
				finalSum = finalSum.replaceAll(ini, final);
			}
			return finalSum;
		}

		function subIt(str) {
			var finalSum = ""; //return value
			var funTerm = str.split("=")[0]; //\theta(P_{1})
			let initialTerm = funTerm.substring(funTerm.indexOf("(") + 1, funTerm.indexOf(")")); //C_1,G
			if (finTerm.includes(",")) { //if function is more than 1 variable
				var expTerm = str.split("=")[1]; //5 \cdot P_{1}
				finalSum = expTerm;
			} else {
				var expTerm = str.split("=")[1]; //5 \cdot P_{1}
				finalSum = expTerm.replaceAll(initialTerm, finTerm);
			}
			finalSum = iniToFinal(finalSum, "ln", "log"); //replace ln with log
			if (options.returnValueLatex != "") {
				var previousSum = options.returnValueLatex;
				previousSum = iniToFinal(previousSum, "ln", "log"); //replace ln with log
				previousSum = stripSubLatex(previousSum);
				finalSum = stripSubLatex(finalSum);
				var x = nerdamer.convertFromLaTeX(previousSum);
				var y = nerdamer.convertFromLaTeX(finalSum);
				x = nerdamer(x).subtract(y);
				finalSum = nerdamer.convertToLaTeX(x.toString());
				finalSum = iniToFinal(finalSum, "mathrm{log}", "log"); //replace mathrm with log
				finalSum = iniToFinal(finalSum, "log", "ln"); //replace mathrm with log
				return finalSum;
			} else {
				finalSum = iniToFinal(finalSum, "log", "ln"); //replace mathrm with log
				return finalSum;
			}
		}
		let NewfunEqu = options.NewfunEqu;
		let finTerm = NewfunEqu.substring(NewfunEqu.indexOf("(") + 1, NewfunEqu.lastIndexOf(")"));
		let arrIdDivs = options.arrIdDivs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		//mathAlgo
		options.returnValueLatex = ''; //emptysum
		$.each(arrIdDivs, function(k, i) {
			var idDiv = arrIdDivs[k];
			if (typeof selectedExp[idDiv] == "object") {
				options.returnValueLatex = ''; //emptysum
				$.each(selectedExp[idDiv], function(k, i) {
					var expression = selectedExp[idDiv][k];
					options.returnValueLatex = subIt(expression);
				});
				//endMathAlgo
			} else {
				var str = selectedExp[idDiv];
				options.returnValueLatex = subIt(str);
				//endMathAlgo
			}
		});
		options.returnValueLatex = NewfunEqu + "=" + options.returnValueLatex;
		return options;
	}
	calcMultiply(options) {
		function multiplyIt(str) {
			var funTerm = str.split("=")[0]; //\theta(P_{1})
			let initialTerm = funTerm.substring(funTerm.indexOf("(") + 1, funTerm.indexOf(")")); //P_{1}
			var expTerm = str.split("=")[1]; //5 \cdot P_{1}
			var finalSum = expTerm.replaceAll(initialTerm, finTerm);
			if (options.returnValueLatex != "") {
				var previousSum = options.returnValueLatex;
				var x = nerdamer.convertFromLaTeX(previousSum);
				var y = nerdamer.convertFromLaTeX(finalSum);
				x = nerdamer(x).multiply(y);
				finalSum = nerdamer.convertToLaTeX(x.toString());
				return finalSum;
			} else {
				return finalSum;
			}
		}
		let NewfunEqu = options.NewfunEqu;
		let finTerm = NewfunEqu.substring(NewfunEqu.indexOf("(") + 1, NewfunEqu.lastIndexOf(")"));
		let arrIdDivs = options.arrIdDivs;
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		//mathAlgo
		options.returnValueLatex = ''; //emptysum
		$.each(arrIdDivs, function(k, i) {
			var idDiv = arrIdDivs[k];
			if (typeof selectedExp[idDiv] == "object") {
				options.returnValueLatex = ''; //emptysum
				$.each(selectedExp[idDiv], function(k, i) {
					var expression = selectedExp[idDiv][k];
					options.returnValueLatex = multiplyIt(expression);
				});
				//endMathAlgo
			} else {
				var str = selectedExp[idDiv];
				options.returnValueLatex = multiplyIt(str);
				//endMathAlgo
			}
		});
		options.returnValueLatex = NewfunEqu + "=" + options.returnValueLatex;
		return options;
	}
	calcTCToProfitFunc(options) {
		function normalizeSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				var variable = finTerm.substr(0, pos_ + 1);
				var sub = finTerm.substr(pos_ + 1);
				variable = variable + "{" + sub + "}";
				return variable;
			}
		}

		function stripSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				while (finTerm.charAt(pos_ + 1) == "{") {
					finTerm = finTerm.slice(0, pos_ + 1) + finTerm.slice(pos_ + 2);
					finTerm = finTerm.slice(0, pos_ + 2) + finTerm.slice(pos_ + 3);
					pos_ = finTerm.indexOf("_", pos_ + 1);
				}
			}
			return finTerm;
		} //Main variables
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		let inverseFunc = options.inverseFunc;
		let parmInverseFunc = selectedExp[inverseFunc].substring(selectedExp[inverseFunc].indexOf("(") + 1, selectedExp[inverseFunc].indexOf(")")); //Q
		let arrIdDivs = options.arrIdDivs;
		let index = (("index" in options) ? options.index : 0);
		let newFunName = "\\phi";
		let subFunName = selectedExp[options.arrIdDivs[index]].substring(selectedExp[options.arrIdDivs[index]].indexOf("{") + 1, selectedExp[options.arrIdDivs[index]].indexOf("}")); //tcL
		let parMainFunc = selectedExp[options.arrIdDivs[index]].substring(selectedExp[options.arrIdDivs[index]].indexOf("(") + 1, selectedExp[options.arrIdDivs[index]].indexOf(")")); //Q_1
		newFunName = newFunName + "_{" + subFunName + "}"; //p_{TCL}
		let parmMainFunc = ''; //Q_1,Q_2,Q_3
		let parmAddSub = ''; //Q_1+Q_2+Q_3
		$.each(arrIdDivs, function(k, i) {
			var idDiv = arrIdDivs[k];
			if (k == 0) {
				parmMainFunc = selectedExp[idDiv].substring(selectedExp[idDiv].indexOf("(") + 1, selectedExp[idDiv].indexOf(")")); //Q_1
				parmAddSub = selectedExp[idDiv].substring(selectedExp[idDiv].indexOf("(") + 1, selectedExp[idDiv].indexOf(")")); //Q_1
			} else {
				parmMainFunc += "," + selectedExp[idDiv].substring(selectedExp[idDiv].indexOf("(") + 1, selectedExp[idDiv].indexOf(")")); //Q_1,Q_2,...
				parmAddSub += "+" + selectedExp[idDiv].substring(selectedExp[idDiv].indexOf("(") + 1, selectedExp[idDiv].indexOf(")")); //Q_1+Q_2,...
			}
		});
		if (typeof selectedExp[options.arrIdDivs[index]] == "object") {
			var totalCost = selectedExp[options.arrIdDivs[index]].returnValueLatex.split('=')[1];
		} else {
			var totalCost = selectedExp[options.arrIdDivs[index]].split('=')[1];
		}
		var totalCostNoLatex = nerdamer.convertFromLaTeX(totalCost); //(1/8)*Q_2^2
		if (typeof selectedExp[inverseFunc] == "object") {
			var inverseDemandFunction = selectedExp[inverseFunc].returnValueLatex.split('=')[1];
		} else {
			var inverseDemandFunction = selectedExp[inverseFunc].split('=')[1];
		}
		inverseDemandFunction = inverseDemandFunction.replace(parmInverseFunc, "(" + parmAddSub + ")"); //(Q_1+Q_2)
		var inverseDemandFunctionNoLatex = nerdamer.convertFromLaTeX(inverseDemandFunction); //-Q_1-Q_2+50
		var endResult = nerdamer(inverseDemandFunctionNoLatex);
		endResult = nerdamer(endResult).multiply(parMainFunc); //(-Q_1-Q_2+50)*Q_1
		endResult = nerdamer(endResult).subtract(totalCostNoLatex); //(-Q_1-Q_2+50)*Q_1-(1/8)*Q_2^2
		var endResultLatex = nerdamer.convertToLaTeX(endResult.toString());
		endResultLatex = stripSubLatex(endResultLatex);
		endResult = newFunName + "(" + parmMainFunc + ")=" + endResultLatex;
		options.returnValueLatex = endResult;
		//endMathAlgo
		if (debug) ThisObject.setDebug();
		return options;
	}
	calcMultiFOC(options) {
		function iniToFinal(finalSum, ini, final) {
			if (finalSum.includes(ini)) {
				finalSum = finalSum.replaceAll(ini, final);
			}
			return finalSum;
		}

		function normalizeSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				var variable = finTerm.substr(0, pos_ + 1);
				var sub = finTerm.substr(pos_ + 1);
				variable = variable + "{" + sub + "}";
				return variable;
			}
		}

		function stripSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				while (finTerm.charAt(pos_ + 1) == "{") {
					finTerm = finTerm.slice(0, pos_ + 1) + finTerm.slice(pos_ + 2);
					finTerm = finTerm.slice(0, pos_ + 2) + finTerm.slice(pos_ + 3);
					pos_ = finTerm.indexOf("_", pos_ + 1);
				}
			}
			return finTerm;
		}
		//Main variables
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		let multiFuncDiv = options.multiFuncDiv;
		let solveFor = (("solveFor" in options) ? options.solveFor : 0);
		let newFunName = "\\rho";
		if (typeof selectedExp[multiFuncDiv] == "object") {
			var subFunName = selectedExp[multiFuncDiv].substring(selectedExp[multiFuncDiv].indexOf("{") + 1, selectedExp[multiFuncDiv].indexOf("}")); //tcL
			var parMainFunc = selectedExp[multiFuncDiv].substring(selectedExp[multiFuncDiv].indexOf("(") + 1, selectedExp[multiFuncDiv].indexOf(")")); //Q_1,Q_2
			var parMainFuncArr = parMainFunc.split(','); //string comma to array
			newFunName = newFunName + "_{" + subFunName + "}"; //p_{TCL}
			var funcExp = selectedExp[multiFuncDiv].returnValueLatex.split('=')[1];
		} else {
			var subFunName = selectedExp[multiFuncDiv].substring(selectedExp[multiFuncDiv].indexOf("{") + 1, selectedExp[multiFuncDiv].indexOf("}")); //tcL
			var parMainFunc = selectedExp[multiFuncDiv].substring(selectedExp[multiFuncDiv].indexOf("(") + 1, selectedExp[multiFuncDiv].indexOf(")")); //Q_1,Q_2
			parMainFunc = iniToFinal(parMainFunc, "\\right", ""); //remove \\right from the string
			parMainFunc = stripSubLatex(parMainFunc);
			var parMainFuncArr = parMainFunc.split(','); //string comma to array
			newFunName = newFunName + "_{" + subFunName + "}"; //p_{TCL}
			var funcExp = selectedExp[multiFuncDiv].split('=')[1];
		}
		funcExp = stripSubLatex(funcExp);
		funcExp = iniToFinal(funcExp, "ln", "log"); //remove \\right from the string
		var funcExpNoLatex = nerdamer.convertFromLaTeX(funcExp); //(-1/8)*Q_2^2+(-Q_1-Q_2+50)*Q_2
		nerdamer.setFunction('f', parMainFuncArr, funcExpNoLatex);
		var foc = nerdamer.diff(nerdamer('f(' + parMainFunc + ')'), parMainFuncArr[solveFor]);
		if (foc.toString().includes(parMainFuncArr[solveFor])) { //when derive if the parm disappers
			var equateToZero = nerdamer(foc).solveFor(parMainFuncArr[solveFor]).toString();
		} else {
			var equateToZero = foc;
		}
		equateToZero = nerdamer(equateToZero).text('decimals', 1);
		var endResultLatex = nerdamer.convertToLaTeX(equateToZero.toString());
		endResultLatex = stripSubLatex(endResultLatex);
		var endResult = newFunName + "(" + parMainFunc + ")=" + endResultLatex;
		options.returnValueLatex = endResult;
		//endMathAlgo
		if (debug) ThisObject.setDebug();
		return options;
	}
	calcNestedFunc(options) {
		function normalizeSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				var variable = finTerm.substr(0, pos_ + 1);
				var sub = finTerm.substr(pos_ + 1);
				variable = variable + "{" + sub + "}";
				return variable;
			}
		}

		function stripSubLatex(finTerm) {
			if (finTerm.includes("_")) {
				var pos_ = finTerm.indexOf("_");
				while (finTerm.charAt(pos_ + 1) == "{") {
					finTerm = finTerm.slice(0, pos_ + 1) + finTerm.slice(pos_ + 2);
					finTerm = finTerm.slice(0, pos_ + 2) + finTerm.slice(pos_ + 3);
					pos_ = finTerm.indexOf("_", pos_ + 1);
				}
			}
			return finTerm;
		}
		//Main variables
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		let multiFuncDiv = options.multiFuncDiv;
		let nestedFuncDiv = options.nestedFuncDiv;
		let index = (("index" in options) ? options.index : 0);
		let newFunName = "\\nu";
		let subFunName = selectedExp[multiFuncDiv].substring(selectedExp[multiFuncDiv].indexOf("{") + 1, selectedExp[multiFuncDiv].indexOf("}")); //tcL
		let parMainFunc = selectedExp[multiFuncDiv].substring(selectedExp[multiFuncDiv].indexOf("(") + 1, selectedExp[multiFuncDiv].indexOf(")")); //Q_1,Q_2
		let parMainFuncArr = parMainFunc.split(','); //string comma to array
		newFunName = newFunName + "_{" + subFunName + "}"; //p_{TCL}
		if (typeof selectedExp[multiFuncDiv] == "object") {
			var mainFunc = selectedExp[multiFuncDiv].returnValueLatex.split('=')[1];
		} else {
			var mainFunc = selectedExp[multiFuncDiv].split('=')[1];
		}
		if (typeof selectedExp[nestedFuncDiv] == "object") {
			var nestedFunc = selectedExp[nestedFuncDiv].returnValueLatex.split('=')[1];
		} else {
			var nestedFunc = selectedExp[nestedFuncDiv].split('=')[1];
		}
		mainFunc = mainFunc.replaceAll(parMainFuncArr[index], nestedFunc);
		var mainFuncNoLatex = nerdamer.convertFromLaTeX(mainFunc);
		var mainFuncLatex = nerdamer.convertToLaTeX(mainFuncNoLatex.toString());
		var endResult = newFunName + "(" + parMainFunc + ")=" + mainFuncLatex;
		options.returnValueLatex = endResult;
		//endMathAlgo
		if (debug) ThisObject.setDebug();
		return options;
	}
	calcMR(idDiv, NewfunEqu, finTerm) {
		let selectedExp = this.selectedExpressions;
		let debug = this.debug;
		let ThisObject = this;
		if (debug) ThisObject.setDebug();
		let endResult = '';
		$.each(arrIdDivs, function(k, i) {
			var idDiv = arrIdDivs[k];
			if (selectedExp[idDiv].includes("=")) { //if the idDiv have an equal sign
				var expression = selectedExp[idDiv].split('=')[1];
				var x = nerdamer.convertFromLaTeX(expression);
				if (k == 0) endResult = nerdamer(x);
				else endResult = nerdamer(endResult).multiply(x);
			} else {
				var expression = selectedExp[idDiv];
				var x = nerdamer.convertFromLaTeX(expression);
				if (k == 0) endResult = nerdamer(x);
				else endResult = nerdamer(endResult).multiply(x);
			}
		});
		endResult = NewfunEqu + "\\left(" + finTerm + "\\right)=" + endResult;
		return endResult;
	}
	computeKFromExpression(calculator, exprFunction, x, y) {
		var x = calculator.HelperExpression({
			latex: x
		});
		var y = calculator.HelperExpression({
			latex: y
		});
		x.observe('numericValue', function() {
			nerdamer.setFunction('f', ['x', 'y'], exprFunction);
			//alert(nerdamer('f(' + x.numericValue + ',' + x.numericValue + ')'));
		});
		y.observe('numericValue', function() {
			nerdamer.setFunction('f', ['x', 'y'], exprFunction);
			//alert(nerdamer('f(' + y.numericValue + ',' + y.numericValue + ')'));
		});
		//alert(JSON.stringify(xValue));
		//nerdamer.setFunction('f', [A, B], exprFunction);
		//alert(nerdamer('f(' + x1 + ',' + y1 + ')'));
		//var foc = nerdamer.diff(nerdamer('f(' + Q1 + ',' + Q2 + ')'), Q1);
		//var equateToZero = nerdamer(foc).solveFor(Q1).toString();
		//return nerdamer(equateToZero).text('decimals', 1);
	}
	computeDoubleToSingle(exprFunction) {
		alert(exprFunction);
		nerdamer.setFunction('f', ['x', 'y'], exprFunction);
		var foc = nerdamer('f(x, y)=k').toString();
		alert(foc.toString());
		var equateToZero = nerdamer(foc).solveFor('y').toString();
		alert(equateToZero.toString());
	}
	addExpressionToExpressionsList(id, latex, color, style = "normal", hidden = false, min = 0, max = 100, step = 1) {
		this.listOfExpressions.push({
			"id": id,
			"type": "expression",
			"latex": latex,
			"hidden": hidden,
			"color": color,
			"sliderBounds": {
				min: min,
				max: max,
				step: step
			}
		});
	}
	addLabelToExpressionsList(id, latex, color = "black", label, pointSize = 0, showLabel = true, dragMode = Desmos.DragModes.NONE, labelOrientation = Desmos.LabelOrientations.DEFAULT) {
		this.listOfExpressions.push({
			"id": id,
			"type": "expression",
			"latex": latex,
			"color": color,
			"showLabel": showLabel,
			"label": label,
			"dragMode": dragMode,
			"labelOrientation": labelOrientation,
			"pointSize": pointSize
		});
	}
}
class Instructions {
	constructor(divContent) {
		this.divContent = divContent;
		this.settings = [];
		this.selectedExpressions = {};
	}
	turnOn() {
		var numItems = $('#' + this.divContent).children('div').length;
		this.hideAll();
		this.addPagination(numItems);
	}
	loadExpressions(selectedExpressions) {
		this.selectedExpressions = selectedExpressions;
	}
	TStype(selectedExp) {
		this.selectedExpressions = selectedExp;
		replaceAtSymbol("developers-credits");
		replaceExp("sideInstructionsContent");
		replaceLatex("sideInstructionsContent");

		function getExpressionById(id) {
			var latex = "<math-field read-only style='display:inline-block; top:14px;'>" + selectedExp[id] + "</math-field>";
			return latex;
		}

		function replaceExp(elementId) {
			const element = document.getElementById(elementId);
			element.innerHTML = element.innerHTML.replace(/\\exp{([^}]+)}/g, (match, p1) => {
				const expression = getExpressionById(p1);
				return `${expression}`;
			});
		}

		function replaceLatex(elementId) {
			const element = document.getElementById(elementId);
			element.innerHTML = element.innerHTML.replace(/\\latex{"([^"]+)"}/g, (match, p1) => {
				return `<math-field read-only style='display:inline-block; top:14px;'>\${${p1}}\$</math-field>`;
			});
			// Render the LaTeX using MathJax
			MathJax.typeset(element);
		}

		function replaceAtSymbol(divId) {
			// Select the div element with the specified id
			var div = $('#' + divId);
			// Find all occurrences of @ followed by text
			const regex = /@\w+/g;
			var matches = div.html().match(regex);
			// Iterate over each match and replace it with an image tag
			if (matches) {
				for (let i = 0; i < matches.length; i++) {
					var text = matches[i];
					// Extract the text after the @ symbol
					var username = text.substring(1);
					// Create the image tag
					var imgTag = '<span class="inline-block align-middle relative"><a href="#" title="Developer ' + username + ' GS23"><img src="https://econ.vision/img/developers/' + username + '.jpg" class="rounded-full" alt="' + username + '" width="24" height="24"></a></span>';
					// Replace the @ and text with the image tag
					div.html(div.html().replace(text, imgTag));
				}
			}
		}

		function createTable(divId) {
			// Select the div element with the specified id
			var div = $('#' + divId);
			// Find all occurrences of the table symbol
			var regex = /\#table\s*\n(\s*\|.+\|\s*\n)+/g;
			var matches = div.html().match(regex);
			// Iterate over each match and replace it with a table
			if (matches) {
				for (var i = 0; i < matches.length; i++) {
					var text = matches[i];
					// Extract the rows from the text
					var rows = text.split('\n').slice(1);
					// Create the table
					var table = '<table class="table table-hover table-primary">';
					for (var j = 0; j < rows.length; j++) {
						var row = rows[j].trim();
						if (row) {
							// Extract the cells from the row
							var cells = row.split('|').slice(1, -1);
							// Create the row
							table += '<tr>';
							for (var k = 0; k < cells.length; k++) {
								var cell = cells[k].trim();
								// Create the cell
								table += '<td>' + cell + '</td>';
							}
							table += '</tr>';
						}
					}
					table += '</table>';
					// Replace the table symbol and text with the table
					div.html(div.html().replace(text, table));
				}
			}
		}

		function createLatexCode(divId) {
			// Select the div element with the specified id
			var div = $('#' + divId);
			// Find all occurrences of the input symbol
			var regex = /%%(.+?)%%/g;
			var matches = div.html().match(regex);
			// Iterate over each match and replace it with an input field
			if (matches) {
				for (var i = 0; i < matches.length; i++) {
					var text = matches[i];
					// Extract the id from the text
					var id = text.substring(2, text.length - 2);
					// Create the input field
					var input = '<math-field read-only style="display:inline-block; top:14px;" id="' + generateRandomString() + '">' + id + '</math-field>'
					// Replace the input symbol and text with the input field
					div.html(div.html().replace(text, input));
				}
			}
		}

		function generateRandomString() {
			var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
			var result = '';
			for (var i = 0; i < 12; i++) {
				result += characters.charAt(Math.floor(Math.random() * characters.length));
			}
			return result;
		}
	}
	addPagination(len) {
		let divContent = this.divContent;
		var headul = '<div class="flex justify-center mt-2"><ul class="pagination flex justify-start">';
		var footul = '</ul></div>';
		var lis = '';
		for (var i = 1; i <= len; i += 1) {
			lis += '<li class="page-item bg-violet-900 shadow-lg m-1 p-1 h-9 w-9 rounded-md hover:bg-violet-600"><a class="pl-2 absolute w-full h-fit text-white  text-xl" href="#' + i + '">' + i + '</a></li>';
		}
		$('#' + divContent).after(headul + lis + footul);

		function removeAllActiveBg() {
			$("ul.pagination li.page-item").removeClass("bg-violet-600").addClass("bg-violet-900");
		}
		$('ul.pagination li.page-item').click(function(event) {
			$(".card").hide();
			var l = $(this).attr('href');
			removeAllActiveBg();
			$(this).removeClass("bg-violet-00").addClass("bg-violet-600");
			$(".card:nth-child(" + l.substr(1) + ")").show();
		});
		var hash = window.location.hash.substr(1);
		if (hash == "") {
			$("ul.pagination li:first").removeClass("bg-violet-600").addClass("bg-violet-600");
			$(".card:first").show();
		} else {
			$("ul.pagination li:nth-child(" + hash + ")").addClass("active");
			$(".card:nth-child(" + hash + ")").show();
		}
	}
	hideAll() {
		let divContent = this.divContent;
		$('#' + divContent).children().hide();
	}
	loadEquations(listOfIdEquations) {
		let selectedExp = this.selectedExpressions;
		$.each(listOfIdEquations, function(k, each) {
			$.each(each, function(l, i) {
				var equation = selectedExp[each[l]];
				$('#' + l).html("$$" + equation + "$$");
			});
		});
	}
}