var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/136841793_188561719665044_922577770088227648_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=krkKp0iSqekAX-9IOJD&tp=1&oh=bd19dd9b1b67886d914e3407dbb6a4fa&oe=6026E441';
images[1] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/133759301_717652082202768_6159155171597462635_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=WyKzu6qVBPgAX9WM9UN&tp=1&oh=ab9ae6d95ce8e9edeea7c899315ef853&oe=6020C420';
images[2] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/134280846_1159121144506949_1696741643638147536_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=YFb37119PiwAX-jYbaF&tp=1&oh=0cdde3833ea4eb82b2cfb6bb66d44131&oe=602707BF';
 
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