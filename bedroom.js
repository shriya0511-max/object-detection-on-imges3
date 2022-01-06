img = ""
function preload(){
    img = loadImage("bedroom.jpg");
}
function setup(){
    canvas = createCanvas(640,540);
    canvas.center();
}

function draw(){
    image(img,0,0,640,640);
    fill('#ff0000');
    text("bed", 80, 60);
    noFill();
    stroke("#ff0000");
    rect(50,30,500,390);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}