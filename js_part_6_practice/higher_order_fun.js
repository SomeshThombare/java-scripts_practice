function multipleGreet(func, count){
    for(let i=1; i<= count; i++){
        func();
    }
}
let greet = function(){
    console.log('helo');
}
multipleGreet(greet, 5);