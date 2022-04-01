let imageVar = document.getElementById('image');
let imageArray = ['img/slide1.JPG', 'img/slide2.JPG', 'img/slide3.JPG',
'img/slide4.JPG', 'img/slide5.JPG', 'img/slide6.JPG', 'img/slide7.JPG'];

let imageIndex = 0;

function slideShow(){
    imageVar.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >= imageArray.length){
        imageIndex = 0
    }
}

setInterval(slideShow, 3000);