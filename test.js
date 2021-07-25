function amountTocoins(amount, coins) { //coins is an array of 10coin,5coin,2coin & 1coin
	if (amount === 0) {
	   return [];
	  } else{
		if (amount >= coins[0]) {
		   left = (amount - coins[0]);
		   return [coins[0]].concat(amountTocoins(left, coins) ); //add 10coin + the remaining coin i.e either 5coin, 2coin or 1coin
		   } else{ //if amount > coins[0] e.g 9coin
			coins.shift(); //remove the first coins[0] i.e 10coins
			return amountTocoins(amount, coins); //set the remaining left coin 
		   }
	   }
   } 
   console.log(amountTocoins(9, [10, 5, 2, 1]));
   