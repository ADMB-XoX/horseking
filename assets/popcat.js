const cat = document.getElementById("cat");
const score = document.getElementById("score");


let sc = 0;

function onMouseUp() {
    cat.src = "./assets/img/1.png";

}
function onMouseDown() {
    cat.src = "./assets/img/2.png";

    const audio = new Audio("./assets/장충동 왕족발 오케스트라.m4a");
    audio.play();

    sc += 1;
    score.innerText = sc;
}

cat.addEventListener("mouseup", onMouseUp);
cat.addEventListener("mousedown", onMouseDown);
cat.addEventListener("mouseout", onMouseUp);