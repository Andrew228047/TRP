function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
const inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray);