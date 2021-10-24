function checkButton1() 
{  
  document.getElementById("Q1_Correct").innerHTML="";
  document.getElementById("Q1_Incorrect").innerHTML="";  
  if(document.getElementById('Q1A').checked) 
  {   
    document.getElementById("Q1_Incorrect").innerHTML = "Incorrect! This is a whole pizza.";
  }   
  else if(document.getElementById('Q1B').checked) 
  {   
      document.getElementById("Q1_Correct").innerHTML = "Correct!";
  }
  else if(document.getElementById('Q1C').checked) 
  {   
      document.getElementById("Q1_Incorrect").innerHTML = "Incorrect! This pizza is 5/6.";
  }
  else if(document.getElementById('Q1D').checked) 
  {   
      document.getElementById("Q1_Incorrect").innerHTML = "Incorrect! One of these pizza's is 1/2.";    
  }  
  else 
  {   
      document.getElementById("Q1_Incorrect").innerHTML = "You have not selected any response.";   
  }   
}  
function checkButton2()
{
   document.getElementById("Q2_Correct").innerHTML="";
  document.getElementById("Q2_Incorrect").innerHTML="";  
  var x = document.getElementById("Q2Time").value;
  if (x == "19:25")
  {
    document.getElementById("Q2_Correct").innerHTML = "Correct! The pizza would arrive at 7:25PM."
  }
  else
  {
    document.getElementById("Q2_Incorrect").innerHTML = "Incorrect! Remember there are 60 minutes in an hour, and you order it at 6:00PM."
  }
}
function checkButton3()
{
  document.getElementById("Q3_Correct").innerHTML="";
  document.getElementById("Q3_Incorrect").innerHTML="";  
  var m = document.getElementById("Q3M").value;
  var t = document.getElementById("Q3T").value;
  var g = document.getElementById("Q3G").value;
  var o = document.getElementById("Q3O").value;
  var p = document.getElementById("Q3P").value;
  if((m=="6") && (t=="5") && (g=="6") && (o=="7") && (p=="4"))
  {
    document.getElementById("Q3_Correct").innerHTML = "Correct!";
  }
  else
  {
    document.getElementById("Q3_Incorrect").innerHTML = "Inorrect!";
  }
  if(m!="6")
  {
    document.getElementById("Q3_IncorrectMush").innerHTML = "Incorrect number of mushrooms.";
  }
  if(t!="5")
  {
    document.getElementById("Q3_IncorrectTom").innerHTML = "Incorrect number of tomatoes.";
  }
  if(g!="6")
  {
    document.getElementById("Q3_IncorrectGBP").innerHTML = "Incorrect number of green bell peppers.";
  }
  if(o!="7")
  {
    document.getElementById("Q3_IncorrectOlive").innerHTML = "Incorrect number of olives.";
  }
  if(p!="4")
  {
    document.getElementById("Q3_IncorrectPep").innerHTML = "Incorrect number of pepporoni.";
  }
}