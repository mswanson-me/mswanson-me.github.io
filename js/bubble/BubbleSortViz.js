let arr = [];
var i = 0;

function setup(){
    var canvas = createCanvas(400, 400);
    canvas.parent('bubbleSketch');
    populateArray();
}

function draw(){
    background(0);

    if(i < width){
        let endpoint = width - i;
            
        for(let k = 0; k < endpoint; k++){
    
            if(arr[k] > arr[k + 1]){
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    } else {
        noLoop();
    }

    i++;

    for(let l = 0; l < width; l++){
        stroke(255);
        circle(l, height - arr[l], 1);
    }
}

function rerunAnimation() {
    i = 0;
    loop();
}

function populateArray() {
    arr = Array.from({length: width}, () => Math.floor(Math.random() * height));
    redraw();
}

function runBubbleSort(){
    i = 0;
     if(i < width){
        let endpoint = width - i;
            
        for(let k = 0; k < endpoint; k++){
    
            if(arr[k] > arr[k + 1]){
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
}}