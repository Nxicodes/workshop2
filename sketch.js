let cW;
let cH;
let centre = [];
let pic;
let cnv;


function preload(){
pic = loadImage("Gif_for_class.gif");

}
function setup() 
{
    
    cW = windowWidth /2 ;
    cH = windowHeight /1.3 ;
    centre = [windowWidth /2, windowHeight /2];
	cnv = createCanvas(cW, cH);
    cnv.position((windowWidth - cW) / 2, (windowHeight - cH) / 2); // Center the canvas
console.log(centre[0], centre[1])
}

function draw()
{
    background([0,321,212], 255);
    image(pic, centre[0], centre[1]);
    
}
