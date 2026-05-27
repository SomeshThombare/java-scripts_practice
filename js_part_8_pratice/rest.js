function sum(...args){
    for(let i = 0; i<args.length; i++){
        console.log('you give us :',args[i]);
    }
}
// sum(1,2,3,4);
function min(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1); cant perform u 
}
// min();

function minn(...args){
    return args.reduce((min,el)=>{
        if(min > el){
            return el;
            
        }else{
            return min;
        }
    });
}
minn(1,2,3,0);