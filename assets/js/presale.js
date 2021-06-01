let presaleEnd = false;
const currentUrl = window.location.href.split('/')[window.location.href.split('/').length -1];
const endDate = new Date("2021-06-05 23:59:00".replace(/-/g,"/"));
const now = new Date();

if (now >= endDate){
    presaleEnd = true;
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

