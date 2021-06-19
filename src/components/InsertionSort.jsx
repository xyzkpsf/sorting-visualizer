export async function InsertionSort(arr, p, imgArr, wPixels) {
  for (let i = 0; i < arr.length; i++) {
    let perv = i - 1;
    let curr = i;
    while (perv >= 0 && arr[curr] < arr[perv]) {
      let temp = arr[perv];
      arr[perv] = arr[curr];
      arr[curr] = temp;
      perv--;
      curr--;
    }
    await sleep(1);
    for (let i = 0; i < arr.length; i++) {
      p.image(imgArr[arr[i]], i * wPixels, 0);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
