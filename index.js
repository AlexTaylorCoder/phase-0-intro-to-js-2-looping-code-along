// Code your solutions in this file
function writeCards(arr,event) {
    const nArr = []
    for (let name of arr) {
        nArr.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return nArr;
}

function countDown(num) {
    if (parseInt(num) > 0) {
        while (num >= 0) {
            console.log(num)
            num--;
        }
    } 
}
