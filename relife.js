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
  var calcLife = lifeUsed + calcUnits;
  var calcAccDepn = gbv - nbv;
  var calcPerDepn = priorNBV - nbv;
                   
  var calcTotalLife = (gbv/calcAccDepn)*calcLife
  
  var isNumber = isNaN(calcTotalLife);
  var isFinite = Number.isFinite(calcTotalLife);
  
  if ((isNumber === true) || (isFinite === false)) {
    document.getElementById('fail').src = "error.png";
    var img = document.querySelector('#fail');
    img.classList.remove('hidden');
    document.getElementById('result').innerHTML = 'Please enter valid figures and re-submit';
  } else {
    document.getElementById('result').innerHTML = 'Total relife required is: '+calcTotalLife;
  };
  
}