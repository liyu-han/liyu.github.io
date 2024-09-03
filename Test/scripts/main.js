let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "images/download.jpg"){
    myImage.setAttribute("src","images/firefox2.jpg");
  }else{
    myImage.setAttribute("src","images/download.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if(!myName){
    setUserName();

  }else{
    localStorage.setItem("name",myName);
    myHeading.textContent = "酷，" + myName;
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = " 酷，" + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "酷，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};

