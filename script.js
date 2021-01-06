var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131080807_179244593897125_7242292462713847407_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8_NZkgLKlpcAX-bmXJ6&tp=1&oh=f40776a168c6435f25cc1eeb87663a60&oe=5FFFDBB6';
images[1] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130501152_383651416082900_3227295800493511982_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=CkP8IRNwX34AX_8KmJg&tp=1&oh=139827433124f2ecb57893b3ea668f1f&oe=6001BE7E';
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