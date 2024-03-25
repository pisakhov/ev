---
tags: public-economy
thumbnail: /assets/img/tax-incidence.png
title: Tax Incidence
description: Distributional burden of taxes between consumers and producers from demand/supply shifts
layout: model.njk
show: true
---
<script defer>
const TAX = new EconVision();
TAX.setGraphs({
  "idDiv": "TAXGraph",
  "height": "650px",
  "width": "100",
  "copy": true,
  "left": -25,
  "right": 150,
  "bottom": -15,
  "top": 100,
  "showGrid": false,
  "expressions": false,
  "keypad": false,
  "zoomFit": true,
  "settingsMenu": false,
  "showXAxis": true,
  "showYAxis": true,
  "xAxisLabel": "Q(units)       ",
  "yAxisLabel": "P($)"
});
//MC
TAX.addFuncInput({idDiv:'MCFunction', title:'Marginal Cost Function for the firm', func:'f_{mc}\\left(Q\\right)', latex:'\\frac{Q}{2}', constraint:'\\left\\{Q\\ge0\\right\\}', color:'#6042a6', listGraphs:[0]});
//Price Function
TAX.addFuncInput({idDiv:'PFunction', title:'Price Function for the firm', func:'f_{p}\\left(Q\\right)', latex:'60-0.5Q', constraint:'\\left\\{Q\\ge0\\right\\}', listGraphs:[0]});
//P~MC
TAX.addExpression({idDiv:"PMCQOptimal", latex:"f_{p}\\left(Q_{opt}\\right)\\sim f_{mc}\\left(Q_{opt}\\right)", listGraphs:[0]});
TAX.addExpression({idDiv:"PriceOptimal", latex:"P_{opt}=f_{p}\\left(Q_{opt}\\right)", listGraphs:[0]});
//Optimal Supply&Demand
TAX.addExpression({idDiv:"OptimalQ", latex:"x=Q_{opt}\\left\\{0<y<P_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
TAX.addExpression({idDiv:"OptimalP", latex:"y=P_{opt}\\left\\{0<x<Q_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
////roundoptimal
TAX.addExpression({idDiv:"OptimalRoundQ", latex:"Q_{opt2}=\\operatorname{round}(Q_{opt},2)", color:'gray', listGraphs:[0]});
TAX.addExpression({idDiv:"OptimalRoundP", latex:"P_{opt2}=\\operatorname{round}(P_{opt},2)", color:'gray', listGraphs:[0]});
TAX.setValue({idDiv:"OptimalRoundQDisplay", latex:"Q_{opt2}", listGraphs:[0]});
TAX.setValue({idDiv:"OptimalRoundPDisplay", latex:"P_{opt2}", listGraphs:[0]});
TAX.addLabel({idDiv:'OptimalPoint', latex:'\\left(Q_{opt},P_{opt}\\right)', color:'gray', label:'Optimal (${Q_opt2}, $${P_opt2})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});
//Tax on Supply
TAX.addSliderInput({idDiv:"TaxSupplyPerUnitSlider", title:"Tax on Supply", latex:"P_{taxS}", min:'-P_{opt}', max:'P_{opt}', step:'0.01', defaultValue:5, listGraphs:[0]});
TAX.addSliderInput({idDiv:"TaxDemandPerUnitSlider", title:"Tax on Demand", latex:"P_{taxD}", min:'-P_{opt}', max:'P_{opt}', step:'0.01', defaultValue:5, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyInverseSupply", latex:"g_{s}\\left(P\\right)=f_{mc}\\left(P\\right)+P_{taxS}", color:'#6042a6', lineWidth:"1.5", lineStyle:Desmos.Styles.DASHED, hidden:false, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyInverseDemand", latex:"g_{d}\\left(P\\right)=f_{p}\\left(P\\right)-P_{taxD}", color:'black', lineWidth:"1.5", lineStyle:Desmos.Styles.DASHED, hidden:false, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyComputeOptimalQ", latex:"g_{s}\\left(Q_{sopt}\\right)\\sim g_{d}\\left(Q_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyComputeOptimalQ2", latex:"Q_{sopt2}=\\operatorname{round}\\left(Q_{sopt},2\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyComputePriceDemand", latex:"p_{dtax}=g_{d}\\left(Q_{sopt}\\right)+P_{taxD}", color:'#6042a6', hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyComputePriceDemand2", latex:"p_{dtax2}=\\operatorname{round}(p_{dtax},2)", color:'#6042a6', hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyComputePriceSupply", latex:"p_{stax}=p_{dtax}-P_{taxS}-P_{taxD}", color:'#6042a6', hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyComputePriceSupply2", latex:"p_{stax2}=\\operatorname{round}\\left(p_{stax},2\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});
TAX.addLabel({idDiv:'TaxSupplyPriceSupplyLabel', latex:'\\left(0,p_{stax}\\right)', color:'#c74440', label:'PS($${p_{stax2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});
TAX.addLabel({idDiv:'TaxSupplyPriceDemandLabel', latex:'\\left(0,p_{dtax}\\right)', color:'#c74440', label:'PD($${p_{dtax2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});
TAX.addLabel({idDiv:'TaxSupplyQuantatityLabel', latex:'\\left(Q_{sopt},0\\right)', color:'#c74440', label:'${Q_{sopt2}}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyDashedX", latex:"x=Q_{sopt}\\left\\{0<y<p_{dtax}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyDashedDemandY", latex:"y=p_{dtax}\\left\\{0<x<Q_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyDashedSupplyY", latex:"y=p_{stax}\\left\\{0<x<Q_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyCSFun", latex:"f_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{sopt}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"ShadedTaxSupplyCS", latex:"p_{dtax}\\le y\\le f_{sgCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});
TAX.addExpression({idDiv:"TaxSupplyPSFun", latex:"f_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{sopt}:f_{mc}'\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:[0]});
TAX.addExpression({idDiv:"ShadedTaxSupplyPS", latex:"f_{sgPS}\\left(x\\right)\\le y\\le p_{stax}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});
TAX.addExpression({idDiv:"ShadedTaxSupplyDWL", latex:"x\\ge Q_{opt}\\left\\{f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\le y\\le f_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<Q_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});
TAX.addExpression({idDiv:"ShadedTaxSupplyGS", latex:"y\\le p_{dtax}\\left\\{0\\le x\\le Q_{sopt}\\right\\}\\left\\{f_{p}\\left(x\\right)\\ge y\\ge p_{stax}\\right\\}", color:'#fa7e19', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});


TAX.setInstructions({
  title: "Marginal Cost Function",
  content: 'Enter the marginal cost function for the firm, given as follows: %%\\frac{Q}{2}%%<br>The marginal cost function is the inverse of the supply function. To obtain the correct units, invert the supply function so that it is expressed in terms of Q.'
});

TAX.setInstructions({
  title: "Price Function",
  content: 'Enter the price function for the firm, given as follows:  %%60-0.5Q%%<br>The price function is the inverse of the demand function. To obtain the correct units, invert the demand function so that it is expressed in terms of Q.'
});


TAX.setInstructions({
  title: "Tax on Supply/Demand",
  content: 'You can use both sliders, <b>Tax on Supply</b> and <b>Tax on Demand</b> to change the tax amount. The dashed line represents the supply or demand curve after tax. The green shaded area signifies consumer surplus, while the light blue area represents producer surplus. The orange shaded area indicates the government surplus or government profit. Please note that the tax incidence does not depend on the party upon which the tax is imposed.'
});


TAX.setCreators({
title: "Developer",
name: "Radi",
school: "GS’23'"
});


TAX.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});

</script>