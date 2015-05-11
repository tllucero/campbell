 function LoadGallery(pictureName,imageFile,titleCaption,captionText) 
   {

      if (document.all) {
	document.getElementById(pictureName).style.filter="blendTrans(duration=1)";
	document.getElementById(pictureName).filters.blendTrans.Apply();
      }

      document.getElementById(pictureName).src = imageFile;

      if (document.all) {
        document.getElementById(pictureName).filters.blendTrans.Play();
      }

      document.getElementById(titleCaption).innerHTML=captionText; 
   }   