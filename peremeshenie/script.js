const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "img.png";

let x = 300;
let y = 200;

let targetX = x;
let targetY = y;

const speed = 2;
const radius = 30;

canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    targetX = event.clientX - rect.left;
    targetY = event.clientY - rect.top;
});

function update() {
    let dx = targetX - x;
    let dy = targetY - y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > speed) {
        x += dx / distance * speed;
        y += dy / distance * speed;
    } else {
        x = targetX;
        y = targetY;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);

    ctx.restore();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

img.onload = function() {
    loop();
};