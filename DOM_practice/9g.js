function calculatePrice(){
    let priceEl = document.querySelector('#input');
    let para = document.querySelector('#result');
    let price =Number (priceEl.value);
    if(price < 40){
    result.innerText = ` Your final price :  ${(price * 100)+1000 /100}` ;
}else{
    result.innerText = ` Your final price : ${price}`;
}
}