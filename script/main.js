var imgTarget = document.getElementById("card-master");
var downloadButton = document.getElementById("download-button");

downloadButton.addEventListener("click", () => {
  domtoimage.toPng(imgTarget)
    .then(function (dataURL) {
      const link = document.createElement("a");
      link.download = "vs_battle_card.png";
      link.href = dataUrl;

      link.click();
    })
    .catch(function (error) {
      console.error('failed to save image', error);
  });
});

