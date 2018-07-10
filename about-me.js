var currentpicture = 0;

function switchImages(){
  var imageArray = ["myImage2", "myImage3", "myImage4", "myImage5"]
jay.length-1;
  if (currentpicture == lastpicture)
  {
    currentpicture = 0;

  }else {
    currentpicture++;
  }
  document.getElementById("picture").src=imageArray[currentpicture];
}
