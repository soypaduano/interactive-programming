
var currentColor;
var blackBackground = false;

var rColor = 0;
var gColor = 0;
var bColor = 0;

function setup () {
  // el tamaño es de 192x157 y se ajusta automaticamente
  createCanvas(windowWidth, windowHeight);
  frameRate(55);
  colorMode(HSB, 50, 50, 50);
  rectMode(CENTER);
  api.tracking.connect();
  changeGama();
  currentColor= color(255, Math.floor((Math.random() * 204) + 104), 147);
}

function changeGama(){
  setTimeout(function(){
    var value_pallete = Math.floor((Math.random() * 5) + 1);
    console.log(value_pallete);
    if(value_pallete == 0){
      rColor = 255;
      bColor = 147;
    } else if(value_pallete == 1){
      rColor = 204;
      bColor = 0;
    } else if(value_pallete == 2){
      rColor = 4;
      bColor = 168;
    } else if(value_pallete == 3){
      rColor = 153;
      bColor = 77;
    } else if(value_pallete == 4){
      rColor = 126;
      bColor = 135;
    }
    console.log("El color actual es ", value_pallete);
    changeGama();
  }, 5000);
}

function draw() {
  var blobs = api.tracking.getBlobs();
  
  if(!blackBackground){
    console.log("entra aki");
    background(0,0,0);
    blackBackground = true
  }
  

  for (var i = 0; i < blobs.length; i++) {
    //fill(i * 100, 100, 100);
    if(!blobs[i].painted){
      rect(blobs[i].x,  blobs[i].y, 16, 30);
      //fill(204,value_color, 0);
      var nextColor = color(rColor, Math.floor((Math.random() * 204) + 104), bColor);
      fill(nextColor);
      blobs[i].painted = true;
    }
  }
}