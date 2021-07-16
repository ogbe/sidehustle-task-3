const counter = document.querySelector(".counter");
const message = document.querySelector(".message");
const addCount = document.querySelector(".increase");
const lowerCount = document.querySelector(".decrease");

window.addEventListener("load", () => {
 counter.innerHTML = (0).toString();
})

addCount.addEventListener("click", () => {
 if(counter.innerHTML === (50).toString()) {
  message.innerHTML = `You have reached the end of the counter.`;
 } else {
    counter.innerHTML++;
    message.innerHTML = "";
   }
 })

lowerCount.addEventListener("click", () => {
 if(counter.innerHTML === (0).toString()) {
  message.innerHTML = `You have reached the beginning of the counter.`;
 } else {
    counter.innerHTML--;
    message.innerHTML = "";
   }
})
