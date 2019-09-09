function updateGameArea() {
    myGameArea.clear();
    Gamepiece.speedX=0;
    Gamepiece.speedY=0;
    if(myGameArea.keys&&myGameArea.keys[37]){Gamepiece.speedX=-1};
    if(myGameArea.keys&&myGameArea.keys[39]){Gamepiece.speedX =1};
    if(myGameArea.keys&&myGameArea.keys[38]){Gamepiece.speedY =-1};
    if(myGameArea.keys&&myGameArea.keys[40]){Gamepiece.speedY =1};

    Gamepiece.newPos();
    Gamepiece.update();
}
