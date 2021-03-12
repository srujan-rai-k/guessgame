
	// random value generated 
	var y = Math.floor(Math.random() * 10 + 1); 
	document.getElementById("display").innerHTML = "You are ready to play"
	
	// counting the number of guesses 
	// made for correct Guess 
	var guess = 1; 
	document.getElementById("resetnum").onclick = function(){
		location.reload();
		x=0;
		var y = Math.floor(Math.random() * 10 + 1); 

	}
	
document.getElementById("submitguess").onclick = function()
{ 
		 
var x = document.getElementById("guessField").value; 

  if(Number.isInteger(Number(x))==true)
  	{

		if(x>0 && x<=10)
			{
				if(x == y) 
				{	 
					document.getElementById("display").innerHTML = ("\nCONGRATULATIONS!!! 👏 YOU GUESSED IT RIGHT IN "
							+ guess + " GUESS "); 
				} 
				else if(x > y) /* if guessed number is greater 
								than actual number*/
				{	 
					guess++; 
					document.getElementById("display").innerHTML = ("\nOOPS SORRY!! 😲 TRY A SMALLER NUMBER"); 
				} 
				else
				{ 
					guess++; 
					document.getElementById("display").innerHTML = ("\nOOPS SORRY!! 😲 TRY A GREATER NUMBER") ;
				}
			}
		else
			{
				document.getElementById("display").innerHTML = "\n Enter the number between the given range only!! Try again 😀"
			} 
 	}
  else
  	{
		document.getElementById("display").innerHTML = "I think you have entered something else!! Try again 😀"
  	}


} 