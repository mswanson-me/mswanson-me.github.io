let max = 20;
let arr = [];
arr = Array.from({length: max}, () => Math.floor(Math.random() * max));

function MergeSort(arr){
    let n = arr.length;

    if(n <= 1){
        return arr;
    }

    let left = arr.slice(0, n/2);
    let right = arr.slice(n/2);

    return Merge(MergeSort(left), MergeSort(right));
}

function Merge(left, right){
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] <= right[rightIndex]){
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < left.length){
        sorted.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length){
        sorted.push(right[rightIndex]);
        rightIndex++;
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(arr);

let merged = MergeSort(arr);

console.log(merged);