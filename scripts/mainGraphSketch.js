/*
    The home page graph sketch. Relies on p5.js.
*/

var numVertices;
var vertices = [];
var edges = [];
var cnv;

function centerCanvas() {
    var cnvx = max(25, (windowWidth - width - 80) / 2);
    // var cnvy = (windowHeight - height) / 2;
    var cnvy = (windowHeight - height - 80) / 2;
    cnv.position(cnvx, cnvy);
}

function setup() {
    // cnv = createCanvas(4*windowWidth / 5, 5*windowHeight / 6);
    cnv = createCanvas(4*windowWidth / 5, windowHeight + 160);
    centerCanvas();

    numVertices = floor(width * height / 200);
    var maxEdgeLen = 2 * windowWidth / 3;

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 6; j++) {
            // var initX = j * (width / 5);
            // var initY = i * (height / 4);
            // var baseX = randomGaussian(width / 2, width / 7);
            // var baseY = randomGaussian(height / 2, width / 7);
            var initX = width / 2; var initY = height / 2;
            var baseX = random(width);
            var baseY = random(height);
            vertices.push(new Vertex(initX, initY, baseX, baseY, 7));
        }
    }

    for (var i = 0; i < vertices.length; i++) {
        for (var j = 0; j < vertices.length; j++) {
            if (i != j) {
                var v = vertices[i]; var v_ = vertices[j];
                var d = dist(v.baseX, v.baseY, v_.baseX, v_.baseY);
                if (d < maxEdgeLen) {
                    if (random(d) < 50) {
                        edges.push(new Edge(i, j));
                    }
                }
            }
        }
    }

    noLoop();
}

function windowResized() {
    resizeCanvas(2*windowWidth / 3, 2*windowWidth / 3);
    centerCanvas();
}

function update() {
    vertices.forEach(v => v.update());
    edges.forEach(e => e.update());
}

function draw() {
    stroke(255, 255, 255);
    strokeWeight(0.5);
    clear();
    update();
    vertices.forEach(v => v.draw());
    edges.forEach(e => e.draw());
}


class Vertex {

    constructor(x, y, x_, y_, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.baseX = x_;
        this.baseY = y_;
        this.travelling = true;
        this.isLink = false;
    }

    update() {
        if (this.travelling) {
            let diffX = this.baseX - this.x;
            let diffY = this.baseY - this.y;
            if (abs(diffX) < 1) {
                this.x = this.baseX;
                this.travelling = false;
            } else {
                this.x = this.x + (diffX / 50);
            }
            if (abs(diffY) < 1) {
                this.y = this.baseY;
                this.travelling = false;
            } else {
                this.y = this.y + (diffY / 50);
            }
        }
        else {
            let mouseDist = dist(this.x, this.y, mouseX, mouseY);
            if (mouseDist < 10) {
                this.isLink = true;
            } else { this.isLink = false; }
        }
    }

    draw() {
        fill(255);
        strokeWeight(1);
        ellipse(this.x, this.y, this.r, this.r);
        if (this.isLink) {
            noFill();
            strokeWeight(1);
            ellipse(this.x, this.y, this.r + 10, this.r + 10);
        }
    }

}

class Edge {

    constructor(fromI, toI) {
        this.fromI = fromI;
        this.toI = toI;
        this.len = 0;
    }

    update() {
        this.len = dist(vertices[this.fromI].x, vertices[this.fromI].y, vertices[this.toI].x, vertices[this.toI].y);
    }

    draw() {
        strokeWeight(min(4, max(100 / this.len, 0.1)));
        line(vertices[this.fromI].x, vertices[this.fromI].y,
            vertices[this.toI].x, vertices[this.toI].y);
    }
}
