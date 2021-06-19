export async function RadixSort(arr, p, imgArr, wPixels) {
  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    await sleep(100);
    let buckets = [...Array(10)].map(() => []);
    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }
    arr = [].concat.apply([], buckets);
    divisor *= 10;
    for (let i = 0; i < arr.length; i++) {
      p.image(imgArr[arr[i]], i * wPixels, 0);
    }
  }
  return arr;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
