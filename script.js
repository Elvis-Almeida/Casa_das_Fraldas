var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/133759301_717652082202768_6159155171597462635_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=WyKzu6qVBPgAX9WM9UN&tp=1&oh=ab9ae6d95ce8e9edeea7c899315ef853&oe=6020C420';
images[1] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/133793652_1096258977501978_8274958481878641174_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=asM1rGs-gacAX9WR2cm&tp=1&oh=47b845abea6a5cd0ad1def542986a2dc&oe=6020CA2C';
images[2] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/129681556_110331390930727_4728268849443652001_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ue__3bi6npAAX8Z1rP2&tp=1&oh=88e4db38dc8eda0812df364ef80ca1f0&oe=6001CE0D';
 
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