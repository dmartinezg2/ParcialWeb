const urlJSON = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"

var menu;
async function getInfo(pUrl){
    const response = await fetch(urlJSON);
    var obj = await response.json();
    menu = obj;
}

getInfo(urlJSON);


const burgersButton = document.getElementById("burgers");
const tacosButton = document.getElementById("tacos");
const saladsButton = document.getElementById("salads");
const dessertsButton = document.getElementById("desserts");
const drinkButton = document.getElementById("drinks");

function showBurguers(){


}

function showTacos(){

    
}

function showSalads(){

    
}

function showDesserts(){

    
}

showDrinks(){
    
}

