//1
function betweenFiveAndTen(num){
  if(num>=5 && num<=10){
      return 'true';
  }else
    return false;
}

//2
function betweenTenAndThirty(num){
  return (num>=10 && num<=30)?  true:false;
}

//3
function betweenThirtyAndFifty(num){
  return (num>=30 && num<=90)?  true:false;
}


//4
function betweenThirtyFiftySeventy(num){
  return ((num>=0 && num<=30) || (num>=50 && num<=70))?  true:false;
}

//5
function betweenTwentyFiftySixty(num){
  return ((num>=0 && num<=20) || (num>=50 && num<=60))?  true:false;
}

//6
function betweenTenTwentyThirty(num){
  return ((num>=0 && num<=10) || (num>=20 && num<=30))?  true:false;
}


// console.log(betweenTenTwentyThirty(15));