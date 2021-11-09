function checkQuestion(elID) {

    var correct = false;
 
    var question1 = document.WordMultChoice.question1.value;
    var question2 = document.WordMultChoice.question2.value;
    var question3 = document.WordMultChoice.question3.value;
    var question4 = document.FillInTheBlank.question4.value;
    
    
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

    if (correct == true) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}