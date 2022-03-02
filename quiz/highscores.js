const noHighScore = document.getElementById("noHighScore");
const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores"));

const clearHighScores = document.getElementById("clearHighScores");

clearHighScores.addEventListener("click", (event) => {
  localStorage.clear();
  location.reload();
});

console.log(highScores.length);
if (highScores.length != 0) {
  noHighScore.className += " hidden";
}

highScoreList.innerHTML = highScores
  .map((score) => {
    return `<li class="flex justify-between px-[10%]"> <span>${score.name}</span>  <span>${score.score} </span> </li>`;
  })
  .join("");

console.log(highScoreList);
console.log(highScores);
