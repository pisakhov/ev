---
tags: public-economy
title: EITC Consumption-Leisure
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();
myCalculator.setGraphs({'engine':'desmos','idDiv':'EITCGraph','height':'750px','width':'100','left':'-25','right':'3000','bottom':'-100','top':'18000','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'l(hours)       ','yAxisLabel':'C($)'});

//work hours
myCalculator.addSliderInput({'idDiv':'workHours','title':'Work Hours','latex':'H_w','min':'0','max':'10000','step':'1','defaultValue':'2000','listGraphs':[0]});

//hourly wage
myCalculator.addSliderInput({'idDiv':'wagePay','title':'Hourly Wage','latex':'W_{age}','min':'0','max':'100','step':'0.01','defaultValue':'8','listGraphs':[0]});




//drawbaseLine
myCalculator.addExpression({'idDiv':'baseLine','latex':"f_{base}\\left(l\\right)=H_{w}\\cdot W_{age}-l\\cdot W_{age}\\left\\{l\\ge0\\right\\}",'color':'#8d5cff','lineStyle':Desmos.Styles.DASHED,'lineWidth':1,'lineOpacity':0.5,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findYintercept','latex':"p_{y}=f_{base}(0)",'color':'#8d5cff','lineStyle':Desmos.Styles.DASHED,'lineWidth':1,'lineOpacity':0.5,'listGraphs':[0]});

myCalculator.line();

//first threshold
myCalculator.addSliderInput({'idDiv':'firstThreshold','title':'Phase-In Amount','latex':'I_1','min':'0','max':'20000','step':'0.01','defaultValue':'5000','listGraphs':[0]});
myCalculator.addSliderInput({'idDiv':'firstThresholdPrecent','title':'Phase-In Rate','latex':'P_1','min':'0.01','max':'1','step':'0.01','defaultValue':'0.2','listGraphs':[0]});

//draw1
myCalculator.addExpression({'idDiv':'firstThresholdDraw','latex':"\\operatorname{polygon}\\left(\\left[\\left(H_{w},0\\right),\\left(H_{w}-\\frac{I_{1}}{W_{age}},I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right]\\right)",'color':'#8d5cff','listGraphs':[0]});
//dashedConsumption
myCalculator.addExpression({'idDiv':'firstThresholdDrawDashed','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,I_{1}\\cdot\\left(1+P_{1}\\right)\\right),\\left(H_{w}-\\frac{I_{1}}{W_{age}},I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right]\\right)",'color':'#848484','lineStyle':Desmos.Styles.DASHED,'lineWidth':0.5,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'firstThresholdDrawDashedleisure','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}\\right),0\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}\\right),I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right]\\right)",'color':'#848484','lineStyle':Desmos.Styles.DASHED,'lineWidth':0.5,'listGraphs':[0]});
//price
myCalculator.addExpression({'idDiv':'firstPriceThresholdVar','latex':"p_{1}=I_{1}\\cdot(1+P_{1})",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'firstPriceThreshold','latex':"\\left(0,I_{1}\\cdot\\left(1+P_{1}\\right)\\right)",'label':'$${p_{1}}','pointSize':'0','showLabel':true,'labelOrientation':Desmos.LabelOrientations.RIGHT,'listGraphs':[0]});
//leisure
myCalculator.addExpression({'idDiv':'firstLeisureThresholdVar','latex':"l_{1}=H_{w}-\\frac{I_{1}}{W_{age}}",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'firstLeisureThreshold','latex':"\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}\\right),I_{1}\\cdot\\left(1+P_{1}\\right)\\right)",'label':'`l_{1}=`${l_{1}}','pointSize':'10','showLabel':true,'dragMode':Desmos.DragModes.X,'labelOrientation':Desmos.LabelOrientations.RIGHT,'listGraphs':[0]});

myCalculator.line();

//second threshold
myCalculator.addSliderInput({'idDiv':'secondThreshold','title':'Steady-State Amount','latex':'I_2','min':'0','max':'20000','step':'0.01','defaultValue':'6000','listGraphs':[0]});
//draw2
myCalculator.addExpression({'idDiv':'secondThresholdDraw','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right),\\left(H_{w}-\\frac{I_{1}}{W_{age}},I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right]\\right)",'color':'#8d5cff','listGraphs':[0]});
//dashedConsumption
myCalculator.addExpression({'idDiv':'secondThresholdDrawDashed','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right)\\right]\\right)",'color':'#848484','lineStyle':Desmos.Styles.DASHED,'lineWidth':0.5,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'secondThresholdDrawDashedleisure','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),0\\right)\\right]\\right)",'color':'#848484','lineStyle':Desmos.Styles.DASHED,'lineWidth':0.5,'listGraphs':[0]});

//price
myCalculator.addExpression({'idDiv':'secondPriceThresholdVar','latex':"p_{2}=\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'secondPriceThreshold','latex':"\\left(0,\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right)",'label':'$${p_{2}}','pointSize':'0','showLabel':true,'labelOrientation':Desmos.LabelOrientations.RIGHT,'listGraphs':[0]});
//leisure
myCalculator.addExpression({'idDiv':'secondLeisureThresholdVar','latex':"l_{2}=\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'secondLeisureThreshold','latex':"\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right)",'label':'`l_{2}=`${l_{2}}','pointSize':'10','showLabel':true,'dragMode':Desmos.DragModes.X,'labelOrientation':Desmos.LabelOrientations.RIGHT,'listGraphs':[0]});


myCalculator.line();

//third threshold
myCalculator.addSliderInput({'idDiv':'thirdThresholdPrecent','title':'Phase-Out Rate','latex':'P_3','min':'0.01','max':'1','step':'0.01','defaultValue':'0.5','listGraphs':[0]});

//draw3
myCalculator.addExpression({'idDiv':'thirdThresholdDraw1','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right),\\left\\{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\ge0:\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right),\\left(0,\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)-\\left(\\frac{\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)-\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)}{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}}\\right)\\cdot\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)\\right)\\right\\}\\right]\\right)",'color':'#8d5cff','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'thirdThresholdDraw2','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right)\\left\\{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\ge0\\right\\},\\left(0,f_{base}\\left(0\\right)\\right)\\right]\\right)",'color':'#8d5cff','listGraphs':[0]});
//dashedConsumption
myCalculator.addExpression({'idDiv':'thirdThresholdDrawDashed','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right)\\left\\{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\ge0\\right\\}\\right]\\right)",'color':'#848484','lineStyle':Desmos.Styles.DASHED,'lineWidth':0.5,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'thirdThresholdDrawDashedleisure','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},0\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right)\\left\\{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\ge0\\right\\}\\right]\\right)",'color':'#848484','lineStyle':Desmos.Styles.DASHED,'lineWidth':0.5,'listGraphs':[0]});

//price
myCalculator.addExpression({'idDiv':'thirdPriceThresholdVar','latex':"p_{3}=\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'thirdPriceThreshold','latex':"\\left(0,\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right)",'label':'$${p_{3}}','pointSize':'0','showLabel':true,'labelOrientation':Desmos.LabelOrientations.RIGHT,'listGraphs':[0]});
//leisure
myCalculator.addExpression({'idDiv':'thirdLeisureThresholdVar','latex':"l_{3}=\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'thirdLeisureThreshold','latex':"\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right)\\left\\{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\ge0\\right\\}",'label':'`l_{3}=`${l_{3}}','pointSize':'10','showLabel':true,'labelOrientation':Desmos.LabelOrientations.RIGHT,'listGraphs':[0]});

//shaded
myCalculator.addExpression({'idDiv':'shadedBenefit','latex':"\\operatorname{polygon}\\left(\\left[\\left(H_{w},0\\right),\\left(H_{w}-\\frac{I_{1}}{W_{age}},I_{1}\\cdot\\left(1+P_{1}\\right)\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right),\\left(H_{w}-\\frac{I_{1}}{W_{age}},I_{1}\\cdot\\left(1+P_{1}\\right)\\right),\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right),\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)\\right),\\left\\{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\ge0:\\left(\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}},\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)\\right),\\left(0,\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)-\\left(\\frac{\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)-\\left(I_{2}+\\left(I_{1}\\cdot\\left(1+P_{1}\\right)\\right)\\right)+\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}\\cdot W_{age}\\cdot\\left(1-P_{3}\\right)}{\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)-\\frac{\\left(I_{1}\\cdot\\left(1+P_{1}\\right)-I_{1}\\right)}{P_{3}\\cdot W_{age}}}\\right)\\cdot\\left(H_{w}-\\frac{I_{1}}{W_{age}}-\\frac{I_{2}}{W_{age}}\\right)\\right)\\right\\},\\left(0,f_{base}\\left(0\\right)\\right)\\right]\\right)",'color':'#dfd072','lineWidth':0,'listGraphs':[0]});

//instructions values
myCalculator.setValue({idDiv:"workHoursValue", decimal:0, latex:"H_w", listGraphs:[0]});
myCalculator.setValue({idDiv:"wagePayValue", decimal:2, latex:"W_{age}", listGraphs:[0]});
myCalculator.setValue({idDiv:"maxProfit", decimal:2, latex:"p_{y}", listGraphs:[0]});
myCalculator.setValue({idDiv:"PhaseInAmtVal", decimal:0, latex:"I_{1}", listGraphs:[0]});
myCalculator.setValue({idDiv:"PhaseInRateVal", decimal:2, latex:"P_{1}", listGraphs:[0]});
myCalculator.setValue({idDiv:"PhaseInLeisureVal", decimal:0, latex:"l_{1}", listGraphs:[0]});
myCalculator.setValue({idDiv:"PhaseInConsumptionVal", decimal:0, latex:"p_{1}", listGraphs:[0]});
myCalculator.setValue({idDiv:"SSAmtVal", decimal:0, latex:"I_{2}", listGraphs:[0]});
myCalculator.setValue({idDiv:"PhaseOutRateVal", decimal:2, latex:"P_{3}", listGraphs:[0]});


myCalculator.setInstructions({'title':'Budget Constraint','content':'Set up a budget constraint by adjusting the Work Hours slider and Hourly Wage slider. Work Hours can be defined for any time frame, such as daily, weekly, monthly, quarterly, yearly, or any other way you define.<br>Current Work Hours: \\exp{workHoursValue} <br>Current Hourly Wage: $\\exp{wagePayValue} \\theory{"What is EITC?","The Earned Income Tax Credit (EITC) is a tax credit available to low to moderate-income working individuals and families. It was introduced in 1975 to encourage employment and alleviate poverty among working families. The credit is based on several factors, such as the recipient`s earned income, filing status, and number of children. The EITC is a refundable credit, which means that if the credit amount exceeds the recipient`s tax liability, the remaining amount is refunded to the taxpayer. The credit amount increases with earned income up to a certain threshold, after which it phases out gradually. The EITC is one of the most effective anti-poverty tools in the United States, lifting millions of families out of poverty each year."}'});
myCalculator.setInstructions({'title':'Find Intercepts','content':'Before beginning the question, we need to draw the base budget line, which represents the line an individual would have without receiving EITC benefits. The purple dashed line on the graph represents this line.<br>The x-intercept is the Total Work Hours which is: \\exp{workHoursValue}<br>The y-intercept we multiply Work Hours and Hourly Wage: \\exp{workHoursValue}%%\\cdot%%\\exp{wagePayValue}%%=%%\\exp{maxProfit}\\tip{"The y-intercept represents the total possible profits, and the units are in dollar amounts.<br>$\\exp{maxProfit}"}'});
myCalculator.setInstructions({'title':'Phase-In','content':'<b>Please adjust the Phase-In amount and rate sliders.</b> The Earned Income Tax Credit will increase at the $\\exp{PhaseInAmtVal} Phase-In stage by a rate of \\exp{PhaseInRateVal}.<br><b>Please drag the %%l_{1}%% point on the graph to adjust the Phase-In Amount.</b> This may help you understand the nature of the model.<br>The %%l_{1}%% point, which is represented by \\exp{PhaseInLeisureVal} hours, shows the total amount of leisure hours up to the first stage. Similarly, $\\exp{PhaseInConsumptionVal} represents the post-benefit consumption up to the first stage.\\tip{"The rate of \\exp{PhaseInRateVal} can be interpreted as an increase of $\\exp{PhaseInRateVal} for every $1 earned."}'});
myCalculator.setInstructions({'title':'Steady-State','content':'<b>Please adjust the Steady-State amount slider.</b> The Earned Income Tax Credit will remain constant at the $\\exp{SSAmtVal} Steady-State stage.<br><b>Please drag the %%l_{2}%% point on the graph to adjust the Steady-State Amount.</b> This may help you understand the nature of the model.<br>The Steady-State phase occurs between the %%l_{1}%% and %%l_{2}%% points and represents a period during which the EITC neither increases nor decreases. \\tip{"You can identify the start and end of this phase by following the post-benefit line, which will remain parallel to the baseline (dashed line)."}'});
myCalculator.setInstructions({'title':'Phase-Out','content':'<b>Please adjust the Phase-Out rate slider.</b> The Earned Income Tax Credit will decrease by a rate of \\exp{PhaseOutRateVal}.<br>The %%l_{3}%% point represents the end of the Phase-Out phase, at which the EITC will vanish and become zero, while the Hourly Wage will remain constant. As you decrease the rate of Phase-Out, the line will move above the baseline (dashed line) and touch the y-intercept. This indicates that the worker continues to benefit from the program and may still be eligible for the Phase-Out stage.'});

myCalculator.setCreators({'title':'Developer','name':'Radi','school':'GS’23'});

myCalculator.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});
</script>
