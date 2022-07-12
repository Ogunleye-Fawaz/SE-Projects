"use strict";

//this calculates the worth
function calculateWorth() {
    const firstInput = document.getElementById('input-1').value;
    const secondInput = document.getElementById('input-2').value;
    const result = document.getElementById('answer-1');

    if(firstInput !== '' && secondInput !== ''){
        var worth = firstInput - secondInput;
        result.innerHTML = worth;
    }
    else{
        alert('please input a number');
    }
}
//this calculates the current assets
function calculateCurrentAssets() {
    const firstInput = document.getElementById('input-3').value;
    const secondInput = document.getElementById('input-4').value;
    const thirdInput = document.getElementById('input-5').value;
    const fourthInput = document.getElementById('input-6').value;
    const result = document.getElementById('answer-2');

    if(firstInput !== '' && secondInput !== '' && thirdInput !== '' && fourthInput !== ''){
        var answer = firstInput - - secondInput - - thirdInput - -fourthInput;
        result.innerHTML = answer;
    }
    else{
        alert('please input a number');
    }
}
//this calculate the net fixed assets
function calculateNetFixedAssets() {
    const firstInput = document.getElementById('input-7').value;
    const secondInput = document.getElementById('input-8').value;
    const result = document.getElementById('answer-3');
    
    if(firstInput !== '' && secondInput !== ''){
        var answer = firstInput - secondInput;
        result.innerHTML = answer;       
    }
    else{
        alert('please input a number');
    }
}

//this calculates the total assets
function calculateTotalAssets() {
    const firstInput = document.getElementById('input-9').value;
    const secondInput = document.getElementById('input-10').value;
    const thirdInput = document.getElementById('input-11').value;
    const result = document.getElementById('answer-4');
    
    if(firstInput !== '' && secondInput !== ''){
        var answer = firstInput - - secondInput - - thirdInput;
        result.innerHTML = answer;
    }
    else{
        alert('please input a number');
    }
}

//this calculates the current liabilities
function calculateCurrentLiabilities() {
    const firstInput = document.getElementById('input-12').value;
    const secondInput = document.getElementById('input-13').value;
    const thirdInput = document.getElementById('input-14').value;
    const fourthInput = document.getElementById('input-15').value;
    const result = document.getElementById('answer-5');
    
    if(firstInput !== '' && secondInput !== '' && thirdInput !== '' && fourthInput !== ''){
        var answer = firstInput - - secondInput - - thirdInput - - fourthInput;
        result.innerHTML = answer;
    }
    else{
        alert('please input a number');
    }
}

//this calculates the shareholder's equity
function calculateShareholderEquity() {
    const firstInput = document.getElementById('input-16').value;
    const secondInput = document.getElementById('input-17').value;
    const result = document.getElementById('answer-6');

    if(firstInput !== '' && secondInput !== ''){
        var answer = firstInput - - secondInput;
        result.innerHTML = answer;
    }
    else{
        alert('please input a number');
    }
}


//this calculates the total liabiltiy and equity
function calculateTotalLiablitiesAndEquity() {
    const firstInput = document.getElementById('input-18').value;
    const secondInput = document.getElementById('input-19').value;
    const thirdInput = document.getElementById('input-20').value;
    const result = document.getElementById('answer-7');

    if(firstInput !== '' && secondInput !== ''){
        var answer = firstInput - - secondInput - - thirdInput;
        result.innerHTML = answer;
    }
    else{
        alert('please input a number');
    }
}

//this calculates the gross margin
function calculateGrossMargin() {
    const firstInput = document.getElementById('input-21').value;
    const secondInput = document.getElementById('input-22').value;
    const result = document.getElementById('answer-8');
    if(firstInput !== '' && secondInput !== '') {
    var grossMargin = firstInput - secondInput;
    result.innerHTML = grossMargin;

}
else{
    alert ("input a number");
}
}

//this calculates the operating expenses
function calculateOperatingExpenses() {
    const firstInput = document.getElementById('input-23').value;
    const secondInput = document.getElementById('input-24').value;
    const thirdInput = document.getElementById('input-25').value;
    const result = document.getElementById('answer-9');
    if(firstInput !== '' && secondInput !== '') {
    var operatingExpenses = firstInput - - secondInput - - thirdInput;
    result.innerHTML = operatingExpenses;

}
else{
    alert ("input a number");
}
}

//this calculates the income from operations
function calculateIncomeFromOperations() {
    const firstInput = document.getElementById('input-26').value;
    const secondInput = document.getElementById('input-27').value;
    const result = document.getElementById('answer-10');
    if(firstInput !== '' && secondInput !== '') {
    var incomeFromOperations = firstInput - secondInput;
    result.innerHTML = incomeFromOperations;

}
else{
    alert ("input a number");
}
}

//this calculates the net incone
function calculateNetIncome() {
    const firstInput = document.getElementById('input-28').value;
    const secondInput = document.getElementById('input-29').value;
    const thirdInput = document.getElementById('input-30').value;
    const result = document.getElementById('answer-11');
    if(firstInput !== '' && secondInput !== '') {
    var netIncome = firstInput - - secondInput - - -  thirdInput;
    result.innerHTML = netIncome;

}
else{
    alert ("input a number");
}
}

