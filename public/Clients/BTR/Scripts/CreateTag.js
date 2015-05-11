//Client_Info is the ID of the div that contains the Display and Iframe


function Delete_Contents()
{
 
  var myElement= document.getElementById('Client_Info');

 //Onload Check if the contents of Client_Info is equal to the value in the parenthesis
 if(myElement.innerHTML!=" ")
    {
     //Rewrite the contents with the following values
       myElement.innerHTML="<div id='Display' style='position:relative;width:100%;'><img  alt='Faces' src='images/Clients/YourFullAd.jpg' id='Gallery' style='position:relative;margin-left:45%;top:10px;' ><div id='ScopeCap' style='position: relative; margin-left:45%; top:65px;'> </div></div>"
    }
  
}
function Create_Players()
{
 
  var myElement= document.getElementById('Main_Left');

 //Onload Check if the contents of Client_Info is equal to the value in the parenthesis
 if(myElement.innerHTML!=" ")
    {
     //Rewrite the contents with the following values
       myElement.innerHTML="<div id='Players' style='position:relative;width:100%;height:'>
    }
  
}

function Create_Iframe()
{
  //Select the div with an ID of Client_Info
  var myElement= document.getElementById(Client_Info);

  //If user has never clicked the button the contents of the div with an ID of Client_Info are created
 
 if(countClicks()<1)   
    {    
       myElement.innerHTML="<div id='Display' ><img  alt='Faces' src='images/Clients/YourFullAd.jpg' id='Gallery'><div id='ScopeCap' > </div></div><div id ='Client_Menu'><iframe src='innerscopemagazine/Menu1.html' width='100%' height='500' name ='Client_Frame' id='Client_Frame' scrolling='no'>You need a Frames Capable browser to view this content.</iframe>'"
    
    //Call Loadgallery function
      Loadgallery('Gallery', 'images/Clients/YourFullAd.jpg', 'ScopeCap', 'Person1, Business Owner <br>Business Name<br>Business Address<br>Business Email<br>Business Number' );
    }
    else
    {   
      Loadgallery('Gallery', 'images/Clients/YourFullAd.jpg', 'ScopeCap', 'Person1, Business Owner <br>Business Name<br>Business Address<br>Business Email<br>Business Number' );
    }
  
}

function countClicks()
{
//Keep track of number of clicks
Click_Count ++;
return Click_Count;
}

function LoadGallery(pictureName,imageFile,titleCaption,captionText) {

      if (document.all) {
	document.getElementById(pictureName).style.filter="blendTrans(duration=1)";
	document.getElementById(pictureName).filters.blendTrans.Apply();
      }

      document.getElementById(pictureName).src = imageFile;

      if (document.all) {
        document.getElementById(pictureName).filters.blendTrans.Play();
      }

      document.getElementById(titleCaption).innerHTML=captionText;}

