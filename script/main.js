var node = document.getElementById("card-master");

domtoimage.toPng(node)
  .then(function (dataURL) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error) {
    console.error('failed to save image', error);
  });
