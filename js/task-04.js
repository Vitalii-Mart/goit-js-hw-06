const decBtn = document.querySelector("[data-action='decrement']");
const incBtn = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");
let counterValue = 0;
decBtn.addEventListener("click", () => {
    counterValue -= 1;
    return changeValue(counterValue);
});
incBtn.addEventListener("click", () => {
    counterValue += 1;
    return changeValue(counterValue);});


function changeValue(value) {
    return valueEl.textContent = counterValue;
}