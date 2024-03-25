---
tags: principal-economics
thumbnail: /assets/img/InterventionsGraph.png
title: Stepwise Supply and Demand
description: 10-16 words max here... don't repeat title words.
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();
myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'StepwiseDemandGraph', 'height': '500px', 'width': '100', 'left': '-1', 'right': '20', 'bottom': '-1', 'top': '20', 'copy': true, 'expressions': true, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'Quantity', 'yAxisLabel': 'Price' });

//Supply Function 
myCalculator.addTemplateInput({'idDiv':'SQuantity','title':'Quantity Supplied','func':'X','placeholders':["[{\\placeholder[a]{1,2,3,4,5,6}}]"],'listGraphs':[0]});
myCalculator.addTemplateInput({'idDiv':'SPrices','title':'Corresponding Price for each Quantity','func':'Y','placeholders':["[{\\placeholder[a]{3,4,5,8,12,19}}]"],'listGraphs':[0]});

//shaded
myCalculator.addExpression({'idDiv':'horizontalLinesS','latex':"F\\left(x\\right)=\\left\\{0<x<X:0,Y\\right\\}\\left\\{x>0\\right\\}",'lineWidth':'2','color':'#67EEF9','listGraphs':[0]});
//?
myCalculator.addExpression({'idDiv':'verticalLinesS','latex':"G\\left(y\\right)=\\left\\{0<y<Y:X\\right\\}",'lineWidth':'2','color':'#67EEF9','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'stepShadeS','latex':"0<y<F\\left(x\\right)",'color':'#67EEF9','lineWidth':'0','listGraphs':[0]});



//Demand function 
myCalculator.addTemplateInput({'idDiv':'DQuantity','title':'Quantity Demanded','func':'Q','placeholders':["[{\\placeholder[a]{1,2,3,4,5,6}}]"],'listGraphs':[0]});
myCalculator.addTemplateInput({'idDiv':'DPrices','title':'Corresponding Price for each Quantity','func':'P','placeholders':["[{\\placeholder[a]{19,12,8,5,4,3}}]"],'listGraphs':[0]});
//shaded
myCalculator.addExpression({'idDiv':'horizontalLinesD','latex':"f\\left(x\\right)=\\left\\{0<x<Q:P\\right\\}",'lineWidth':'2','color':'#b67efb','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'verticalLinesD','latex':"g\\left(y\\right)=\\left\\{0<y<P:Q\\right\\}",'lineWidth':'2','color':'#b67efb','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'stepShadeD','latex':"0<y<f\\left(x\\right)",'color':'#b67efb','lineWidth':'0','listGraphs':[0]});

//add a switch 
//myCalculator.addLabel({ 'idDiv': 'PointsOnlyD', 'latex': "\\left(Q,P\\right)", 'label': ' ','pointStyle':Desmos.Styles.OPEN, 'color': '#8100bd', 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PointsLabelsD', 'latex': "\\left(Q,P\\right)", 'label': '(${Q}, $${P})', 'color': '#8100bd', 'showLabel': true, 'listGraphs': [0] });
myCalculator.addSwitchInput({'idDiv':'showDemand','title':'Display Demand Points','shouldRemoveExpression':false,'isInitiallyChecked':false,'idDivs':["PointsLabelsD"],'listGraphs':[0]});

//myCalculator.addLabel({ 'idDiv': 'PointsOnlyS', 'latex': "\\left(X,Y\\right)", 'label': ' ','pointStyle':Desmos.Styles.OPEN, 'color': '#155E75', 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PointsLabelsS', 'latex': "\\left(X,Y\\right)", 'label': '(${X}, $${Y})', 'color': '#155E75', 'showLabel': true, 'listGraphs': [0] });
myCalculator.addSwitchInput({'idDiv':'showSupply','title':'Display Supply Points','shouldRemoveExpression':false,'isInitiallyChecked':false,'idDivs':["PointsLabelsS"],'listGraphs':[0]});

//-----------------------

myCalculator.addExpression({'idDiv':'getFirstP','latex':"b=P\\left[1\\right]",'hidden':true,'listGraphs':[0]});
myCalculator.setValue({'idDiv':'getMyFirstPrice','latex':'b','decimal':'0','listGraphs':[0]});


// Page 1: Introduction
myCalculator.setInstructions({
    'title': 'Getting Started',
    'content': 'Welcome to the Stepwise Supply and Demand Calculator.'
});

// Page 2: Using the Calculator
myCalculator.setInstructions({
    'title': 'Using the Calculator',
    'content': "Define the market by inputting the supply and demand values. The stepwise values is displayed. "
});

// Page 3: Advanced Features
myCalculator.setInstructions({
    'title': 'Advanced Features',
    'content': "Explore the supply and demand curve through clicking the switch."
    //\\exp{DPrices} %%\\sqrt{\\frac{r}{2}}%%"
});

// Page 4: Troubleshooting
myCalculator.setInstructions({
    'title': 'Troubleshooting',
    'content': 'If issues arise, confirm that your quantity and price inputs are properly entered.'
});

// Update bounds of the graph
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Joy', 'school': "BC'27" });

//Change bounds to the maximum 
myCalculator.addExpression({ 'idDiv': 'BountdTop', 'latex': "B_{t}=\\max(P)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'BountdRight', 'latex': 'B_{r}=\\max(Q)', 'listGraphs': [0] });
myCalculator.setBounds({ 'top': 'B_{t}', 'right': 'B_{r}', 'tolerance': '1.3', 'mtolerance': '1.3', 'listGraphs': [0] });
</script>
