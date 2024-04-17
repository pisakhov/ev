---
tags: public-economy
thumbnail: /assets/img/tax-on-monopoly.png
title: Tax Incidence in Monopoly
description: Visualize the impact of taxation on market outcomes using interactive graphs
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

//setupgraph
myCalculator.setGraphs({'engine':'desmos','idDiv':'TaxIncidenceInMonopoly','height':'650px','width':'100','left':'-25','right':'150','bottom':'-15','top':'100','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'Q(units)       ','yAxisLabel':'P($)'});

//inverse demand function
myCalculator.addFuncInput({'idDiv':'PFunction','title':'Price Function for the firm','func':'f_P(Q)','latex':'60-Q','constraint':"\\left\\{Q\\ge0\\right\\}",'color':'#3fc660','listGraphs':[0]});

//MC-inverse supply
myCalculator.addFuncInput({'idDiv':'MCFunction','title':'Marginal Cost Function for the firm','func':'f_{mc}(Q)','latex':"\\frac{Q}{2}",'constraint':"\\left\\{Q\\ge0\\right\\}",'color':'#b80a0a','listGraphs':[0]});


//calc MR
myCalculator.addExpression({'idDiv':'MRFunction','latex':"f_{mr}\\left(Q\\right)=f_{P}(0)+f_{P}'(Q)\\cdot2\\cdot Q",'color':'#3fc660','lineStyle':Desmos.Styles.DASHED,'lineWidth': 1.5,'listGraphs':[0]});

//slider tax on demand
myCalculator.addSliderInput({'idDiv':'taxSliderOnDemand','title':'Tax the Demand','latex':'t_d','min':'0','max':"f_P\\left(0\\right)",'step':'0.01','defaultValue':'0','listGraphs':[0]});

//newdemand with tax
myCalculator.addExpression({'idDiv':'newDemandFunctionwTax','latex':"f_{ptd}\\left(Q\\right)=f_{P}\\left(Q\\right)-t_{d}",'color':'#5452ff', 'listGraphs':[0]});
//mrafter tax
myCalculator.addExpression({'idDiv':'MRwTFunction','latex':"f_{mrt}\\left(Q\\right)=f_{ptd}\\left(0\\right)+f_{ptd}'\\left(Q\\right)\\cdot2\\cdot Q",'color':'#5452ff','lineStyle':Desmos.Styles.DASHED,'lineWidth': 1.5,'listGraphs':[0]});

//zero eq
myCalculator.addExpression({'idDiv':'findQeqfor0','latex':"f_{P}\\left(Q_{0}\\right)\\sim f_{mc}(Q_{0})",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findPeqfor0','latex':"P_{0}=f_{mc}(Q_{0})",'listGraphs':[0]});

//first eq
myCalculator.addExpression({'idDiv':'findQeqfor1','latex':"f_{mr}\\left(Q_{1}\\right)\\sim f_{mc}(Q_{1})",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findPeqfor1','latex':"P_{1}=f_{mc}(Q_{1})",'listGraphs':[0]});
//price on demand
myCalculator.addExpression({'idDiv':'findPonDemand1','latex':"P_{d1}=f_{P}(Q_{1})",'listGraphs':[0]});
//dashed-vertical
myCalculator.addExpression({'idDiv':'dashedQtoDemand1','latex':"x=Q_{1}\\left\\{0<y<P_{d1}\\right\\}",'color':'#545454','lineStyle':Desmos.Styles.DASHED,'lineWidth': 1,'listGraphs':[0]});

//second eq
myCalculator.addExpression({'idDiv':'findQeqfor2','latex':"f_{mrt}\\left(Q_{2}\\right)\\sim f_{mc}(Q_{2})",'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'findPeqfor2','latex':"P_{2}=f_{mc}(Q_{2})",'listGraphs':[0]});
//price on demand
myCalculator.addExpression({'idDiv':'findPonDemand2','latex':"P_{d2}=f_{P}(Q_{2})",'listGraphs':[0]});
//price on newdemand
myCalculator.addExpression({'idDiv':'findPonDemand3','latex':"P_{d3}=f_{ptd}(Q_{2})",'listGraphs':[0]});
//dashed-vertical
myCalculator.addExpression({'idDiv':'dashedQtoDemand2','latex':"x=Q_{2}\\left\\{0<y<P_{d2}\\right\\}",'color':'#545454','lineStyle':Desmos.Styles.DASHED,'lineWidth': 1,'listGraphs':[0]});

//DWL
myCalculator.addExpression({'idDiv':'filledAreaDWL','latex':"\\operatorname{polygon}\\left(\\left[\\left(Q_{0},P_{0}\\right),\\left(Q_{2},P_{2}\\right),\\left(Q_{2},P_{d2}\\right)\\right]\\right)",'color':'#b80a0a','lineWidth': 0,'listGraphs':[0]});

//CS
myCalculator.addExpression({'idDiv':'filledAreaCS','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,P_{d2}\\right),\\left(0,f_{P}\\left(0\\right)\\right),\\left(Q_{2},P_{d2}\\right)\\right]\\right)",'color':'#3fc660','lineWidth': 0,'listGraphs':[0]});

//PS
myCalculator.addExpression({'idDiv':'filledAreaPS','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,f_{mc}\\left(0\\right)\\right),\\left(0,P_{d3}\\right),\\left(Q_{2},P_{d3}\\right),\\left(Q_{2},P_{2}\\right)\\right]\\right)",'color':'#5452ff','lineWidth': 0,'listGraphs':[0]});

//GS
myCalculator.addExpression({'idDiv':'filledAreaGS','latex':"\\operatorname{polygon}\\left(\\left[\\left(0,P_{d3}\\right),\\left(0,P_{d2}\\right),\\left(Q_{2},P_{d2}\\right),\\left(Q_{2},P_{d3}\\right)\\right]\\right)",'color':'#e8bd45','lineWidth': 0,'listGraphs':[0]});


myCalculator.setInstructions({'title':'Price Function','content':'Please enter a price function for the firm.<br>Currently, the price function is: \\exp{PFunction}<br>Please make sure to enter a downward-sloping linear function so the calculator will work.\\theory{"How does a linear function with downward slope work?","As an example, y = -2x + 5 is an example of a downward sloping linear function, which can be represented on a graph by a straight line with a negative slope and y-intercept."}'});
myCalculator.setInstructions({'title':'Marginal Cost Function','content':'Please enter a marginal cost function for the firm. This is also the inverse supply function.<br>Currently, the marginal cost function function is: \\exp{MCFunction}<br>'});
myCalculator.setInstructions({'title':'Tax on Demand Slider','content':'Please use the slider to determine the tax impose on demand curve.<br>A change in the amount of tax imposed would result in a change in the graph, which would indicate the new tax incidence for the monopoly.'});
myCalculator.setInstructions({'title':'Economic Tax Incidence','content':'The graph will be divided into four sections: the red section represents the deadweight loss of the monopoly, the green section represents the consumer surplus, the blue section represents the producer surplus, and the orange section represents the government surplus.<br>\\theory{"Why do we get deadweight loss even with zero tax?","Even when no tax is imposed, there is still deadweight loss in monopoly because the price is determined by the point where marginal revenue equals marginal cost (MR=MC)."}'});


myCalculator.setCreators({'title':'Developer','name':'Radi','school':'GS’23'});

myCalculator.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});
</script>