---
title: Surplus
layout: model.njk
course: Microeconomics
tags: models
---
<script>
const EdgeWorth = new EconVision();
EdgeWorth.setGraphs({
  "idDiv": "BruceVsSheila",
  "engine": "desmos",
  "copy": true,
  "height": "650px",
  "width": "100",
  "left": -5,
  "right": 20,
  "bottom": -5,
  "top": 20,
  "showGrid": false,
  "expressions": false,
  "keypad": false,
  "zoomFit": true,
  "settingsMenu": false,
  "showXAxis": false,
  "showYAxis": false,
  "xAxisLabel": "x",
  "yAxisLabel": "y"
});
EdgeWorth.addSliderInput({idDiv:"endownmentXValue", title:"Total Endownment X", latex:"w_{x}", min:0, max:100, step:1, defaultValue:15, listGraphs:[0]});
EdgeWorth.addSliderInput({idDiv:"endownmentYValue", title:"Total Endownment Y", latex:"w_{y}", min:0, max:100, step:1, defaultValue:15, listGraphs:[0]});
//show only numbers
EdgeWorth.setValue({idDiv:"endownmentXValueDisplay", decimal:0, latex:"w_{x}", listGraphs:[0]});
EdgeWorth.setValue({idDiv:"endownmentYValueDisplay", decimal:0, latex:"w_{y}", listGraphs:[0]});

EdgeWorth.addExpression({idDiv:"SheilaX", latex:'x_{s}=5', max:'w_{x}', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"SheilaY", latex:'y_{s}=5', max:'w_{y}', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"BruceX", latex:'x_{b}=w_{x}-x_{s}', max:'w_{x}', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"BruceY", latex:'y_{b}=w_{y}-y_{s}', max:'w_{y}', listGraphs:[0]});
//Box
EdgeWorth.addExpression({idDiv:"D1", latex:'x=w_{x} \\left\\{0\\le y\\le w_{y}\\right\\}', max:'w_{y}', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"D2", latex:'y=w_{y} \\left\\{0\\le x\\le w_{x}\\right\\}', max:'w_{y}', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"D3", latex:'x=0 \\left\\{0\\le y\\le w_{y}\\right\\}', max:'w_{y}', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"D4", latex:'y=0 \\left\\{0\\le x\\le w_{x}\\right\\}', max:'w_{y}', listGraphs:[0]});
//Bruce and Sheila' labels
EdgeWorth.addLabel({idDiv:'BruceLabel', latex:'\\left(w_{x},w_{y}\\right)', color:'#c74440', label:'Bruce', pointSize:"0", dragMode:Desmos.DragModes.NONE, labelOrientation:Desmos.LabelOrientations.ABOVE, listGraphs:[0]});
EdgeWorth.addLabel({idDiv:'SheilaLabel', latex:'\\left(0,0\\right)', color:'#2d70b3', label:'Sheila', pointSize:"0", dragMode:Desmos.DragModes.NONE, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});
//DraggableBundlePoints
EdgeWorth.addLabel({idDiv:'BrucePoint', latex:'\\left(w_{x}-x_{b},w_{y}-y_{b}\\right)', color:'#c74440', label:'(${x_{b}},${y_{b}})', pointSize:"0", dragMode:Desmos.DragModes.XY, labelOrientation:Desmos.LabelOrientations.ABOVE, listGraphs:[0]});
EdgeWorth.addLabel({idDiv:'SheilaPoint', latex:'\\left(x_{s},y_{s}\\right)', color:'#2d70b3', label:'(${x_{s}},${y_{s}})', pointSize:"1", dragMode:Desmos.DragModes.XY, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});
//Utility Functions
EdgeWorth.addFuncInput({idDiv:'SheilaUtility', title:'Sheila Utility', func:'U_{s}\\left(x,y\\right)', latex:'\\ln x+2\\ln y',listGraphs:[0]});
EdgeWorth.addFuncInput({idDiv:'BruceUtility', title:'Bruce Utility', func:'U_{b}\\left(x,y\\right)', latex:'\\ln x+\\ln y', listGraphs:[0]});
//find K for utils
EdgeWorth.addExpression({idDiv:"KSheila", latex:'k_{s}=U_{s}\\left(x_{s},y_{s}\\right)', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"KBruce", latex:'k_{b}=U_{b}\\left(x_{b},y_{b}\\right)',  listGraphs:[0]});
//rotationEquiations
EdgeWorth.addExpression({idDiv:"PiI1", latex:'x_{1}\\left(x,y\\right)=x\\cos\\left(-\\pi\\right)-y\\sin\\left(-\\pi\\right)',  listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"PiI2", latex:'y_{1}\\left(x,y\\right)=x\\sin\\left(-\\pi\\right)+y\\cos\\left(-\\pi\\right)', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"Pi2I1", latex:'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"Pi2I2", latex:'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs:[0]});
//draw utils
EdgeWorth.addExpression({idDiv:"SheilaUtilitydraw", latex:'U_{s}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=k_{s}\\left\\{0\\le x\\le w_{x}\\right\\}\\left\\{0\\le y\\le w_{y}\\right\\}', color:'#2d70b3', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"BruceUtilitydraw", latex:'U_{b}\\left(x_{1}\\left(x-w_{x},y\\right),y_{1}\\left(x,y-w_{y}\\right)\\right)=k_{b}\\left\\{0\\le x\\le w_{x}\\right\\}\\left\\{0\\le y\\le w_{y}\\right\\}', color:'#c74440', listGraphs:[0]});
//MRS
EdgeWorth.addExpression({idDiv:"MRSSheila", latex:'M_{rsS}\\left(x,y\\right)=\\frac{\\frac{d}{dx}\\left(U_{s}\\left(x,y\\right)\\right)}{\\frac{d}{dy}\\left(U_{s}\\left(x,y\\right)\\right)}', color:'#c74440', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"MRSSheilaAtPoint", latex:'M_{s}=M_{rsS}\\left(x_{s},y_{s}\\right)', color:'#c74440', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"MRSBruce", latex:'M_{rsB}\\left(x,y\\right)=\\frac{\\frac{d}{dx}\\left(U_{b}\\left(x,y\\right)\\right)}{\\frac{d}{dy}\\left(U_{b}\\left(x,y\\right)\\right)}', color:'#c74440', listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"MRSBruceAtPoint", latex:'M_{b}=M_{rsB}\\left(x_{b},y_{b}\\right)', color:'#c74440', listGraphs:[0]});
EdgeWorth.setValue({idDiv:"MRSSheilaValue", decimal:2, latex:"M_{s}", listGraphs:[0]});
EdgeWorth.setValue({idDiv:"MRSBruceValue", decimal:2, latex:"M_{b}", listGraphs:[0]});
//contractCurve
EdgeWorth.addExpression({idDiv:"ContractCurve", latex:'M_{rsB}\\left(w_{x}-x,w_{y}-y\\right)=M_{rsS}\\left(x,y\\right)\\left\\{0<x<w_{x}\\right\\}\\left\\{0<y<w_{y}\\right\\}',color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
//tangents
EdgeWorth.addExpression({idDiv:"SheilaTangent", latex:'y=-M_{rsS}\\left(x_{s},y_{s}\\right)\\left(x-x_{s}\\right)+y_{s} \\left\\{0\\le x\\le w_{x}\\right\\}\\left\\{0\\le y\\le w_{y}\\right\\}', color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
EdgeWorth.addExpression({idDiv:"BruceTangent", latex:'y=-M_{rsB}\\left(x_{b},y_{b}\\right)\\left(x-w_{x}+x_{b}\\right)+\\left(w_{y}-y_{b}\\right) \\left\\{0\\le x\\le w_{x}\\right\\}\\left\\{0\\le y\\le w_{y}\\right\\}', color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

EdgeWorth.addSwitchInput({idDiv:"ContractCurveInput", title:"Contract Curve", idDivs:["ContractCurve"], listGraphs:[0]});
EdgeWorth.addSwitchInput({idDiv:"TangentInputs", title:"Tangent Lines", idDivs:["SheilaTangent", "BruceTangent"], listGraphs:[0]});
  
EdgeWorth.setInstructions({
    title: "Total Endownment",
    content: '<b>Input the total endowment of good X and good Y.</b> The length of the sides of the Edgeworth Box will adjust to reflect the total endowment of each good, with the horizontal sides of the Box corresponding to good X and the vertical sides corresponding to good Y. <br>\
    Currently, the total endowment of good X is set at \\exp{endownmentXValueDisplay} and the total endowment of good Y is set at \\exp{endownmentYValueDisplay}\
    \\tip{"You can adjust the endowment in a few ways: by typing the number directly, using the up and down arrows to adjust the number, moving the slider, or pressing left and right arrows on the keyboard when the slider is selected."}'
  });
  EdgeWorth.setInstructions({
    title: "Plug in Utility Functions",
    content: '<b>Input the utility functions for each person, Sheila and Bruce.</b> The indifference curves corresponding to the respective utility functions will show up in the Edgeworth Box. Sheila’s indifference curve is in blue and Bruce’s in red. <br>\
    <br>Currently, Sheila’s utility curve is set at \\exp{SheilaUtility} <br>Bruce’s utility curve is set at \\exp{BruceUtility}.'
  });
  EdgeWorth.setInstructions({
    title: "Display Tangents",
    content: '<b>Display the tangent lines by turning on the “tangent lines” switch.</b> The tangent lines are tangent to the indifference curves of Sheila and Bruce at their respective currently-selected bundles. The line tangent to Sheila’s bundle is in red, and the line tangent to Bruce’s bundle is in blue. The slope of the tangent line equals the marginal rate of substitution (MRS) at that point of the indifference curve.\
    \\theory{"Marginal Rate of Substitution","The MRS is given by the value of the partial derivative of utility with respect to x divided by the partial derivative of utility with respect to y. The MRS tells us the maximum number of units of good y one is willing to give up for an extra unit of good x."}'
  });
  EdgeWorth.setInstructions({
    title: "Display Contract Curve",
    content: '<b>Display the contract curve by turning on the “contract curve” switch.</b> The contract curve shows the set of all Pareto Efficient feasible allocations in the exchange economy. At bundles along the contract curve, the two indifference curves are tangent to each other, i.e., the MRSs of both parties at their respective bundles are equal.'
  });
  EdgeWorth.setInstructions({
    title: "Compute MRSs",
    content: 'Sheila MRS:<br>\
\\exp{MRSSheilaValue}<br>\
Bruce MRS:<br>\
\\exp{MRSBruceValue}'
  });
  EdgeWorth.setCreators({
    title: "Developer",
    name: "Radi",
    school: "GS’23"
  });
  EdgeWorth.setCreators({
    title: "Editor",
    name: "Kyla",
    school: "CC’24"
  });
  EdgeWorth.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});
  </script>