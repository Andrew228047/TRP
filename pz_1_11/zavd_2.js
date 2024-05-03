function perimeter(side,count){
    return side*count;
}
let a = parseInt(prompt('Довжина сторони:'));
let n = parseInt(prompt('К-сть сторін:'));
console.log(perimeter(a,n));