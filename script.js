function menu_on(){
    var menu = document.getElementById("menu")

    var barraon = document.getElementById("barra-de-navegação-on")

    var barraoff = document.getElementById("barra-de-navegação-off")

    barraon.style.display = "none"
    barraoff.style.display = "block"
    menu.style.display = "block"
}
function menu_off(){
    var menu = document.getElementById("menu")

    var barraon = document.getElementById("barra-de-navegação-on")

    var barraoff = document.getElementById("barra-de-navegação-off")

    barraoff.style.display = "none"
    barraon.style.display = "block"
    menu.style.display = "none"
}


var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'https://instagram.fimp3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131080807_179244593897125_7242292462713847407_n.jpg?_nc_ht=instagram.fimp3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8_NZkgLKlpcAX-bmXJ6&tp=1&oh=f40776a168c6435f25cc1eeb87663a60&oe=5FFFDBB6';
images[1] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_D-tasJNpz2jjJMeG_6VBmqNvRNdBaA-0Q&usqp=CAU';
images[2] = 'https://memoria.ebc.com.br/sites/_portalebc2014/files/atoms_image/6055469523_e3885d63c7_b.jpg';
 
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
   if (document.getElementById("caixa-promoções")  && imageCount > 0)
   {
      document.getElementById("caixa-promoções") .style.backgroundImage = "url("+images[currentImage]+")";    
      document.getElementById("caixa-promoções") .style.backgroundAttachment = "";
      document.getElementById("caixa-promoções") .style.backgroundRepeat = "no-repeat";
      document.getElementById("caixa-promoções") .style.backgroundPosition = "center center";
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout('startSlideShow()', 8000);
   }
}
startSlideShow();