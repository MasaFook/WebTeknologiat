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
/*sivun alustus*/
let img = document.getElementById('imgcarousel');
let currentIndex =img_array.findIndex(obj => obj.name == localStorage.getItem('strgName')); /* hakee muistista indexin arvon*/
let index = currentIndex;
window.onload = load();

function load(){
    if(localStorage.hasOwnProperty('strgImg')){         /*jos muistista löytyy kuva se asetetaan karuselliin näkymään*/
        const strgImg = localStorage.getItem('strgImg');
        const strgName = localStorage.getItem('strgName');
        img.src=strgImg;
        img.name=strgName;
        document.getElementById('ptext').innerHTML = img.name;
    }
    else{
        index = 0;                                          /*jos muistista ei löydy asetetaan ensinmäinen kuva näkymään*/
        img.src = img_array[index].src;
        img.name = img_array[index].name;
        document.getElementById('ptext').innerHTML = img.name;
    }
}



    




/*seuraava kuva*/

function nextImg(){
    let max = img_array.length-1;
    if(index < max){
        index++;
    }
    else{
        index=0;
    }
    img.src = img_array[index].src;
    img.name = img_array[index].name;
    document.getElementById('ptext').innerHTML = img.name;
    localStorage.clear();
    localStorage.setItem('strgImg',img.src);
    localStorage.setItem('strgName',img.name);
}

/*edellinen kuva*/

function previousImg(){
    let max = img_array.length-1;
    if(index > 0){
        index--;
    }
    else{
        index = max;
    }
    img.src = img_array[index].src;
    img.name = img_array[index].name;
    document.getElementById('ptext').innerHTML = img.name;
    localStorage.clear();
    localStorage.setItem('strgImg',img.src);
    localStorage.setItem('strgName',img.name); 
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
console.log(index);

/*valmis koodi*/