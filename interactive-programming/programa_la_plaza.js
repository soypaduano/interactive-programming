
var currentColor;
var blackBackground = false;

function setup () {
  // el tamaño es de 192x157 y se ajusta automaticamente
  createCanvas(windowWidth, windowHeight);
  frameRate(55);
  //colorMode(HSB, 50, 50, 50);
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
      var value_color_yellow = color(255, Math.floor((Math.random() * 204) + 104), 147);
      currentColor = value_color_yellow;
    } else if(value_pallete == 1){
      var value_color_orange =  color(204, Math.floor((Math.random() * 204) + 104), 0);
      currentColor = value_color_orange;
    } else if(value_pallete == 2){
      var value_color_blue = color(4,Math.floor((Math.random() * 204) + 104), 168);
      currentColor = value_color_blue;
    } else if(value_pallete == 3){
      var value_color_green = color(153,Math.floor((Math.random() * 204) + 104), 77);
      currentColor = value_color_green;
    } else if(value_pallete == 4){
      var value_color_gray = color(126,Math.floor((Math.random() * 204) + 104), 135);
      currentColor = value_color_gray;
    } else if(value_pallete == 5){
      
    } 
    
    
    changeGama();
  }, 1000);
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
      fill(currentColor);
      blobs[i].painted = true;
    }
  }
}