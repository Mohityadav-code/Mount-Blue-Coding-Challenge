var n = 7;
var arr = [1, 2, 1, 2, 1, 3, 4, 5];
var pair = [];

function ch(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      if (arr[i] == arr[j]) {
        pair++;
        arr.splice(j, 1);
        arr.splice(i, 1);
        return ch(arr, n-2);
      }
    }
  }
}
ch(arr, n)
console.log(pair);

