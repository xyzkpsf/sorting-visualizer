export async function Quicksort(arr, start, end, p, imgArr, wPixels) {
  for (let i = 0; i < arr.length; i++) {
    p.image(imgArr[arr[i]], i * wPixels, 0);
  }
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);

  Quicksort(arr, start, index - 1, p, imgArr, wPixels);
  Quicksort(arr, index + 1, end, p, imgArr, wPixels);
}

async function partition(arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(1);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
