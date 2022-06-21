document.getElementById("ShootPoint").style.marginLeft = Math.floor(Math.random() * 800) + "px";
document.getElementById("ShootPoint").style.marginTop = Math.floor(Math.random() * 800) + "px";
let score = 0;

document.getElementById("ShootPoint").onclick = () => {
    document.getElementById("score").innerHTML = "Points: " + (score + 1);
    document.getElementById("ShootPoint").style.marginLeft = Math.floor(Math.random() * 800) + "px";
    document.getElementById("ShootPoint").style.marginTop = Math.floor(Math.random() * 800) + "px";
    score += 1;
}

