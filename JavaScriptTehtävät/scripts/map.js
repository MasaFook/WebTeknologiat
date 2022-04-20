window.onload = function () {
    console.log();
}
/*kartasta haku*/
function myFunction(){
     let osoite = document.getElementById("osoite").value;
     let kaupunki = document.getElementById("kaupunki").value;
    document.getElementById("mapFrame").src="https://www.google.com/maps?q='"+ osoite + kaupunki+"'&output=embed";    
}
