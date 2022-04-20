/*Json array*/
let img_array = [{
    "name": "Kuva1",
    "src": "images/pexels-jermaine-ulinwa-9554674.jpg"
},
{
    "name": "Kuva2",
    "src": "images/pexels-leon-macapagal-6622889.jpg"
},
{
    "name": "Kuva3",
    "src": "images/pexels-zeeshaan-shabbir-5417094.jpg"
},
{
    "name": "Kuva4",
    "src": "images/pexels-zeeshaan-shabbir-9534103.jpg"
}
];
/*kuvan ja tekstin alustus sivun ladatessa*/
let i = 0;
let img = document.getElementById('imgcarousel');
img.src = img_array[i].src;
img.name = img_array[i].name;
document.getElementById('ptext').innerHTML = img.name;

/*seuraava kuva*/
function nextImg(){
    let max = img_array.length-1;
    if(i < max){
        i++;
    }
    else{
        i=0;
    }
    img.src = img_array[i].src;
    img.name = img_array[i].name;
    document.getElementById('ptext').innerHTML = img.name;   
}

/*edellinen kuva*/
function previousImg(){
    let max = img_array.length-1;
    if(i > 0){
        i--;
    }
    else{
        i = max;
    }
    img.src = img_array[i].src;
    img.name = img_array[i].name;
    document.getElementById('ptext').innerHTML = img.name;     
}

/* aloittaa automaattisen kuvanvaihdon ja myös pysäyttää*/
let myInterval;
function autoPlay(){
   
   if(!myInterval){
       myInterval = setInterval(nextImg,1500);
   }
   else{
       clearInterval(myInterval);
       myInterval = null;
   }
}