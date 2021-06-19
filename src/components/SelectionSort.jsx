export async function SelectionSort(arr, p, imgArr, wPixels) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let minIdx = i;
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
      await sleep(0.001);
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;

      for (let i = 0; i < arr.length; i++) {
        p.image(imgArr[arr[i]], i * wPixels, 0);
      }
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
