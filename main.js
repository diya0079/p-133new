img="";
status="";
object=[];


function preload() {
img=loadImage('bedroom.jpg');
img=loadImage('ac.jpg');
img=loadImage('bean bag.jpg');
img=loadImage('chairs.jpg');
img-loadImage('tv.jpg');
}

function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:dectecting objects";

}
function modelLoaded() {
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object=results;

}

function draw() {
    image(img,0,0,640,420);
    if(status!="") {
        for(r=0;r<object.length;r++) {
            document.getElementById("status").innerHTML="status:objects detected";
            percent=floor(object[r].confidence*100);
            text(object[r].label+""+percent+"%",object[r].x,object[r].y);
            noFill();
            stroke("#ff0000");
            rect(object[r].x,object[r].y,object[r].width,object[r].height);

        }
    }
}