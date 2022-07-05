var icons = [];
var person;
var mouseX = 0;
var mouseY = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    canvas.parent("canvas");
    canvas.id("banner-canvas");
    var b = $("#canvas").outerWidth();
    $("#banner-canvas").css( { width: b , height: b/3 } );

    var requestURL = 'script/teste.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    g = [];
    // for(var i=0;i<255;i++) grupo.push(new group(i)); 
    request.onload = function(){
        var p = request.response; var i; var s = p.length; 
        for(i=0;i<s;i++){
            let o = { x: p[i].x, y: p[i].y, r: p[i].red, g: p[i].green, b: p[i].blue, h: p[i].x, v: p[i].y  };
            g.push(o);
        }
    }
    // noStroke();
}

function draw(){
    background(255);

    var b = $("#canvas").outerWidth();
    $("#banner-canvas").css( { width: b , height: b/3 } );
 
    var img = createImage(1200, 400);
    img.loadPixels();

    var i; var s = g.length;
    for(i=0; i<s; i++){
        var o = g[i];
        var e = d(mouseX/3,mouseY/3-25,o.x,o.y);
        if(e <=10){ 
            var t = c(o.x,o.y);
            o.x -= Math.cos(t) * (10 - e)/2; 
            o.y -= Math.sin(t) * (10 - e)/2;
        }
        else{
            o.x = (o.x + o.h)/2; 
            o.y = (o.y + o.v)/2; 
        }            

        [(0, 0),(+1, 0),(+2, 0)]
        [(0,+1),(+1,+1),(+2,+1)]
        [(0,+2),(+1,+2),(+2,+2)]

        img.set(   o.x*3,   o.y*3+50, [o.r, o.g, o.b, 255]); // (0, 0)
        img.set( o.x*3+1,   o.y*3+50, [o.r, o.g, o.b, 255]); // (1, 0)
        img.set( o.x*3+1, o.y*3+1+50, [o.r, o.g, o.b, 255]); // (1, 1)
        img.set(   o.x*3, o.y*3+1+50, [o.r, o.g, o.b, 255]); // (0, 1)

        img.set( o.x*3+2,   o.y*3+50, [o.r, o.g, o.b, 255]); // (2, 0)
        img.set( o.x*3+2, o.y*3+1+50, [o.r, o.g, o.b, 255]); // (2, 1)
        img.set( o.x*3+1, o.y*3+2+50, [o.r, o.g, o.b, 255]); // (1, 2)
        img.set( o.x*3+2, o.y*3+2+50, [o.r, o.g, o.b, 255]); // (2, 2)
        img.set(   o.x*3, o.y*3+2+50, [o.r, o.g, o.b, 255]); // (0, 2)
    }

    img.updatePixels();
    image(img, 0, 0);
    // console.log(img);
}

function d(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function c(x,y){
    var v = mouseY-y; var h = mouseX-x; var t = 0;
    if (h != 0){
        t = Math.atan(v/h);
        if (h<0) t+=Math.PI;
        else if (h>0 && v<0) t+=Math.PI*2;
    }
    return t;
}
