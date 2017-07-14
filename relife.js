function calculate() {
  var gbv = document.getElementsByName('gbv')[0].value;
  gbv = parseFloat(gbv);
  var lifeUsed = document.getElementsByName('lifeUsed')[0].value;
  lifeUsed = parseFloat(lifeUsed);
  var priorNBV = document.getElementsByName('priorNBV')[0].value;
  priorNBV = parseFloat(priorNBV);
  var totalUnits = document.getElementsByName('totalUnits')[0].value;
  totalUnits = parseFloat(totalUnits);
  var currentUnits = document.getElementsByName('currentUnits')[0].value;
  currentUnits = parseFloat(currentUnits);
  var lifeUnits = document.getElementsByName('lifeUnits')[0].value;
  lifeUnits = parseFloat(lifeUnits);
  var nbv = document.getElementsByName('nbv')[0].value;
  nbv = parseFloat(nbv);
  
  var calcUnits = (currentUnits/totalUnits) * lifeUnits;
  console.log('Life units used in current period: ' + calcUnits);
  var calcLife = lifeUsed + calcUnits;
  console.log('Total Life used at end of current period: ' + calcLife);
  var calcAccDepn = gbv - nbv;
  console.log('Desired acc depreciation: ' + calcAccDepn);
  var calcPerDepn = priorNBV - nbv;
  console.log('Period depreciation for the current period: ' + calcPerDepn);
                   
  var calcTotalLife = (gbv/calcAccDepn)*calcLife
  console.log(calcTotalLife);
  
}