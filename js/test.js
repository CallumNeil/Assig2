function loadPics(fileSelection){
  //
  var selectionPath = "first";

  alert("hello in function " +selectionPath );
  switch (fileSelection)
  {
   case "X": 
    alert("hello in function X");
     selectionPath = "images/mind"
   break;
   
   case "I": 
    alert("hello in function I");
     selectionPath = "images/toys"
   break;
   ...
   
   case "W": 
    alert("hello in function W");
     selectionPath = "images/lady"
   break;
   
   default: 
  }



  alert("hello in function " +selectionPath );






          return false;
}

