var correctMessages = [
    "Awesome Job! Looks like you might be a natural historian!",
    "Who knew you knew so much about the world! Nice going!",
    "Correct! Bet you can get the next one too!"
]

var incorrectMessages = [
    "Not quite! It's alright, look at your trusty map!",
    "You almost got it! Try again!",
    "It seems the answer given was wrong, give it another shot!"
]

function checkQuestionMC(fieldName) {
    //Setting boolean variable 'correct' to false
    var correct = false
        //Dictionary to hold values for our answer key 
    var answers = {
        question1: "Egypt",
        question2: "Catholicism",
        question3: "True",
        question4: "Colombia",
        question5: "Europa",
        question6: "1952",
        question7: "867",
        question8: "True"
    };
    //Finding the field/question with JQuery and seeing what the user input was
    let value = $('input[name = ' + fieldName + ' ]:checked').val()
        //Checking if fieldname param is valid as well as if the user input matches the field
        //name's correct value. If there is a match, correct is set to true
    for (let key in answers) {
        if (fieldName == key) {
            if (answers[fieldName] == value) {
                correct = true
            }
        }
    }
    //Checks if correct is set to true and prints appropriate message
    if (correct == true) {
        alert(correctMessages[Math.floor(Math.random() * correctMessages.length)])
    } else {
        alert(incorrectMessages[Math.floor(Math.random() * correctMessages.length)])
    }
}

function popupFunction(id) {
    var popup = document.getElementById("myPopup" + id);
    popup.classList.toggle("show")
}