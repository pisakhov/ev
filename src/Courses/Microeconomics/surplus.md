---
title: Surplus
course: Microeconomics
code:
  code: >
    <script src="/assets/js/ev.js"></script>

    <script defer>

    const Surplus = new EconVision();


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

    Surplus.addFuncInput({idDiv:'PFunction', title:'Price Function for the firm', func:'f_{p}\\left(Q\\right)', latex:'60-0.5Q', constraint:'\\left\\{Q\\ge0\\right\\}', listGraphs:[0]});

    //MC

    Surplus.addFuncInput({idDiv:'MCFunction', title:'Marginal Cost Function for the firm', func:'f_{mc}\\left(Q\\right)', latex:'\\frac{Q}{2}', constraint:'\\left\\{Q\\ge0\\right\\}', color:'#6042a6', listGraphs:[0]});

    //P~MC

    Surplus.addExpression({idDiv:"PMCQOptimal", latex:"f_{p}\\left(Q_{opt}\\right)\\sim f_{mc}\\left(Q_{opt}\\right)", listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceOptimal", latex:"P_{opt}=f_{p}\\left(Q_{opt}\\right)", listGraphs:[0]});

    //Optimal Supply&Demand

    Surplus.addExpression({idDiv:"OptimalQ", latex:"x=Q_{opt}\\left\\{0<y<P_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"OptimalP", latex:"y=P_{opt}\\left\\{0<x<Q_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    ////roundoptimal

    Surplus.addExpression({idDiv:"OptimalRoundQ", latex:"Q_{opt2}=\\frac{\\operatorname{round}\\left(Q_{opt}\\cdot100\\right)}{100}", color:'gray', listGraphs:[0]});

    Surplus.addExpression({idDiv:"OptimalRoundP", latex:"P_{opt2}=\\frac{\\operatorname{round}\\left(P_{opt}\\cdot100\\right)}{100}", color:'gray', listGraphs:[0]});

    Surplus.setValue({idDiv:"OptimalRoundQDisplay", latex:"Q_{opt2}", listGraphs:[0]});

    Surplus.setValue({idDiv:"OptimalRoundPDisplay", latex:"P_{opt2}", listGraphs:[0]});

    Surplus.addLabel({idDiv:'OptimalPoint', latex:'\\left(Q_{opt},P_{opt}\\right)', color:'gray', label:'Market Clearing (${Q_opt2}, $${P_opt2})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});

    //Select Option

    Surplus.addSelectInput({idDiv: "SurplusSelectInput", item: "Quota",	listGroup: ["QuotaQSlider", "QuotaQLabel", "QuotaSPDashedX", "QuotaSPDashedDemandY", "QuotaSPDashedSupplyY", "QuotaPriceDemand", "PriceQuotaSupplyRound", "QuotaPriceSupply", "ShadedCSPlusQuota", "ShadedPSPlusQuota"], listGraphs: [0]});

    Surplus.addSelectInput({idDiv:"SurplusSelectInput", item:"Price Ceiling", listGroup:["PriceCeilingSlider", "PriceCeillingLabel", "QuantityCeillingLabel", "MCPriceCeiling", "PriceCeilingDashedX", "PriceCeilingDashedY", "PriceCeilingDemandFun", "ShadedCSPlusPriceCeiling", "PriceCeilingSupplyFun", "ShadedPSPlusPriceCeiling"], listGraphs:[0]});

    Surplus.addSelectInput({idDiv: "SurplusSelectInput", item: "Tax Per Unit", listGroup: ["TaxPerUnitSlider", "TaxPriceSupplyLabel", "TaxPriceDemandLabel", "TaxQuantatityLabel", "TaxDashedX", "TaxDashedDemandY", "TaxDashedSupplyY", "ShadedTaxCS", "ShadedTaxPS", "ShadedTaxDWL", "ShadedTaxGS"], listGraphs: [0]});

    Surplus.addSelectInput({idDiv: "SurplusSelectInput", item: "Subsidy Per Unit", listGroup: ["subPerUnitSlider", "subPriceSupplyLabel", "subPriceDemandLabel", "subQuantatityLabel", "subDashedX", "subDashedDemandY", "subDashedSupplyY", "ShadedsubCS", "ShadedsubPS", "ShadedsubDWL", "ShadedsubGS","ShadedExpGS","ShadedExpGSSwitch"], listGraphs: [0]});

    //Quota

    Surplus.addSliderInput({idDiv:"QuotaQSlider", title:"Quota", latex:"Q_{q}", min:0, max:'Q_{opt}', step:1, defaultValue:50, listGraphs:[0]});

    Surplus.addLabel({idDiv:'QuotaQLabel', latex:'\\left(Q_{q},0\\right)', color:'#c74440', label:'${Q_q}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceQuotaDemand", latex:"P_{qD}=f_{p}\\left(Q_{q}\\right)", hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceQuotaSupply", latex:"P_{qS}=f_{mc}\\left(Q_{q}\\right)", hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"QuotaSPDashedX", latex:"x=Q_{q}\\left\\{0<y<P_{qD}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"QuotaSPDashedDemandY", latex:"y=P_{qD}\\left\\{0<x<Q_{q}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"QuotaSPDashedSupplyY", latex:"y=P_{qS}\\left\\{0<x<Q_{q}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceQuotaDemandRound", hidden:true, latex:"P_{qD2}=\\frac{\\operatorname{round}\\left(P_{qD}\\cdot100\\right)}{100}", color:'gray', listGraphs:[0]});

    Surplus.addLabel({idDiv:'QuotaPriceDemand', hidden:true, latex:'\\left(0,P_{qD}\\right)', color:'#c74440', label:'$${P_qD2}', labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceQuotaSupplyRound", hidden:true, latex:"P_{qS2}=\\frac{\\operatorname{round}\\left(P_{qS}\\cdot100\\right)}{100}", color:'gray', listGraphs:[0]});

    Surplus.addLabel({idDiv:'QuotaPriceSupply', latex:'\\left(0,P_{qS}\\right)', color:'#c74440', label:'$${P_qS2}', labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TotalConsumerSPFunc", latex:"f_{tCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{q}:f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedCSPlusQuota", latex:"P_{qD}\\le y\\le f_{tCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"TotalProducerSPFunc", latex:"f_{tPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{q}:f'_{mc}\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedPSPlusQuota", hidden:false, latex:"f_{tPS}\\left(x\\right)\\le y\\le P\\ _{qD}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    //Price Ceiling

    Surplus.addSliderInput({idDiv:"PriceCeilingSlider", title:"Price Ceiling", latex:"P_{ceiling}", min:'f_{mc}\\left(0\\right)', max:'P_{opt}', step:'0.01', defaultValue:5, listGraphs:[0]});

    Surplus.addLabel({idDiv:'PriceCeillingLabel', latex:'\\left(0,P_{ceiling}\\right)', color:'#c74440', label:'$${P_ceiling}', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addLabel({idDiv:'QuantityCeillingLabel', latex:'\\left(Q_{ceiling},0\\right)', color:'#c74440', label:'${Q_ceiling}', labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});

    Surplus.addExpression({idDiv:"MCPriceCeiling", latex:"f_{mc}\\left(Q_{ceiling}\\right)\\sim P_{ceiling}", color:'#c74440', listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceCeilingDashedX", latex:"x=Q_{ceiling}\\left\\{0<y<f_{p}\\left(Q_{ceiling}\\right)\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceCeilingDashedY", latex:"y=P_{ceiling}\\left\\{0<x<Q_{ceiling}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceCeilingDemandFun", latex:"f_{tcCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{ceiling}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedCSPlusPriceCeiling", latex:"P_{ceiling}\\le y\\le f_{tcCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"PriceCeilingSupplyFun", latex:"f_{tcPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{ceiling}:f'_{mc}\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedPSPlusPriceCeiling", latex:"f_{tcPS}\\left(x\\right)\\le y\\le P_{ceiling}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    //Tax

    Surplus.addSliderInput({idDiv:"TaxPerUnitSlider", title:"Tax", latex:"P_{tax}", min:0, max:'P_{opt}', step:'0.01', defaultValue:5, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxInverseSupply", latex:"g_{s}\\left(P\\right)=f_{mc}\\left(P\\right)+P_{tax}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxInverseDemand", latex:"g_{d}\\left(P\\right)=f_{p}\\left(P\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxComputeOptimalQ", latex:"g_{s}\\left(Q_{sopt}\\right)\\sim g_{d}\\left(Q_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxComputeOptimalQ2", latex:"Q_{sopt2}=\\operatorname{round}\\left(Q_{sopt},2\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceDemand", latex:"p_{dtax}=g_{d}\\left(Q_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceDemand2", latex:"p_{dtax2}=\\frac{\\operatorname{round}\\left(p_{dtax}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceSupply", latex:"p_{stax}=p_{dtax}-P_{tax}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxComputePriceSupply2", latex:"p_{stax2}=\\frac{\\operatorname{round}\\left(p_{stax}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addLabel({idDiv:'TaxPriceSupplyLabel', latex:'\\left(0,p_{stax}\\right)', color:'#c74440', label:'`P_{S}`($${p_{stax2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addLabel({idDiv:'TaxPriceDemandLabel', latex:'\\left(0,p_{dtax}\\right)', color:'#c74440', label:'`P_{D}`($${p_{dtax2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addLabel({idDiv:'TaxQuantatityLabel', latex:'\\left(Q_{sopt},0\\right)', color:'#c74440', label:'${Q_{sopt2}}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxDashedX", latex:"x=Q_{sopt}\\left\\{0<y<p_{dtax}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxDashedDemandY", latex:"y=p_{dtax}\\left\\{0<x<Q_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxDashedSupplyY", latex:"y=p_{stax}\\left\\{0<x<Q_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxCSFun", latex:"f_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{sopt}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedTaxCS", latex:"p_{dtax}\\le y\\le f_{sgCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"TaxPSFun", latex:"f_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le Q_{sopt}:f_{mc}'\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedTaxPS", latex:"f_{sgPS}\\left(x\\right)\\le y\\le p_{stax}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedTaxDWL", latex:"x\\ge Q_{opt}\\left\\{f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\le y\\le f_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<Q_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedTaxGS", latex:"y\\le p_{dtax}\\left\\{0\\le x\\le Q_{sopt}\\right\\}\\left\\{f_{p}\\left(x\\right)\\ge y\\ge p_{stax}\\right\\}", color:'#fa7e19', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    //Subsidy

    Surplus.addExpression({idDiv:"findYintercept", latex:"P_{yint}=f_{p}(0)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addSliderInput({idDiv:"subPerUnitSlider", title:"sub", latex:"P_{sub}", min:0, max:'P_{yint}', step:'0.01', defaultValue:5, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subInverseSupply", latex:"s_{s}\\left(P\\right)=f_{mc}\\left(P\\right)-P_{sub}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subInverseDemand", latex:"s_{d}\\left(P\\right)=f_{p}\\left(P\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subComputeOptimalQ", latex:"s_{s}\\left(\\theta_{sopt}\\right)\\sim s_{d}\\left(\\theta_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subComputeOptimalQ2", latex:"\\theta_{sopt2}=\\operatorname{round}\\left(\\theta_{sopt},2\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subComputePriceDemand", latex:"p_{dsub}=s_{s}\\left(\\theta_{sopt}\\right)", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subComputePriceDemand2", latex:"p_{dsub2}=\\frac{\\operatorname{round}\\left(p_{dsub}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subComputePriceSupply", latex:"p_{ssub}=p_{dsub}+P_{sub}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subComputePriceSupply2", latex:"p_{ssub2}=\\frac{\\operatorname{round}\\left(p_{ssub}\\cdot10^{2}\\right)}{10^{2}}", color:'#6042a6', hidden:true, listGraphs:[0]});

    Surplus.addLabel({idDiv:'subPriceSupplyLabel', latex:'\\left(0,p_{ssub}\\right)', color:'#c74440', label:'`P_{S}`($${p_{ssub2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addLabel({idDiv:'subPriceDemandLabel', latex:'\\left(0,p_{dsub}\\right)', color:'#c74440', label:'`P_{D}`($${p_{dsub2}})', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});

    Surplus.addLabel({idDiv:'subQuantatityLabel', latex:'\\left(\\theta_{sopt},0\\right)', color:'#c74440', label:'${\\theta_{sopt2}}', dragMode:Desmos.DragModes.X, labelOrientation:Desmos.LabelOrientations.BELOW, listGraphs:[0]});

    Surplus.addExpression({idDiv:"subDashedX", latex:"x=\\theta_{sopt}\\left\\{0<y<p_{dsub}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"subDashedDemandY", latex:"y=p_{dsub}\\left\\{0<x<\\theta_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"subDashedSupplyY", latex:"y=p_{ssub}\\left\\{0<x<\\theta_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

    Surplus.addExpression({idDiv:"subCSFun", latex:"k_{sgCS}\\left(x\\right)=\\left\\{0\\le x\\le \\theta_{sopt}:f_{p}'\\left(x\\right)x+f_{p}\\left(0\\right)\\right\\}", hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedsubCS", latex:"p_{dsub}\\le y\\le k_{sgCS}\\left(x\\right)", color:'#388c46', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"subPSFun", latex:"k_{sgPS}\\left(x\\right)=\\left\\{0\\le x\\le \\theta_{sopt}:f_{mc}'\\left(x\\right)x+f_{mc}\\left(0\\right)\\right\\}", color:'gray', hidden:true, listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedsubPS", latex:"k_{sgPS}\\left(x\\right)\\le y\\le p_{ssub}", color:'#2d70b3', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedsubDWL", latex:"x\\ge P_{opt}\\left\\{f'_{p}\\left(x\\right)x+f_{p}\\left(0\\right)\\le y\\le f_{mc}'\\left(x\\right)x\\right\\}\\left\\{x<\\theta_{sopt}\\right\\}", color:'#c74440', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addExpression({idDiv:"ShadedsubGS", latex:"y\\le p_{dsub}\\left\\{0\\le x\\le \\theta_{sopt}\\right\\}\\left\\{f_{p}\\left(x\\right)\\ge y\\ge p_{ssub}\\right\\}", color:'#fa7e19', lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});


    //Government Expenditure

    Surplus.addExpression({idDiv:"ShadedExpGS", latex:"p_{dsub}\\le y\\le p_{ssub}\\left\\{0\\le x\\le \\theta_{sopt}\\right\\}", color:'#fa7e19', hidden:false, lineStyle:Desmos.Styles.DASHED, lineWidth:"0", listGraphs:[0]});

    Surplus.addSwitchInput({idDiv:"ShadedExpGSSwitch", title:"Display Government Expenditures", hideToggle:true, idDivs:["ShadedExpGS"], listGraphs:[0]});


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
---
