//Function to check each question, using the question name as a parameter
//I still want to find a more optimal way of approaching this, planning to look
//into it more next iteration
function checkQuestion(elID) {
    //Setting the boolean variable 'correct' to false
    var correct = false;
    //Making a variable for each question input value 
    var question1 = document.WordMultChoice.question1.value;
    var question2 = document.WordMultChoice.question2.value;
    var question3 = document.WordMultChoice.question3.value;
    var question4 = document.FillInTheBlank.question4.value;
    //Using a switch case based on which question they're on
    //if the answer is correct to its corresponding question, correct
    //is now true
    switch (elID) {
        case "question1":
            if (question1 == "Confused") { correct = true; }
            break;
        case "question2":
            if (question2 == "Q4") { correct = true; }
            break;
        case "question3":
            if (question3 == "Q2") { correct = true; }
            break;
        case "question4":
            if (question4 == "Compassion" || question4 == "Kindess" || question4 == "Feed") { correct = true; }
        default:
            break;
    }

    //Checking if correct is true, and if so notifies the user of results
    if (correct == true) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}