let btn = document.querySelector('button');
let btn_b = document.querySelector('.js-btn-b');

function textChange(){
    btn = console.log(btn.innerText)
    btn_b.innerText = '9b done!';
};


function printHead(){
    document.querySelector('#result').innerText = 'Your Choose: Heads';

};
function printTail(){
    document.querySelector('#result').innerText = 'Your Choose: tail';
};

function namePrint(){
    let name = document.getElementById('input');

    let result = document.querySelector('#js-result');

    result.innerText = `Your name is : ${name.value}`;
    name.value = '';
    
}
function enterPrint(e){
    if (e.key === 'Enter') {
      namePrint();
    }
}


