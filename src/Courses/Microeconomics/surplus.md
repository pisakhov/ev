---
title: Surplus2
layout: 'model.njk'
course: Microeconomics
tags: models
---
<script src="/assets/js/ev.js"></script>

<script defer>
const EdgeWorth = new EconVision();
    Surplus.setGraphs({
      "idDiv": "SurplusGraph",
      "height": "650px",
      "width": "100",
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
    //Price Function
    Surplus.addFuncInput({idDiv:'PFunction', title:'Price Function for the firm', func:'f\_{p}\\left(Q\\right)', latex:'60-0.5Q', constraint:'\\left\\{Q\\ge0\\right\\}', listGraphs:\[0]});

    //MC

    Surplus.addFuncInput({idDiv:'MCFunction', title:'Marginal Cost Function for the firm', func:'f\_{mc}\\left(Q\\right)', latex:'\\frac{Q}{2}', constraint:'\\left\\{Q\\ge0\\right\\}', color:'#6042a6', listGraphs:\[0]});

    //P~MC

    Surplus.addExpression({idDiv:"PMCQOptimal", latex:"f\_{p}\\left(Q\_{opt}\\right)\\sim f\_{mc}\\left(Q\_{opt}\\right)", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceOptimal", latex:"P\_{opt}=f\_{p}\\left(Q\_{opt}\\right)", listGraphs:\[0]});

    //Optimal Supply&Demand

    Surplus.addExpression({idDiv:"OptimalQ", latex:"x=Q\_{opt}\\left\\{0<y<P\_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"OptimalP", latex:"y=P\_{opt}\\left\\{0<x<Q\_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    ////roundoptimal

    Surplus.addExpression({idDiv:"OptimalRoundQ", latex:"Q\_{opt2}=\\frac{\\operatorname{round}\\left(Q\_{opt}\\cdot100\\right)}{100}", color:'gray', listGraphs:\[0]});

    Surplus.addExpression({idDiv:"OptimalRoundP", latex:"P\_{opt2}=\\frac{\\operatorname{round}\\left(P\_{opt}\\cdot100\\right)}{100}", color:'gray', listGraphs:\[0]});

    Surplus.setValue({idDiv:"OptimalRoundQDisplay", latex:"Q\_{opt2}", listGraphs:\[0]});

    Surplus.setValue({idDiv:"OptimalRoundPDisplay", latex:"P\_{opt2}", listGraphs:\[0]});

    Surplus.addLabel({idDiv:'OptimalPoint', latex:'\\left(Q\_{opt},P_{opt}\\right)', color:'gray', label:'Market Clearing (${Q_opt2}, $${P\_opt2})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:\[0]});

    //Select Option

    Surplus.addSelectInput({idDiv: "SurplusSelectInput", item: "Quota",	listGroup: \["QuotaQSlider", "QuotaQLabel", "QuotaSPDashedX", "QuotaSPDashedDemandY", "QuotaSPDashedSupplyY", "QuotaPriceDemand", "PriceQuotaSupplyRound", "QuotaPriceSupply", "ShadedCSPlusQuota", "ShadedPSPlusQuota"], listGraphs: \[0]});

    Surplus.addSelectInput({idDiv:"SurplusSelectInput", item:"Price Ceiling", listGroup:\["PriceCeilingSlider", "PriceCeillingLabel", "QuantityCeillingLabel", "MCPriceCeiling", "PriceCeilingDashedX", "PriceCeilingDashedY", "PriceCeilingDemandFun", "ShadedCSPlusPriceCeiling", "PriceCeilingSupplyFun", "ShadedPSPlusPriceCeiling"], listGraphs:\[0]});

    Surplus.addSelectInput({idDiv: "SurplusSelectInput", item: "Tax Per Unit", listGroup: \["TaxPerUnitSlider", "TaxPriceSupplyLabel", "TaxPriceDemandLabel", "TaxQuantatityLabel", "TaxDashedX", "TaxDashedDemandY", "TaxDashedSupplyY", "ShadedTaxCS", "ShadedTaxPS", "ShadedTaxDWL", "ShadedTaxGS"], listGraphs: \[0]});

    Surplus.addSelectInput({idDiv: "SurplusSelectInput", item: "Subsidy Per Unit", listGroup: \["subPerUnitSlider", "subPriceSupplyLabel", "subPriceDemandLabel", "subQuantatityLabel", "subDashedX", "subDashedDemandY", "subDashedSupplyY", "ShadedsubCS", "ShadedsubPS", "ShadedsubDWL", "ShadedsubGS","ShadedExpGS","ShadedExpGSSwitch"], listGraphs: \[0]});

    //Quota

    Surplus.addSliderInput({idDiv:"QuotaQSlider", title:"Quota", latex:"Q\_{q}", min:0, max:'Q\_{opt}', step:1, defaultValue:50, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'QuotaQLabel', latex:'\\left(Q\_{q},0\\right)', color:'#c74440', label:'${Q\_q}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceQuotaDemand", latex:"P\_{qD}=f\_{p}\\left(Q\_{q}\\right)", hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceQuotaSupply", latex:"P\_{qS}=f\_{mc}\\left(Q\_{q}\\right)", hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"QuotaSPDashedX", latex:"x=Q\_{q}\\left\\{0<y<P\_{qD}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"QuotaSPDashedDemandY", latex:"y=P\_{qD}\\left\\{0<x<Q\_{q}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"QuotaSPDashedSupplyY", latex:"y=P\_{qS}\\left\\{0<x<Q\_{q}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceQuotaDemandRound", hidden:true, latex:"P\_{qD2}=\\frac{\\operatorname{round}\\left(P\_{qD}\\cdot100\\right)}{100}", color:'gray', listGraphs:\[0]});

    Surplus.addLabel({idDiv:'QuotaPriceDemand', hidden:true, latex:'\\left(0,P\_{qD}\\right)', color:'#c74440', label:'$${P\_qD2}', labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceQuotaSupplyRound", hidden:true, latex:"P\_{qS2}=\\frac{\\operatorname{round}\\left(P\_{qS}\\cdot100\\right)}{100}", color:'gray', listGraphs:\[0]});

    Surplus.addLabel({idDiv:'QuotaPriceSupply', latex:'\\left(0,P\_{qS}\\right)', color:'#c74440', label:'$${P\_qS2}', labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TotalConsumerSPFunc", latex:"f\_{tCS}\\left(x\\right)=\\left\\{0\\le x\\le Q\_{q}:f'\_{p}\\left(x\\right)x+f\_{p}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedCSPlusQuota", latex:"P\_{qD}\\le y\\le f\_{tCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TotalProducerSPFunc", latex:"f\_{tPS}\\left(x\\right)=\\left\\{0\\le x\\le Q\_{q}:f'\_{mc}\\left(x\\right)x+f\_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedPSPlusQuota", hidden:false, latex:"f\_{tPS}\\left(x\\right)\\le y\\le P\\ \_{qD}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    //Price Ceiling

    Surplus.addSliderInput({idDiv:"PriceCeilingSlider", title:"Price Ceiling", latex:"P\_{ceiling}", min:'f\_{mc}\\left(0\\right)', max:'P\_{opt}', step:'0.01', defaultValue:5, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'PriceCeillingLabel', latex:'\\left(0,P_{ceiling}\\right)', color:'#c74440', label:'$${P\_ceiling}', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'QuantityCeillingLabel', latex:'\\left(Q\_{ceiling},0\\right)', color:'#c74440', label:'${Q\_ceiling}', labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"MCPriceCeiling", latex:"f\_{mc}\\left(Q\_{ceiling}\\right)\\sim P\_{ceiling}", color:'#c74440', listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceCeilingDashedX", latex:"x=Q\_{ceiling}\\left\\{0<y<f\_{p}\\left(Q\_{ceiling}\\right)\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceCeilingDashedY", latex:"y=P\_{ceiling}\\left\\{0<x<Q\_{ceiling}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceCeilingDemandFun", latex:"f\_{tcCS}\\left(x\\right)=\\left\\{0\\le x\\le Q\_{ceiling}:f\_{p}'\\left(x\\right)x+f\_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedCSPlusPriceCeiling", latex:"P\_{ceiling}\\le y\\le f\_{tcCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"PriceCeilingSupplyFun", latex:"f\_{tcPS}\\left(x\\right)=\\left\\{0\\le x\\le Q\_{ceiling}:f'\_{mc}\\left(x\\right)x+f\_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedPSPlusPriceCeiling", latex:"f\_{tcPS}\\left(x\\right)\\le y\\le P\_{ceiling}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    //Tax

    Surplus.addSliderInput({idDiv:"TaxPerUnitSlider", title:"Tax", latex:"P\_{tax}", min:0, max:'P\_{opt}', step:'0.01', defaultValue:5, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxInverseSupply", latex:"g\_{s}\\left(P\\right)=f\_{mc}\\left(P\\right)+P\_{tax}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxInverseDemand", latex:"g\_{d}\\left(P\\right)=f\_{p}\\left(P\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxComputeOptimalQ", latex:"g\_{s}\\left(Q\_{sopt}\\right)\\sim g\_{d}\\left(Q\_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxComputeOptimalQ2", latex:"Q\_{sopt2}=\\operatorname{round}\\left(Q\_{sopt},2\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceDemand", latex:"p\_{dtax}=g\_{d}\\left(Q\_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceDemand2", latex:"p\_{dtax2}=\\frac{\\operatorname{round}\\left(p\_{dtax}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceSupply", latex:"p\_{stax}=p\_{dtax}-P\_{tax}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceSupply2", latex:"p\_{stax2}=\\frac{\\operatorname{round}\\left(p\_{stax}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'TaxPriceSupplyLabel', latex:'\\left(0,p\_{stax}\\right)', color:'#c74440', label:'\`P\_{S}\`($${p\_{stax2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'TaxPriceDemandLabel', latex:'\\left(0,p\_{dtax}\\right)', color:'#c74440', label:'\`P\_{D}\`($${p\_{dtax2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'TaxQuantatityLabel', latex:'\\left(Q\_{sopt},0\\right)', color:'#c74440', label:'${Q\_{sopt2}}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxDashedX", latex:"x=Q\_{sopt}\\left\\{0<y<p\_{dtax}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxDashedDemandY", latex:"y=p\_{dtax}\\left\\{0<x<Q\_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxDashedSupplyY", latex:"y=p\_{stax}\\left\\{0<x<Q\_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxCSFun", latex:"f\_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le Q\_{sopt}:f\_{p}'\\left(x\\right)x+f\_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedTaxCS", latex:"p\_{dtax}\\le y\\le f\_{sgCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"TaxPSFun", latex:"f\_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le Q\_{sopt}:f\_{mc}'\\left(x\\right)x+f\_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedTaxPS", latex:"f\_{sgPS}\\left(x\\right)\\le y\\le p\_{stax}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedTaxDWL", latex:"x\\ge Q\_{opt}\\left\\{f'\_{p}\\left(x\\right)x+f\_{p}\\left(0\\right)\\le y\\le f\_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<Q\_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedTaxGS", latex:"y\\le p\_{dtax}\\left\\{0\\le x\\le Q\_{sopt}\\right\\}\\left\\{f\_{p}\\left(x\\right)\\ge y\\ge p\_{stax}\\right\\}", color:'#fa7e19', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    //Subsidy

    Surplus.addExpression({idDiv:"findYintercept", latex:"P\_{yint}=f\_{p}(0)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addSliderInput({idDiv:"subPerUnitSlider", title:"sub", latex:"P\_{sub}", min:0, max:'P\_{yint}', step:'0.01', defaultValue:5, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subInverseSupply", latex:"s\_{s}\\left(P\\right)=f\_{mc}\\left(P\\right)-P\_{sub}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subInverseDemand", latex:"s\_{d}\\left(P\\right)=f\_{p}\\left(P\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subComputeOptimalQ", latex:"s\_{s}\\left(\\theta\_{sopt}\\right)\\sim s\_{d}\\left(\\theta\_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subComputeOptimalQ2", latex:"\\theta\_{sopt2}=\\operatorname{round}\\left(\\theta\_{sopt},2\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subComputePriceDemand", latex:"p\_{dsub}=s\_{s}\\left(\\theta\_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subComputePriceDemand2", latex:"p\_{dsub2}=\\frac{\\operatorname{round}\\left(p\_{dsub}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subComputePriceSupply", latex:"p\_{ssub}=p\_{dsub}+P\_{sub}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subComputePriceSupply2", latex:"p\_{ssub2}=\\frac{\\operatorname{round}\\left(p\_{ssub}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'subPriceSupplyLabel', latex:'\\left(0,p\_{ssub}\\right)', color:'#c74440', label:'\`P\_{S}\`($${p\_{ssub2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'subPriceDemandLabel', latex:'\\left(0,p\_{dsub}\\right)', color:'#c74440', label:'\`P\_{D}\`($${p\_{dsub2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:\[0]});

    Surplus.addLabel({idDiv:'subQuantatityLabel', latex:'\\left(\\theta\_{sopt},0\\right)', color:'#c74440', label:'${\\theta\_{sopt2}}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subDashedX", latex:"x=\\theta\_{sopt}\\left\\{0<y<p\_{dsub}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subDashedDemandY", latex:"y=p\_{dsub}\\left\\{0<x<\\theta\_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subDashedSupplyY", latex:"y=p\_{ssub}\\left\\{0<x<\\theta\_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subCSFun", latex:"k\_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le \\theta\_{sopt}:f\_{p}'\\left(x\\right)x+f\_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedsubCS", latex:"p\_{dsub}\\le y\\le k\_{sgCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"subPSFun", latex:"k\_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le \\theta\_{sopt}:f\_{mc}'\\left(x\\right)x+f\_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedsubPS", latex:"k\_{sgPS}\\left(x\\right)\\le y\\le p\_{ssub}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedsubDWL", latex:"x\\ge P\_{opt}\\left\\{f'\_{p}\\left(x\\right)x+f\_{p}\\left(0\\right)\\le y\\le f\_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<\\theta\_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addExpression({idDiv:"ShadedsubGS", latex:"y\\le p\_{dsub}\\left\\{0\\le x\\le \\theta\_{sopt}\\right\\}\\left\\{f\_{p}\\left(x\\right)\\ge y\\ge p\_{ssub}\\right\\}", color:'#fa7e19', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});


    //Government Expenditure

    Surplus.addExpression({idDiv:"ShadedExpGS", latex:"p\_{dsub}\\le y\\le p\_{ssub}\\left\\{0\\le x\\le \\theta\_{sopt}\\right\\}", color:'#fa7e19', hidden:false, lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:\[0]});

    Surplus.addSwitchInput({idDiv:"ShadedExpGSSwitch", title:"Display Government Expenditures", hideToggle:true, idDivs:\["ShadedExpGS"], listGraphs:\[0]});


    Surplus.setInstructions({

    title: "Price Function",

    content: '<b>Input the price function for the firm.</b> Make sure P is a function of Q, such that Q shows on the right hand side of the equation.\

    <br> \\theory{"Finding the Price Function for the Firm","The problem set question may not give you the function directly, but instead, give you the slope of the demand curve %%\\frac{dQ}{dP}%% and a point on the curve (usually the equilibrium quantity and equilibrium price). You will need to use the slope and the point on the curve to derive the market demand function. To do this, first recognize that the slope of the demand curve is the %%\\frac{dQ}{dP}%%, which tells us that %%Q%% is on the left hand side of the expression. For instance, let us say that the question tells us that the slope of the demand curve %%\\frac{dQ}{dP}%% is -10. Then the expression we have is as follows: %%Q=-10P+c%%, where %%c%% is the intercept. The question also gives us the equilibrium quantity and price (200, 20). Substituting (200, 20) into the expression, we have that %%200=-10(20)+c%%. We can solve for %%c=400%%. Now, we need to rearrange the expression to get the price function for the firm %%P(Q)%%, where %%P%% is a function of %%Q%%. Bring %%P%% to the left hand side of the equation and simplify the terms. The price function for the firm is hence %%P=40-\\frac{Q}{10}%%. This is what you should input into the calculator."}'

    });


    Surplus.setInstructions({
      title: "Marginal Cost",
      content: '<b>Input the marginal cost function for the firm C(Q).</b> Make sure C is a function of Q, such that Q shows on the right hand side of the equation. \\tip{"You may need to follow the same procedure as explained in the previous step to derive the marginal cost function of the firm from the parameters given in the question."}'
    });


    Surplus.setInstructions({
      title: "Drop down selection",
      content: '<b>Choose the intervention you would like to study from the drop-down list.</b> You can choose between a quota, a price ceiling, a per-unit subsidy, or a per-unit tax.'
    });


    Surplus.setInstructions({
      title: "Adjusting intervention",
      content: '<b>Input the value of the quota/price ceiling/subsidy/tax.</b> The graph will automatically display the consumer surplus in green, the producer surplus in blue, and the government surplus (if any) in orange. In the specific case of a subsidy, the deadweight loss will be displayed in red.\
      \\tip{"For quota and price ceiling, you can also change the value of the quota/ price ceiling by clicking and dragging the enlarged red label that shows the quota/ price ceiling on the graph itself."}'
    });



    Surplus.setCreators({
      title: "Developer",
      name: "Radi",
      school: "GS’23"
    });

    Surplus.setCreators({
      title: "Editor",
      name: "Kyla",
      school: "CC’24"
    });


    Surplus.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});
      </script>