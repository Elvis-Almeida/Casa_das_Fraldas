var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_960_720.jpg';
images[1] = 'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg';
images[2] = 'https://cdn.pixabay.com/photo/2018/05/11/07/45/mothers-3389671_960_720.jpg';
 
var preLoadImages = new Array();
for (var i = 0; i < images.length; i++)
{
   if (images[i] == "")
      break;
 
   preLoadImages[i] = new Image();
   preLoadImages[i].src = images[i];
   imageCount++;

}
 
function startSlideShow()
{
   if (document.getElementById("caixa1")  && imageCount > 0)
   {
      document.getElementById("caixa1") .style.backgroundImage = "url("+images[currentImage]+")";    
      document.getElementById("caixa1") .style.backgroundAttachment = "";
      document.getElementById("caixa1") .style.backgroundRepeat = "no-repeat";
      document.getElementById("caixa1") .style.backgroundPosition = "center center";
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout('startSlideShow()', 8000);
   }
}
startSlideShow();