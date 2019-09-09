let Gamepiece;
function startGame(){
    Gamepiece = new component(30, 30, "./0.png", 10, 120, "image");
    myGameArea.start();

}

let myGameArea ={
    convas:document.createElement("canvas"),
    start:function(){
        this.convas.height=500;
        this.convas.width = 500;
        this.context = this.convas.getContext("2d");
        document.body.insertBefore(this.convas,document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener("keydown",function(e){
            myGameArea.keys = [myGameArea.keys||[]];
            myGameArea.keys[e.keyCode]=true;

        })
        window.addEventListener("keyup",function(e){
            myGameArea.keys[e.keyCode]=false;

        })
        },
        clear : function() {
            this.context.clearRect(0, 0, this.convas.width, this.convas.height);
        },
        stop : function() {
            clearInterval(this.interval);
    }

}