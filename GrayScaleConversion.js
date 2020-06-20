// Global image variable
var image;
var grayImage;
var canvas;
var Greycanvas;
function upload() {
  // Get file
  var fInput = document.getElementById("fInput");
  // Convert to image
  image = new SimpleImage(fInput);
  // Save for later
  // Get canvas
   canvas = document.getElementById("c1");
  // Draw image on canvas
  image.drawTo(canvas);
    grayImage = image;

}

function makeGray() {
    // clearCanvas();

  // Loop through pixels in image
  for (var pixel of grayImage.values()) {
    // Get RGB color values
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    // Calculate average
    var avg = (red + blue + green) / 3;
    // Set each pixel to value of average
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  // Get canvas
   Greycanvas = document.getElementById("c2");
  // Draw image on canvas
  grayImage.drawTo(Greycanvas); 
}

function clearCanvas() {
  doClear(canvas);
  doClear(Greycanvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

