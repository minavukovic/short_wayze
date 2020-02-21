var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

var x = "black", // line draw default colour 
y = 7; // line draw width

function init() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = "/images/shortcut_map.png";
  img.onload = () => {  
    ctx.drawImage(img, 10, 0)
  }

  w = canvas.width;
  h = canvas.height;
  
  canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
  }, false);
}

function color(obj) {
  switch (obj.id) {
    case "green":
    x = "green";
    break;
    case "blue":
    x = "blue";
    break;
    case "red":
    x = "red";
    break;
    case "yellow":
    x = "yellow";
    break;
    case "orange":
    x = "orange";
    break;
    case "black":
    x = "black";
    break;
    case "white":
    x = "white";
    break;
  }
  if (x == "white") y = 14;
  else y = 7;
  
}

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

function erase() {
  var m = confirm("Confirm clear?");
  if (m) {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
  }

  const img = new Image();
  img.src = "/images/shortcut_map.png";
  img.onload = () => {  
    ctx.drawImage(img, 10, 0)
  }

}

// save the drawn image 
function save() {
  var m = confirm("Confirm save?");
  if (m) {
    document.getElementById("canvasimg").style.border = "5px solid";
    var dataURL = canvas.toDataURL(); // dataURL is the url of the image, need to get this in the route somehow
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
    console.log(dataURL);
  }
}

function findxy(res, e) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
      ctx.beginPath();
      ctx.fillStyle = x;
      ctx.fillRect(currX, currY, 2, 2);
      ctx.closePath();
      dot_flag = false;
    }
  }
  if (res == 'up' || res == "out") {
    flag = false;
  }
  if (res == 'move') {
    if (flag) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
      draw();
    }
  }
}