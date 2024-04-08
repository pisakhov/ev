---
tags: principles-of-economics
thumbnail: /assets/img/InterventionsGraph.png
title: Interventions
description: 10-16 words max here... don't repeat title words.
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({
    "idDiv": "InterventionsGraph",
    "height": "650px",
    "width": "100",
    "copy": true,
    "left": -25,
    "right": 140,
    "bottom": -15,
    "top": 80,
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

//Select Option
myCalculator.addSelectInput({ idDiv: "SurplusSelectInput", title: "Type of Intervention", hideAllTitle: "No Intervention", hasSize: true, item: "Quota", listGroup: ["QuotaQSlider", "QuotaQLabel", "QuotaSPDashedX", "QuotaSPDashedDemandY", "QuotaSPDashedSupplyY", "QuotaPriceDemand", "PriceQuotaSupplyRound", "QuotaPriceSupply", "ShadedCSPlusQuota", "ShadedPSPlusQuota", "QuotaDWL", "QuotaDWLSwitch"], listGraphs: [0] });
myCalculator.addSelectInput({ idDiv: "SurplusSelectInput", title: "Type of Intervention", hideAllTitle: "No Intervention", hasSize: true, item: "Price Ceiling", listGroup: ["PriceCeilingSlider", "PriceCeillingLabel", "QuantityCeillingLabel", "MCPriceCeiling", "PriceCeilingDashedX", "PriceCeilingDashedY", "ShadedCSPlusPriceCeiling", "ShadedPSPlusPriceCeiling", "PriceCeilingDWL", "PriceCeilingDWLSwitch"], listGraphs: [0] });
myCalculator.addSelectInput({ idDiv: "SurplusSelectInput", title: "Type of Intervention", hideAllTitle: "No Intervention", hasSize: true, item: "Per Unit Tax", listGroup: ["TaxPerUnitSlider", "TaxPriceSupplyLabel", "TaxPriceDemandLabel", "TaxQuantatityLabel", "TaxDashedX", "TaxDashedDemandY", "TaxDashedSupplyY", "ShadedTaxCS", "ShadedTaxPS", "ShadedTaxDWL", "ShadedTaxGS", "TaxDWL", "TaxDWLSwitch"], listGraphs: [0] });
myCalculator.addSelectInput({ idDiv: "SurplusSelectInput", title: "Type of Intervention", hideAllTitle: "No Intervention", hasSize: true, item: "Per Unit Subsidy", listGroup: ["subPerUnitSlider", "subPriceSupplyLabel", "subPriceDemandLabel", "subQuantatityLabel", "subDashedX", "subDashedDemandY", "subDashedSupplyY", "ShadedsubCS", "ShadedsubPS", "ShadedsubDWL", "ShadedsubGS", "ShadedExpGS", "ShadedExpGSSwitch", 'SubsidyDWLSwitch'], listGraphs: [0] });



//Price Function
myCalculator.addExpression({ 'idDiv': 'PFunction', 'latex': "f_{p}\\left(Q\\right)=60-0.5Q\\left\\{Q\\ge0\\right\\}", 'color': '#a21caf', 'hidden': false, 'listGraphs': [0] });
//MC
myCalculator.addExpression({ 'idDiv': 'MCFunction', 'latex': "f_{mc}\\left(Q\\right)=\\frac{Q}{2}\\left\\{Q\\ge0\\right\\}", 'color': '#6d28d9', 'hidden': false, 'listGraphs': [0] });

//P~MC
myCalculator.addExpression({ idDiv: "PMCQOptimal", latex: "f_{p}\\left(Q_{opt}\\right)\\sim f_{mc}\\left(Q_{opt}\\right)", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceOptimal", latex: "P_{opt}=f_{p}\\left(Q_{opt}\\right)", listGraphs: [0] });

//Optimal Supply&Demand
myCalculator.addExpression({ idDiv: "OptimalQ", latex: "x=Q_{opt}\\left\\{0<y<P_{opt}\\right\\}", color: '#475569', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "OptimalP", latex: "y=P_{opt}\\left\\{0<x<Q_{opt}\\right\\}", color: '#475569', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': 'OptimalQlabel', 'latex': "(0, P_{opt})", 'label': '`P_m`: ${P_{opt}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.LEFT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'OptimalPlabel', 'latex': "(Q_{opt}, 0)", 'label': '`Q_m`: ${Q_{opt}}', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'showLabel': true, 'listGraphs': [0] });

//Quota
myCalculator.addSliderInput({ idDiv: "QuotaQSlider", title: "Quota", latex: "Q_{q}", min: 0, max: 'Q_{opt}', step: 1, defaultValue: 30, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'QuotaQLabel', latex: '\\left(Q_{q},0\\right)', color: '#be123c', label: 'Quota: ${Q_q}', dragMode: Desmos.DragModes.X, labelOrientation: Desmos.LabelOrientations.BELOW, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceQuotaDemand", latex: "P_{qD}=f_{p}\\left(Q_{q}\\right)", hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceQuotaSupply", latex: "P_{qS}=f_{mc}\\left(Q_{q}\\right)", hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "QuotaSPDashedX", latex: "x=Q_{q}\\left\\{0<y<P_{qD}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "QuotaSPDashedDemandY", latex: "y=P_{qD}\\left\\{0<x<Q_{q}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "QuotaSPDashedSupplyY", latex: "y=P_{qS}\\left\\{0<x<Q_{q}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceQuotaDemandRound", hidden: true, latex: "P_{qD2}=\\frac{\\operatorname{round}\\left(P_{qD}\\cdot100\\right)}{100}", color: 'gray', listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'QuotaPriceDemand', hidden: true, latex: '\\left(0,P_{qD}\\right)', color: '#be123c', label: '${P_qD2}', labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceQuotaSupplyRound", hidden: true, latex: "P_{qS2}=\\frac{\\operatorname{round}\\left(P_{qS}\\cdot100\\right)}{100}", color: 'gray', listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'QuotaPriceSupply', latex: '\\left(0,P_{qS}\\right)', color: '#be123c', label: '${P_qS2}', labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TotalConsumerSPFunc", latex: "f_{tCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{q}:f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", color: 'gray', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedCSPlusQuota", latex: "P_{qD}\\le y\\le f_{tCS}\\left(x\\right)", color: '#16a34a', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TotalProducerSPFunc", latex: "f_{tPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{q}:f'_{mc}\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color: 'gray', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedPSPlusQuota", hidden: false, latex: "f_{tPS}\\left(x\\right)\\le y\\le P\\ _{qD}", color: '#0284c7', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "QuotaDWL", latex: "\\operatorname{polygon} \\left(\\left(Q_{q},P_{qD2}\\right),\\left(Q_{q},P_{qS}\\right),\\left(Q_{opt},P_{opt}\\right)\\right)", color: '#e11d48', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addSwitchInput({'idDiv':'QuotaDWLSwitch','title':'Display Deadweight Loss', isInitiallyChecked: true, 'idDivs':["QuotaDWL"],'listGraphs':[0]});

//Price Ceiling
myCalculator.addSliderInput({ idDiv: "PriceCeilingSlider", title: "Price Ceiling", latex: "P_{ceiling}", min: 'f_{mc}\\left(0\\right)', max: 'P_{opt}', step: 1, defaultValue: 12, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'PriceCeillingLabel', latex: '\\left(0,P_{ceiling}\\right)', color: '#be123c', label: 'Ceiling: ${P_ceiling}', dragMode: Desmos.DragModes.Y, labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'QuantityCeillingLabel', latex: '\\left(Q_{ceiling},0\\right)', color: '#be123c', label: '${Q_ceiling}', labelOrientation: Desmos.LabelOrientations.BELOW, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "MCPriceCeiling", latex: "f_{mc}\\left(Q_{ceiling}\\right)\\sim P_{ceiling}", color: '#be123c', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceCeilingDashedX", latex: "x=Q_{ceiling}\\left\\{0<y<f_{p}\\left(Q_{ceiling}\\right)\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceCeilingDashedY", latex: "y=P_{ceiling}\\left\\{0<x<Q_{ceiling}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceCeilingDemandFun", latex: "f_{tcCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{ceiling}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedCSPlusPriceCeiling", latex: "P_{ceiling}\\le y\\le f_{tcCS}\\left(x\\right)", color: '#16a34a', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceCeilingSupplyFun", latex: "f_{tcPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{ceiling}:f'_{mc}\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedPSPlusPriceCeiling", latex: "f_{tcPS}\\left(x\\right)\\le y\\le P_{ceiling}", color: '#0284c7', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "PriceCeilingDWL", latex: "\\operatorname{polygon} \\left(\\left(Q_{ceiling},P_{ceiling}\\right),\\left(Q_{ceiling},f_{p}\\left(Q_{ceiling}\\right)\\right),\\left(Q_{opt},P_{opt}\\right)\\right)", color: '#e11d48', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addSwitchInput({'idDiv':'PriceCeilingDWLSwitch','title':'Display Deadweight Loss', isInitiallyChecked: true, 'idDivs':["PriceCeilingDWL"],'listGraphs':[0]});


//Tax
myCalculator.addSliderInput({ idDiv: "TaxPerUnitSlider", title: "Tax", latex: "P_{tax}", min: 0, max: '60', step: 1, defaultValue: 10, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxInverseSupply", latex: "g_{s}\\left(P\\right)=f_{mc}\\left(P\\right)+P_{tax}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxInverseDemand", latex: "g_{d}\\left(P\\right)=f_{p}\\left(P\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxComputeOptimalQ", latex: "g_{s}\\left(Q_{sopt}\\right)\\sim g_{d}\\left(Q_{sopt}\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxComputeOptimalQ2", latex: "Q_{sopt2}=\\operatorname{round}\\left(Q_{sopt},2\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxComputePriceDemand", latex: "p_{dtax}=g_{d}\\left(Q_{sopt}\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxComputePriceDemand2", latex: "p_{dtax2}=\\frac{\\operatorname{round}\\left(p_{dtax}\\cdot10^{2}\\right)}{10^{2}}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxComputePriceSupply", latex: "p_{stax}=p_{dtax}-P_{tax}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxComputePriceSupply2", latex: "p_{stax2}=\\frac{\\operatorname{round}\\left(p_{stax}\\cdot10^{2}\\right)}{10^{2}}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'TaxPriceSupplyLabel', latex: '\\left(0,p_{stax}\\right)', color: '#be123c', label: '`P_{S}`= ${p_{stax2}}', dragMode: Desmos.DragModes.Y, labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'TaxPriceDemandLabel', latex: '\\left(0,p_{dtax}\\right)', color: '#be123c', label: '`P_{D}`= ${p_{dtax2}}', dragMode: Desmos.DragModes.Y, labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'TaxQuantatityLabel', latex: '\\left(Q_{sopt},0\\right)', color: '#be123c', label: '${Q_{sopt2}}', dragMode: Desmos.DragModes.X, labelOrientation: Desmos.LabelOrientations.BELOW, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxDashedX", latex: "x=Q_{sopt}\\left\\{0<y<p_{dtax}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxDashedDemandY", latex: "y=p_{dtax}\\left\\{0<x<Q_{sopt}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxDashedSupplyY", latex: "y=p_{stax}\\left\\{0<x<Q_{sopt}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxCSFun", latex: "f_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{sopt}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedTaxCS", latex: "p_{dtax}\\le y\\le f_{sgCS}\\left(x\\right)", color: '#16a34a', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxPSFun", latex: "f_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{sopt}:f_{mc}'\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color: 'gray', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedTaxPS", latex: "f_{sgPS}\\left(x\\right)\\le y\\le p_{stax}", color: '#0284c7', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedTaxDWL", latex: "x\\ge Q_{opt}\\left\\{f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\le y\\le f_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<Q_{sopt}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedTaxGS", latex: "y\\le p_{dtax}\\left\\{0\\le x\\le Q_{sopt}\\right\\}\\left\\{f_{p}\\left(x\\right)\\ge y\\ge p_{stax}\\right\\}", color: '#ea580c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "TaxDWL", latex: "\\operatorname{polygon} \\left(\\left(Q_{sopt},p_{stax}\\right),\\left(Q_{sopt},p_{dtax}\\right),\\left(Q_{opt},P_{opt}\\right)\\right)", color: '#e11d48', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addSwitchInput({'idDiv':'TaxDWLSwitch','title':'Display Deadweight Loss', isInitiallyChecked: true, 'idDivs':["TaxDWL"],'listGraphs':[0]});


//Subsidy
myCalculator.addExpression({ idDiv: "findYintercept", latex: "P_{yint}=f_{p}(0)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addSliderInput({ idDiv: "subPerUnitSlider", title: "Subsidy", latex: "P_{sub}", min: 0, max: 'P_{yint}', step: 1, defaultValue: 10, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subInverseSupply", latex: "s_{s}\\left(P\\right)=f_{mc}\\left(P\\right)-P_{sub}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subInverseDemand", latex: "s_{d}\\left(P\\right)=f_{p}\\left(P\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subComputeOptimalQ", latex: "s_{s}\\left(\\theta_{sopt}\\right)\\sim s_{d}\\left(\\theta_{sopt}\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subComputeOptimalQ2", latex: "\\theta_{sopt2}=\\operatorname{round}\\left(\\theta_{sopt},2\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subComputePriceDemand", latex: "p_{dsub}=s_{s}\\left(\\theta_{sopt}\\right)", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subComputePriceDemand2", latex: "p_{dsub2}=\\frac{\\operatorname{round}\\left(p_{dsub}\\cdot10^{2}\\right)}{10^{2}}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subComputePriceSupply", latex: "p_{ssub}=p_{dsub}+P_{sub}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subComputePriceSupply2", latex: "p_{ssub2}=\\frac{\\operatorname{round}\\left(p_{ssub}\\cdot10^{2}\\right)}{10^{2}}", color: '#6042a6', hidden: true, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'subPriceSupplyLabel', latex: '\\left(0,p_{ssub}\\right)', color: '#be123c', label: '`P_{S}`: ${p_{ssub2}}', dragMode: Desmos.DragModes.Y, labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'subPriceDemandLabel', latex: '\\left(0,p_{dsub}\\right)', color: '#be123c', label: '`P_{D}`: ${p_{dsub2}}', dragMode: Desmos.DragModes.Y, labelOrientation: Desmos.LabelOrientations.LEFT, listGraphs: [0] });
myCalculator.addLabel({ idDiv: 'subQuantatityLabel', latex: '\\left(\\theta_{sopt},0\\right)', color: '#be123c', label: '${\\theta_{sopt2}}', dragMode: Desmos.DragModes.X, labelOrientation: Desmos.LabelOrientations.BELOW, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subDashedX", latex: "x=\\theta_{sopt}\\left\\{0<y<p_{dsub}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subDashedDemandY", latex: "y=p_{dsub}\\left\\{0<x<\\theta_{sopt}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subDashedSupplyY", latex: "y=p_{ssub}\\left\\{0<x<\\theta_{sopt}\\right\\}", color: '#be123c', lineStyle: Desmos.Styles.DASHED, lineWidth: "0.9", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subCSFun", latex: "k_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le \\theta_{sopt}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedsubCS", latex: "p_{dsub}\\le y\\le k_{sgCS}\\left(x\\right)", color: '#16a34a', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "subPSFun", latex: "k_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le \\theta_{sopt}:f_{mc}'\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color: 'gray', hidden: true, listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedsubPS", latex: "k_{sgPS}\\left(x\\right)\\le y\\le p_{ssub}", color: '#0284c7', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedsubDWL", latex: "x\\ge P_{opt}\\left\\{f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\le y\\le f_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<\\theta_{sopt}\\right\\}", color: '#e11d48', lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addExpression({ idDiv: "ShadedExpGS", latex: "p_{dsub}\\le y\\le p_{ssub}\\left\\{0\\le x\\le \\theta_{sopt}\\right\\}", color: '#ea580c', hidden: false, lineStyle: Desmos.Styles.DASHED, lineWidth: "0", listGraphs: [0] });
myCalculator.addSwitchInput({ idDiv: "ShadedExpGSSwitch", title: "Display Government Expenditures", isInitiallyChecked: true, idDivs: ["ShadedExpGS"], listGraphs: [0] });
myCalculator.addSwitchInput({'idDiv':'SubsidyDWLSwitch','title':'Display Deadweight Loss', isInitiallyChecked: true, 'idDivs':["ShadedsubDWL"],'listGraphs':[0]});




myCalculator.setInstructions({
    title: "Drop down selection",
    content: '<b>Choose the intervention you would like to study from the drop-down list.</b> You can choose between a quota, a price ceiling, a per-unit subsidy, or a per-unit tax.'
});

myCalculator.setInstructions({
    title: "Adjusting intervention",
    content: '<b>Change the value of the quota/price ceiling/subsidy/tax.</b> The graph will automatically display the consumer surplus in green, the producer surplus in blue, and the government surplus (if any) in orange. In the specific case of a subsidy, the deadweight loss will be displayed in red.\
  \\tip{"For quota and price ceiling, you can also change the value of the quota/ price ceiling by clicking and dragging the enlarged red label that shows the quota/ price ceiling on the graph itself."}'
});


myCalculator.setCreators({
    title: "Developer",
    name: "Radi",
    school: "GS’23"
});
myCalculator.setCreators({
    title: "Editor",
    name: "Kyla",
    school: "CC’24"
});
</script>
