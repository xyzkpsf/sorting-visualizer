export async function HeapSort(arr, p, imgArr, wPixels) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i, p, imgArr, wPixels);
  }

  for (let i = n - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;

    await heapify(arr, i, 0, p, imgArr, wPixels);
  }
}

const heapify = async (arr, n, i, p, imgArr, wPixels) => {
  for (let i = 0; i < arr.length; i++) {
    p.image(imgArr[arr[i]], i * wPixels, 0);
  }
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }

  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (largest != i) {
    await sleep(0.001);
    let temp = arr[largest];
    arr[largest] = arr[i];
    arr[i] = temp;

    await heapify(arr, n, largest, p, imgArr, wPixels);
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
