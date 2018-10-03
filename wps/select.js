
	function changeFont(ftSize){
			document.getElementById("tx").style.fontSize=ftSize;
	}
	function changeColor(ftColor){
			document.getElementById("tx").style.color=ftColor;
	}
	function changeStyle(ftStyle){
			document.getElementById("tx").style.fontFamily=ftStyle;
	}
	function designChoice(image){
	  
	  	  switch (image) {
          case "tshirt1": 
            document.getElementById("1").src = "t1.jpg";
			document.getElementById("2").value = "This is Design 1"; 
            break;
          case "tshirt2": 
             document.getElementById("1").src = "t2.png";
			 document.getElementById("2").value = "This is Design 2"; 
            break; 
           case "tshirt3":
            document.getElementById("1").src = "t3.jpg";
			document.getElementById("2").value = "This is Design 3"; 
            break;    
			           case "tshirt4":
            document.getElementById("1").src = "t4.png";
			document.getElementById("2").value = "This is Design 4"; 
            break;    
			           case "tshirt5":
            document.getElementById("1").src = "t5.jpg";
			document.getElementById("2").value = "This is Design 5"; 
            break;    
	  }
	  
	  }	 
	   function colorChoice(color){
	  
	  	 	 switch (color) {
          	case "red": 
            document.getElementById("4").bgColor="#cc2900";
			break;
          	case "black": 
             document.getElementById("4").bgColor="#000000";

            break; 
           	case "white":
            document.getElementById("4").bgColor="#FFFFFF";
			break;    
			case "green":
            document.getElementById("4").bgColor="#00FF00";
			break; 
			
			case "blue":
            document.getElementById("4").bgColor="#6A6AFF";
			break; 	
			case "yellow":
            document.getElementById("4").bgColor="#FFFF37";
			break; 	
			case "pink":
            document.getElementById("4").bgColor="#FF80C0";
			break; 	
			case "purple":
            document.getElementById("4").bgColor="#FF00FF";
			break; 	
	
		  }
	      }