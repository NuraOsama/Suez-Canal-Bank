//loan calculator
function computeLoan(){
	//get the values from the user
  var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	//calculate the interest for the loan
  var interest = (amount * (interest_rate * .01)) / months;
  //toFixed(2) --> demical num with 2 digits
	var payment = ((amount / months) + interest).toFixed(2);
	//add a , every three digits
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //render to the html
	document.getElementById('payment').innerHTML ="ستدفع شهريًا مبلغ " +payment+ " جنيهًا";
}
