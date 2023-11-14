function checkCashRegister(price, cash, cid) {

  // calculating available money in the given cash register(cid)
  let cashInDrawer = cid.reduce((a,b) => {
    return (a + b[1])  
    }, 0).toFixed(2);
  //console.log(cashInDrawer)

   //how much should we pay back in general
  let payBack = cash - price;
  //console.log(payBack.toFixed(2))

  // what is the value of each unit
  const _unit = {'PENNY': 0.01, 'NICKEL': 0.05, 'DIME': 0.1, 'QUARTER': 0.25,'ONE': 1, 'FIVE': 5, 'TEN': 10, 'TWENTY': 20, 'ONE HUNDRED': 100};

  let status = "OPEN";
  let change = [];


  if (payBack > cashInDrawer){
    status = "INSUFFICIENT_FUNDS";
  } else if(payBack.toFixed(2) === cashInDrawer) {
       return { status: "CLOSED", change: cid}
  } else {
      //to reverse cid because we want to comprise from greater unit to less
      let cidReverse = [...cid].reverse()
      //console.log(cidReverse)

      // The amount of money that we should pay back
      for (let subArray of cidReverse) {
        //the template of each array we want to push to the 'change' array after each loop       
        let temp = [subArray[0], 0];
        //this loop works until the appopriate unit(biggest money less than the payBack) exists in drawer AND till the payback moeny get 0 
        while (payBack >= _unit[subArray[0]] && subArray[1] > 0) {
          temp[1] += _unit[subArray[0]];
          subArray[1] -= _unit[subArray[0]];
          payBack -= _unit[subArray[0]];
          payBack = payBack.toFixed(2);
        }
        // this stes pushes those arrays with positives digits 
        if (temp[1] > 0) {
          change.push(temp);
        }   
      }
  }
  //output
  // if last remainder after loop of building the "change" array is more than 0 means there ins't appropriate money in the drawer 
  console.log({status, change})
  return payBack > 0 ? {status: "INSUFFICIENT_FUNDS", change: []}: { status: "OPEN", change: change};
}
