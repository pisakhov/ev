---
tags: principal-economics
thumbnail: /assets/img/externality.png
title: Externality
description: 10-16 words max here... don't repeat title words.
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'ExternalityGraph', 'height': '650px', 'width': '100', 'left': '-100', 'right': '1200', 'bottom': '-200', 'top': '850', 'copy': true, 'expressions': false, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'Quantity', 'yAxisLabel': 'Price' });
//create selection menu
myCalculator.addSelectInput({ 'idDiv': 'ExternalitySelectInput', title: "Type of Externality", hideAllTitle: "No Externality", hasSize: true, 'item': 'Positive Externalities in Consumption', 'listGroup': ["PosCSlider", "PosCDemand", "PosCSocialEquilibriumQuantity", "PosCSocialEquilibriumPrice", "drawPPosCline", "drawQPosCline", "PosCSocialEquilibriumPLabel", "PosCSocialEquilibriumQLabel", "PosCDWL", "PosCMSBLabel"], 'listGraphs': [0] });
myCalculator.addSelectInput({ 'idDiv': 'ExternalitySelectInput', title: "Type of Externality", hideAllTitle: "No Externality", hasSize: true, 'item': 'Negative Externalities in Consumption', 'listGroup': ["NegCSlider", "NegCDemand", "NegCSocialEquilibriumQuantity", "NegCSocialEquilibriumPrice", "drawPNegCline", "drawQNegCline", "NegCSocialEquilibriumPLabel", "NegCSocialEquilibriumQLabel", "NegCDWL", "NegCMSBLabel"], 'listGraphs': [0] });
myCalculator.addSelectInput({ 'idDiv': 'ExternalitySelectInput', title: "Type of Externality", hideAllTitle: "No Externality", hasSize: true, 'item': 'Positive Externalities in Production', 'listGroup': ["PosPSlider", "PosPSupply", "PosPSocialEquilibriumQuantity", "PosPSocialEquilibriumPrice", "drawPPosPline", "drawQPosPline", "PosPSocialEquilibriumPLabel", "PosPSocialEquilibriumQLabel", "PosPDWL", "PosPMSBLabel"], 'listGraphs': [0] });
myCalculator.addSelectInput({ 'idDiv': 'ExternalitySelectInput', title: "Type of Externality", hideAllTitle: "No Externality", hasSize: true, 'item': 'Negative Externalities in Production', 'listGroup': ["NegPSlider", "NegPSupply", "NegPSocialEquilibriumQuantity", "NegPSocialEquilibriumPrice", "drawPNegPline", "drawQNegPline", "NegPSocialEquilibriumPLabel", "NegPSocialEquilibriumQLabel", "NegPDWL", "NegPMSBLabel"], 'listGraphs': [0] });

//static
myCalculator.addExpression({ 'idDiv': 'DemandFunctionStatic', 'latex': "P_d(x)=-\\frac{50}{100}\\cdot x+500", 'color': '#be185d', 'hidden': false, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'SupplyFunctionStatic', 'latex': "P_s(x)=\\frac{50}{100}\\cdot x+100", 'color': '#7e22ce', 'hidden': false, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'MPBLabel', 'latex': "(1000, 0)", 'label': 'MPB', 'pointSize': '0', 'color': '#be185d', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'MPCLabel', 'latex': "(1000, P_s(1000))", 'label': 'MPC', 'pointSize': '0', 'color': '#7e22ce', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });

//label static private equilibrium quantity and price
myCalculator.addExpression({ 'idDiv': 'EquilibriumQuantity', 'latex': "P_s(q)\\sim P_d(q)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'EquilibriumPrice', 'latex': "p = P_s(q)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawPline', 'latex': "y=p\\left\\{q>x>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawQline', 'latex': "x=q\\left\\{p>y>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PrivateEquilibriumPLabel', 'latex': "(0, p)", 'label': '`P_{e}`: ${p}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.LEFT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PrivateEquilibriumQLabel', 'latex': "(q, 0)", 'label': '`Q_{e}`: ${q}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'showLabel': true, 'listGraphs': [0] });

//positive externalities in consumption
myCalculator.addSliderInput({ 'idDiv': 'PosCSlider', 'title': 'Positive Externalities in Consumption', 'latex': 'D_{PC}', 'min': '500', 'max': '1000', 'step': '1', 'defaultValue': '500', 'simpleMode': true, 'hidden': true, 'legendText': ["None", " ", "Increase"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PosCDemand', 'latex': "P_{PCd}(Q) = -50/100*Q + D_{PC}", 'color': '#be185d', 'lineStyle': Desmos.Styles.DASHED, 'hidden': true, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PosCSocialEquilibriumQuantity', 'latex': "P_s(q_{PosC})\\sim P_{PCd}(q_{PosC})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PosCSocialEquilibriumPrice', 'latex': "p_{PosC} = P_s(q_{PosC})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawPPosCline', 'latex': "y=p_{PosC}\\left\\{q_{PosC}>x>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawQPosCline', 'latex': "x=q_{PosC}\\left\\{p_{PosC}>y>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PosCSocialEquilibriumPLabel', 'latex': "(0, p_{PosC})", 'label': '`P_{s}`: ${p_{PosC}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.LEFT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PosCSocialEquilibriumQLabel', 'latex': "(q_{PosC}, 0)", 'label': '`Q_{s}`: ${q_{PosC}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addExpression({ idDiv: "PosCDWL", latex: "\\operatorname{polygon} \\left(\\left(q,p\\right),\\left(q_{PosC},p_{PosC}\\right),\\left(q,P_{PCd}(q)\\right)\\right)", color: '#fa7e19', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': "PosCMSBLabel", 'latex': "(1000, P_{PCd}(1000))", 'label': 'MSB', 'pointSize': '0', 'color': '#be185d', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });

//negative externalities in consumption
myCalculator.addSliderInput({ 'idDiv': 'NegCSlider', 'title': 'Negative Externalities in Consumption', 'latex': 'D_{NC}', 'min': '100', 'max': '500', 'step': '1', 'defaultValue': '500', 'simpleMode': true, 'hidden': true, 'legendText': ["Increase", " ", "None"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'NegCDemand', 'latex': "P_{NCd}(Q) = -50/100*Q + D_{NC}", 'color': '#be185d', 'lineStyle': Desmos.Styles.DASHED, 'hidden': true, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'NegCSocialEquilibriumQuantity', 'latex': "P_s(q_{NegC})\\sim P_{NCd}(q_{NegC})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'NegCSocialEquilibriumPrice', 'latex': "p_{NegC} = P_s(q_{NegC})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawPNegCline', 'latex': "y=p_{NegC}\\left\\{q_{NegC}>x>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawQNegCline', 'latex': "x=q_{NegC}\\left\\{p_{NegC}>y>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'NegCSocialEquilibriumPLabel', 'latex': "(0, p_{NegC})", 'label': '`P_{s}`: ${p_{NegC}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.LEFT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'NegCSocialEquilibriumQLabel', 'latex': "(q_{NegC}, 0)", 'label': '`Q_{s}`: ${q_{NegC}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addExpression({ idDiv: "NegCDWL", latex: "\\operatorname{polygon} \\left(\\left(q,p\\right),\\left(q_{NegC},p_{NegC}\\right),\\left(q,P_{NCd}(q)\\right)\\right)", color: '#fa7e19', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': "NegCMSBLabel", 'latex': "(1000, P_{NCd}(1000))", 'label': 'MSB', 'pointSize': '0', 'color': '#be185d', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });

//positive externalities in production
myCalculator.addSliderInput({ 'idDiv': 'PosPSlider', 'title': 'Positive Externalities in Production', 'latex': 'S_{PP}', 'min': '-400', 'max': '100', 'step': '1', 'defaultValue': '100', 'simpleMode': true, 'hidden': true, 'legendText': ["Increase", " ", "None"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PosPSupply', 'latex': "P_{PPs}(Q) = 50/100*Q + S_{PP}", 'color': '#7e22ce', 'lineStyle': Desmos.Styles.DASHED, 'hidden': true, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PosPSocialEquilibriumQuantity', 'latex': "P_{PPs}(q_{PosP})\\sim P_d(q_{PosP})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PosPSocialEquilibriumPrice', 'latex': "p_{PosP} = P_{PPs}(q_{PosP})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawPPosPline', 'latex': "y=p_{PosP}\\left\\{q_{PosP}>x>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawQPosPline', 'latex': "x=q_{PosP}\\left\\{p_{PosP}>y>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PosPSocialEquilibriumPLabel', 'latex': "(0, p_{PosP})", 'label': '`P_{s}`: ${p_{PosP}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.LEFT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'PosPSocialEquilibriumQLabel', 'latex': "(q_{PosP}, 0)", 'label': '`Q_{s}`: ${q_{PosP}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addExpression({ idDiv: "PosPDWL", latex: "\\operatorname{polygon} \\left(\\left(q,p\\right),\\left(q_{PosP},p_{PosP}\\right),\\left(q,P_{PPs}(q)\\right)\\right)", color: '#fa7e19', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': "PosPMSBLabel", 'latex': "(1000, P_{PPs}(1000))", 'label': 'MSC', 'pointSize': '0', 'color': '#7e22ce', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });

//negative externalities in production
myCalculator.addSliderInput({ 'idDiv': 'NegPSlider', 'title': 'Negative Externalities in Production', 'latex': 'S_{NP}', 'min': '100', 'max': '500', 'step': '1', 'defaultValue': '100', 'simpleMode': true, 'hidden': true, 'legendText': ["None", " ", "Increase"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'NegPSupply', 'latex': "P_{NPs}(Q) = 50/100*Q + S_{NP}", 'color': '#7e22ce', 'lineStyle': Desmos.Styles.DASHED, 'hidden': true, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'NegPSocialEquilibriumQuantity', 'latex': "P_{NPs}(q_{NegP})\\sim P_d(q_{NegP})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'NegPSocialEquilibriumPrice', 'latex': "p_{NegP} = P_{NPs}(q_{NegP})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawPNegPline', 'latex': "y=p_{NegP}\\left\\{q_{NegP}>x>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawQNegPline', 'latex': "x=q_{NegP}\\left\\{p_{NegP}>y>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'NegPSocialEquilibriumPLabel', 'latex': "(0, p_{NegP})", 'label': '`P_{s}`: ${p_{NegP}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.LEFT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'NegPSocialEquilibriumQLabel', 'latex': "(q_{NegP}, 0)", 'label': '`Q_{s}`: ${q_{NegP}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addExpression({ idDiv: "NegPDWL", latex: "\\operatorname{polygon} \\left(\\left(q,p\\right),\\left(q_{NegP},p_{NegP}\\right),\\left(q,P_{NPs}(q)\\right)\\right)", color: '#fa7e19', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': "NegPMSBLabel", 'latex': "(1000, P_{NPs}(1000))", 'label': 'MSC', 'pointSize': '0', 'color': '#7e22ce', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });


//set creator
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Kyla', 'school': 'CC24' });
</script>
