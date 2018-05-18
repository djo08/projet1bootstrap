(function() {
var btn = document.getElementById("btn-overlayer");
var overlayer = document.getElementById("overlayer");
var textOverlayer = document.getElementById("text-overlayer");
var cross = document.getElementById("cross");

btn.addEventListener("click", overlayerShow);
cross.addEventListener("click", overlayerHide);


 function overlayerShow() {
 overlayer.style.display = "block";
 textOverlayer.style.display = "block";
}

function overlayerHide() {
  overlayer.style.display = "none";
  textOverlayer.style.display = "none";
}
})();
