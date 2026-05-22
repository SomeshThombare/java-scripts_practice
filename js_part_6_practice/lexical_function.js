function outerFunc(){
    let x = 5;
    let y= 6;
    // console.log(z); // show errro z is not defiend;
    function innerFunc(){
        let z = 10;
        console.log(x);
    }   
    innerFunc();

}

outerFunc(); // 5 Note: inner fun used glbal varibale (outer function variables)