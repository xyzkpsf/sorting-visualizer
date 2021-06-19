export async function BubbleSort(arr, p, imgArr, wPixels) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await sleep(0.001);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      for (let i = 0; i < arr.length; i++) {
        p.image(imgArr[arr[i]], i * wPixels, 0);
      }
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
