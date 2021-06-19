export async function CountingSort(arr, p, imgArr, wPixels) {
  let n = arr.length;
  let k = Math.max(...arr);
  let t;
  const temp = new Array(k + 1).fill(0);

  for (let i = 0; i < n; i++) {
    t = arr[i];
    temp[t]++;
  }

  for (let i = 1; i <= k; i++) {
    temp[i] = temp[i] + temp[i - 1];
  }

  const outputArr = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    await sleep(0.001);
    t = arr[i];
    outputArr[temp[t] - 1] = t;
    temp[t] = temp[t] - 1;

    for (let i = 0; i < arr.length; i++) {
      p.image(imgArr[outputArr[i]], i * wPixels, 0);
    }
  }

  return outputArr;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
