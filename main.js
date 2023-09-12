function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    v=createCapture(VIDEO);
    v.size(600,500);
    v.hide();}
function start() {
    po=ml5.objectDetector('cocossd',op);
    document.getElementById('s1').innerHTML="Status - Detecting Objects";
    objn=document.getElementById('in').value;
}
function op() {
    console.log('loaded');
    status1=true;
}
function draw() {
    image(v,0,0,600,500);
   
    if (status1!="") {
        po.detect(v,yu);
        for (var i = 0; i < Obj.length; i++) {
        document.getElementById('s1').innerHTML="Status -  Objects Detected";
        fill("#FF1493");
        noFill();
        stroke("#FF1493");
        textSize(20);
        p=floor(Obj[i].confidence*100);
        text(Obj[i].label + " " + p + "%", Obj[i].x + 10, Obj[i].y + 20);
        rect(Obj[i].x, Obj[i].y,Obj[i].width, Obj[i].height);
        if (Obj[i].label==objn) {
            v.stop();
            po.detect(yu);
            document.getElementById('s1').innerHTML=objn+" Found";
        }
        else{
            document.getElementById('ha').innerHTML=objn+" Not Found";
        }
        }
    }
}
function yu(error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    Obj=result;
}