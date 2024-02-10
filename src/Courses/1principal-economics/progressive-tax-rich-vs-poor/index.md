---
tags: principal-economics
thumbnail: /assets/img/progressive-tax.png
title: Progressive Tax Rich Vs Poor
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();
myCalculator.setGraphs({'engine':'desmos','idDiv':'TheGraphForPoor','height':'650px','width':'50','left':'-25','right':'2500','bottom':'-15','top':'250','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'h(hours)','yAxisLabel':'w($)'});
myCalculator.setGraphs({'engine':'desmos','idDiv':'TheGraphForRich','height':'650px','width':'50','left':'-25','right':'2500','bottom':'-15','top':'250','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'h(hours)','yAxisLabel':'w($)'});

//Demand
myCalculator.addFuncInput({'idDiv':'demandCurve','title':'Demand Curve','func':'f_d(P)','latex':'200-\\frac{P}{10}','constraint':"\\left\\{P\\ge0\\right\\}",'color':'#299e46',hidden:true,'listGraphs':[0,1]});
myCalculator.addFuncInput({'idDiv':'supplyCurve','title':'Supply Curve','func':'f_s(P)','latex':'\\frac{P}{10}','constraint':"\\left\\{P\\ge0\\right\\}",'color':'#29369e',hidden:true,'listGraphs':[0,1]});

myCalculator.line();


//fraction from rich
myCalculator.addSliderInput({'idDiv':'fractionOfRich','title':'% From Rich','latex':'f_{pFR}','min':'0','max':'100','step':'1','defaultValue':'50','listGraphs':[0,1]});
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'ratioOfPerFromRich','compute':"fractionOfRich/[100]",'NewfunEqu':'f_{rFR}','hidden':true,'listGraphs':[0]});

//SupplyDemand for Poor
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'demandForPoor','compute':"demandCurve*ratioOfPerFromRich",'NewfunEqu':'f_{dFP}(P)','color':'#299e46','listGraphs':[0]});
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'supplyForPoor','compute':"supplyCurve*ratioOfPerFromRich",'NewfunEqu':'f_{sFP}(P)','color':'#29369e','listGraphs':[0]});





// //SupplyDemand for Rich

myCalculator.addExpression({'calc':'simpleCompute','idDiv':'demandForRich','compute':"demandCurve*[1]",'NewfunEqu':'f_{dFR}(P)', 'color':'#299e46','listGraphs':[1]});
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'supplyForRich','compute':"supplyCurve*[1]",'NewfunEqu':'f_{sFR}(P)', 'color':'#29369e','listGraphs':[1]});

myCalculator.addExpression({'calc':'simpleIntersect','idDiv':'clearingHoursRich','compute':"supplyForRich~demandForRich",'NewfunEqu':'\\mu','listGraphs':[1]});


myCalculator.addLabel({'idDiv':'clearingForRich','latex':'(\\mu_{x},\\mu_{y})','label':'','color':'#adadad','showLabel':true,'listGraphs':[1]});


// //Tax rate
myCalculator.addSliderInput({'idDiv':'proportionalTaxRate','title':'% Progressive Tax Rate','latex':'P_{tax}','min':'0','max':'100','step':'1','defaultValue':'20','listGraphs':[0,1]});

//Supplycurve After tax for rich
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'supplyCurveAfterTaxRich','compute':"clearingHoursRich_y*proportionalTaxRate/[100]+supplyForRich",'NewfunEqu':'f_{sTR}(P)','color':'#8e62f3','lineStyle':Desmos.Styles.DASHED,'listGraphs':[1]});


myCalculator.addExpression({'calc':'simpleIntersect','idDiv':'DemandAfterTaxRich','compute':"supplyCurveAfterTaxRich~demandForRich",'NewfunEqu':'\\gamma','listGraphs':[1]});
myCalculator.addExpression({'calc':'simpleSubstitute','idDiv':'SupplyAfterTaxRich','parentIdDiv':'supplyForRich','NewfunEqu':'g(DemandAfterTaxRich_x)','hidden':true,'listGraphs':[1]});
myCalculator.addExpression({'idDiv':'DWLforRich','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\mu_{x},\\mu_{y}\\right),\\left(\\gamma_{x},\\gamma_{y}\\right),\\left(\\gamma_{x},g(P)\\right)\\right]\\right)",'color':'#fbff00','lineWidth':'0','listGraphs':[1]});

//CalcDWL
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'calcDWLRich','compute':"(clearingHoursRich_x-DemandAfterTaxRich_x)*(clearingHoursRich_y*proportionalTaxRate/[100])/[2]",'NewfunEqu':'f_{DWR}','min':'0','max':'\\mu_{x}*\\mu_{y}','step':'1','defaultValue':'f_{DWR}','listGraphs':[1]});

//End Rich Section




// //SupplyDemand for Poor


myCalculator.addExpression({'calc':'simpleIntersect','idDiv':'clearingHoursPoor','compute':"supplyForPoor~demandForPoor",'NewfunEqu':'\\mu','listGraphs':[0]});


myCalculator.addLabel({'idDiv':'clearingForPoor','latex':'(\\mu_{x},\\mu_{y})','label':'','color':'#adadad','showLabel':true,'listGraphs':[0]});



//Supplycurve After tax for Poor
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'supplyCurveAfterTaxPoor','compute':"clearingHoursPoor_y*proportionalTaxRate/[100]+supplyForPoor",'NewfunEqu':'f_{sTP}(P)','color':'#8e62f3','lineStyle':Desmos.Styles.DASHED,'listGraphs':[0]});


myCalculator.addExpression({'calc':'simpleIntersect','idDiv':'DemandAfterTaxPoor','compute':"supplyCurveAfterTaxPoor~demandForPoor",'NewfunEqu':'\\gamma','listGraphs':[0]});
myCalculator.addExpression({'calc':'simpleSubstitute','idDiv':'SupplyAfterTaxPoor','parentIdDiv':'supplyForPoor','NewfunEqu':'g(DemandAfterTaxPoor_x)','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'DWLforPoor','latex':"\\operatorname{polygon}\\left(\\left[\\left(\\mu_{x},\\mu_{y}\\right),\\left(\\gamma_{x},\\gamma_{y}\\right),\\left(\\gamma_{x},g(P)\\right)\\right]\\right)",'color':'#fbff00','lineWidth':'0','listGraphs':[0]});

//CalcDWL
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'calcDWLPoor','compute':"(clearingHoursPoor_x-DemandAfterTaxPoor_x)*(clearingHoursPoor_y*proportionalTaxRate/[100])/[2]",'NewfunEqu':'f_{DWP}','min':'0','max':'\\mu_{x}*\\mu_{y}','step':'1','defaultValue':'f_{DWP}','listGraphs':[0]});

//End Poor Section

myCalculator.setValue({'idDiv':'proportionalTaxRateValue','latex':'P_{tax}','decimal':'0','listGraphs':[0]});
myCalculator.setValue({'idDiv':'calcDWLRichValue','latex':'f_{DWR}','decimal':'0','listGraphs':[1]});
myCalculator.setValue({'idDiv':'calcDWLPoorValue','latex':'f_{DWP}','decimal':'0','listGraphs':[0]});



myCalculator.setInstructions({'title':'Demand Function','content':'Please input the demand function in terms of P. The demand curve will shift on the right-hand side of the graph, which represents the rich population. \\tip{"Whenever you update the demand or supply function, it’s important to recalculate both the demand and supply curves to see how they interact and determine the market equilibrium. To do this, please use the refresh button to recalculate both graphs."}'});
myCalculator.setInstructions({'title':'Supply Function','content':'Please input the supply function in terms of P. Again, this will represent the right-hand side of the graph.'});
myCalculator.setInstructions({'title':'Proportion From Rich','content':'Slide the <b>% From Rich</b> slider from 0 to 100% to adjust. At 100%, it means that the supply and demand for the poor will be in the same proportion as that of the rich. The default setting is 50%, which signifies that the poor have half the supply and demand compared to the rich.'});
myCalculator.setInstructions({'title':'Progressive Tax Rich vs. Poor','content':'Assume we tax both labor markets with the same proportion \\exp{proportionalTaxRateValue}%. The initial intuition is that rich people will pay more taxes than the poor because a progressive tax increases as income rises. However, upon examining the deadweight loss (DWL), we can see that the DWL for the rich is much larger than that for the poor, indicating inefficiency when imposing a progressive tax.<br>Let’s calculate both DWLs:<br>For the rich, the DWL is \\exp{calcDWLRichValue} $-hours, and for the poor, it is \\exp{calcDWLPoorValue} $-hours.<br>As we increase the inequality between the rich and the poor, we can observe that the difference in DWL also increases. This indicates that taxing the rich may not necessarily be efficient.\\theory{"Equity and Efficiency in Progressive Taxation","A progressive tax system aims to reduce income inequality by placing a higher tax burden on those with higher incomes, promoting a more equitable wealth distribution. While this approach can generate revenue for government programs, critics argue that excessive taxes on the rich may discourage investment and hinder economic growth. Striking a balance between equity and efficiency is crucial in implementing a progressive tax system."}'});


myCalculator.setCreators({
    title: "Developer",
    name: "Radi",
    school: "GS’23"
  });

  
myCalculator.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});
</script>
