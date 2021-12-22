function checkCashRegister(price, cash, cid) {
    let change = cash*100 - price*100;
    let cidTotal = 0;
    for(let x of cid)
    {
        cidTotal += x[1]*100;
    }
    if(change > cidTotal)
    {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (change === cidTotal)
    {
        return {status: "CLOSED", change: cid};
    } else 
    {
        cid = cid.reverse();
        let answer = [];
        let moneyUnits = 
        {
            "ONE HUNDRED": 10000, 
            "TWENTY": 2000,
            "TEN": 1000,
            "FIVE": 500,
            "ONE": 100,
            "QUARTER": 25,
            "DIME": 10,
            "NICKEL": 5,
            "PENNY": 1
        }
        
        for(let x of cid)
        {
            let holder = [x[0], 0];
            x[1] = x[1] * 100;
            while(change >= moneyUnits[x[0]] && x[1] > 0)
            {
                change -= moneyUnits[x[0]];
                x[1] -= moneyUnits[x[0]];
                holder[1] += moneyUnits[x[0]]/100;
            }
            if(holder[1] > 0)
            {
                answer.push(holder);
                console.log(answer);
            }
        }
        
        if(change > 0)
        {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change: answer};
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
