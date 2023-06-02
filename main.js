left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(10, 50);

    canvas = createCanvas(400, 400);
    canvas.position(10, 50);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelDone() {
    console.log("PoseNet Is Iniialized And Loaded");
}

function draw() {
    background('#969A97');
    document.getElementById("font-size").innerHTML = "Font Size of The Text will Be" + difference + "px";
    fill("#00ff0a");
    textsize(difference);
    text('Nayan Baishya', 100, 400);
}

function gotPoses(results, error) {
    if(error) {
        console.error(error);
    }
    if(results.length > 0) {
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist_x;
        leftt_wrist_x = results[0].pose.leftWrist_x;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightWrist_x = " + result[0].pose.rightWrist.x + "rightWrist_y = " + results[0].pose.nose.rightWrist.y);
        console.log("leftWrist_x = " + result[0].pose.leftWrist.x + "leftWrist_y = " + results[0].pose.nose.leftWrist.y);
    }
}