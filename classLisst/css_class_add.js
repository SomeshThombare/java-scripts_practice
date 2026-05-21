function follow(){
   let btn= document.querySelector('.js-unfollow');
    if(btn.innerText != 'Unfollow'){
        btn.innerText = 'Unfollow';
    btn.classList.add('follow')
    }else{
        btn.innerHTML = 'follow';
        btn.classList.remove('follow');
    }
}
function darkMode(){
   var element = document.body;
    element.classList.toggle('dark');
}