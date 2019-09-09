var box = document.getElementById("box"),
    boxPos = 10,
    boxVelocity = 5,
    limit = 300;

function update() {
    boxPos += boxVelocity;
    // Switch directions if we go too far
    if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
}

function draw() {
    box.style.left = boxPos + "px";
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);