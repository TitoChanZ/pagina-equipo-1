var pixelsContainer = document.getElementById('pixelsContainer');

function createPixel() {
  var pixel = document.createElement('div');
  pixel.className = 'pixel-decoration';
  pixel.style.left = Math.random() * 100 + '%';
  pixel.style.top = '-10px';
  pixel.style.transform = `translateY(${Math.random() * 100 + 'vh'})`;
  pixel.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  pixel.style.animation = `pixelFall ${Math.random() * 10 + 5}s linear infinite`;
  pixelsContainer.appendChild(pixel);
}

function addPixels(n) {
  for (var i = 0; i < n; i++) {
    createPixel();
  }
  
}

addPixels(500);