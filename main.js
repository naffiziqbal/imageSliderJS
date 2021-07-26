let photos = ['img/img1.jpg','img/img2.png',"img/img3.png", "img/img5.png", "img/img6.png",  "img/img7.png","img/img8.png"];
let imgTag = document.querySelector('.img');
const btnNext = document.querySelector(".next")
const btnPrev = document.querySelector(".prev")
let count = 0;


  btnNext.addEventListener("click", next);

function next(){    
    count++;


    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];

    }else{
        imgTag.src = photos[count];
    }

}
btnPrev.addEventListener("click", prev);
function prev(){



    if(count < 0){
        count = photos.length - 2;
        imgTag.src = photos[count];

    }else{
        imgTag.src = photos[count];

}
count--; 

}