var msg_txt = "Welcome to the Metaverse";
var speed = 75;
var i=0;
function Typing(){
    if(i<msg_txt.length){
        document.getElementById('msg').innerHTML+=msg_txt.charAt(i);
        i++;
        console.log(i)
        
        setTimeout(Typing, speed);
    }

}

Typing()

