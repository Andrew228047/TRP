function reverseAndKvArray(arr) {
    const reversArr = arr.reverse();
    const kvArr = reversArr.map(item => {
        if (typeof item === 'number') {
            return item * item;
        } else {
            return item;
        }
    });
    return kvArr;
}
const iArray = [2, 3,'b', 4];
const result = reverseAndKvArray(iArray);
console.log(result);