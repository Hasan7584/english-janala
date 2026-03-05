// document.getElementsByClassName("show-btn").addEventListener("click", () => {
//   const ans = document.getElementsByClassName("answer");
//   ans.classList.toggle("hidden");
// });

const buttons = document.getElementsByClassName("show-btn");
for (let btn of buttons) {
  btn.addEventListener("click", function () {
    const answer = this.parentElement.parentElement.querySelector(".answer");
    answer.classList.toggle("hidden");
  });
}