---
tags: microeconomics
title: Risk - Expected Utility
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();
myCalculator.setGraphs({'engine':'desmos','idDiv':'RiskGraph','height':'650px','width':'100','left':'-10','right':'450','bottom':'-2','top':'25','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'$','yAxisLabel':'Eu'});

myCalculator.addFuncInput({'idDiv':'UtilFunction','title':'Utility Function','func':"U\\left(x\\right)",'latex':"\\ln(x)",'color':'#b152ff','listGraphs':[0]});

myCalculator.addSliderInput({'idDiv':'wealthWin','title':'Wealth if Win','latex':'W_w','min':'W_l','max':'1000000','step':'1','defaultValue':'10000','listGraphs':[0]});
myCalculator.addSliderInput({'idDiv':'wealthLoose','title':'Wealth if Lose','latex':'W_l','min':'0','max':'1000000','step':'1','defaultValue':'1400','listGraphs':[0]});
myCalculator.line();
myCalculator.addSliderInput({'idDiv':'likelyhood','title':'Likelihood of Winning','latex':'P_{ropb}','min':'0','max':'1','step':'0.01','defaultValue':'0.5','listGraphs':[0]});
myCalculator.setValue({'idDiv':'wealthWinValue','latex':'W_w','decimal':'0','listGraphs':[0]});
myCalculator.setValue({'idDiv':'wealthLossValue','latex':'W_l','decimal':'0','listGraphs':[0]});
myCalculator.setValue({'idDiv':'PropValue','latex':'P_{ropb}','decimal':'2','listGraphs':[0]});

//calc
myCalculator.addExpression({'idDiv':'EV','latex':"E_v=W_w\\cdot P_{ropb}+W_l\\left(1-P_{ropb}\\right)",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'FindCE','latex':"U\\left(C_{e}\\right)\\sim U\\left(W_{w}\\right)\\cdot P_{ropb}+\\left\\{W_{l}=0:0,U\\left(W_{l}\\right)\\right\\}\\cdot\\left(1-P_{ropb}\\right)",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'FindRiskPremium','latex':'R_{p}=E_{v}-C_{e}','listGraphs':[0]});
myCalculator.setValue({'idDiv':'EVValue','latex':'E_v','decimal':'2','listGraphs':[0]});
myCalculator.setValue({'idDiv':'CEValue','latex':'C_e','decimal':'2','listGraphs':[0]});
myCalculator.setValue({'idDiv':'RPValue','latex':'R_{p}','decimal':'2','listGraphs':[0]});

//values
myCalculator.addExpression({'idDiv':'roundEU','latex':"E_{u}=\\operatorname{round}\\left(U\\left(C_{e}\\right),2\\right)",'listGraphs':[0]});

//draw
myCalculator.addExpression({'idDiv':'drawLineMintoMax','latex':"\\operatorname{polygon}\\left(\\left[\\left(W_{l},\\left\\{W_{l}=0:0,U\\left(W_{l}\\right)\\right\\}\\right),\\left(W_{w},U\\left(W_{w}\\right)\\right)\\right]\\right)",'color':'#2c30b5','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'drawEVline','latex':"\\operatorname{polygon}\\left(\\left[\\left(E_{v},0\\right),\\left(E_{v},U\\left(C_{e}\\right)\\right)\\right]\\right)",'color':'#4ec692','lineStyle':Desmos.Styles.DASHED,'lineWidth':'0.8','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'drawCEline','latex':"\\operatorname{polygon}\\left(\\left[\\left(C_{e},0\\right),\\left(C_{e},U\\left(C_{e}\\right)\\right)\\right]\\right)",'color':'#4ec692','lineStyle':Desmos.Styles.DASHED,'lineWidth':'0.8','listGraphs':[0]});
myCalculator.addExpression({'idDiv':'drawExpectedUtil','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,U\\left(C_{e}\\right)\\right),\\left(E_{v},U\\left(C_{e}\\right)\\right)\\right]\\right)",'color':'#6581f1','lineStyle':Desmos.Styles.DOTTED,'lineWidth':'0.8','listGraphs':[0]});

//labels
myCalculator.addLabel({'idDiv':'EuLabel','latex':"\\left(0,U\\left(C_{e}\\right)\\right)",'label':'`Eu`=${E_{u}}','color':'#686dfd','showLabel':true,'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'EVLabel','latex':"\\left(E_{v},0\\right)",'label':'`EV`=$${E_{v}}','color':'#35c08b','pointSize':'0','showLabel':true,'listGraphs':[0]});
myCalculator.addLabel({'idDiv':'CELabel','latex':"\\left(C_{e},0\\right)",'label':'`CE`=$${C_{e}}','color':'#35c08b','pointSize':'0','showLabel':true,'listGraphs':[0]});

//shaded
myCalculator.addExpression({'idDiv':'shadedRiskPremium','latex':"x>0\\left\\{C_{e}<x<E_{v}\\right\\}\\left\\{0<y<U\\left(x\\right)\\right\\}",'color':'#e9727e','listGraphs':[0]});
myCalculator.addSwitchInput({'idDiv':'shadedRiskPremiumSwitch','title':'Show Risk Premium','hideToggle':true,'idDivs':["shadedRiskPremium"],'listGraphs':[0]});
//updatebounds
myCalculator.addExpression({'idDiv':'BountdTop','latex':"B_{t}=U\\left(W_{w}\\right)",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'BountdRight','latex':'B_{r}=W_{w}','listGraphs':[0]});
myCalculator.setBounds({'top':'B_{t}','right':'B_{r}','listGraphs':[0]});


//instructions
myCalculator.setInstructions({'title':'Adjusting Utility, Win/Loss, and Likelihood','content':"Insert the utility function. The current function is \\exp{UtilFunction}. Now, set the win/loss scenarios:<br> Wealth if win: $\\exp{wealthWinValue}<br> Wealth if lose: $\\exp{wealthLossValue}<br> Please move the slider for the likelihood ratio to win. If the value is 1, it means there is a 100% chance to win, and if it is 0, there is a 100% chance to lose."});
myCalculator.setInstructions({'title': 'Calculate Expected Value', 'content': "The formula to calculate the expected value is as follows:<br>%% EV = E[X] = \\sum_{i=1}^n p_i x_i %%<br>In this graph, we find it as follows: <br>%% EV = W_w \\cdot P + W_l \\cdot (1 - P) %%<br>%% W_w %% denotes wealth if win.<br>%% W_l %% denotes wealth if lose.<br>%% P %% denotes the probability if win.<br>%% EV = %% \\exp{wealthWinValue} %% \\cdot %% \\exp{PropValue} %% + %% \\exp{wealthLossValue} %% \\cdot (1 - %% \\exp{PropValue} %%) = %% $\\exp{EVValue}"});
myCalculator.setInstructions({'title': 'Calculate Certainty Equivalent', 'content': "To calculate the certainty equivalent (CE) for this example, start with this formula: <br>%%U(CE)=U(W_w) \\cdot P + U(W_l) \\cdot (1-P)%%<br>%%U(x)%% denotes the utility function.<br>%%W_w%% denotes wealth if win.<br>%%W_l%% denotes wealth if lose.<br>%%P%% denotes the probability if win.<br>%%U(CE)=U(%%\\exp{wealthWinValue}%%)\\cdot%%\\exp{PropValue}%% + U(%%\\exp{wealthLossValue}%%)\\cdot (1-%%\\exp{PropValue}%%)%%<br>%%CE=%% $\\exp{CEValue}"});
myCalculator.setInstructions({'title': 'Calculate the Risk Premium', 'content': "To calculate the risk premium (RP) for this example, start with this formula: <br>%%RP=EV-CE%%<br> In the graph, the risk premium is represented by the red shaded area. <br> To calculate the risk premium: <br>%%RP=%%\\exp{EVValue}%% - %%\\exp{CEValue}%% = %% $\\exp{RPValue}"});
//creators
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Radi', 'school': "GS’23" });

//set script package
myCalculator.setScriptPackage({ 'replaceExp': true, 'replaceLatex': true, 'replaceTip': true, 'replaceTheory': true, 'refresh': true });
</script>
