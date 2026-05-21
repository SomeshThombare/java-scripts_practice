let input = document.querySelector('#input')
function getValue(){
    let price = input.value;
    let msg = document.querySelector('#para')
    if(price < 0){
        msg.innerHTML = `Error : value cannot be less than $0`;
    }else{
        msg.innerHTML = '';
    }
}