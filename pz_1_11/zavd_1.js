function seconds(total) {
    return total % 60;
}

let t = parseInt(prompt("Total:"));
console.log(seconds(t));