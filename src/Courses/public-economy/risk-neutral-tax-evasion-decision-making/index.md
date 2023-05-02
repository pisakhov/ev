---
tags: public-economy
title: Risk-Neutral Tax Evasion Decision-Making
layout: model.njk
show: true
---
<script>
const myCalculator = new EconVision();

//set graph
myCalculator.setGraphs({'engine':'desmos','idDiv':'TaxEvasion','height':'650px','width':'100','left':'-25','right':'150','bottom':'-15','top':'100','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'Tax Evasion Amount($)','yAxisLabel':'Expected Monetary Value($)'});

//inputs
myCalculator.addSliderInput({'idDiv':'taxRate','title':'Tax Rate(%)','latex':'T_{rate}','min':'0','max':'100','step':'0.01','defaultValue':'50','listGraphs':[0]});
myCalculator.addSliderInput({'idDiv':'baseprobabilitycaught','title':'Base Probability of Getting Caught (%)','latex':'P_b','min':'0','max':'100','step':'0.01','defaultValue':'20','listGraphs':[0]});
myCalculator.addSliderInput({'idDiv':'increaseprobabilitycaught','title':'Probability Increase per $1,000 Evasion (%)','latex':'P_i','min':'0.01','max':'100','step':'0.01','defaultValue':'1','listGraphs':[0]});
myCalculator.addSliderInput({'idDiv':'penaltycaught','title':'Penalty for Getting Caught ($)','latex':'p_c','min':'0','max':'100000','step':'0.01','defaultValue':'5000','listGraphs':[0]});
myCalculator.line();
myCalculator.addSliderInput({'idDiv':'evasionamount','title':'Evasion Amount ($)','latex':'E_{amt}','min':'0','max':'B_{r}','step':'0.01','defaultValue':'20000','listGraphs':[0]});


//calculations
myCalculator.addExpression({'idDiv':'probability','latex':"P=\\frac{P_{b}}{100}+\\frac{P_{i}}{100}\\cdot\\frac{x}{1000}",'hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findExpectedCostAmt','latex':"E_{c}=f_{c}\\left(E_{amt}\\right)",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findExpectedBenefitAmt','latex':"E_{b}=f_{b}\\left(E_{amt}\\right)",'listGraphs':[0]});


//draw lines
myCalculator.addExpression({'idDiv':'expectedBenefit','latex':"f_b\\left(x\\right)=\\frac{T_{rate}}{100}x\\cdot\\left(1-P\\right)",'color':'#09aa14','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'expectedCost','latex':"f_c\\left(x\\right)=p_c\\cdot P",'color':'#e60000','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'drawLineEvasion','latex':"x=E_{amt}\\left\\{0<y<f_{b}\\left(x\\right)\\right\\}",'color':'#338bff','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'drawLineEvasionDashed','latex':"x=o_{x}\\left\\{0<y<f_{b}\\left(x\\right)\\right\\}",'color':'#bb00ff','lineStyle':Desmos.Styles.DASHED,'lineWidth':'1','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'ExpectedNetValue','latex':'E_{n}=E_{b}-E_{c}','listGraphs':[0]});


//draw points
myCalculator.addLabel({'idDiv':'draggableEvasion','latex':"\\left(E_{amt},0\\right)",'label':'Drag Me','showLabel':true,'dragMode':Desmos.DragModes.X,'color':'#338bff','listGraphs':[0]});
myCalculator.addLabel({'idDiv':'LabelExpectedCost','latex':"\\left(E_{amt},f_{c}\\left(E_{amt}\\right)\\right)",'label':'Expected Cost: $${E_{c}}','color':'#e60000','pointSize':'0','showLabel':true,'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'LabelExpectedBenefit','latex':"\\left(E_{amt},f_{b}\\left(E_{amt}\\right)\\right)",'label':'Expected Benefit: $${E_{b}}','color':'#09aa14','pointSize':'0','showLabel':true,'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'LabelExpectedNet','latex':"\\left(o_{x},\\frac{f_{b}\\left(o_{x}\\right)}{2}\\right)",'label':'Expected Net: $${E_{n}}','color':'#7024ff','pointSize':'0','listGraphs':[0]});

myCalculator.addSwitchInput({'idDiv':'switchShowLabels','title':'Show Labels','hideToggle':true,'defaultState':true,'idDivs':["LabelExpectedCost", "LabelExpectedBenefit", "LabelExpectedNet"],'listGraphs':[0]});

//draw MB/MC
myCalculator.addExpression({'idDiv':'MB','latex':"g_{b}\\left(x\\right)=f_{b}'\\left(x\\right)",'hidden':true,'color':'#1fff4b','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'MC','latex':"g_{c}\\left(x\\right)=f_{c}'\\left(x\\right)",'hidden':true,'color':'#fe6262','listGraphs':[0]});


//calc MC=MB
myCalculator.addExpression({'idDiv':'findOptimalEvasionX','latex':"g_{b}\\left(o_{x}\\right)\\sim g_{c}\\left(o_{x}\\right)",'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'LabelOptimalEvasion','latex':"\\left(o_{x},g_{b}\\left(o_{x}\\right)\\right)",'label':'Optimal Evasion: $${o_{x}}','color':'#bb00ff','pointStyle':Desmos.Styles.OPEN,'showLabel':true,'listGraphs':[0]});



//setbounds
myCalculator.addExpression({'idDiv':'findMaxPointX','latex':"f_{b}'\\left(m_{x}\\right)\\sim0",'hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findTopBound','latex':"B_{t}=f_{b}\\left(m_{x}\\right)",'hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findRightBound','latex':"B_{r}=m_{x}\\cdot2",'hidden':true,'listGraphs':[0]});
myCalculator.setBounds({'top':'B_{t}','right':'B_{r}','tolerance':'1.1','mtolerance':'1.2','listGraphs':[0]});


//instructions
myCalculator.setInstructions({'title':'Tax Rate Input','content':'The tax rate, expressed as a percentage of one`s income, is a fundamental component in our evaluation of tax evasion incentives. By adjusting the tax rate using the slider provided, you can observe the interplay between tax rates and the subsequent enticement for evasion. It is essential to recognize that while higher tax rates may generate increased motivation for evasion, the risks associated with such behavior concurrently escalate.'});
myCalculator.setInstructions({'title':'Base Probability of Getting Caught Input','content':'The base probability of detection is the initial likelihood that an individual will be apprehended for tax evasion, exclusive of any additional probability increases stemming from the amount evaded. This variable is a crucial aspect of our analysis as it establishes the baseline risk associated with tax evasion. To modify the base probability, utilize the slider and select the desired percentage value. A higher base probability implies more rigorous tax enforcement mechanisms in place.'});
myCalculator.setInstructions({'title':'Probability Increase per $1,000 Evasion Input','content':'The probability increase per $1,000 of evasion represents the incremental risk of apprehension associated with each additional $1,000 evaded. This value illustrates the compounding nature of risk as the amount of tax evasion rises. To explore varying levels of risk, adjust the probability increase per $1,000 of evasion using the slider. Higher values of this parameter indicate a more stringent enforcement environment with greater deterrence for tax evasion.'});
myCalculator.setInstructions({'title':'Penalty for Getting Caught Input','content':'The penalty input quantifies the supplementary financial burden imposed on individuals found guilty of tax evasion, over and above the repayment of evaded taxes. This parameter assists in evaluating the potential repercussions of tax evasion. To establish the appropriate penalty amount, simply manipulate the slider to select the desired dollar value. It is important to consider that higher penalty amounts generally act as a deterrent for engaging in tax evasion.'});
myCalculator.setInstructions({'title':'Evasion Amount Input','content':'The evasion amount input serves to define the specific sum of taxes an individual is considering evading, directly influencing both potential gains and costs associated with such behavior. To explore various evasion amounts, adjust the slider or directly interact with the light blue draggable component on the graph. As you modify the evasion amount, the graph will dynamically adapt, offering a comprehensive visual representation of the intricate relationships between tax evasion variables. \\theory{"Marginal Benefit and Marginal Cost Equilibrium (MB=MC)","In the context of tax evasion, the optimal amount occurs when the marginal benefit (MB) of evading taxes is equal to the marginal cost (MC) of doing so. The marginal benefit represents the additional monetary savings from evading a specific increment of taxes, while the marginal cost reflects the increased risk of being caught and the associated penalties. A risk-neutral taxpayer will engage in tax evasion up to the point where the MB equals the MC, as this equilibrium represents the optimal balance between the potential gains and risks associated with tax evasion."}'});

myCalculator.setCreators({'title':'Developer','name':'Radi','school':'GS’23'});


myCalculator.setScriptPackage({'replaceTheory':true});
</script>