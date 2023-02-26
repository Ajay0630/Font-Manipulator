var leftWristX = Number(0);
var rightWristX = Number(0);
var difference = 10;

namee = localStorage.getItem("name");
document.getElementById("nameee").innerHTML = "Welcome, " + namee + "!";

function setup() {
    video = createCapture(VIDEO);
    video.size(900, 600);
    video.position(120, 450);
    canvas = createCanvas(800, 800)
    canvas.position(1520, 375);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function draw() {
    text('Ajay', 10, 100);
    textSize(difference);
    document.getElementById("font-size").innerHTML = "The current font size is " + Math.floor(difference) + "px."
}
function modelLoaded() {
    console.log("Model is loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = (Math.floor(leftWristX - rightWristX))/5;
    } else {
        console.error("An error has occurred");
    }
}