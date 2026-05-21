
function classContainer(){
let btn = document.querySelector('.js-button');
console.log(btn.classList.contains('js-button'));

}

function toggleButton(){
    let btn = document.querySelector('.js-buttonn');
    if(btn.classList.contains('is-toggled')){
        btn.classList.remove('is-toggled');
        btn.innerHTML = 'Gaming OFF';
    }else{
        btn.classList.add('is-toggled');
        btn.innerHTML = 'Gaming On';
    }
}


function musicTogglebtn(){
    let m_btn = document.querySelector('.js-music');
    if(m_btn.classList.contains('is-toggledd')){
        m_btn.classList.remove('is-toggledd');
        m_btn.innerHTML = 'Mussic OFF'
    }else{
        m_btn.classList.add('is-toggledd');
        m_btn.innerHTML = 'Music on';
    }
}


function toggleGender(gender){
let button = document.querySelector('.js-gender');
    for( let i = 0; i < buttonList.length; i++){
        let button = buttonList[i];
        let check = button.classList.contains('is-active');

        if(check){
            button.classList.remove('is-active');
        }
        
    }
    let  targetButton = document.querySelector(gender)
    targetButton.classList.add('is-active');
}