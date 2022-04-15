function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}


let presaleEnd = false;
let praPresaleEnd = false;
const currentUrl = window.location.href.split('/')[window.location.href.split('/').length -1];
const endDate = new Date("2021-06-05 23:59:00".replace(/-/g,"/"));
const endPrapresale = new Date("2021-06-08 13:00:00".replace(/-/g,"/"));
const now = new Date();


console.log(endDate);
console.log(endPrapresale);
console.log(convertTZ('2021-06-08 13:00:00', 'Europe/London'))

if (now >= endDate){
    presaleEnd = true;
}

if (now >= endPrapresale){
    praPresaleEnd = true;
}

if(!praPresaleEnd){
  
    if (currentUrl == 'presale.html'){
        document.location.href = 'prapresale.html'
    }
} else {
    if (currentUrl == 'prapresale.html'){
        document.location.href = 'presale.html'
    }
}


if(presaleEnd){
    if (!currentUrl.includes('presale') && !currentUrl.includes('buy')){
        document.getElementById('presale-btn').innerText = 'BUY NOW';
        document.getElementById('presale-link').href = './buy.html';
    }

    if (currentUrl == 'presale.html'){
        document.location.href = 'buy.html'
    }
} else {
    if (currentUrl == 'buy.html'){
        document.location.href = 'presale.html'
    }
}

