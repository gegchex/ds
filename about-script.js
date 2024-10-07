// set up text to print, each item in array is new line
var aText = new Array(
    " Superior Group CNK company offers customers a full package of vip services, which includes planning all the necessary details for the trip according to their wishes and collecting beautiful memories. Our team ensures maximum customer satisfaction as well as a safe and pleasant journey. First, we listen to all the wishes of the customer, and then we plan the appropriate steps and implement them. Our offer involves taking into account all the details, starting from the purchase of tickets and ending with the provision of tours. It is important for us to consider all wishes first, to ensure safety, highest quality service and comfort.Our company's goal is to have more satisfied customers. Let's introduce them to the most beautiful and ancient parts of Georgia, tell them the stories of our cultural monuments and create unforgettable memories.The mission of our brand is to offer customers the highest quality service, safe and comfortable environment. Customer satisfaction is our priority. It is important to invite the association of quality and comfortable services."




    
    );
    
    var iSpeed = 5; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
    
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();