
const next=document.getElementById('next');
const previous=document.getElementById('previous');

let tabimage=[
    'images/barca.jpg',
    'images/bar.jpg',
   'images/banc.jpg',
   'images/bar2.jpg',
   'images/coeur.jpg',
   'images/diouf.jpg',
   'images/meuf.jpg',
   'images/p1.jpg',
   'images/pape.jpg',
   'images/pelouge.jpg',
   'images/perso.jpg',
   'images/recru.jpg',
   'images/s1.jpg',
   'images/salle.jpg',
   'images/salleHot.jpg'
]

let nbr=tabimage.length;
var i=0;

function uploadImage(){
    document.slide.src=tabimage[i];
    if(i<nbr-1){
        i++;
    }else{
        i=0;
    }  
    setTimeout(uploadImage,3000);
}

window.onload=uploadImage;
next.addEventListener('click',uploadImage);
previous.addEventListener('click',uploadImage);




