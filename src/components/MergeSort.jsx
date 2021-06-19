export async function MergeSort(arr, l, r, p, imgArr, wPixels) {
  if (l < r) {
    let mid = l + parseInt((r - l) / 2);
    await MergeSort(arr, l, mid, p, imgArr, wPixels);
    await MergeSort(arr, mid + 1, r, p, imgArr, wPixels);
    await partition(arr, l, mid, r, p, imgArr, wPixels);
  }
}

async function partition(arr, l, mid, r, p, imgArr, wPixels) {
  let arr1 = arr.filter((val, idx) => {
    return idx >= l && idx <= mid;
  });

  let arr2 = arr.filter((val, idx) => {
    return idx > mid && idx <= r;
  });

  let left = 0,
    right = 0,
    // curr starts from l
    curr = l;
  while (left < arr1.length && right < arr2.length) {
    await sleep(1);
    if (arr1[left] <= arr2[right]) {
      arr[curr] = arr1[left];
      left++;
    } else {
      arr[curr] = arr2[right];
      right++;
    }
    for (let i = 0; i < arr.length; i++) {
      p.image(imgArr[arr[i]], i * wPixels, 0);
    }
    curr++;
  }
  while (left < arr1.length) {
    await sleep(1);
    arr[curr] = arr1[left];
    left++;
    curr++;
    for (let i = 0; i < arr.length; i++) {
      p.image(imgArr[arr[i]], i * wPixels, 0);
    }
  }
  while (right < arr2.length) {
    await sleep(1);
    arr[curr] = arr2[right];
    right++;
    curr++;
    for (let i = 0; i < arr.length; i++) {
      p.image(imgArr[arr[i]], i * wPixels, 0);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    p.image(imgArr[arr[i]], i * wPixels, 0);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
