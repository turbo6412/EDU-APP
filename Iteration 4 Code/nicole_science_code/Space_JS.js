function checkButton1() 
{  
  document.getElementById("Q1_Correct").innerHTML="";
  document.getElementById("Q1_Incorrect").innerHTML="";  
  if(document.getElementById('Q1A_space').checked) 
  {   
    document.getElementById("Q1_Incorrect").innerHTML = "Incorrect! Earth is the 3rd planet from the center of the Solar System!";
  }   
  else if(document.getElementById('Q1B_space').checked) 
  {   
      document.getElementById("Q1_Correct").innerHTML = "Correct!";
  }
  else if(document.getElementById('Q1C_space').checked) 
  {   
      document.getElementById("Q1_Incorrect").innerHTML = "Incorrect! Saturn is the 6th planet from the center of the Solar System!";
  }
  else if(document.getElementById('Q1D_space').checked) 
  {   
      document.getElementById("Q1_Incorrect").innerHTML = "Incorrect! The moon orbits Earth, it is not the center!.";    
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
  if(document.getElementById('Q2A_space').checked) 
  {   
    document.getElementById("Q2_Incorrect").innerHTML = "Incorrect! Pluto is the furthest planet from the Sun.";
  }   
  else if(document.getElementById('Q2B_space').checked) 
  {   
      document.getElementById("Q2_Inorrect").innerHTML = "Incorrect! The moon is not a planet.";
  }
  else if(document.getElementById('Q2C_space').checked) 
  {   
      document.getElementById("Q2_Incorrect").innerHTML = "Incorrect! Earth is the third planet from the Sun!";
  }
  else if(document.getElementById('Q2D_space').checked) 
  {   
      document.getElementById("Q2_Correct").innerHTML = "Correct!";    
  }  
  else 
  {   
      document.getElementById("Q2_Incorrect").innerHTML = "You have not selected any response.";   
  }
}