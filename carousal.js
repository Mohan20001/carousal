let preBtn=document.getElementById("pre");
let nxtBtn=document.getElementById("nxt");
let caurosal=document.getElementsByClassName("carousal-item")
let currentPosition=0;
let total = (caurosal.length-1)*100;

function preView() {
  for(let i=0; i<=2; i++){
    caurosal[i].style.marginLeft="-"+currentPosition + "%";
  }
}

function increament() {
  if (currentPosition < total ) {
    currentPosition += 100;
    preView();
  }
}
function decreament() {
  if (currentPosition > 0) {
    currentPosition -= 100;
    preView();
  }
}

preBtn.addEventListener("click", decreament);

nxtBtn.addEventListener("click", increament);

