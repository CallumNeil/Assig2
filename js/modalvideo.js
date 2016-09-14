







//functions for my modal pic viewer
function modalViewer(clickedPic)
{

			/* get the file name n path from anchor src attribute w/'this' */
			//alert($(this).find('img').attr('src'));
			var picFileName = $(this).find('img').attr('src');
			/* title */
			var picTitleName = $(this).find('H3').attr('src');
			/* build image tag/element*/
			var imgElement = '<img id="tempPic" class="img-responsive center-block picfix3" src="';
			imgElement = imgElement + picFileName + '" alt="Oops!" />';
			
			/* 'inject' into pop-_pic */
			// but first see if it has a pic init from before, if so clear it
			/*alert(length + ' before if ');
			if ($("#tempPic").length){
				alert(length + 'if ');
			  $("#pop_pic").remove('#tempPic');

			}*/

			$("#pop_pic").find('img').detach();

			$("#pop_pic").prepend(imgElement);
			
			/* show */
			$("#pop_background").fadeIn();
			$("#pop_pic").fadeIn();

			return false;
		

		/* close func/method for modal div  */
		$("#close, #pop_background").click(function(){
			$("#pop_background").fadeOut();
			$("#pop_pic").fadeOut();
			
			return false;
		});



	
	/* allow esc key as an alternate exit from modal... 
	$(document).keyup(function(e) {

     	if(e.keyCode == 27) {
     		$('#pop_background, #pop_pic').fadeOut(400);
     		return false;
     	}
    });*/



} //  end func modalviewer