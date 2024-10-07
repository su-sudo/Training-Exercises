function calculateROI(){

    const principal = parseFloat(document.getElementById("input-pamnt").value);
    let roi = parseFloat(document.getElementById("input-roi").value);
    const years = parseFloat(document.getElementById("input-years").value);
    // document.getElementById("error-year").innerText =" ";

    if(!isNaN(principal) && !isNaN(roi) && !isNaN(years)){

        if(principal > 500 && principal < 10000){

            rate = rateCalculate(principal, roi, years);
            const interest = (principal * rate * years) / 100;
            const totalamnt = principal + interest;

            document.getElementById("interest-rslt").innerText += interest.toFixed(2);
            document.getElementById("total-amnt").innerText += totalamnt.toFixed(2);

        }
        else{
            document.getElementById("error-year").textContent = "Principal amount should be in between $500 and $10000 not $"+ principal
        }

    }
    else{
        alert('Please enter valid Numbers')
    }

}

function rateCalculate(principal, roi, years){

    if(principal < 1000){
        roi += 5;
    }
    else if(principal>= 1000 && principal<=5000){
            roi += 7;
    }
    else{
        roi += 10
    }

    if(years > 5)
    {
        roi+=2;
        document.getElementById('additional-info').innerText += "An additional 5% interest added as the number of year exceeded 5"
    }
    return roi;
}