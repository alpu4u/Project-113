function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480)
    canvas.position(110, 250)
    video =createCapture(VIDEO)
    video.hide()

    tint_color = ""
}
function draw()
{
    image(video, 0, 0, 640, 480)
    let c = color('green');
    fill(c);
    rect(15, 25, 30,430 );
    rect(595, 25, 30, 430);
    rect(25, 15, 590, 30);
    rect(25,435, 590, 30);
    c = color('red');
    fill(c);
    circle(30, 30, 50);
    circle(30, 450, 50);
    circle(610, 30, 50);
    circle(610, 450, 50);
}

function take_snapshot()
    {
        save('doggy-doggy-picture.png')
    }

    function filter_tint()
    {
        tint_color = document.getElementById('color_name').value
    }
