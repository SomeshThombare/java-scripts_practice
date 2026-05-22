function oddOrEvenFactory(request){
    if(request == 'odd'){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        // console.log(odd);
        return odd;
    }else if(request == 'even'){
        let even = function(n){
            console.log(n % 2 == 0);
        }
        // console.log(even);
        return even;
    }else{
        console.log('wrong request');
    }
}
let request = 'even';
oddOrEvenFactory(request);