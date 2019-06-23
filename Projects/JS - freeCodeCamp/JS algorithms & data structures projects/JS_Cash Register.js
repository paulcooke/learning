function checkCashRegister(price, cash, cid) {
  let cidCopy = cid.slice(0).reverse();
  //console.log(cidCopy[2][0])
  let cidArr = cid.slice(0).reverse().map(i=> {return Math.round(i[1]*100)});
  //console.log(cidArr)
  let checkArr = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let changeArr = [];
  let changeDue = Math.round(cash*100-price*100);

  for (let i=0; i<cidArr.length; i++) {
    let changeAdd = 0;
    //console.log(changeAdd)
    while(cidArr[i]>0 && changeDue >= checkArr[i]) {
      //console.log(changeDue)
      changeAdd += checkArr[i];
      //console.log(changeAdd);
      cidArr[i] -= checkArr[i];
      changeDue -= checkArr[i];
    }
    changeArr.push(changeAdd);
  }

  console.log(changeArr);

  if (changeDue>0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (changeDue === 0) {
    if (cidArr.reduce((a,b) => {return a+b},0) === 0) {
      console.log('poop')
      return {status: "CLOSED", change: cid}
    }
    else {
      let returnArr = [];
      for (let k = 0; k<changeArr.length; k++) {
        if (changeArr[k]>0) {
          returnArr.unshift([cidCopy[k][0], changeArr[k]/100]);
        }
      }
      console.log(returnArr)
      //console.log({status: "OPEN", change: returnArr})
      return {status: "OPEN", change: returnArr.reverse()}
    }
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
