
function squareErrorMessage() { 
    console.log("Hello"); 
    if(document.getElementById('CIRCLE-WRONG').checked) {
        document.getElementById("SQUARE-VALIDATE").innerHTML
            = "Incorrect! You selected circle, try again!";
    }
    else if(document.getElementById('POPTART-WRONG').checked) {
        document.getElementById("SQUARE-VALIDATE").innerHTML
            = "Tasty! But incorrect. You selected Poptarts, try again!";
    }
    else if(document.getElementById('TRIANGLE-WRONG').checked) {
        document.getElementById("SQUARE-VALIDATE").innerHTML
            = "Incorrect! You selected a triangle, try again!";
    } 
    else if(document.getElementById('SQUARE-RIGHT').checked) {
        document.getElementById("SQUARE-VALIDATE").innerHTML
            = "Correct! You have selected a very cool square! :D";
    }
    else {
        document.getElementById("SQUARE-VALIDATE").innerHTML
            = "Nice try, you must select a shape before hitting submit!";
    }

  }

function setShapePic() {
    var img = document.getElementById("shape-img-select");
    img.src = this.value;
    return false;
}
document.getElementById("shape-list").onchange = setShapePic;

function checkCents(msgid, coin, correctCent) {
    var cent = document.getElementById(coin).value
    if (cent == correctCent) {
        document.getElementById(msgid).innerHTML
            = "Correct! You have entered the correct amount of cents!";
    }
    else {
        document.getElementById(msgid).innerHTML
        = "Incorrect! Please try again.";
    }

}
