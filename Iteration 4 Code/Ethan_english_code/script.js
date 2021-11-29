//Array of Correct/Incorrect messages we can randomly choose from
var correctMessages = [
    "Awesome Job! You got it right!",
    "You're doing great! Let's move on to the next question!",
    "Correct! I bet you can get the next one right too!"
]
var incorrectMessages = [
    "Not quite! Try again, you got this!",
    "Getting warmer! Let's try again!",
    "The answer you gave seems to be wrong, don't worry try again!"
]

//Answer validation function for Multiple Choice Questions
function checkQuestionMC(fieldName) {
    //Setting the boolean variable 'correct' to false
    var correct = false;
    //Dictionary to hold our values (an answer key, if you will)
    var answers = {
        question1: "WashingMachine",
        question2: "Sour",
        question3: "Curtains",
        question4: "Pink",
        question5: "Hungry",
        question6: "Happy"
    };
    //Finding the field/question with JQuery and seeing what the user input was
    let value = $('input[name = ' + fieldName + ' ]:checked').val()
        //Checking if the fieldName param is valid as well as if the user input matches
        //the field name's correct value. If there is a match, correct is set to true
    for (let key in answers) {
        if (fieldName == key) {
            if (answers[fieldName] == value) {
                correct = true
            }
        }
    }
    //Checks if correct is set to true and prints the appropriate message
    if (correct == true) {
        alert(correctMessages[Math.floor(Math.random() * correctMessages.length)])
    } else {
        alert(incorrectMessages[Math.floor(Math.random() * correctMessages.length)])
    }
}
//Answer validation function for Free Response Questions
function checkQuestionFR(fieldName) {
    //Setting boolean variable to false as well as making FR answer dictionary
    var correct = false;
    var answers = {
        question7: "Pumpkin",
        question8: "Apple"
    };
    //Taking in value input from user and checking whether the input is found in the answer dict
    let value = $("#" + fieldName).val()
    for (let key in answers) {
        if (fieldName == key) {
            if (answers[fieldName] == value) {
                correct = true
            }
        }
    }
    //Checks if correct is set to true and prints the appropriate message
    if (correct == true) {
        alert(correctMessages[Math.floor(Math.random() * correctMessages.length)])
    } else {
        alert(incorrectMessages[Math.floor(Math.random() * correctMessages.length)])
    }
}