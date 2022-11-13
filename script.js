// calculate the final amount for the principal at the rate selected for number of years opted
function compute()
{
    // pricial amount
    var principal = document.getElementById("principal").value;

    // alert the user if the princial is zero or negative number
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // interest rate
    var rate = document.getElementById("rate").value;

    // number of years
    var years = document.getElementById("years").value;

    // interest calculated based on the given princial,  years and rate of interest
    var interest = principal * years * rate /100;

    // year based on the number of years selected
    var year = new Date().getFullYear()+parseInt(years);

    // final amount (princial + interest) after the number of years selected at the rate 
    var amount = (parseFloat(principal, 2) + parseFloat(interest));

    // final output 
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>, <br\>at an interest rate of <mark>" + rate + "%</mark>. <br\>You will receive an amount of <mark>" + amount + "</mark>, <br\>in the year <mark>"+ year + "<mark><br \>" 
    
}

// update the rate on change of sliders
function updateRate(){
    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerHTML = rateval;
}
        