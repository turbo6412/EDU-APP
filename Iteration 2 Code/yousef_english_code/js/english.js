var submitAnswer_Q1 = function() {

    var radios = document.getElementsByName('question1');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
if ( val == "Flower" ) {
      alert('Answer is correct!');
    } else {
      alert('Answer is wrong');
    }
  };

var submitAnswer_Q2 = function() {

    var radios = document.getElementsByName('question2');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
if ( val == "Sleeping" ) {
      alert('Answer is correct!');
    } else {
      alert('Answer is wrong');
    }
  };

var submitAnswer_Q3 = function() {

    var radios = document.getElementsByName('question3');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
if ( val == "Thirsty" ) {
      alert('Answer is correct!');
    } else {
      alert('Answer is wrong');
    }
  };

  var submitAnswer_Q4 = function() {

    var radios = document.getElementsByName('question4');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value;
           break;
         }
    }
    
if ( val == "Shovel" ) {
      alert('Answer is correct!');
    } else {
      alert('Answer is wrong');
    }
  };