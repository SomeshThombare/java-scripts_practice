// accept the list of country names as input and return longes county name

let country = ['india','china','nepal','indonashiya'];
function longesName(arr){
    let asnIdx = 0;

    for(let i = 0; i < arr.length; i++){
        let ansLen = arr[asnIdx].length;
        let currLen = arr[i].length;

        if(currLen > ansLen){
            asnIdx = i;
        } 
    }
    console.log(arr[asnIdx]);
    // return arr[asnIdx];
}
longesName(country);