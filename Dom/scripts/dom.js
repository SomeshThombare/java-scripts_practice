
function subscribe(){
    let btn = document.getElementById("sub-btn");

    if(btn.innerText === 'Subscribe'){
        btn.innerText = 'Subscribed';
        btn.clssList.add('js-subscribed');
    
    }else{
        btn.innerText = 'Subscribe';
        btn.style.backgroundColor = 'gray';
        btn.style.color = 'white';
        btn.style.borderRadius = '0px'
    }
};

function calculateShipping(){
    let priceEl = document.querySelector('#js-input');
    let price = Number(priceEl.value);
    let result = document.querySelector("#js-result");
    console.log(typeof price);
    if(price < 40){
        result.innerHTML  = `$${price +=  10}`;
    }else{
        result.innerHTML = `$${price}`;
    }
    priceEl.value = '';
}