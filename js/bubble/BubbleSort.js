let max = 20;
let arr = [];
arr = Array.from({length: max}, () => Math.floor(Math.random() * max));

function BubbleSort(arr){
    for(let j = 0; j < arr.length; j++){
        let endpoint = arr.length - j;
        for(let i = 0; i < endpoint; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}