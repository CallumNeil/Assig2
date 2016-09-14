//*<!-- Assignment BootStrap and jQuery  assignment2.js
//**********************************************************
//* Author: Callum McLeman
//* Assignment: WE4.0 Web App Assignment, Digital Skills Academy
//* Student ID: DT7003
//* Date : 2016/07/20,21 8:03pm (phew!)
//* 
//* 
//***********************************************************/
function myPopUp {

	/* get the file name n path from anchor src attribute w/'this' */
                //alert($(this).find('img').attr('src'));
                var picFileName = $(this).find('img').attr('src');
                /* go up the tree, ask parent for the text in h3 title */
                var picTitleName = $(this).parent().find('h3').html();
                // change to h2 and make injection string
                picTitleName = '<center><h2 class="viewTitle">'+picTitleName+'</h2></center>'
                //alert(picTitleName + ' Title in h2');
                /* build image tag/element*/
                var imgElement = '<img id="tempPic" class="img-responsive picfix3" src="';
                imgElement = imgElement + picFileName + '" alt="Oops!" />';
      
                /* 'inject' into pop-_pic */
                // but first see if it has a pic init from before, if so clear it
                /*alert(length + ' before if ');
                if ($("#tempPic").length){
                  alert(length + 'if ');
                $("#pop_pic").remove('#tempPic');

                }*/
                //the above gave me grief, but the one below does it fine...
                //   but is still around in the DOM...
                //empty from the inside out...  the button stays in though...
                $("#pop_pic").find('h2').detach();
                $("#pop_pic").find('center').detach();
                $("#pop_pic").find('img').detach();
                $("#pop_pic").find('center').detach();
                $("#pop_pic").prepend(picTitleName+'<center>'+imgElement+'</center>');
                //close/exit button lives under here..
                /* show */
                $("#pop_background").fadeIn();
                $("#pop_pic").fadeIn();

                return false;
}
