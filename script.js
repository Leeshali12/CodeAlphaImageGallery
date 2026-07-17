let images = [
"images/img1.png",
"images/img2.png",
"images/img3.png",
"images/img4.png",
"images/img5.png",
"images/img6.png"
];

let current = 0;

function openLightbox(index){

current=index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=images[current];

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

current=current+step;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

document.getElementById("lightbox-img").src=images[current];

}

function filterSelection(category){

let items=document.querySelectorAll(".image");

items.forEach(function(item){

if(category=="all"){

item.classList.remove("hide");

}
else{

if(item.classList.contains(category))
item.classList.remove("hide");

else
item.classList.add("hide");

}

});

}