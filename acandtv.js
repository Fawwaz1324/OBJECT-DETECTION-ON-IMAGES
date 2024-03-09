img = "";
status = "";

function preload()
{
    img = loadImage('acandtv.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML  = "Status :Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("AC", 210, 30);
    noFill();
    stroke('#FF0000');
    rect(200, 10, 280, 100);

    fill("#FF0000");
    text("tv", 160, 180);
    noFill();
    stroke('#FF0000');
    rect(160, 180, 380, 200);
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}