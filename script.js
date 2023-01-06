const colorBox = document.getElementById("colorBox");
const red = document.getElementById("redValue");
const blue = document.getElementById("blueValue");
const green = document.getElementById("greenValue");
const button= document.getElementById("btn");

red.addEventListener("keyup",(e)=>{
    r=red.value;
    if(r===""){
        r=0;
    }
  colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;

})
green.addEventListener("keyup",(e)=>{
    g=green.value;
    if(g===""){
        g=0;
    }
  colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;

})
blue.addEventListener("keyup",(e)=>{
    b=blue.value;
    if(b===""){
        b=0;
    }
  colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;

})




button.addEventListener("click",()=> {
  let r = red.value;
  let g = green.value;
  let b = blue.value;
  if (r === "") {
    r = 0;
  }
  if (g === "") {
    g = 0;
  }
  if (b === "") {
    b = 0;
  }
  colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
  clearvalues();
});

function clearvalues() {
  red.value = "";
  green.value = "";
  blue.value = "";
};
