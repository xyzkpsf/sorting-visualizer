import p5 from 'p5';
import { useState, useEffect, useRef } from 'react';
import { Quicksort } from './Quicksort';
import { BubbleSort } from './BubbleSort';
import { SelectionSort } from './SelectionSort';
import { InsertionSort } from './InsertionSort';
import { MergeSort } from './MergeSort';
import { HeapSort } from './HeapSort';
import { CountingSort } from './CountingSort';
import { RadixSort } from './RadixSort';

export default function Sketch({ choice, action, imgChoice, partitionSize }) {
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    switch (imgChoice) {
      case 'Diagonal':
        setImgPath('img/diag.png');
        break;
      case 'Bear':
        setImgPath('img/Cal Bear.jpg');
        break;
      case 'RM':
        setImgPath('img/Rick and Morty.jpg');
        break;
      case 'NN':
        setImgPath('img/nerual network.JPG');
        break;
      default:
        setImgPath('img/berkeley.JPG');
        break;
    }
  }, [imgChoice]);

  let width = 800;
  let height = 500;
  let wPixels = partitionSize;
  let idxArr = Array.from(Array(width / wPixels).keys());
  let imgArr = [];
  let img;

  const sketch = (p) => {
    p.preload = () => {
      img = p.loadImage(imgPath);
    };

    p.setup = () => {
      img.resize(width, height);
      p.createCanvas(width, height);
      imgArr = partition(img);
      if (action === 'SORT') {
        shuffle(idxArr);
      }
    };

    p.draw = () => {
      for (let i = 0; i < idxArr.length; i++) {
        p.image(imgArr[idxArr[i]], i * wPixels, 0);
      }

      if (action === 'SORT') {
        switch (choice) {
          case 'BUBBLE SORT':
            BubbleSort(idxArr, p, imgArr, wPixels);
            break;
          case 'SELECTION SORT':
            SelectionSort(idxArr, p, imgArr, wPixels);
            break;
          case 'INSERTION SORT':
            InsertionSort(idxArr, p, imgArr, wPixels);
            break;
          case 'MERGE SORT':
            MergeSort(idxArr, 0, idxArr.length - 1, p, imgArr, wPixels);
            break;
          case 'QUICK SORT':
            Quicksort(idxArr, 0, idxArr.length - 1, p, imgArr, wPixels);
            break;
          case 'HEAP SORT':
            HeapSort(idxArr, p, imgArr, wPixels);
            break;
          case 'COUNTING SORT':
            CountingSort(idxArr, p, imgArr, wPixels);
            break;
          case 'RADIX SORT':
            RadixSort(idxArr, p, imgArr, wPixels);
            break;
        }
      } else {
        p.noLoop();
      }
      p.noLoop();
    };

    const shuffle = (arr) => {
      let n = arr.length;
      let temp;
      let idx;
      while (n) {
        idx = (Math.random() * n--) | 0; // 0 ≤ i < n
        temp = arr[n];
        arr[n] = arr[idx];
        arr[idx] = temp;
      }
      return arr;
    };

    const partition = (imaArr) => {
      let res = [];
      let newPixel;
      for (let i = 0; i < width / wPixels; i++) {
        newPixel = imaArr.get(i * wPixels, 0, wPixels, height);
        res.push(newPixel);
      }
      return res;
    };
  };

  const sketchCom = useRef();

  useEffect(() => {
    let myp5 = new p5(sketch, sketchCom.current);
    return () => {
      myp5.remove();
    };
  });

  return <div className="sketch" ref={sketchCom} />;
}
